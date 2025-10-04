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
    code: "CCE-1105",
    title: "Computer Fundamentals and Programming",
    creditHours: 3,
    contactHours: "3 CH per Week",
    prerequisite: "",
    objectives: [
      "Recognize and understand the purpose of basic computer components",
      "Understand the concept of program, variable, constant, loop, array, function, structure, pointer and file",
      "Understand the parts of a computer system and how they interact",
      "Understand the concept of a program in a high-level language being translated by a compiler into machine language program and then executed"
    ],
    outcomes: [
      {
        clo: "CLO1",
        description: "Define the components of a computer system including the basic terminology used in computer programming",
        plo: "PLO1",
        bloomsLevel: "Cognitive"
      },
      {
        clo: "CLO2",
        description: "Demonstrate C language by writing, compiling and debugging programs with the use of different data types, variables, constants and numerous input/output functions",
        plo: "PLO1",
        bloomsLevel: "Cognitive"
      },
      {
        clo: "CLO3",
        description: "Apply control statements, functions, structures, unions, arrays and pointers of C language to solve real world problems",
        plo: "PLO2",
        bloomsLevel: "Cognitive"
      },
      {
        clo: "CLO4",
        description: "Adapt the concept of file handling to manipulate file data",
        plo: "PLO2",
        bloomsLevel: "Cognitive"
      }
    ],
    content: [
      { chapter: "1", topic: "Computer Organization: Introduction to Computer and its Types", section: "Midterm", clo: "CLO1" },
      { chapter: "1", topic: "Computer Components: CPU, Memory, Hardware and Software", lectures: 1, section: "Midterm", clo: "CLO1" },
      { chapter: "2", topic: "Introduction to C program: History and Features of C", lectures: 1, section: "Midterm", clo: "CLO2" },
      { chapter: "2", topic: "Steps in C Program execution", section: "Midterm", clo: "CLO2" },
      { chapter: "2", topic: "Variables, Constants, Data Types and Keywords", lectures: 2, section: "Midterm", clo: "CLO2" },
      { chapter: "2", topic: "Operators, Comments and Escape Sequence", lectures: 3, section: "Midterm", clo: "CLO2" },
      { chapter: "3", topic: "Program Control Statements: if, if-else and nested if", lectures: 1, section: "Midterm", clo: "CLO2" },
      { chapter: "3", topic: "If-else-if ladder and Switch", lectures: 1, section: "Midterm", clo: "CLO2" },
      { chapter: "3", topic: "Loops (for, while, do-while)", lectures: 3, section: "Midterm", clo: "CLO2" },
      { chapter: "3", topic: "Jump Statement (break, continue, and go to)", lectures: 1, section: "Midterm", clo: "CLO2" },
      { chapter: "4", topic: "User-defined Functions and aspects of function calling", lectures: 2, section: "Final", clo: "CLO3" },
      { chapter: "4", topic: "Call by value and Call by reference in C", lectures: 1, section: "Final", clo: "CLO3" },
      { chapter: "4", topic: "Recursion in C, Storage Classes in C", lectures: 1, section: "Final", clo: "CLO3" },
      { chapter: "5", topic: "Arrays: Introduction to Array and Two-Dimensional Array", lectures: 2, section: "Final", clo: "CLO3" },
      { chapter: "5", topic: "Passing Array to Function in C, String handling in C", lectures: 3, section: "Final", clo: "CLO3" },
      { chapter: "6", topic: "Structures and Unions: Introduction to Structures", lectures: 1, section: "Final", clo: "CLO3" },
      { chapter: "6", topic: "Array of Structures and Nested Structure in C", lectures: 2, section: "Final", clo: "CLO3" },
      { chapter: "6", topic: "Union", lectures: 1, section: "Final", clo: "CLO3" },
      { chapter: "7", topic: "Pointers: Introduction to Pointers", lectures: 1, section: "Final", clo: "CLO3" },
      { chapter: "7", topic: "Pointers and arrays, Pointers and functions", lectures: 2, section: "Final", clo: "CLO3" },
      { chapter: "8", topic: "File Management: Introduction and File Operations", lectures: 2, section: "Final", clo: "CLO4" },
      { chapter: "8", topic: "Library functions for File", lectures: 1, section: "Final", clo: "CLO4" },
      { chapter: "8", topic: "Dynamic memory allocation in C", lectures: 1, section: "Final", clo: "CLO4" },
      { chapter: "8", topic: "Command Line Arguments and Pre-processors", lectures: 1, section: "Final", clo: "CLO4" }
    ],
    textBooks: [
      "Balagurusamy, E, 'Programming in ANSI C', 6th ed. Tata McGraw-Hill, Delhi, 2012",
      "Herbert Schildt, 'C: The Complete Reference' Osborne McGraw-Hill Company Inc, 2000",
      "Byron S. Gottfried, 'Theory and Problems of Programming with C' 3rd ed., McGraw-Hill Company Inc, 1996"
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
    id: "4",
    code: "CCE-1106",
    title: "Computer Fundamentals and Programming Sessional",
    creditHours: 1.5,
    contactHours: "3 CH per Week",
    prerequisite: "",
    objectives: [
      "Recognize and understand the purpose of basic computer components",
      "Understand the concept of variable, constant, loop, array, function, structure, pointer and file",
      "Understand the parts of a computer system and how they interact",
      "Understand the concept of a program in a high-level language being translated by a compiler into machine language program and then executed"
    ],
    outcomes: [
      {
        clo: "CLO1",
        description: "Write, compile and execute C programs based on simple constructs like arrays, loops, structures, conditional statements etc",
        plo: "PLO1",
        bloomsLevel: "Cognitive/Psychomotor/Affective"
      },
      {
        clo: "CLO2",
        description: "Apply the concepts of pointer and functions to solve problems",
        plo: "PLO2",
        bloomsLevel: "Cognitive/Psychomotor/Affective"
      },
      {
        clo: "CLO3",
        description: "Demonstrate the use of file handling operations",
        plo: "PLO2",
        bloomsLevel: "Cognitive/Psychomotor/Affective"
      },
      {
        clo: "CLO4",
        description: "Develop simple C program for standard applications",
        plo: "PLO7",
        bloomsLevel: "Affective"
      }
    ],
    content: [
      { chapter: "1", topic: "Introduction to C programming", lectures: 2, clo: "CLO1" },
      { chapter: "2", topic: "Data types and expressions", lectures: 1, clo: "CLO2" },
      { chapter: "3", topic: "Operators", lectures: 1, clo: "CLO1" },
      { chapter: "4", topic: "Decision making and Branching (if-else, nested if-else)", lectures: 1, clo: "CLO1" },
      { chapter: "5", topic: "Decision making and Branching (if-else-if ladder and switch)", lectures: 1, clo: "CLO1" },
      { chapter: "6", topic: "Looping (for, while, do-while)", lectures: 2, clo: "CLO3" },
      { chapter: "7", topic: "Arrays (one-dimensional and two-dimensional)", lectures: 2, clo: "CLO1" },
      { chapter: "8", topic: "String handling", lectures: 1, clo: "CLO3" },
      { chapter: "9", topic: "User-defined Functions", lectures: 2, clo: "CLO2" },
      { chapter: "10", topic: "Recursion", lectures: 1, clo: "CLO2" },
      { chapter: "11", topic: "Structures and Unions", lectures: 1, clo: "CLO3" },
      { chapter: "12", topic: "Pointers", lectures: 2, clo: "CLO2" },
      { chapter: "13", topic: "File handling", lectures: 1, clo: "CLO3" },
      { chapter: "14", topic: "Dynamic memory allocation", lectures: 1, clo: "CLO4" }
    ],
    textBooks: [
      "Balagurusamy, E, 'Programming in ANSI C', 6th ed. Tata McGraw-Hill, Delhi, 2012",
      "Herbert Schildt, 'C: The Complete Reference' Osborne McGraw-Hill Company Inc, 2000",
      "Byron S. Gottfried, 'Theory and Problems of Programming with C' 3rd ed., McGraw-Hill Company Inc, 1996"
    ],
    assessment: {
      attendance: 10,
      classTest: 20,
      midterm: 30,
      final: 40
    },
    deliveryMethods: [
      "Lecture",
      "Practical Demonstration",
      "Lab Work",
      "Data Collection",
      "Data Analysis",
      "Report Writing"
    ],
    assessmentTools: [
      "Class Attendance",
      "Assignment",
      "Lab Report",
      "Quizzes",
      "Lab Exams (Mid & Final)",
      "Viva"
    ]
  },
  {
    id: "5",
    code: "CCE-1103",
    title: "Basic Electrical Engineering",
    creditHours: 3,
    contactHours: "3 CH per Week",
    prerequisite: "",
    objectives: [
      "Students gain fundamental ideas of DC electrical circuits, magnetic circuit, ohm's law, KVL, KCL",
      "Gain basic ideas about series and parallel circuits, equivalent resistance of complex circuits",
      "Comprehend and Apply various types of circuit theorems",
      "Gain basic idea of R-C and R-L and RLC circuits with DC excitation"
    ],
    outcomes: [
      {
        clo: "CLO1",
        description: "Understand the concepts of basic Circuit element, basic circuit, and basic circuit Laws and magnetic circuit laws",
        plo: "PLO1",
        bloomsLevel: "Cognitive/Understand"
      },
      {
        clo: "CLO2",
        description: "Introduce series parallel circuit and different network theorem to analysis the circuits",
        plo: "PLO2",
        bloomsLevel: "Cognitive/Understand/Analysis"
      }
    ],
    content: [
      { chapter: "1", topic: "Circuit variables and elements: Voltage, Current, Power, Energy", lectures: 4, section: "Midterm", clo: "CLO1" },
      { chapter: "1", topic: "Independent and Dependent Sources, Resistance", section: "Midterm", clo: "CLO1" },
      { chapter: "2", topic: "Basic laws: Ohm's law, Kirchhoff's current and Voltage laws", lectures: 4, section: "Midterm", clo: "CLO1" },
      { chapter: "3", topic: "Simple resistive circuits: Series and parallel circuits, Voltage and current division", lectures: 4, section: "Midterm", clo: "CLO2" },
      { chapter: "4", topic: "Wye-delta transformation: Necessity, Application, Delta to Wye and Wye to Delta Conversion", lectures: 3, section: "Midterm", clo: "CLO2" },
      { chapter: "5", topic: "Techniques of circuit analysis: Branch current analysis, Nodal and mesh analysis including super node and super mesh", lectures: 3, section: "Final", clo: "CLO2" },
      { chapter: "6", topic: "Network theorems: Source transformation, Thevenin's and Norton's theorem, Superposition theorems", lectures: 4, section: "Final", clo: "CLO2" },
      { chapter: "6", topic: "Maximum power transfer condition and reciprocity theorem", section: "Final", clo: "CLO2" },
      { chapter: "7", topic: "Energy storage elements: Inductors and capacitors, Series parallel combination", lectures: 3, section: "Final", clo: "CLO1" },
      { chapter: "8", topic: "Source free RC and RL circuits, Step response of RC and RL circuits", lectures: 3, section: "Final", clo: "CLO1" },
      { chapter: "9", topic: "Magnetic Circuits: Flux, Permeability, reluctance, magnetic field strength, flux density", lectures: 2, section: "Final", clo: "CLO1" },
      { chapter: "9", topic: "Ohm's law and Ampere's circuital law in magnetic circuits", lectures: 1, section: "Final", clo: "CLO1" },
      { chapter: "9", topic: "Magnetic circuits: series, parallel and series parallel circuits", lectures: 1, section: "Final", clo: "CLO2" },
      { chapter: "10", topic: "Second Order Circuit: Source free series and parallel RLC circuit", lectures: 3, section: "Final", clo: "CLO1" },
      { chapter: "10", topic: "Step response of series and parallel RLC circuit", section: "Final", clo: "CLO1" }
    ],
    textBooks: [
      "Robert L. Boylestad, 'Introductory Circuit Analysis', 11th ed. Pearson education international, USA, 2007",
      "Charles K. Alexander and Matthew N. O. Sadiku, 'Fundamental of Electric Circuits', McGraw Hill, New York, 2009",
      "L. Theraja and A. K. Theraja, 'A text book of Electrical Technology', Volume IV, 23th ed. Rajendra Ravindra Printers, India, 2007"
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
    id: "6",
    code: "CCE-1104",
    title: "Basic Electrical Engineering Sessional",
    creditHours: 1.5,
    contactHours: "3 CH per Week",
    prerequisite: "",
    objectives: [
      "To introduce the typical lab equipment's used in the laboratory",
      "To give general guideline about the safety precautions necessary",
      "To verify different circuit laws and theorems",
      "To become proficient with computer skills (PSpice) for the analysis and design of circuits"
    ],
    outcomes: [
      {
        clo: "CLO1",
        description: "Introduce basic required component of electrical circuit",
        plo: "PLO1",
        bloomsLevel: "Cognitive/Understanding"
      },
      {
        clo: "CLO2",
        description: "Examine the different laws of basic circuit and theorem",
        plo: "PLO2",
        bloomsLevel: "Cognitive/Understanding/Designing"
      }
    ],
    content: [
      { chapter: "1", topic: "Study of different electrical components and measuring instruments", lectures: 1, clo: "CLO1" },
      { chapter: "2", topic: "Verification of Ohm's law", lectures: 1, clo: "CLO1" },
      { chapter: "3", topic: "Verification of Kirchhoff's voltage and current laws", lectures: 1, clo: "CLO1" },
      { chapter: "4", topic: "Study of series and parallel circuits", lectures: 1, clo: "CLO2" },
      { chapter: "5", topic: "Voltage and current division", lectures: 1, clo: "CLO2" },
      { chapter: "6", topic: "Wye-delta transformation", lectures: 1, clo: "CLO2" },
      { chapter: "7", topic: "Verification of Thevenin's theorem", lectures: 1, clo: "CLO2" },
      { chapter: "8", topic: "Verification of Norton's theorem", lectures: 1, clo: "CLO2" },
      { chapter: "9", topic: "Verification of Superposition theorem", lectures: 1, clo: "CLO2" },
      { chapter: "10", topic: "Maximum power transfer theorem", lectures: 1, clo: "CLO2" },
      { chapter: "11", topic: "Study of RC and RL circuits", lectures: 1, clo: "CLO1" },
      { chapter: "12", topic: "Study of RLC circuits", lectures: 1, clo: "CLO1" },
      { chapter: "13", topic: "Introduction to PSpice simulation", lectures: 2, clo: "CLO2" }
    ],
    textBooks: [
      "Robert L. Boylestad, 'Introductory Circuit Analysis', 11th ed. Pearson education international, USA, 2007",
      "Charles K. Alexander and Matthew N. O. Sadiku, 'Fundamental of Electric Circuits', McGraw Hill, New York, 2009",
      "L. Theraja and A. K. Theraja, 'A text book of Electrical Technology', Volume IV, 23th ed. Rajendra Ravindra Printers, India, 2007"
    ],
    assessment: {
      attendance: 10,
      classTest: 20,
      midterm: 30,
      final: 40
    },
    deliveryMethods: [
      "Lecture",
      "White Board Writing",
      "Power point Presentation",
      "Practical Demonstration",
      "Data Collection",
      "Data Analysis",
      "Report Writing"
    ],
    assessmentTools: [
      "Class Attendance",
      "Assignment",
      "Lab Report",
      "Quizzes",
      "Lab Exams (Mid & Final)",
      "Viva"
    ]
  }
];

export const semesterStats = {
  totalCourses: 6,
  totalCredits: 15,
  averageContactHours: 2.7
};
