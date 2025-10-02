export interface Course {
  id: string;
  code: string;
  title: string;
  creditHours: number;
  contactHours: string;
  objectives: string[];
  outcomes: CourseOutcome[];
  content: CourseContent[];
  textBooks: string[];
  assessment: Assessment;
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
  lectures: number;
  clo: string;
}

export interface Assessment {
  attendance: number;
  classTest: number;
  midterm: number;
  final: number;
}

export const syllabusData: Course[] = [
  {
    id: "1",
    code: "UREM-1101",
    title: "Text of Ethics and Morality",
    creditHours: 1,
    contactHours: "2 CH per Week",
    objectives: [
      "To make students capable of understanding the text of the Holy Qur'an and basic Arabic language",
      "To inspire students in reading the Holy Qur'an, which is the complete code of life",
      "To make students familiar with Ayats of Ahkam of the Holy Qur'an"
    ],
    outcomes: [
      {
        clo: "CLO1",
        description: "Understand the text of the Holy Qur'an as well as the basic Arabic language to communicate easily in the job market globally",
        plo: "PLO8",
        bloomsLevel: "Cognitive/Understanding"
      },
      {
        clo: "CLO2",
        description: "Understand the rules of ethics and morality from the basic ethical book –the holy Quran",
        plo: "PLO8",
        bloomsLevel: "Cognitive/Understanding"
      },
      {
        clo: "CLO3",
        description: "Achieve knowledge on various legal issues depicted in Quranic texts and save themselves from evil activity",
        plo: "PLO8",
        bloomsLevel: "Cognitive/Applying"
      }
    ],
    content: [
      { chapter: "1", topic: "Introduction to Ethics and Morality & Selected Qur'anic texts", lectures: 4, clo: "CLO1" },
      { chapter: "2", topic: "Social peace and Arabic basics (letters, numbers)", lectures: 6, clo: "CLO1" },
      { chapter: "3", topic: "Family duties and livelihood rules", lectures: 4, clo: "CLO2" },
      { chapter: "4", topic: "Rules on interest, drugs, gambling", lectures: 5, clo: "CLO3" },
      { chapter: "5", topic: "Marriage, divorce, and ethical directions", lectures: 3, clo: "CLO2" },
      { chapter: "6-8", topic: "Arabic formation and conversation", lectures: 8, clo: "CLO1" }
    ],
    textBooks: [
      "Abbott, N., Studies in Arabic literary papyri II, Qur'anic commentary and tradition, Chicago, 1967",
      "Dr. M. Fazlur Rahman, Everyday Arabic Conversation, Riyad Prokashani, Dhaka, 2005",
      "Haleem, M. A., Understanding the Qur'an: themes and Style, London, 1999"
    ],
    assessment: {
      attendance: 10,
      classTest: 10,
      midterm: 30,
      final: 50
    }
  },
  {
    id: "2",
    code: "UREL-1106",
    title: "Advanced English",
    creditHours: 2,
    contactHours: "2 CH per Week",
    objectives: [
      "Develop four basic skills of English (Listening, Speaking, Reading, Writing)",
      "Prepare students for IELTS/TOEFL exams for higher study abroad",
      "Build confidence in speaking and writing with essential grammar"
    ],
    outcomes: [
      {
        clo: "CLO1",
        description: "Acquire four skills of English language to study, analyze, and explain science and engineering",
        plo: "PLO10",
        bloomsLevel: "Cognitive/Understand"
      },
      {
        clo: "CLO2",
        description: "Understand lectures in English and write exam answers in correct standard English",
        plo: "PLO10",
        bloomsLevel: "Cognitive/Understand"
      },
      {
        clo: "CLO3",
        description: "Communicate effectively in science and engineering by overcoming language barriers",
        plo: "PLO10",
        bloomsLevel: "Cognitive/Apply"
      },
      {
        clo: "CLO4",
        description: "Get good grades in international and competitive examinations",
        plo: "PLO10",
        bloomsLevel: "Cognitive/Apply"
      },
      {
        clo: "CLO5",
        description: "Study and comprehend Science and Engineering texts and journals",
        plo: "PLO10",
        bloomsLevel: "Cognitive/Analyze"
      },
      {
        clo: "CLO6",
        description: "Develop self-confidence in English throughout career",
        plo: "PLO10",
        bloomsLevel: "Cognitive/Evaluate"
      }
    ],
    content: [
      { chapter: "Mid", topic: "Reading comprehension, writing, listening/speaking", lectures: 15, clo: "CLO1-6" },
      { chapter: "Final", topic: "Advanced reading, composition, grammar, communication", lectures: 15, clo: "CLO1-6" }
    ],
    textBooks: [
      "Exercises in Reading Comprehension by E.L. Tibbits, Longman",
      "Oxford Advanced Learner's Dictionary, Oxford University Press",
      "English Grammar in Use by Raymond Murphy, Cambridge University Press"
    ],
    assessment: {
      attendance: 10,
      classTest: 10,
      midterm: 30,
      final: 50
    }
  },
  {
    id: "3",
    code: "MATH-1107",
    title: "Differential and Integral Calculus",
    creditHours: 3,
    contactHours: "3 CH per Week",
    objectives: [
      "Understand fundamental concepts of calculus",
      "Apply differentiation and integration techniques",
      "Solve real-world engineering problems using calculus"
    ],
    outcomes: [
      {
        clo: "CLO1",
        description: "Apply knowledge of mathematics in engineering problems",
        plo: "PLO1",
        bloomsLevel: "Cognitive/Apply"
      },
      {
        clo: "CLO2",
        description: "Identify and solve complex engineering problems",
        plo: "PLO2",
        bloomsLevel: "Cognitive/Apply"
      }
    ],
    content: [
      { chapter: "1-2", topic: "Functions, limits, continuity, derivatives", lectures: 12, clo: "CLO1" },
      { chapter: "3-4", topic: "Applications of derivatives, curve sketching", lectures: 10, clo: "CLO2" },
      { chapter: "5-6", topic: "Integration techniques and applications", lectures: 13, clo: "CLO1" }
    ],
    textBooks: [
      "Thomas' Calculus by George B. Thomas, Pearson",
      "Calculus: Early Transcendentals by James Stewart"
    ],
    assessment: {
      attendance: 10,
      classTest: 10,
      midterm: 30,
      final: 50
    }
  },
  {
    id: "4",
    code: "PHY-1108",
    title: "Physics I (Electricity and Magnetism)",
    creditHours: 3,
    contactHours: "3 CH per Week",
    objectives: [
      "Understand fundamental principles of electricity and magnetism",
      "Apply physical concepts to solve engineering problems",
      "Develop experimental and analytical skills"
    ],
    outcomes: [
      {
        clo: "CLO1",
        description: "Apply knowledge of physics in solving engineering problems",
        plo: "PLO1",
        bloomsLevel: "Cognitive/Apply"
      },
      {
        clo: "CLO2",
        description: "Identify complex engineering problems using physics principles",
        plo: "PLO2",
        bloomsLevel: "Cognitive/Analyze"
      }
    ],
    content: [
      { chapter: "1-3", topic: "Electric charge, field, and potential", lectures: 12, clo: "CLO1" },
      { chapter: "4-5", topic: "Capacitance, current, and resistance", lectures: 10, clo: "CLO1" },
      { chapter: "6-8", topic: "Magnetic fields and electromagnetic induction", lectures: 13, clo: "CLO2" }
    ],
    textBooks: [
      "Physics for Scientists and Engineers by Serway & Jewett",
      "University Physics by Young & Freedman"
    ],
    assessment: {
      attendance: 10,
      classTest: 10,
      midterm: 30,
      final: 50
    }
  },
  {
    id: "5",
    code: "CSE-1109",
    title: "Structured Programming Language",
    creditHours: 3,
    contactHours: "3 CH per Week",
    objectives: [
      "Understand programming fundamentals and C language",
      "Develop problem-solving skills through coding",
      "Master data structures and algorithms"
    ],
    outcomes: [
      {
        clo: "CLO1",
        description: "Apply programming knowledge to solve engineering problems",
        plo: "PLO1",
        bloomsLevel: "Cognitive/Apply"
      },
      {
        clo: "CLO2",
        description: "Design solutions for complex problems using programming",
        plo: "PLO3",
        bloomsLevel: "Cognitive/Create"
      },
      {
        clo: "CLO3",
        description: "Implement and debug programs effectively",
        plo: "PLO5",
        bloomsLevel: "Cognitive/Apply"
      }
    ],
    content: [
      { chapter: "1-3", topic: "Introduction to C, variables, operators, control structures", lectures: 10, clo: "CLO1" },
      { chapter: "4-6", topic: "Arrays, functions, pointers", lectures: 12, clo: "CLO2" },
      { chapter: "7-8", topic: "Structures, file handling, algorithms", lectures: 13, clo: "CLO3" }
    ],
    textBooks: [
      "The C Programming Language by Kernighan & Ritchie",
      "Programming in ANSI C by E. Balagurusamy"
    ],
    assessment: {
      attendance: 10,
      classTest: 10,
      midterm: 30,
      final: 50
    }
  },
  {
    id: "6",
    code: "EEE-1110",
    title: "Basic Electrical Engineering",
    creditHours: 3,
    contactHours: "3 CH per Week",
    objectives: [
      "Understand basic electrical circuits and components",
      "Analyze AC and DC circuits",
      "Apply electrical principles to engineering applications"
    ],
    outcomes: [
      {
        clo: "CLO1",
        description: "Apply electrical engineering knowledge to solve problems",
        plo: "PLO1",
        bloomsLevel: "Cognitive/Apply"
      },
      {
        clo: "CLO2",
        description: "Analyze and design basic electrical circuits",
        plo: "PLO3",
        bloomsLevel: "Cognitive/Analyze"
      }
    ],
    content: [
      { chapter: "1-3", topic: "DC circuits, Ohm's law, network theorems", lectures: 12, clo: "CLO1" },
      { chapter: "4-5", topic: "AC circuits, phasors, power", lectures: 10, clo: "CLO1" },
      { chapter: "6-7", topic: "Transformers, motors, generators", lectures: 13, clo: "CLO2" }
    ],
    textBooks: [
      "Basic Electrical Engineering by D.C. Kulshreshtha",
      "Electrical Circuit Theory and Technology by John Bird"
    ],
    assessment: {
      attendance: 10,
      classTest: 10,
      midterm: 30,
      final: 50
    }
  }
];

export const semesterStats = {
  totalCourses: 6,
  totalCredits: 15,
  averageContactHours: 2.5
};
