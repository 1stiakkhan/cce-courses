import { useRef, useState } from "react";
import { Download, Link2, Plus, Upload } from "lucide-react";
import { Course } from "@/data/syllabusData";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNotesStore } from "@/hooks/useNotesStore";
import { courseSummary, exportNotes, getCourseNotes, importNotes } from "@/lib/notesStorage";
import { toast } from "@/hooks/use-toast";
import { NoteComposer, NoteKind } from "./NoteComposer";
import { NoteList } from "./NoteList";

interface NotesPanelProps {
  course: Course;
}

export const NotesPanel = ({ course }: NotesPanelProps) => {
  const { store, addCourseItem, updateCourseItem, removeCourseItem, refresh } = useNotesStore();
  const [composing, setComposing] = useState<NoteKind | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const notes = getCourseNotes(store, course.id);
  const { itemCount, doneCount, chapterCount } = courseSummary(
    store,
    course.id,
    course.content.length
  );
  const progress = chapterCount ? Math.round((doneCount / chapterCount) * 100) : 0;

  const handleImport = async (file: File) => {
    try {
      const count = importNotes(await file.text());
      refresh();
      toast({ title: "Notes imported", description: `${count} course(s) merged.` });
    } catch {
      toast({ title: "Import failed", description: "That file isn't a valid notes backup.", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="font-medium text-foreground">Study progress</span>
          <span className="tabular-nums text-muted-foreground">
            {doneCount}/{chapterCount} chapters
          </span>
        </div>
        <Progress value={progress} className="h-2" />
        <p className="mt-2 text-[11px] text-muted-foreground">
          {itemCount} saved {itemCount === 1 ? "item" : "items"} for this course
        </p>
      </div>

      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Course Notes &amp; Links
          </h3>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1 text-xs"
              onClick={() => setComposing(composing === "notes" ? null : "notes")}
            >
              <Plus className="h-3.5 w-3.5" />
              Note
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1 text-xs"
              onClick={() => setComposing(composing === "links" ? null : "links")}
            >
              <Link2 className="h-3.5 w-3.5" />
              Link
            </Button>
          </div>
        </div>

        {composing && (
          <NoteComposer
            kind={composing}
            onCancel={() => setComposing(null)}
            onSubmit={(text, url) => {
              addCourseItem(course.id, composing, text, url);
              setComposing(null);
            }}
          />
        )}

        {notes.notes.length === 0 && notes.links.length === 0 && !composing && (
          <p className="rounded-lg border border-dashed border-border bg-muted/30 p-4 text-center text-xs text-muted-foreground">
            No notes yet. Add a note or a link to keep your study material here.
          </p>
        )}

        <NoteList
          items={notes.notes}
          kind="notes"
          onUpdate={(id, text) => updateCourseItem(course.id, "notes", id, text)}
          onRemove={(id) => removeCourseItem(course.id, "notes", id)}
        />
        <NoteList
          items={notes.links}
          kind="links"
          onUpdate={(id, text, url) => updateCourseItem(course.id, "links", id, text, url)}
          onRemove={(id) => removeCourseItem(course.id, "links", id)}
        />
      </section>

      <section className="space-y-2 border-t border-border pt-4">
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          Notes are saved on this device only. Export a backup before clearing your browser data.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1 text-xs" onClick={exportNotes}>
            <Download className="h-3.5 w-3.5" />
            Export JSON
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1 text-xs"
            onClick={() => fileRef.current?.click()}
          >
            <Upload className="h-3.5 w-3.5" />
            Import JSON
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleImport(file);
              e.target.value = "";
            }}
          />
        </div>
      </section>
    </div>
  );
};
