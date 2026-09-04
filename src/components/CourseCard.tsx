import { ArrowRight, Clock, CheckCircle2, StickyNote } from "lucide-react";
import { Course } from "@/data/syllabusData";
import { Button } from "@/components/ui/button";
import { isSessional } from "@/lib/courseUtils";
import { cn } from "@/lib/utils";
import { useNotesStore } from "@/hooks/useNotesStore";
import { courseSummary } from "@/lib/notesStorage";

interface CourseCardProps {
  course: Course;
  onOpen: (course: Course) => void;
}

export const CourseCard = ({ course, onOpen }: CourseCardProps) => {
  const sessional = isSessional(course);
  const { store } = useNotesStore();
  const { itemCount, doneCount, chapterCount } = courseSummary(
    store,
    course.id,
    course.content.length
  );

  const marks = [
    { label: "Attendance", value: course.assessment.attendance },
    { label: "Class Test", value: course.assessment.classTest },
    { label: "Midterm", value: course.assessment.midterm },
    { label: "Final", value: course.assessment.final },
  ];


  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)]">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span
          className={cn(
            "rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider",
            sessional
              ? "bg-[hsl(var(--accent-soft))] text-accent"
              : "bg-[hsl(var(--primary-soft))] text-primary"
          )}
        >
          {sessional ? "Sessional" : "Theory"}
        </span>
        <span className="font-mono text-xs text-muted-foreground">{course.code}</span>
      </div>

      <h3 className="mb-2 text-base font-semibold leading-snug tracking-tight text-foreground">
        {course.title}
      </h3>

      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <span className="font-medium text-foreground">
          {course.creditHours} {course.creditHours === 1 ? "Credit" : "Credits"}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {course.contactHours}
        </span>
      </div>

      <div className="mt-auto space-y-3">
        <div className="rounded-lg border border-border bg-muted/40 p-3">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            Marks Distribution
          </p>
          <div className="grid grid-cols-4 gap-2 text-center">
            {marks.map((m) => (
              <div key={m.label}>
                <p className="text-sm font-semibold tabular-nums text-foreground">{m.value}</p>
                <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-3">
          <span className="text-xs text-muted-foreground">
            {course.outcomes.length} CLOs · {course.content.length} topics
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onOpen(course)}
            className={cn(
              "h-8 gap-1 px-2 text-xs font-medium",
              sessional ? "text-accent hover:text-accent" : "text-primary hover:text-primary"
            )}
          >
            Details
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </article>
  );
};
