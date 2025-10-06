import { useState } from "react";
import { syllabusData } from "@/data/syllabusData";
import { CourseCard } from "@/components/CourseCard";
import { SemesterOverview } from "@/components/SemesterOverview";
import { SearchFilter } from "@/components/SearchFilter";
import { DeveloperInfo } from "@/components/DeveloperInfo";
import { GraduationCap } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = syllabusData.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.content.some((c) => c.topic.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            First Semester Syllabus
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive dashboard to visualize and explore your academic journey
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
            <p className="text-sm text-accent font-medium">Autumn 2022 • OBE Curriculum</p>
          </div>
        </header>

        <SemesterOverview />

        <SearchFilter searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
          ) : (
            <div className="col-span-2 text-center py-12">
              <p className="text-muted-foreground text-lg">No courses found matching your search.</p>
            </div>
          )}
        </div>

        <DeveloperInfo />
        
        <footer className="mt-8 text-center text-muted-foreground text-sm">
          <p>Syllabus Dashboard • Designed to enhance learning experience</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
