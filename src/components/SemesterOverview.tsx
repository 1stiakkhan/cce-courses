import { Card } from "@/components/ui/card";
import { BookOpen, Clock, Award } from "lucide-react";
import { getSemesterStats, Semester } from "@/data/syllabusData";

interface SemesterOverviewProps {
  semester: Semester;
}

export const SemesterOverview = ({ semester }: SemesterOverviewProps) => {
  const stats = getSemesterStats(semester);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Courses</p>
            <p className="text-4xl font-bold text-foreground">{stats.totalCourses}</p>
          </div>
          <BookOpen className="w-12 h-12 text-primary opacity-50" />
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Credits</p>
            <p className="text-4xl font-bold text-foreground">{stats.totalCredits}</p>
          </div>
          <Award className="w-12 h-12 text-secondary opacity-50" />
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border-accent/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Avg Contact Hours</p>
            <p className="text-4xl font-bold text-foreground">{stats.averageContactHours}</p>
          </div>
          <Clock className="w-12 h-12 text-accent opacity-50" />
        </div>
      </Card>
    </div>
  );
};
