import { useMemo, useState } from "react";
import { semesters, programStats, Course } from "@/data/syllabusData";
import { CourseCard } from "@/components/CourseCard";
import { CourseDetailsDrawer } from "@/components/CourseDetailsDrawer";
import { SemesterOverview } from "@/components/SemesterOverview";
import { SemesterTabs } from "@/components/SemesterTabs";
import { SearchFilter, CourseTypeFilter } from "@/components/SearchFilter";
import { DeveloperInfo } from "@/components/DeveloperInfo";
import { SiteHeader } from "@/components/SiteHeader";
import { isSessional } from "@/lib/courseUtils";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<CourseTypeFilter>("all");
  const [activeSemester, setActiveSemester] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const semester = semesters.find((s) => s.id === activeSemester) ?? semesters[0];

  const filteredCourses = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return semester.courses.filter((course) => {
      const matchesTerm =
        course.title.toLowerCase().includes(term) ||
        course.code.toLowerCase().includes(term) ||
        course.content.some((c) => c.topic.toLowerCase().includes(term));
      const sessional = isSessional(course);
      const matchesType =
        typeFilter === "all" ||
        (typeFilter === "sessional" && sessional) ||
        (typeFilter === "theory" && !sessional);
      return matchesTerm && matchesType;
    });
  }, [semester, searchTerm, typeFilter]);

  const openCourse = (course: Course) => {
    setSelectedCourse(course);
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 lg:py-16">
        <section className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            CCE Syllabus Explorer
          </h1>
          <p className="mx-auto mt-4 text-base leading-relaxed text-muted-foreground">
            Explore courses, credits, assessment structure and syllabus for each semester in one
            place.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            {programStats.totalSemesters} semesters · {programStats.totalCourses} courses ·{" "}
            {programStats.totalCredits} credit hours · Autumn 2022 OBE Curriculum
          </p>
        </section>

        <SemesterTabs activeSemester={activeSemester} onSelect={setActiveSemester} />

        <SemesterOverview semester={semester} />

        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          typeFilter={typeFilter}
          onTypeFilterChange={setTypeFilter}
          resultCount={filteredCourses.length}
        />

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} onOpen={openCourse} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-card py-16 text-center">
            <p className="text-muted-foreground">No courses found matching your search.</p>
          </div>
        )}

        <DeveloperInfo />

        <footer className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>Syllabus Dashboard • Designed to enhance learning experience</p>
        </footer>
      </main>

      <CourseDetailsDrawer
        course={selectedCourse}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
      />
    </div>
  );
};

export default Index;
