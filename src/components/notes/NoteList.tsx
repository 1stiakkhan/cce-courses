import { useState } from "react";
import { ExternalLink, Pencil, StickyNote, Trash2 } from "lucide-react";
import { NoteItem } from "@/lib/notesStorage";
import { Button } from "@/components/ui/button";
import { NoteComposer, NoteKind } from "./NoteComposer";

interface NoteListProps {
  items: NoteItem[];
  kind: NoteKind;
  onUpdate: (id: string, text: string, url?: string) => void;
  onRemove: (id: string) => void;
  compact?: boolean;
}

export const NoteList = ({ items, kind, onUpdate, onRemove, compact }: NoteListProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);

  if (items.length === 0) return null;

  return (
    <ul className="space-y-2">
      {items.map((item) =>
        editingId === item.id ? (
          <li key={item.id}>
            <NoteComposer
              kind={kind}
              initialText={item.text}
              initialUrl={item.url ?? ""}
              onCancel={() => setEditingId(null)}
              onSubmit={(text, url) => {
                onUpdate(item.id, text, url);
                setEditingId(null);
              }}
            />
          </li>
        ) : (
          <li
            key={item.id}
            className={`group flex items-start gap-2 rounded-lg border border-border bg-card ${
              compact ? "p-2" : "p-3"
            }`}
          >
            {kind === "links" ? (
              <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
            ) : (
              <StickyNote className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
            )}
            <div className="min-w-0 flex-1">
              {kind === "links" ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block truncate text-sm font-medium text-foreground underline-offset-4 hover:text-accent hover:underline"
                >
                  {item.text || item.url}
                </a>
              ) : (
                <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-foreground">
                  {item.text}
                </p>
              )}
              {kind === "links" && item.text && item.url && (
                <p className="mt-0.5 truncate text-[11px] text-muted-foreground">{item.url}</p>
              )}
            </div>
            <div className="flex shrink-0 gap-0.5 opacity-60 transition-opacity group-hover:opacity-100">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Edit"
                className="h-7 w-7"
                onClick={() => setEditingId(item.id)}
              >
                <Pencil className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Delete"
                className="h-7 w-7 text-destructive hover:text-destructive"
                onClick={() => onRemove(item.id)}
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
