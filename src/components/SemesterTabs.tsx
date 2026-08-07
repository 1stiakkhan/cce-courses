import { Button } from "@/components/ui/button";
import { semesters } from "@/data/syllabusData";

interface SemesterTabsProps {
  activeSemester: number;
  onSelect: (id: number) => void;
}

export const SemesterTabs = ({ activeSemester, onSelect }: SemesterTabsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {semesters.map((semester) => (
        <Button
          key={semester.id}
          variant={semester.id === activeSemester ? "default" : "outline"}
          onClick={() => onSelect(semester.id)}
          className="min-w-[110px]"
        >
          {semester.id}
          <span className="hidden sm:inline">{"\u00A0"}Semester</span>
        </Button>
      ))}
    </div>
  );
};
