# My Notes — per course & per chapter

Cost niye: Cloud (login + database) use korle usage-based cost hoy, tai ekhon **localStorage** e kora hobe — free, instant, kono login lagbe na. Pore chaile cloud sync add kora jabe (same data shape, tai migration soja).

Note: localStorage device/browser-specific — browser data clear korle note chole jabe. Tai ekta **Export / Import (JSON)** button rakhbo backup er jonno.

## Ki thakbe

Protiti course e ekta "My Notes" panel (course details drawer er upore ekta notun tab/section):

- **Text note** — free-form note likha, edit, delete
- **Link with title** — URL + label (YouTube, PDF, Drive...), click korle new tab e khule
- **Done marker** — chapter "studied" hishebe tick kora

Scope:
- **Course-level**: general notes + links, ekta course-er jonno
- **Chapter-level**: course content er protiti chapter row-er niche nijer note/link add kora jabe, ar chapter-er pashe ekta checkbox (studied)

## UI

- Details drawer e duita tab: **Syllabus** (existing content, unchanged) ar **My Notes**
- My Notes tab: "Add note" / "Add link" button, list of saved items with edit/delete
- Chapter card-e (Midterm/Final content items) chotto checkbox + "note add" icon; note thakle chapter-er niche compact list e dekhabe
- Course card-e chotto indicator: note count + progress (e.g. "3 notes · 5/12 chapters done")
- Semester overview e ekta soft progress bar: koto % chapter done ei semester e
- Notes panel er niche: Export JSON / Import JSON

## Data integrity

Syllabus data (`src/data/*`) **kono paribartan hobe na**. Notes alada storage layer e thakbe, course `id` + chapter index diye link kora.

## Technical details

- `src/lib/notesStorage.ts` — localStorage read/write, versioned key `cce-notes-v1`, shape:
  `{ [courseId]: { notes: Item[], links: Item[], chapters: { [chapterKey]: { done: boolean, notes: Item[], links: Item[] } } } }`
  where `Item = { id, text, url?, createdAt }`, `chapterKey = section + ":" + chapterIndex`
- `src/hooks/useCourseNotes.ts` — React hook: get/add/update/remove/toggleDone, state sync + `storage` event listener for multi-tab
- New components: `src/components/notes/NotesPanel.tsx`, `NoteItemForm.tsx`, `ChapterNoteRow.tsx`
- `CourseDetailsDrawer.tsx` — wrap content in `Tabs` (shadcn), add chapter checkbox + note affordance
- `CourseCard.tsx` — note/progress indicator badge
- Export/Import via Blob download + file input, validated against the versioned schema
