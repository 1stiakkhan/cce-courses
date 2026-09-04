import { useState } from "react";
import { Link2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { getChapterNotes } from "@/lib/notesStorage";
import { useNotesStore } from "@/hooks/useNotesStore";
import { NoteComposer, NoteKind } from "./NoteComposer";
import { NoteList } from "./NoteList";

interface ChapterNoteRowProps {
  courseId: string;
  index: number;
}

export const ChapterNoteRow = ({ courseId, index }: ChapterNoteRowProps) => {
  const {
    store,
    addChapterItem,
    updateChapterItem,
    removeChapterItem,
    toggleChapterDone,
  } = useNotesStore();
  const chapter = getChapterNotes(store, courseId, index);
  const [composing, setComposing] = useState<NoteKind | null>(null);

  const total = chapter.notes.length + chapter.links.length;

  return (
    <div className="mt-2 space-y-2 border-t border-dashed border-border pt-2">
      <div className="flex flex-wrap items-center gap-2">
        <label className="flex cursor-pointer items-center gap-2 text-[11px] font-medium text-muted-foreground">
          <Checkbox
            checked={chapter.done}
            onCheckedChange={(v) => toggleChapterDone(courseId, index, v === true)}
            aria-label="Mark chapter as studied"
          />
          {chapter.done ? "Studied" : "Mark as studied"}
        </label>

        <div className="ml-auto flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 gap-1 px-2 text-[11px]"
            onClick={() => setComposing(composing === "notes" ? null : "notes")}
          >
            <Plus className="h-3 w-3" />
            Note
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 gap-1 px-2 text-[11px]"
            onClick={() => setComposing(composing === "links" ? null : "links")}
          >
            <Link2 className="h-3 w-3" />
            Link
          </Button>
        </div>
        {total > 0 && (
          <span className="w-full text-[11px] text-muted-foreground sm:w-auto">
            {total} saved {total === 1 ? "item" : "items"}
          </span>
        )}
      </div>

      {composing && (
        <NoteComposer
          kind={composing}
          onCancel={() => setComposing(null)}
          onSubmit={(text, url) => {
            addChapterItem(courseId, index, composing, text, url);
            setComposing(null);
          }}
        />
      )}

      <NoteList
        compact
        items={chapter.notes}
        kind="notes"
        onUpdate={(id, text) => updateChapterItem(courseId, index, "notes", id, text)}
        onRemove={(id) => removeChapterItem(courseId, index, "notes", id)}
      />
      <NoteList
        compact
        items={chapter.links}
        kind="links"
        onUpdate={(id, text, url) => updateChapterItem(courseId, index, "links", id, text, url)}
        onRemove={(id) => removeChapterItem(courseId, index, "links", id)}
      />
    </div>
  );
};
