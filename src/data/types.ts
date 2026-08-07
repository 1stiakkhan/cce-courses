export interface Course {
  id: string;
  code: string;
  title: string;
  creditHours: number;
  contactHours: string;
  prerequisite?: string;
  objectives: string[];
  outcomes: CourseOutcome[];
  content: CourseContent[];
  textBooks: string[];
  assessment: Assessment;
  deliveryMethods?: string[];
  assessmentTools?: string[];
}

export interface CourseOutcome {
  clo: string;
  description: string;
  plo: string;
  bloomsLevel: string;
}

export interface CourseContent {
  chapter: string;
  topic: string;
  lectures?: number;
  clo?: string;
  section?: string;
}

export interface Assessment {
  attendance: number;
  classTest: number;
  midterm: number;
  final: number;
}

export interface Semester {
  id: number;
  name: string;
  totalCredits: number;
  courses: Course[];
}
