import { BookOpen, Award, FlaskConical, Library } from "lucide-react";
import { getSemesterStats, Semester } from "@/data/syllabusData";
import { isSessional } from "@/lib/courseUtils";
import { Progress } from "@/components/ui/progress";
import { useNotesStore } from "@/hooks/useNotesStore";
import { courseSummary } from "@/lib/notesStorage";

interface SemesterOverviewProps {
  semester: Semester;
}

const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

export const SemesterOverview = ({ semester }: SemesterOverviewProps) => {
  const stats = getSemesterStats(semester);
  const sessionalCount = semester.courses.filter(isSessional).length;
  const theoryCount = semester.courses.length - sessionalCount;
  const { store } = useNotesStore();

  const progressTotals = semester.courses.reduce(
    (acc, course) => {
      const { doneCount, chapterCount } = courseSummary(store, course.id, course.content.length);
      return { done: acc.done + doneCount, total: acc.total + chapterCount };
    },
    { done: 0, total: 0 }
  );
  const progressPct = progressTotals.total
    ? Math.round((progressTotals.done / progressTotals.total) * 100)
    : 0;

  const items = [
    { label: "Courses", value: pad(stats.totalCourses), icon: BookOpen, grad: "stat-grad-purple", iconColor: "text-primary" },
    { label: "Total Credits", value: `${stats.totalCredits}`, icon: Award, grad: "stat-grad-blue", iconColor: "text-[hsl(217_82%_56%)] dark:text-[hsl(217_80%_70%)]" },
    { label: "Theory Courses", value: pad(theoryCount), icon: Library, grad: "stat-grad-blue", iconColor: "text-[hsl(217_82%_56%)] dark:text-[hsl(217_80%_70%)]" },
    { label: "Sessional Courses", value: pad(sessionalCount), icon: FlaskConical, grad: "stat-grad-teal", iconColor: "text-accent" },
  ];

  return (
    <section className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <h2 className="mb-5 text-base font-semibold tracking-tight text-foreground">
        {semester.name} Overview
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {items.map(({ label, value, icon: Icon, grad, iconColor }) => (
          <div
            key={label}
            className={`${grad} rounded-xl border border-border/60 p-4 transition-transform duration-300 hover:-translate-y-0.5`}
          >
            <div className="mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <Icon className={`h-3.5 w-3.5 ${iconColor}`} />
                {label}
              </span>
            </div>
            <p className="text-3xl font-semibold tabular-nums tracking-tight text-foreground">
              {value}
            </p>
          </div>
        ))}
      </div>

      {progressTotals.total > 0 && (
        <div className="mt-5 rounded-xl border border-border/60 bg-muted/30 p-4">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-medium text-foreground">Your study progress</span>
            <span className="tabular-nums text-muted-foreground">
              {progressTotals.done}/{progressTotals.total} chapters · {progressPct}%
            </span>
          </div>
          <Progress value={progressPct} className="h-2" />
        </div>
      )}
    </section>
  );
};
