import { semesters } from "@/data/syllabusData";
import { cn } from "@/lib/utils";

interface SemesterTabsProps {
  activeSemester: number;
  onSelect: (id: number) => void;
}

const ordinal = (n: number) => {
  const suffix = n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
  return `${n}${suffix}`;
};

export const SemesterTabs = ({ activeSemester, onSelect }: SemesterTabsProps) => {
  return (
    <div className="mx-auto mb-8 w-full max-w-3xl overflow-x-auto">
      <div className="flex min-w-max justify-center gap-1 rounded-2xl border border-border bg-card p-1.5 shadow-[var(--shadow-soft)]">
        {semesters.map((semester) => {
          const active = semester.id === activeSemester;
          return (
            <button
              key={semester.id}
              type="button"
              onClick={() => onSelect(semester.id)}
              aria-current={active ? "true" : undefined}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {ordinal(semester.id)}
            </button>
          );
        })}
      </div>
    </div>
  );
};
