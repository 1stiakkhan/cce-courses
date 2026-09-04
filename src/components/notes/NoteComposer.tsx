import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export type NoteKind = "notes" | "links";

interface NoteComposerProps {
  kind: NoteKind;
  initialText?: string;
  initialUrl?: string;
  onSubmit: (text: string, url?: string) => void;
  onCancel: () => void;
}

export const NoteComposer = ({
  kind,
  initialText = "",
  initialUrl = "",
  onSubmit,
  onCancel,
}: NoteComposerProps) => {
  const [text, setText] = useState(initialText);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    setText(initialText);
    setUrl(initialUrl);
  }, [initialText, initialUrl]);

  const valid = kind === "links" ? url.trim().length > 0 : text.trim().length > 0;

  const submit = () => {
    if (!valid) return;
    const normalizedUrl =
      kind === "links" && !/^https?:\/\//i.test(url.trim()) ? `https://${url.trim()}` : url.trim();
    onSubmit(text.trim() || (kind === "links" ? normalizedUrl : ""), kind === "links" ? normalizedUrl : undefined);
  };

  return (
    <div className="space-y-2 rounded-lg border border-primary/25 bg-[hsl(var(--primary-soft))] p-3">
      {kind === "links" ? (
        <>
          <Input
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Link title (optional)"
            className="h-9 bg-card text-sm"
          />
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
            className="h-9 bg-card text-sm"
            onKeyDown={(e) => e.key === "Enter" && submit()}
          />
        </>
      ) : (
        <Textarea
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your note..."
          rows={3}
          className="resize-none bg-card text-sm"
        />
      )}
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs" onClick={onCancel}>
          <X className="h-3.5 w-3.5" />
          Cancel
        </Button>
        <Button size="sm" className="h-8 gap-1 text-xs" disabled={!valid} onClick={submit}>
          <Check className="h-3.5 w-3.5" />
          Save
        </Button>
      </div>
    </div>
  );
};
