import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, BookOpen, Clock, Target, GraduationCap } from "lucide-react";
import { Course } from "@/data/syllabusData";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden border-border bg-card hover:shadow-[var(--shadow-glow)] transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {course.code}
              </Badge>
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                {course.creditHours} Credits
              </Badge>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">{course.title}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {course.contactHours}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
            <p className="text-xs text-muted-foreground mb-1">Assessment</p>
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <Progress value={course.assessment.final} className="h-2" />
              </div>
              <span className="text-xs font-medium text-foreground">100%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Final: {course.assessment.final}% | Mid: {course.assessment.midterm}%
            </p>
          </div>
          <div className="bg-secondary/5 rounded-lg p-3 border border-secondary/10">
            <p className="text-xs text-muted-foreground mb-1">Learning Outcomes</p>
            <p className="text-2xl font-bold text-foreground">{course.outcomes.length}</p>
            <p className="text-xs text-muted-foreground">CLOs defined</p>
          </div>
        </div>

        <Button
          variant="ghost"
          className="w-full justify-between hover:bg-muted/50"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="text-sm font-medium">
            {isExpanded ? "Show Less" : "View Details"}
          </span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>

        {isExpanded && (
          <div className="mt-6 space-y-6 animate-in slide-in-from-top-2 duration-300">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">Course Objectives</h4>
              </div>
              <ul className="space-y-2">
                {course.objectives.map((obj, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground pl-4 border-l-2 border-primary/30">
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-secondary" />
                <h4 className="font-semibold text-foreground">Learning Outcomes</h4>
              </div>
              <div className="space-y-3">
                {course.outcomes.map((outcome) => (
                  <div key={outcome.clo} className="bg-muted/30 rounded-lg p-3 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {outcome.clo}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {outcome.bloomsLevel}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground">{outcome.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-accent" />
                <h4 className="font-semibold text-foreground">Course Content</h4>
              </div>
              <div className="space-y-2">
                {course.content.map((content, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg border border-border">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{content.topic}</p>
                      <p className="text-xs text-muted-foreground mt-1">Chapter {content.chapter}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary">{content.lectures}</p>
                      <p className="text-xs text-muted-foreground">lectures</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Recommended Textbooks</h4>
              <ul className="space-y-2">
                {course.textBooks.map((book, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground pl-4 border-l-2 border-accent/30">
                    {book}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
