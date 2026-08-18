import { BookOpen, Award, FlaskConical, Library } from "lucide-react";
import { getSemesterStats, Semester } from "@/data/syllabusData";
import { isSessional } from "@/lib/courseUtils";

interface SemesterOverviewProps {
  semester: Semester;
}

const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

export const SemesterOverview = ({ semester }: SemesterOverviewProps) => {
  const stats = getSemesterStats(semester);
  const sessionalCount = semester.courses.filter(isSessional).length;
  const theoryCount = semester.courses.length - sessionalCount;

  const items = [
    { label: "Courses", value: pad(stats.totalCourses), icon: BookOpen },
    { label: "Total Credits", value: `${stats.totalCredits}`, icon: Award },
    { label: "Theory Courses", value: pad(theoryCount), icon: Library },
    { label: "Sessional Courses", value: pad(sessionalCount), icon: FlaskConical },
  ];

  return (
    <section className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <h2 className="mb-5 text-base font-semibold tracking-tight text-foreground">
        {semester.name} Overview
      </h2>
      <div className="grid grid-cols-2 gap-y-6 divide-border sm:grid-cols-4 sm:divide-x">
        {items.map(({ label, value, icon: Icon }) => (
          <div key={label} className="px-0 sm:px-6 sm:first:pl-0 sm:last:pr-0">
            <div className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <Icon className="h-3.5 w-3.5" />
              {label}
            </div>
            <p className="text-3xl font-semibold tabular-nums tracking-tight text-foreground">
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
