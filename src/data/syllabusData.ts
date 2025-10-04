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

export const syllabusData: Course[] = [
  {
    id: "1",
    code: "UREM-1101",
    title: "Text of Ethics and Morality",
    creditHours: 1,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [
      "To make students capable of understanding the text of the Holy Qur'an so that they can understand the rules of ethics from the main and basic ethical book as well as to make students capable of understanding the basic Arabic language so that they can communicate with the foreign countries and be fit with labor market worldwide especially in the Middle East",
      "To inspire students in reading the Holy Qur'an, which is the complete code of life",
      "To make students familiar with Ayats of Ahkam of the Holy Qur'an so that they can lead their life being enlightened with them"
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
        description: "Achieve knowledge on the various legal issues that are depicted in Qur'anic texts related to different laws of human life as well as able to save themselves from any evil activity, which boost up morally throughout their professional life",
        plo: "PLO8",
        bloomsLevel: "Cognitive/Applying"
      }
    ],
    content: [
      { chapter: "1", topic: "An introduction to the text of Ethics and Morality", section: "Midterm", clo: "CLO1" },
      { chapter: "1", topic: "Selected text on the introductory chapter of a valuable Ethical Book - the holy Qur'an", lectures: 4, section: "Midterm", clo: "CLO1" },
      { chapter: "1", topic: "An introduction to Arabic language", section: "Midterm", clo: "CLO1" },
      { chapter: "1", topic: "Identifying the forms of Arabic alphabet with example", section: "Midterm", clo: "CLO1" },
      { chapter: "1", topic: "Selected text on procreation of the creation of humankind: 22:5", section: "Midterm", clo: "CLO1" },
      { chapter: "1", topic: "Selected text on Islamic monotheism: 2:1-5; 112:1-4", section: "Midterm", clo: "CLO1" },
      { chapter: "2", topic: "Text on ensuring social peace by removing bad behavior 49:10-12", lectures: 6, section: "Midterm", clo: "CLO1" },
      { chapter: "2", topic: "The sun letters and the moon letters", section: "Midterm", clo: "CLO1" },
      { chapter: "2", topic: "Arabic numbers and common Arabic words used in daily life", section: "Midterm", clo: "CLO1" },
      { chapter: "2", topic: "Arabic prepositions", section: "Midterm", clo: "CLO1" },
      { chapter: "3", topic: "Selected text on duties and obligations towards family and relatives: 4:34-36", section: "Midterm", clo: "CLO2" },
      { chapter: "3", topic: "Selected text on the transition of human life: 10:24", lectures: 4, section: "Midterm", clo: "CLO2" },
      { chapter: "3", topic: "Selected text on the rule of livelihood: 2:172-174, 5:3-5", section: "Midterm", clo: "CLO2" },
      { chapter: "3", topic: "Exercise of Arabic demonstrative pronouns", section: "Midterm", clo: "CLO2" },
      { chapter: "4", topic: "Selected text on the rule and impact of interest (al-riba) and loan: 2:275-279", section: "Final", clo: "CLO3" },
      { chapter: "4", topic: "Selected Text on the rules and impact of drug and gambling: 5:90-91", lectures: 5, section: "Final", clo: "CLO3" },
      { chapter: "4", topic: "Exercise of Arabic interrogative pronoun", section: "Final", clo: "CLO3" },
      { chapter: "4", topic: "The name of days and months in Arabic", section: "Final", clo: "CLO3" },
      { chapter: "4", topic: "Formation of Arabic word", section: "Final", clo: "CLO3" },
      { chapter: "5", topic: "Selected Text on the rules and ethical directions of marriage, mahr and veil: 4:2-4; 24:30-31, 33:59", lectures: 3, section: "Final", clo: "CLO2" },
      { chapter: "5", topic: "Text on the rule and ethical directions of divorce 2:227-230", section: "Final", clo: "CLO2" },
      { chapter: "5", topic: "The names directions in Arabic", section: "Final", clo: "CLO2" },
      { chapter: "5", topic: "Formation of verb in Arabic", section: "Final", clo: "CLO2" },
      { chapter: "6", topic: "Formation of particle in Arabic", lectures: 2, section: "Final", clo: "CLO1" },
      { chapter: "6", topic: "Selected text on the sermon of a father to his son: 31:13-19", section: "Final", clo: "CLO1" },
      { chapter: "7", topic: "Selected text on the characteristics of human beings: 23:1-11; 25:63-76", lectures: 2, section: "Final", clo: "CLO1" },
      { chapter: "8", topic: "Formation of Arabic sentence", lectures: 4, section: "Final", clo: "CLO1" },
      { chapter: "8", topic: "Conversation in Arabic: 'Yourself'", section: "Final", clo: "CLO1" }
    ],
    textBooks: [
      "Abbott, N., Studies in Arabic literary papyri II, Qur'anic commentary and tradition, Chicago: University of Chicago, 1967",
      "Dr. M. Fazlur Rahman, Everyday Arabic Conversation, Riyad Prokashani, Dhaka, 2005",
      "Haleem, M. A., Understanding the Qur'an: themes and Style, London: I. B. Tauris, 1999",
      "Izzath Uroosa, Learning Arabic Language of the Qur'an, Darussalam, Riyadh, 2010",
      "Saheeh International, The Qur'an Arabic Text with Corresponding English Meanings, Jeddah, Saudi Arabia, 1997"
    ],
    assessment: {
      attendance: 10,
      classTest: 10,
      midterm: 30,
      final: 50
    },
    deliveryMethods: [
      "Lecture",
      "White Board Writing",
      "Questions and Answers",
      "Tutorial",
      "Discussions",
      "Power point Presentation"
    ],
    assessmentTools: [
      "Class Attendance",
      "Class test",
      "Quizzes/Assignment on problem solution",
      "Mid-Term & Semester End Examination",
      "Project evaluation & Viva"
    ]
  },
  {
    id: "2",
    code: "UREL-1106",
    title: "Advanced English",
    creditHours: 2,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [
      "This course has been designed for the students of first semester because they need to develop four basic skills of English (i.e., Listening, Speaking, Reading and Writing) to a level that they can comprehend lectures given in English, comprehend literary, non-literary, formal and informal texts and communicate effectively both orally and in written form",
      "They also need to prepare themselves for IELTS/TOEFL exams so that they can take these exams for their higher study abroad",
      "They also need to build up confidence in their own speaking and writing which will be provided by teaching them essential grammatical points. This course is designed with an objective to fulfill this aim"
    ],
    outcomes: [
      {
        clo: "CLO1",
        description: "Acquire four skills of English language which enable them to study, analyze, explain both orally and in written form different aspects of science and engineering",
        plo: "PLO10",
        bloomsLevel: "Cognitive/Understand"
      },
      {
        clo: "CLO2",
        description: "Understand the lectures given in English and write answers in the examination using correct and standard English",
        plo: "PLO10",
        bloomsLevel: "Cognitive/Understand"
      },
      {
        clo: "CLO3",
        description: "Communicate effectively in relation with science and engineering by overcoming English language barriers",
        plo: "PLO10",
        bloomsLevel: "Cognitive/Apply"
      },
      {
        clo: "CLO4",
        description: "Get good grades in all international examinations, competitive examinations as well as internal examinations by using fluency in both spoken and written English",
        plo: "PLO10",
        bloomsLevel: "Cognitive/Apply"
      },
      {
        clo: "CLO5",
        description: "Study and comprehend Science and Engineering texts, reference books which are written in English, engineering and science related articles in national and international journals and acquire substantial knowledge about science and engineering",
        plo: "PLO10",
        bloomsLevel: "Cognitive/Analyze"
      },
      {
        clo: "CLO6",
        description: "Develop a self-confidence in the use of English all through the science and engineering career and thus to achieve a lucrative social status",
        plo: "PLO10",
        bloomsLevel: "Cognitive/Evaluate"
      }
    ],
    content: [
      { chapter: "Section-1", topic: "Reading-1 (Seen) - Reading from prescribed Text (First half)", lectures: 15, section: "Midterm", clo: "CLO1-6" },
      { chapter: "Section-1", topic: "Reading-2 (Unseen) - Comprehension exercises", section: "Midterm", clo: "CLO1-6" },
      { chapter: "Section-1", topic: "Writing-1 (Sentence Construction) - Grammar exercises", section: "Midterm", clo: "CLO1-6" },
      { chapter: "Section-1", topic: "Writing-2 (Composition) - Paragraph and essay writing", section: "Midterm", clo: "CLO1-6" },
      { chapter: "Section-1", topic: "Listening or Speaking - Communication skills", section: "Midterm", clo: "CLO1-6" },
      { chapter: "Section-2", topic: "Reading-1 (Seen) - Reading from prescribed Text (Second half)", lectures: 15, section: "Final", clo: "CLO1-6" },
      { chapter: "Section-2", topic: "Reading-2 (Unseen) - Advanced comprehension", section: "Final", clo: "CLO1-6" },
      { chapter: "Section-2", topic: "Writing-1 (Sentence Construction) - Advanced grammar", section: "Final", clo: "CLO1-6" },
      { chapter: "Section-2", topic: "Writing-2 (Composition) - Formal and informal writing", section: "Final", clo: "CLO1-6" },
      { chapter: "Section-2", topic: "Listening or Speaking - Advanced communication", section: "Final", clo: "CLO1-6" }
    ],
    textBooks: [
      "Exercises in Reading Comprehension by E.L. Tibbits, Longman Group Limited",
      "Build up Your English, Radiant Publishers, Dhaka",
      "Saadat, Syeda Sarwat (Ed.), Developing Skills in English, Friends' Book Corner, Dhaka",
      "Oxford Advanced Learner's Dictionary, Oxford University Press",
      "English Grammar in Use by Raymond Murphy, Cambridge University Press"
    ],
    assessment: {
      attendance: 10,
      classTest: 10,
      midterm: 30,
      final: 50
    },
    deliveryMethods: [
      "Lecture",
      "Interactive Discussion",
      "Group Activities",
      "Reading Practice",
      "Writing Exercises",
      "Listening & Speaking Sessions"
    ],
    assessmentTools: [
      "Class Attendance",
      "Reading Comprehension Tests",
      "Writing Assignments",
      "Mid-Term & Final Examination",
      "Oral Presentation"
    ]
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
