import { Course, Semester } from "./types";
import { semester1Courses } from "./semester1";
import { semester2Courses } from "./semester2";
import { semester3Courses } from "./semester3";
import { semester4Courses } from "./semester4";
import { semester5Courses } from "./semester5";
import { semester6Courses } from "./semester6";
import { semester7Courses } from "./semester7";
import { semester8Courses } from "./semester8";

export type { Course, CourseOutcome, CourseContent, Assessment, Semester } from "./types";

export const semesters: Semester[] = [
  { id: 1, name: "First Semester", totalCredits: 19, courses: semester1Courses },
  { id: 2, name: "Second Semester", totalCredits: 20, courses: semester2Courses },
  { id: 3, name: "Third Semester", totalCredits: 17.5, courses: semester3Courses },
  { id: 4, name: "Fourth Semester", totalCredits: 19.5, courses: semester4Courses },
  { id: 5, name: "Fifth Semester", totalCredits: 19, courses: semester5Courses },
  { id: 6, name: "Sixth Semester", totalCredits: 21, courses: semester6Courses },
  { id: 7, name: "Seventh Semester", totalCredits: 20.5, courses: semester7Courses },
  { id: 8, name: "Eighth Semester", totalCredits: 24.5, courses: semester8Courses },
];

export const allCourses: Course[] = semesters.flatMap((s) => s.courses);

/** Kept for backwards compatibility: first semester courses. */
export const syllabusData: Course[] = semester1Courses;

export const getSemesterStats = (semester: Semester) => {
  const contactHours = semester.courses
    .map((c) => parseFloat(c.contactHours) || 0)
    .reduce((a, b) => a + b, 0);
  return {
    totalCourses: semester.courses.length,
    totalCredits: semester.totalCredits,
    averageContactHours: semester.courses.length
      ? Number((contactHours / semester.courses.length).toFixed(1))
      : 0,
  };
};

export const programStats = {
  totalSemesters: semesters.length,
  totalCourses: allCourses.length,
  totalCredits: Number(semesters.reduce((a, s) => a + s.totalCredits, 0).toFixed(1)),
};
