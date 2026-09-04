import { useCallback, useEffect, useState } from "react";
import {
  ChapterNotes,
  NoteItem,
  NotesStore,
  chapterKey,
  emptyChapterNotes,
  emptyCourseNotes,
  makeId,
  readStore,
  writeStore,
} from "@/lib/notesStorage";

/** Subscribes to the local notes store and exposes mutation helpers. */
export const useNotesStore = () => {
  const [store, setStore] = useState<NotesStore>(() =>
    typeof window === "undefined" ? {} : readStore()
  );

  useEffect(() => {
    const sync = () => setStore(readStore());
    window.addEventListener("storage", sync);
    window.addEventListener("cce-notes-updated", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("cce-notes-updated", sync);
    };
  }, []);

  const update = useCallback((next: NotesStore) => {
    setStore(next);
    writeStore(next);
  }, []);

  const mutateCourse = useCallback(
    (courseId: string, fn: (course: ReturnType<typeof emptyCourseNotes>) => void) => {
      const current = readStore();
      const course = current[courseId]
        ? {
            ...current[courseId],
            notes: [...current[courseId].notes],
            links: [...current[courseId].links],
            chapters: { ...current[courseId].chapters },
          }
        : emptyCourseNotes();
      fn(course);
      update({ ...current, [courseId]: course });
    },
    [update]
  );

  const mutateChapter = useCallback(
    (courseId: string, index: number, fn: (chapter: ChapterNotes) => void) => {
      mutateCourse(courseId, (course) => {
        const key = chapterKey(index);
        const chapter = course.chapters[key]
          ? {
              ...course.chapters[key],
              notes: [...course.chapters[key].notes],
              links: [...course.chapters[key].links],
            }
          : emptyChapterNotes();
        fn(chapter);
        course.chapters[key] = chapter;
      });
    },
    [mutateCourse]
  );

  const newItem = (text: string, url?: string): NoteItem => ({
    id: makeId(),
    text,
    url: url || undefined,
    createdAt: Date.now(),
  });

  const addCourseItem = useCallback(
    (courseId: string, kind: "notes" | "links", text: string, url?: string) =>
      mutateCourse(courseId, (course) => {
        course[kind] = [...course[kind], newItem(text, url)];
      }),
    [mutateCourse]
  );

  const updateCourseItem = useCallback(
    (courseId: string, kind: "notes" | "links", id: string, text: string, url?: string) =>
      mutateCourse(courseId, (course) => {
        course[kind] = course[kind].map((i) =>
          i.id === id ? { ...i, text, url: url || undefined } : i
        );
      }),
    [mutateCourse]
  );

  const removeCourseItem = useCallback(
    (courseId: string, kind: "notes" | "links", id: string) =>
      mutateCourse(courseId, (course) => {
        course[kind] = course[kind].filter((i) => i.id !== id);
      }),
    [mutateCourse]
  );

  const addChapterItem = useCallback(
    (courseId: string, index: number, kind: "notes" | "links", text: string, url?: string) =>
      mutateChapter(courseId, index, (chapter) => {
        chapter[kind] = [...chapter[kind], newItem(text, url)];
      }),
    [mutateChapter]
  );

  const updateChapterItem = useCallback(
    (
      courseId: string,
      index: number,
      kind: "notes" | "links",
      id: string,
      text: string,
      url?: string
    ) =>
      mutateChapter(courseId, index, (chapter) => {
        chapter[kind] = chapter[kind].map((i) =>
          i.id === id ? { ...i, text, url: url || undefined } : i
        );
      }),
    [mutateChapter]
  );

  const removeChapterItem = useCallback(
    (courseId: string, index: number, kind: "notes" | "links", id: string) =>
      mutateChapter(courseId, index, (chapter) => {
        chapter[kind] = chapter[kind].filter((i) => i.id !== id);
      }),
    [mutateChapter]
  );

  const toggleChapterDone = useCallback(
    (courseId: string, index: number, done: boolean) =>
      mutateChapter(courseId, index, (chapter) => {
        chapter.done = done;
      }),
    [mutateChapter]
  );

  const refresh = useCallback(() => setStore(readStore()), []);

  return {
    store,
    addCourseItem,
    updateCourseItem,
    removeCourseItem,
    addChapterItem,
    updateChapterItem,
    removeChapterItem,
    toggleChapterDone,
    refresh,
  };
};
