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

        <div className="mb-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
          <h4 className="text-sm font-semibold text-foreground mb-3">Mark Distribution (Total: 100 Marks)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{course.assessment.attendance}</p>
              <p className="text-xs text-muted-foreground">Attendance</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary">{course.assessment.classTest}</p>
              <p className="text-xs text-muted-foreground">Class Test</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">{course.assessment.midterm}</p>
              <p className="text-xs text-muted-foreground">Midterm</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{course.assessment.final}</p>
              <p className="text-xs text-muted-foreground">Final Exam</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary/5 rounded-lg p-3 border border-secondary/10 mb-4">
          <p className="text-xs text-muted-foreground mb-1">Learning Outcomes</p>
          <p className="text-2xl font-bold text-foreground">{course.outcomes.length}</p>
          <p className="text-xs text-muted-foreground">CLOs defined</p>
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
              
              {/* Midterm Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3 bg-accent/10 rounded-lg p-2 border border-accent/20">
                  <Badge variant="default" className="bg-accent text-accent-foreground">
                    Midterm Exam ({course.assessment.midterm} Marks)
                  </Badge>
                </div>
                <div className="space-y-2">
                  {course.content
                    .filter(content => content.section === "Midterm")
                    .map((content, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border border-accent/20">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{content.topic}</p>
                          <div className="flex gap-2 mt-1">
                            <p className="text-xs text-muted-foreground">Chapter {content.chapter}</p>
                            {content.clo && (
                              <Badge variant="outline" className="text-xs h-5">
                                {content.clo}
                              </Badge>
                            )}
                          </div>
                        </div>
                        {content.lectures && (
                          <div className="text-right ml-2">
                            <p className="text-sm font-semibold text-accent">{content.lectures}</p>
                            <p className="text-xs text-muted-foreground">lectures</p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>

              {/* Final Section */}
              <div>
                <div className="flex items-center gap-2 mb-3 bg-primary/10 rounded-lg p-2 border border-primary/20">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Final Exam ({course.assessment.final} Marks)
                  </Badge>
                </div>
                <div className="space-y-2">
                  {course.content
                    .filter(content => content.section === "Final")
                    .map((content, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{content.topic}</p>
                          <div className="flex gap-2 mt-1">
                            <p className="text-xs text-muted-foreground">Chapter {content.chapter}</p>
                            {content.clo && (
                              <Badge variant="outline" className="text-xs h-5">
                                {content.clo}
                              </Badge>
                            )}
                          </div>
                        </div>
                        {content.lectures && (
                          <div className="text-right ml-2">
                            <p className="text-sm font-semibold text-primary">{content.lectures}</p>
                            <p className="text-xs text-muted-foreground">lectures</p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
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
