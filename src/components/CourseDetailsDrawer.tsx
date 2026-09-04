import { Course } from "@/data/syllabusData";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { isSessional } from "@/lib/courseUtils";
import { cn } from "@/lib/utils";
import { NotesPanel } from "@/components/notes/NotesPanel";
import { ChapterNoteRow } from "@/components/notes/ChapterNoteRow";

interface CourseDetailsDrawerProps {
  course: Course | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</h3>
    {children}
  </section>
);

export const CourseDetailsDrawer = ({ course, open, onOpenChange }: CourseDetailsDrawerProps) => {
  if (!course) return null;
  const sessional = isSessional(course);

  const indexedContent = course.content.map((item, index) => ({ item, index }));
  const contentBySection = (section: string) =>
    indexedContent.filter(({ item }) => item.section === section);
  const unsectioned = indexedContent.filter(
    ({ item }) => item.section !== "Midterm" && item.section !== "Final"
  );

  const renderContent = (items: typeof indexedContent) => (
    <div className="space-y-2">
      {items.map(({ item, index }) => (
        <div key={index} className="rounded-lg border border-border bg-card p-3">
          <div className="mb-1 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
            <span className="font-medium text-foreground">{item.chapter}</span>
            {item.clo && (
              <Badge variant="outline" className="h-5 px-1.5 text-[10px]">
                {item.clo}
              </Badge>
            )}
            {item.lectures !== undefined && <span>{item.lectures} lectures</span>}
          </div>
          <p className="text-sm leading-relaxed text-foreground">{item.topic}</p>
          <ChapterNoteRow courseId={course.id} index={index} />
        </div>
      ))}
    </div>
  );


  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full gap-0 p-0 sm:max-w-xl"
      >
        <SheetHeader className="space-y-3 border-b border-border p-6 text-left">
          <div className="flex flex-wrap items-center gap-2">
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
          <SheetTitle className="text-xl leading-snug tracking-tight">{course.title}</SheetTitle>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>
              {course.creditHours} {course.creditHours === 1 ? "Credit" : "Credits"}
            </span>
            <span>{course.contactHours}</span>
            {course.prerequisite ? <span>Prerequisite: {course.prerequisite}</span> : null}
          </div>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-9.5rem)]">
          <div className="space-y-8 p-6">
            {course.objectives.length > 0 && (
              <Section title="Course Objectives">
                <ul className="space-y-2">
                  {course.objectives.map((obj, idx) => (
                    <li
                      key={idx}
                      className="border-l-2 border-primary/40 pl-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      {obj}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {course.outcomes.length > 0 && (
              <Section title="Learning Outcomes">
                <div className="space-y-2">
                  {course.outcomes.map((outcome) => (
                    <div key={outcome.clo} className="rounded-lg border border-border bg-card p-3">
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <Badge variant="secondary" className="h-5 text-[10px]">
                          {outcome.clo}
                        </Badge>
                        {outcome.plo && (
                          <Badge variant="outline" className="h-5 text-[10px]">
                            {outcome.plo}
                          </Badge>
                        )}
                        {outcome.bloomsLevel && (
                          <Badge variant="outline" className="h-5 text-[10px]">
                            {outcome.bloomsLevel}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm leading-relaxed text-foreground">
                        {outcome.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            <Section title="Assessment (Total: 100 Marks)">
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Attendance", value: course.assessment.attendance },
                  { label: "Class Test", value: course.assessment.classTest },
                  { label: "Midterm", value: course.assessment.midterm },
                  { label: "Final", value: course.assessment.final },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-border bg-card p-3 text-center"
                  >
                    <p className="text-lg font-semibold tabular-nums text-foreground">{m.value}</p>
                    <p className="text-[10px] leading-tight text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
            </Section>

            {course.content.length > 0 && (
              <Section title="Course Content">
                <div className="space-y-5">
                  {contentBySection("Midterm").length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground">
                        Midterm Exam ({course.assessment.midterm} Marks)
                      </p>
                      {renderContent(contentBySection("Midterm"))}
                    </div>
                  )}
                  {contentBySection("Final").length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground">
                        Final Exam ({course.assessment.final} Marks)
                      </p>
                      {renderContent(contentBySection("Final"))}
                    </div>
                  )}
                  {unsectioned.length > 0 && renderContent(unsectioned)}
                </div>
              </Section>
            )}

            {course.deliveryMethods && course.deliveryMethods.length > 0 && (
              <Section title="Delivery Methods">
                <ul className="space-y-1.5">
                  {course.deliveryMethods.map((m, idx) => (
                    <li key={idx} className="text-sm leading-relaxed text-muted-foreground">
                      {m}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {course.assessmentTools && course.assessmentTools.length > 0 && (
              <Section title="Assessment Tools">
                <ul className="space-y-1.5">
                  {course.assessmentTools.map((m, idx) => (
                    <li key={idx} className="text-sm leading-relaxed text-muted-foreground">
                      {m}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {course.textBooks.length > 0 && (
              <Section title="Recommended Textbooks">
                <ul className="space-y-2">
                  {course.textBooks.map((book, idx) => (
                    <li
                      key={idx}
                      className="border-l-2 border-accent/40 pl-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      {book}
                    </li>
                  ))}
                </ul>
              </Section>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
