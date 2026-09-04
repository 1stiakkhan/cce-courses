/**
 * Local-only storage layer for user notes, links and chapter progress.
 * Syllabus data is never modified — notes are keyed by course id + chapter index.
 */

export const NOTES_STORAGE_KEY = "cce-notes-v1";

export interface NoteItem {
  id: string;
  /** Note text, or the label of a link. */
  text: string;
  /** Present only for link items. */
  url?: string;
  createdAt: number;
}

export interface ChapterNotes {
  done: boolean;
  notes: NoteItem[];
  links: NoteItem[];
}

export interface CourseNotes {
  notes: NoteItem[];
  links: NoteItem[];
  chapters: Record<string, ChapterNotes>;
}

export type NotesStore = Record<string, CourseNotes>;

export const emptyCourseNotes = (): CourseNotes => ({ notes: [], links: [], chapters: {} });

export const emptyChapterNotes = (): ChapterNotes => ({ done: false, notes: [], links: [] });

export const chapterKey = (index: number) => `ch-${index}`;

export const makeId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const isNoteItem = (v: unknown): v is NoteItem => {
  if (!v || typeof v !== "object") return false;
  const o = v as Record<string, unknown>;
  return typeof o.id === "string" && typeof o.text === "string";
};

const sanitizeItems = (v: unknown): NoteItem[] =>
  Array.isArray(v)
    ? v.filter(isNoteItem).map((i) => ({
        id: i.id,
        text: i.text,
        url: typeof i.url === "string" ? i.url : undefined,
        createdAt: typeof i.createdAt === "number" ? i.createdAt : Date.now(),
      }))
    : [];

const sanitizeChapters = (v: unknown): Record<string, ChapterNotes> => {
  const out: Record<string, ChapterNotes> = {};
  if (!v || typeof v !== "object") return out;
  for (const [key, raw] of Object.entries(v as Record<string, unknown>)) {
    const o = (raw ?? {}) as Record<string, unknown>;
    out[key] = {
      done: o.done === true,
      notes: sanitizeItems(o.notes),
      links: sanitizeItems(o.links),
    };
  }
  return out;
};

export const sanitizeStore = (v: unknown): NotesStore => {
  const out: NotesStore = {};
  if (!v || typeof v !== "object") return out;
  for (const [courseId, raw] of Object.entries(v as Record<string, unknown>)) {
    const o = (raw ?? {}) as Record<string, unknown>;
    out[courseId] = {
      notes: sanitizeItems(o.notes),
      links: sanitizeItems(o.links),
      chapters: sanitizeChapters(o.chapters),
    };
  }
  return out;
};

export const readStore = (): NotesStore => {
  try {
    const raw = window.localStorage.getItem(NOTES_STORAGE_KEY);
    if (!raw) return {};
    return sanitizeStore(JSON.parse(raw));
  } catch {
    return {};
  }
};

export const writeStore = (store: NotesStore) => {
  try {
    window.localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(store));
  } catch {
    /* storage full or unavailable — keep the in-memory state */
  }
  window.dispatchEvent(new Event("cce-notes-updated"));
};

export const getCourseNotes = (store: NotesStore, courseId: string): CourseNotes =>
  store[courseId] ?? emptyCourseNotes();

export const getChapterNotes = (
  store: NotesStore,
  courseId: string,
  index: number
): ChapterNotes => getCourseNotes(store, courseId).chapters[chapterKey(index)] ?? emptyChapterNotes();

export const courseSummary = (store: NotesStore, courseId: string, chapterCount: number) => {
  const course = getCourseNotes(store, courseId);
  let itemCount = course.notes.length + course.links.length;
  let doneCount = 0;
  for (const chapter of Object.values(course.chapters)) {
    itemCount += chapter.notes.length + chapter.links.length;
    if (chapter.done) doneCount += 1;
  }
  return { itemCount, doneCount, chapterCount };
};

export const exportNotes = () => {
  const data = JSON.stringify({ version: 1, notes: readStore() }, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `cce-notes-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

/** Merges an imported file into the current store. Returns the number of courses touched. */
export const importNotes = (json: string) => {
  const parsed = JSON.parse(json) as unknown;
  const raw =
    parsed && typeof parsed === "object" && "notes" in (parsed as Record<string, unknown>)
      ? (parsed as Record<string, unknown>).notes
      : parsed;
  const incoming = sanitizeStore(raw);
  const current = readStore();
  const merged: NotesStore = { ...current };

  for (const [courseId, course] of Object.entries(incoming)) {
    const base = merged[courseId] ?? emptyCourseNotes();
    const mergeItems = (a: NoteItem[], b: NoteItem[]) => {
      const seen = new Set(a.map((i) => i.id));
      return [...a, ...b.filter((i) => !seen.has(i.id))];
    };
    const chapters: Record<string, ChapterNotes> = { ...base.chapters };
    for (const [key, ch] of Object.entries(course.chapters)) {
      const baseCh = chapters[key] ?? emptyChapterNotes();
      chapters[key] = {
        done: baseCh.done || ch.done,
        notes: mergeItems(baseCh.notes, ch.notes),
        links: mergeItems(baseCh.links, ch.links),
      };
    }
    merged[courseId] = {
      notes: mergeItems(base.notes, course.notes),
      links: mergeItems(base.links, course.links),
      chapters,
    };
  }

  writeStore(merged);
  return Object.keys(incoming).length;
};
