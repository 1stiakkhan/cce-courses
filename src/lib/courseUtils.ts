import { Course } from "@/data/types";

/** Presentation-only helper: classify a course as Sessional or Theory from existing data. */
export const isSessional = (course: Course) =>
  /sessional|laborator|\blab\b|practical|project|thesis|viva/i.test(course.title);

export const courseType = (course: Course) => (isSessional(course) ? "Sessional" : "Theory");
