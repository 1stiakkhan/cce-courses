import { Course } from "./types";

export const semester3Courses: Course[] = [
  {
    id: "3-1",
    code: "URED-2302",
    title: "Sciences of Qur'an and Hadith",
    creditHours: 1,
    contactHours: "2 Contact Hours per Week",
    prerequisite: "",
    objectives: [
      "The Holy Qur'an and Hadith are the main sources of Islamic Knowledge. They are the primary sources of Islamic Aqidah, Ibadah, Muamalah and Akhlaq. So, after taking basic beliefs exactly from them and acquiring comprehensive knowledge about 'Ibadah, it is necessary to know the method of explanation and understanding the Holy Qur'an and Hadith in order to apply them in our worldly life. Thus, this course is designed to make the students familiar with these two primary sources of Islamic knowledge and help them to remove any misconception prevailing in the society concerning with or contrary to the spirit of the Qur'an and Hadith by establishing their authenticity and superiority."
    ],
    outcomes: [
      { clo: "CLO-1", description: "To understand the nature and features of the holy Quran and Sunnah as the last revelation of Allah (SWT).", plo: "PLO6", bloomsLevel: "Cognitive/Understand" },
      { clo: "CLO-2", description: "To analyse how the both Quran and Sunnah has been collected, preserved and transmitted to us accurately and how the text of both are existed at present.", plo: "PLO6", bloomsLevel: "Cognitive/Analyse" },
      { clo: "CLO-3", description: "To understand the text of the holy Quran and Hadith based on their general and specific contexts.", plo: "PLO6", bloomsLevel: "Cognitive/Understand" },
      { clo: "CLO-4", description: "To analyse why Shariah does not accept any change or modification by human kind.", plo: "PLO6", bloomsLevel: "Cognitive/Analyse" },
      { clo: "CLO-5", description: "To understand the miraculous nature of the holy Quran, and how the Sunnah classified from various angles to find out authentic Hadith.", plo: "PLO6", bloomsLevel: "Cognitive/Understand" }
    ],
    content: [
      { chapter: "Chapter# 01", topic: "Al-Quran: Some General information: (1) Definition of the Sciences of the Qur'an Literally and Terminologically (2) Definition of the Qur'an Literally and Terminologically (3) Various Names and Attributes of the Holy Qur'an and their Significance (4) Characteristics of the Holy Qur'an (5) Central Subject Matter & the Main Themes of the Holy Qur'an (6) The necessity of the Holy Qur'an (7) The authenticity of the Holy Qur'an.", lectures: 4, clo: "CLO-1", section: "Midterm" },
      { chapter: "Chapter# 02", topic: "The Quranic Revelation (Wahi of the Holy Qur'an): (1) Meaning of Wahi (2) Various classifications and procedure of Wahi (3) Stages of revelation of the Holy Qur'an (4) Gradual revelation of the Holy Qur'an and the wisdom behind it (5) The First and the Last Revelation.", lectures: 4, clo: "CLO-2", section: "Midterm" },
      { chapter: "Chapter# 03", topic: "Division of the text of the Holy Quran: (1) The Aayah of the Qur'an: Definition of Aayah. The Number of Ayah, words and letters of the Holy Qur'an. The Arrangement of the Ayah of the Holy Qur'an (2) The Surah of The Qur'an: Definition of Surah. The Arrangement of Surah of the Holy Qur'an. The classification of Surah of the Holy Qur'an.", lectures: 4, clo: "CLO-4", section: "Midterm" },
      { chapter: "Chapter# 04", topic: "Understanding the text of the holy Quran: (1) Makki & Madani Revelations: (a) The Definition of Makki and Madani (b) The Characteristics of Makki and Madani Revelations (c) The benefits of knowing Makki and Madani Revelations. (2) Asbabunnuzul (The Causes of Revelation): Meaning and classification of Asababunnuzul. The benefits of Knowing Asbanunnuzul. (3) Al-Naskh (Abrogation) Definition, The proofs, The Classifications of Naskh. The benefits of knowing Nasikh (abrogating) and Mansukh (abrogated) verses.", lectures: 4, clo: "CLO5", section: "Final" },
      { chapter: "Chapter# 05", topic: "Transmission of Quranic Revelation: (1) Types of transmission of Quranic revelation: Verbal Transmission & written form of transmission (2) Collection and compilation (Jam`ul Quran) (3) Stages of collection (4) difference between collection of Abu Bakr (ra) and Othman (ra).", lectures: 3, clo: "CLO3", section: "Final" },
      { chapter: "Chapter# 06", topic: "I'jaz al-Quran (Inimitability of The Holy Qur'an): Definition of I'jaz, Condition, The Proofs of I`jaz. Various aspects of I`jaz Al-Qur'an.", lectures: 3, clo: "CLO5", section: "Final" },
      { chapter: "Chapter# 07", topic: "General Information About Sunnah and Hadith: (1) Definition of Sunnah (2) Difference among Qur'an, Sunnah and Hadith Qudshi (3) The Position, importance and authority of Sunnah in Islamic Shari'ah (4) history of Collection & Compilation of Sunnah.", lectures: 4, clo: "CLO3", section: "Final" },
      { chapter: "Chapter# 08", topic: "Explanation of some important terms of Sunnah, the classification of Hadith and fabrication in Hadith: (1) Explanation of some important terms of Sunnah: Isnad/Sanad, Matn, Rawee and Riwayah, Al-jame', Al-Musnad, Al-Sahih, Al-Sunan, Sahihayn, Muttafaqun 'Alayh, Al-kutub As-Sittah…etc. (2) The classification of Hadith: (a) According to the reference to a particular authority (b) According to the links in the Isnad (c) According to the number of narrators involved in each stage of the Isnad (d) According to the reliability and memory of the narrator. (3) Fabrication in Hadith: (a) Definition of Fabrication (b) Causes and consequence of fabrication (c) Some examples of commonly used fabricated Hadith in our society.", lectures: 4, clo: "CLO5", section: "Final" }
    ],
    textBooks: [
      "Denffer, Ahmad, 'Ulum Al-Qur'an: An Introduction to the Sciences of the Qur'an, The Islamic Foundation, UK, reprinted by A.S. Noordeen, Kuala Lumpur, 1983.",
      "Ushama, Dr. Thameem, Sciences of the Qur'an: An Analytical Study, International Islamic University Malaysia, Cooperative Limited, Kuala Lumpur, 1998.",
      "Bucaille, Dr. Maurice, The Bible The Qur'an & Science, Thinkers Library, Selangor Darul Ehsan, Malaysia, 1996.",
      "Badruddin Muhammad bin Abdullah Al-Badruddin Al-Zarkashi, Al-Burhan Fi Ulumil Qur'an, Dar Al-Marifah, Bairuth, Vl. 01.",
      "A Study of the Holy Qur'an and its Teachings, First edition, IQRA International Education Foundation, Chicago, April-1999.",
      "Al-Azami, Dr Mohammad Mustafa, Studies in Early Hadith Literature, American Trust publication, Indiana, 1978.",
      "Hasan, Dr. Suhaib, An Introduction to the Science of Hadith, London, AL-Qur'an Society, 1994.",
      "Marhribi, Al-Hassan, Introduction to the Study of the Hadith, Roshmee, South Africa, Roshmee Islamic School, 1994.",
      "Salih, Muhammad Adeeb, Lamahat fee Usul al-Hadeth, Damascus, 1393 AH.",
      "Siddiqi, Muhammad Zubayr, Hadith Literature: its Origin, Development & Special Features, Cambridge, Islamic Texts Society, 1993."
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "3-2",
    code: "CCE-2301",
    title: "Data Structures and Algorithms",
    creditHours: 3,
    contactHours: "3 CH per Week",
    prerequisite: "CCE-1105",
    objectives: [
      "To assess how the choice of data structures and algorithm design methods impacts the performance of programs.",
      "To choose the appropriate data structure and algorithm design method for a specified application.",
      "To study the systematic way of solving problems, various methods of organizing large amounts of data.",
      "To solve problems using data structures such as linear lists, stacks, queues, hash tables, binary trees, heaps tournament trees, binary search trees, and graphs and writing programs for these solutions.",
      "To employ the different data structures to find the solutions for specific problems."
    ],
    outcomes: [
      { clo: "CLO: 1", description: "Identify various terminologies of data structures and algorithms.", plo: "PLO – 1", bloomsLevel: "Cognitive" },
      { clo: "CLO: 2", description: "Implement various data structures such as arrays, records, pointers, stacks, queues, recursions, linked lists, trees and graphs.", plo: "PLO – 2", bloomsLevel: "Cognitive" },
      { clo: "CLO: 3", description: "Analyze and compare various searching and sorting techniques.", plo: "PLO – 2", bloomsLevel: "Cognitive" }
    ],
    content: [
      { chapter: "Introduction", topic: "Introduction to the course, Basic Guidelines and advises for the course, Discussion about specifications of the course", lectures: 1, clo: "CLO-1", section: "Midterm" },
      { chapter: "Introduction", topic: "Introduction to data structure", lectures: 1, clo: "CLO-1", section: "Midterm" },
      { chapter: "Introduction", topic: "Uses, types and operations of data structures", lectures: 1, clo: "CLO-1", section: "Midterm" },
      { chapter: "Introduction", topic: "Introduction to Algorithms", lectures: 1, clo: "CLO-1", section: "Midterm" },
      { chapter: "Introduction", topic: "Complexity and Space-Time tradeoffs of Algorithms", lectures: 1, clo: "CLO-1", section: "Midterm" },
      { chapter: "Arrays, Records and Pointer", topic: "Introduction to Array", lectures: 1, clo: "CLO-2", section: "Midterm" },
      { chapter: "Arrays, Records and Pointer", topic: "Relationship of arrays and operation on arrays", lectures: 1, clo: "CLO-2", section: "Midterm" },
      { chapter: "Arrays, Records and Pointer", topic: "Multidimensional arrays and pointer arrays", lectures: 1, clo: "CLO-2", section: "Midterm" },
      { chapter: "Arrays, Records and Pointer", topic: "Record structures and representation of records", lectures: 1, clo: "CLO-2", section: "Midterm" },
      { chapter: "Arrays, Records and Pointer", topic: "Pointer and pointer arrays", lectures: 1, clo: "CLO-2", section: "Midterm" },
      { chapter: "Stacks, Queues and Recursion", topic: "Fundamentals of stacks, queues and recursion", lectures: 1, clo: "CLO-2", section: "Midterm" },
      { chapter: "Stacks, Queues and Recursion", topic: "Types and Operations on stacks, queues and recursion", lectures: 1, clo: "CLO-2", section: "Midterm" },
      { chapter: "Stacks, Queues and Recursion", topic: "Evaluation of expressions and Polish notation", lectures: 1, clo: "CLO-2", section: "Midterm" },
      { chapter: "Review", topic: "Review (on Midterm Syllabus)", lectures: 1, section: "Midterm" },
      { chapter: "Linked List", topic: "Linked lists and representation of linked list in memory", lectures: 1, clo: "CLO-2", section: "Final" },
      { chapter: "Linked List", topic: "Operation (Traversing & Searching) on linked lists and types (singly & doubly linked lists) of linked lists", lectures: 1, clo: "CLO-2", section: "Final" },
      { chapter: "Linked List", topic: "Dynamic storage management and Garbage collection", lectures: 1, clo: "CLO-2", section: "Final" },
      { chapter: "Trees and Graphs", topic: "Basic tree terminologies, Binary trees, Extended binary tree, Binary tree representation", lectures: 1, clo: "CLO-2", section: "Final" },
      { chapter: "Trees and Graphs", topic: "Tree traversal and Huffman codes/algorithm", lectures: 1, clo: "CLO-2", section: "Final" },
      { chapter: "Trees and Graphs", topic: "Graph terminologies, Graph representation, and Shortest path and transitive closure", lectures: 1, clo: "CLO-2", section: "Final" },
      { chapter: "Trees and Graphs", topic: "Traversing a graph", lectures: 1, clo: "CLO-2", section: "Final" },
      { chapter: "Sorting & Searching", topic: "Sorting, Insertion sort, Shell sort, Heap sort, Radix sort", lectures: 1, clo: "CLO-3", section: "Final" },
      { chapter: "Sorting & Searching", topic: "Bubble sort, Merge sort, Quick sort, Selection sort", lectures: 1, clo: "CLO-3", section: "Final" },
      { chapter: "Sorting & Searching", topic: "Searching, binary search", lectures: 1, clo: "CLO-3", section: "Final" },
      { chapter: "Symbol Tables", topic: "Static and dynamic tree tables", lectures: 1, clo: "CLO-3", section: "Final" },
      { chapter: "Symbol Tables", topic: "Hash Tables", lectures: 1, clo: "CLO-3", section: "Final" },
      { chapter: "Dynamic Programming", topic: "The general method, multistage graphs", lectures: 1, clo: "CLO-3", section: "Final" },
      { chapter: "Dynamic Programming", topic: "All pairs shortest paths, single source shortest paths problems", lectures: 1, clo: "CLO-3", section: "Final" },
      { chapter: "Review", topic: "Review (On Final Exam Syllabus)", lectures: 1, section: "Final" }
    ],
    textBooks: [
      "Ellis Horowitz, Sartaj Sahni & Dinesh Mehta, \"Fundamentals of Data Structures in C++\", W. H. Freeman, 1st Edition, 1995",
      "Ellis Horowitz & Sartaj Sahni, \"Fundamentals of Computer Algorithms\", Silicon Pr; 2nd Edition, 2007",
      "Seymour Lipschutz, \"Schaum's Outline of Theory and Problems of Data Structures\", McGraw-Hill, 1986",
      "Edward M. Reingold & Wilfred J. Hansen, \"Data Structures\", Addison Wesley Publishing Company, 1998",
      "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest & Clifford Stein, \"Introduction to Algorithms\", The MIT Press; 3rd Edition, 2009"
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "3-3",
    code: "CCE-2302",
    title: "Data Structures and Algorithms Sessional",
    creditHours: 1,
    contactHours: "2 CH per Week",
    prerequisite: "CCE-1106",
    objectives: [
      "To assess how the choice of data structures and algorithm design methods impacts the performance of programs.",
      "To choose the appropriate data structure and algorithm design method for a specified application.",
      "To study the systematic way of solving problems, various methods of organizing large amounts of data.",
      "To become proficient with computer skills (Code blocks) for the analysis algorithm."
    ],
    outcomes: [
      { clo: "CLO: 1", description: "Implement various data structures such as arrays, records, pointers, stacks, queues, recursions, linked lists, trees and graphs", plo: "PLO – 1", bloomsLevel: "Cognitive (Design and Creation)" },
      { clo: "CLO: 2", description: "Analyze and compare various searching and sorting techniques", plo: "PLO – 1", bloomsLevel: "Cognitive (Evaluation)" }
    ],
    content: [
      { chapter: "Lab", topic: "Write a program to calculate and display the value of CUBE", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Lab", topic: "Write an algorithm and program to find the maximum element of an array", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Lab", topic: "Write an algorithm and program to find the minimum element of an array", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Lab", topic: "Write an algorithm and a function-based C program that demonstrate the basic operations of Stack", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Lab", topic: "Write an algorithm and a function-based C program that demonstrate the basic operations of Queue", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Lab", topic: "Write a C program to demonstrate recursion using Fibonacci Series problem", lectures: 1, clo: "CLO – 1", section: "Final" },
      { chapter: "Lab", topic: "Write a C program to find factorial of a Number using Recursion", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Lab", topic: "Write a C program to demonstrate Linear Search", lectures: 2, clo: "CLO – 2", section: "Final" },
      { chapter: "Lab", topic: "Write a C program to demonstrate Binary Search", lectures: 2, clo: "CLO – 2", section: "Final" },
      { chapter: "Lab", topic: "Write a C program to demonstrate Bubble Sort", lectures: 2, clo: "CLO – 2", section: "Final" },
      { chapter: "Lab", topic: "Write a program to create a linked list of n elements and then delete an element in the list.", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Lab", topic: "Write a program to calculate and display the value of CUBE", lectures: 2, clo: "CLO – 2", section: "Final" },
      { chapter: "Lab", topic: "Write an algorithm and program to find the maximum element of an array", lectures: 2, clo: "CLO – 2", section: "Final" }
    ],
    textBooks: ["Lab Manual Prepared by course instructor."],
    assessment: { attendance: 10, classTest: 0, midterm: 0, final: 90 },
    deliveryMethods: ["Lecture", "White Board Writing", "Power point Presentation", "Practical Demonstration", "Data Collection", "Data Analysis", "Report Writing", "Q/A", "discussion"],
    assessmentTools: ["Class Attendance", "Assignment", "Lab Report", "Quizzes", "Lab Exams (Mid & Final)", "Viva"]
  },
  {
    id: "3-4",
    code: "CCE-2310",
    title: "Competitive Programming Sessional",
    creditHours: 1.5,
    contactHours: "3 CH per Week",
    prerequisite: "CCE-1106",
    objectives: [
      "Competitive programming is the course in which students will learn how to apply algorithms in order to solve complex problems. This course is designed to improve knowledge of algorithms and programming languages, and provide deep understanding of the problem solving. The course main aims are: Introduce the competitive programming; Cover in details the algorithms; Cover in details the data structure; Make students aware of approaches applied at the world competitions."
    ],
    outcomes: [
      { clo: "CLO: 1", description: "Choose and apply basic algorithms to solve complex problems", plo: "PLO – 1", bloomsLevel: "Cognitive (Understand)" },
      { clo: "CLO: 2", description: "Assess advantages and shortcomings of different data structures and algorithms.", plo: "PLO – 2", bloomsLevel: "Cognitive (Create & Analyze)" },
      { clo: "CLO: 3", description: "Write efficient, reliable and compact code", plo: "PLO – 3, 4 & 5", bloomsLevel: "Cognitive (Develop, Create & Analyze)" }
    ],
    content: [
      { chapter: "Content", topic: "Problem Solving", lectures: 1, clo: "CLO – 1, 2 & 3", section: "Final" },
      { chapter: "Content", topic: "Competitive Programming", clo: "CLO – 1, 2 & 3", section: "Final" },
      { chapter: "Content", topic: "Application of Data Structures", clo: "CLO – 1, 2 & 3", section: "Final" },
      { chapter: "Content", topic: "Strings and Competitive Programming", clo: "CLO – 1, 2 & 3", section: "Final" },
      { chapter: "Content", topic: "Application of Sorting Methods", clo: "CLO – 1, 2 & 3", section: "Final" },
      { chapter: "Content", topic: "Mathematical Libraries and Competitive Programming", clo: "CLO – 1, 2 & 3", section: "Final" },
      { chapter: "Content", topic: "Recursion and Induction Problems", clo: "CLO – 1, 2 & 3", section: "Final" },
      { chapter: "Content", topic: "TCS Code Vita", clo: "CLO – 1, 2 & 3", section: "Final" },
      { chapter: "Content", topic: "National / International Programming Competitions", clo: "CLO – 1, 2 & 3", section: "Final" }
    ],
    textBooks: ["Lab Manual Prepared by course instructor."],
    assessment: { attendance: 10, classTest: 0, midterm: 0, final: 90 },
    deliveryMethods: ["Lecture", "White Board Writing", "Power point Presentation", "Practical Demonstration", "Data Collection", "Data Analysis", "Report Writing", "Q/A", "discussion"],
    assessmentTools: ["Class Attendance", "Assignment", "Lab Report", "Quizzes", "Lab Exams (Mid & Final)", "Viva"]
  },
  {
    id: "3-5",
    code: "CCE-2305",
    title: "Signals and Linear Systems",
    creditHours: 3,
    contactHours: "3 CH per Week",
    prerequisite: "",
    objectives: [
      "This course is designed to provide the students with the knowledge of the properties, applications, and analysis of continuous and discrete time signals and systems. Our main focus will be linear time invariant (LTI) systems, their representations and their responses to different types of inputs including complex exponential and sinusoidal signals. Signal analysis will be established using Fourier series and Fourier transform. Then we will analyze continuous and discrete LTI systems using the Laplace and z-transforms, as well. Applications of these systems in communications, control, and signal processing will also be discussed."
    ],
    outcomes: [
      { clo: "CLO: 1", description: "Classify signals and systems based on their properties and determine the mathematical representations of signals and systems.", plo: "PLO – 1", bloomsLevel: "Cognitive (Understand)" },
      { clo: "CLO: 2", description: "Analysis of signals transformation and predict the behavior of Linear time invariant (LTI) systems.", plo: "PLO – 2", bloomsLevel: "Cognitive (Analysis, Identify)" }
    ],
    content: [
      { chapter: "Content", topic: "Introduction with signals: Definition of signals, mathematical & graphical representation of signals.", lectures: 1, clo: "CLO – 1", section: "Midterm" },
      { chapter: "Content", topic: "Classification of signals: continuous & discrete time, even & odd, periodic & non-periodic, deterministic & random, causal & non-causal, power & energy.", lectures: 3, clo: "CLO – 1", section: "Midterm" },
      { chapter: "Content", topic: "Basic Operation on signal: Amplitude scaling, addition, multiplication, differentiation, integration, time scaling, reflection, time shifting, combination of shifting and scaling.", lectures: 3, clo: "CLO – 1", section: "Midterm" },
      { chapter: "Content", topic: "Elementary signals: Exponential signal, sinusoidal signal, complex exponential signal", lectures: 1, clo: "CLO – 1", section: "Midterm" },
      { chapter: "Content", topic: "Step function, Impulse function, ramp function, representation of arbitrary signal by elementary signals.", lectures: 2, clo: "CLO – 1", section: "Midterm" },
      { chapter: "Content", topic: "Introduction with systems: Definition of system, system viewed as interconnection of operations, properties of the system: stability, memory, causality, time invariance, linearity.", lectures: 2, clo: "CLO – 1", section: "Midterm" },
      { chapter: "Content", topic: "Convolution of continuous time signals: response of LTI continuous time system using convolution, properties of convolution.", lectures: 1, clo: "CLO – 1", section: "Midterm" },
      { chapter: "Content", topic: "Class Test", lectures: 1, section: "Midterm" },
      { chapter: "Content", topic: "Convolution sum evaluation procedure, convolution Integral and convolution Integral evaluation procedure.", lectures: 2, clo: "CLO – 2", section: "Midterm" },
      { chapter: "Content", topic: "Interconnection of LTI systems: parallel connection & cascade connection, relation between LTI systems", lectures: 1, clo: "CLO – 1", section: "Final" },
      { chapter: "Content", topic: "LTI systems properties and impulse response, invertible systems, step response of the system.", lectures: 1, clo: "CLO – 1", section: "Final" },
      { chapter: "Content", topic: "Differential and Difference equation representations of LTI systems: Homogeneous solution, particular solution, complete solution", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Content", topic: "Characteristics of systems described by differential and difference equations: natural and forced response of the system, block diagram representation of the systems.", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Content", topic: "Problem Analysis on Differential and Difference equation representations of LTI systems.", lectures: 2, clo: "CLO – 2", section: "Final" },
      { chapter: "Content", topic: "Frequency response of LTI systems, Fourier series and Fourier transformation of continuous time signals.", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Content", topic: "Discrete time Fourier series and DTFT of discrete time signals.", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Content", topic: "Inverse Fourier series and inverse Fourier transformation of continuous and discrete time signals.", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Content", topic: "Problem Analysis on Discrete time Fourier series, DTFT of discrete time signals. Inverse Fourier series and inverse Fourier transformation of continuous and discrete time signals.", lectures: 2, clo: "CLO – 2", section: "Final" },
      { chapter: "Content", topic: "Class Test", lectures: 2, section: "Final" },
      { chapter: "Content", topic: "Properties of Fourier representations: Linearity and symmetry properties, convolution properties, differentiation and integral properties in time and frequency domain.", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Content", topic: "Time and frequency shifting properties, inverse Fourier transformation using partial fraction expansion, multiplication property, scaling property, duality.", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Content", topic: "Laplace transformation: Laplace transforms representation, convergence, the s-plane.", lectures: 1, clo: "CLO – 1", section: "Final" },
      { chapter: "Content", topic: "Problem Analysis on Laplace transformation.", lectures: 2, clo: "CLO – 2", section: "Final" },
      { chapter: "Content", topic: "Class Test", lectures: 3, section: "Final" },
      { chapter: "Content", topic: "The unilateral Laplace transformation, properties of unilateral Laplace transformation, initial and final value theorem, inversion of the unilateral Laplace transformation.", lectures: 2, clo: "CLO – 1", section: "Final" },
      { chapter: "Content", topic: "Solving differential equation with initial condition, properties of the bilateral Laplace transformation.", lectures: 2, clo: "CLO – 1", section: "Final" }
    ],
    textBooks: [
      "Simon Haykin and Barry Van Veen, \"Signals and Systems\", John Wiley & Sons, Pte. Ltd. 2005",
      "P. Lathi, \"Signal Processing & Linear Systems\", Oxford University Press, 1998.",
      "A NagoorKani, \"Signals and Systems\", McGraw-Hill Education, 2018.",
      "Alan V. Oppenheim and Alan S. Willsky, \"Signals and Systems\", Pearson Education Inc. 1997."
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "3-6",
    code: "CCE-2307",
    title: "Discrete Mathematics",
    creditHours: 2,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [
      "This is an introductory course in discrete mathematics. The goal of this course is to introduce students to ideas and techniques from discrete mathematics that are widely used in science and engineering. This course teaches the students techniques in how to think logically and mathematically and apply these techniques in solving problems. To achieve this goal, students will learn logic and proof, sets, functions, as well as algorithms and mathematical reasoning. Key topics involving relations, graphs, trees, and formal languages and computability are covered in this course."
    ],
    outcomes: [
      { clo: "CLO: 1", description: "Ability to apply mathematical logic to solve problems.", plo: "PLO – 1", bloomsLevel: "Knowledge, Understand" },
      { clo: "CLO: 2", description: "Understand sets, relations, functions and discrete structures.", plo: "PLO – 2", bloomsLevel: "Apply, Create" },
      { clo: "CLO: 3", description: "Able to use logical notations to define and reason about fundamental mathematical concepts such as sets relations and functions.", plo: "PLO – 3", bloomsLevel: "Evaluate" },
      { clo: "CLO: 4", description: "Able to model and solve real world problems using graphs and trees.", plo: "PLO – 6", bloomsLevel: "Analyze" }
    ],
    content: [
      { chapter: "Set", topic: "Set: Introduction to Set, Set operation, Representation of Sets, Algebraic Properties of Set, Computer representation of set.", lectures: 5, clo: "CLO – 1, 2, 3 & 4", section: "Midterm" },
      { chapter: "Logic", topic: "Logic: Introduction to Logic, Prepositional Calculus, propositional equivalences, Predicate and quantifier, Translating sentence into logical expressions.", lectures: 5, clo: "CLO – 1, 2, 3 & 4", section: "Midterm" },
      { chapter: "Function & Relation", topic: "Function & Relation: Introduction to function, Some important functions, Properties of function, Rate of Growth: Big O Notation, Sequence and summation. Introduction to Relation, Representation of Relation, Properties of Relation, Composition of Relation, Equivalence Relations, Partition, Closures of Relation.", lectures: 8, clo: "CLO – 1, 2, 3 & 4", section: "Midterm" },
      { chapter: "Number Theory", topic: "Number Theory: Theorem of Arithmetic, Modular Arithmetic, GCD, LCM, Prime Number, Congruence, Application of Congruence, Application of Number Theory, Chinese Remainder Theory.", lectures: 3, clo: "CLO – 1, 2, 3 & 4", section: "Final" },
      { chapter: "Mathematical reasoning", topic: "Mathematical reasoning: Methods of Proof, Mathematical Induction, Recursion.", lectures: 3, clo: "CLO – 1, 2, 3 & 4", section: "Final" },
      { chapter: "Counting", topic: "Counting: Basic Counting principle, Inclusion-Exclusion principle, Application of Sum rule and Product rule, Pigeon hole principle, Permutation and Combination, Binomial coefficients, Recurrence relations.", lectures: 6, clo: "CLO – 1, 2, 3 & 4", section: "Final" },
      { chapter: "Graph", topic: "Graph: Graph terminology, Representation of graph, Graph Isomorphism, Graph connectivity, Euler and Hamilton paths, Shortest Path Problems, Planner Graphs, Graph coloring.", lectures: 8, clo: "CLO – 1, 2, 3 & 4", section: "Final" },
      { chapter: "Tree", topic: "Tree: Definition of Trees, Application of trees, Tree Traversal, Trees and sorting, Spanning trees, Minimum spanning trees.", lectures: 7, clo: "CLO – 1, 2, 3 & 4", section: "Final" }
    ],
    textBooks: [
      "Kenneth H. Rosen: Discrete Mathematics and Its Applications, 7/e, McGraw-Hill, 2012.",
      "B. Kolman, R.C. Busby and S. Ross: Discrete Mathematical Structures, 3/e, Prentice-Hall, 1996.",
      "J. P. Tremblay and R. P. Manohar: Discrete Mathematical structures with applications to Computer Science, McGraw-Hill, 1975."
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "3-7",
    code: "MATH-2301",
    title: "Mathematics-III (Matrices, Linear System of Equations and Vector Analysis)",
    creditHours: 3,
    contactHours: "3 CH per Week",
    prerequisite: "MATH-1201",
    objectives: [
      "Present basic concepts of matrices and matrix algebra.",
      "Present methods of solving systems of linear equations.",
      "Present basic concepts of vector spaces.",
      "Present concepts of linear transformations.",
      "Present the concept of and methods of computing determinants.",
      "Present methods of computing and using eigenvalues and eigenvectors."
    ],
    outcomes: [
      { clo: "CLO: 1", description: "Demonstrate the basic idea of vector spaces, subspaces, Linear dependence and independence of vectors, Linear mappings, and Inner product spaces and be able to find the eigenvalues and eigenvectors of a square matrix using the characteristic polynomial and will know how to diagonalize a matrix. Applying these to solve the linear algebra in electric network.", plo: "PLO – 1", bloomsLevel: "Cognitive" },
      { clo: "CLO: 2", description: "Get the basic understanding about scalar and vectors, dot product, cross product derivative of vectors, vector integration. Analyze complex engineering problems be able to know gradient, divergence, curl and their physical significance and to learn the Greens, Gauss & Stocks theorem and their applications and be familiar with vector components in spherical and cylindrical systems.", plo: "PLO – 2", bloomsLevel: "Cognitive" }
    ],
    content: [
      { chapter: "Content", topic: "Matrix and Linear System of Equations: Vector presentation by matrix, different types of matrices, algebraic operations on matrices, adjoint and inverse of a matrix, augmented matrix, row operation method, rank of Matrices, some problems, Orthogonality, Echelon form, consistency and inconsistency, solution of homogeneous and non-homogeneous linear system of equations.", lectures: 5, clo: "CLO – 1 & 2", section: "Midterm" },
      { chapter: "Content", topic: "Characteristic equation and Diagonalization: Eigen values and eigenvectors, characteristic polynomial, Caley-Himilton theorem, Diagonalization of matrices and symmetric matrices, Characteristics roots.", lectures: 5, clo: "CLO – 1 & 2", section: "Midterm" },
      { chapter: "Content", topic: "Review of the Previous Lectures, Class Test-01 (Based on Mid-Term Syllabus), Solve Class.", lectures: 2, section: "Midterm" },
      { chapter: "Content", topic: "Vector Spaces and Subspaces: Definition of vector spaces, subspaces, basic theorem, Linear combinations of vectors, spanning set, Linear dependence and independence of vectors.", lectures: 5, clo: "CLO – 1", section: "Final" },
      { chapter: "Content", topic: "Basis and Dimension and Linear Mappings: Basis and Dimensions of Vector spaces, Sums and Direct sums of subspaces. Mappings, Linear mappings, Kernel and image of a linear mapping, Singular and nonsingular mappings, Linear mapping and systems of linear equations.", lectures: 7, clo: "CLO – 1 & 2", section: "Final" },
      { chapter: "Content", topic: "Inner Product Spaces: Inner product spaces, Cauchy-Schwarz inequality, Orthonormal sets, Gram-Schmidt orthogonalization process, and Application of Linear algebra in electric network.", lectures: 6, clo: "CLO – 1 & 2", section: "Final" },
      { chapter: "Content", topic: "Vector analysis: Scalar and vectors, operation of vectors, vector addition and multiplication - their applications. Normal Vector, Ortho normal Vectors, Scalar Field, Vector Field, Dot Product, Cross product, Triple Product, Derivative of vectors and problems.", lectures: 5, clo: "CLO – 1 & 2", section: "Final" },
      { chapter: "Content", topic: "Del operator and Vector Integration: Del operator, gradient, divergence and curl and their physical significance, Line Integrals, physical significance of Vector integration and Problems.", lectures: 5, clo: "CLO – 1 & 2", section: "Final" },
      { chapter: "Content", topic: "Vector's Theorem: Greens, Gauss & Stocks theorem and their applications, Vector components in spherical and cylindrical systems.", lectures: 3, clo: "CLO – 1 & 2", section: "Final" },
      { chapter: "Content", topic: "Review of the Previous Lectures", lectures: 2, section: "Final" }
    ],
    textBooks: [
      "Richard Bronson & Gabriel B. Costa, \"Linear Algebra\", Academic Press, 2nd Edition, 2007",
      "HK Dass, \"Advanced Engineering Mathematics\", S Chand, Reprint Edn. 2006 edition",
      "Seymour Lipschutz & Marc Lipson, \"Linear Algebra: Seymour Lipschutz\", McGraw Hill Education, 2018",
      "Murray Spiegel, Seymour Lipschutz & Spellman, \"Vector Analysis\", McGraw-Hill Education, 2nd Edition, 2009"
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "3-8",
    code: "CHEM-2301",
    title: "Chemistry",
    creditHours: 3,
    contactHours: "3 CH per Week",
    prerequisite: "",
    objectives: [
      "To classify elements/matter by its state and bonding behavior using the Periodic Table as reference.",
      "To make predictions about the atomic structure and chemical properties of the elements based on their position in the periodic table.",
      "To identify the patterns in bonding, molecular geometry, and chemical reactions.",
      "To understand the principles of kinetics and thermodynamics and equilibrium positions of chemical reactions.",
      "To explain the physical properties of solids, liquids, gases, and solutions."
    ],
    outcomes: [
      { clo: "CLO: 1", description: "Understand the chemical behavior and physical properties of elements.", plo: "PLO – 1", bloomsLevel: "Cognitive/Understanding" },
      { clo: "CLO: 2", description: "Develop the knowledge on chemical reaction and solution, metallic and nonmetallic substance and its environmental aspect and impacts.", plo: "PLO – 7", bloomsLevel: "Cognitive/Understanding" },
      { clo: "CLO: 3", description: "Understand the chemical reaction and bonding and its influence in day-to-day life.", plo: "PLO – 12", bloomsLevel: "Cognitive/Understanding" }
    ],
    content: [
      { chapter: "Periodic Classification of Elements", topic: "Modern periodic table, Periodic law, Periodic system, Correlation of atomic structure with periodic properties of elements, Ionization potential, Electron affinity, Electronegativity, Atomic and ionic radii, Properties of oxides", lectures: 6, clo: "CLO – 1", section: "Midterm" },
      { chapter: "Electronic Theory of Elements", topic: "Different types of bonds, Ionic, covalent, co-ordinate and hybridization of atomic orbitals, bonding in simple molecules, Elementary idea about MOT", lectures: 6, clo: "CLO – 2", section: "Midterm" },
      { chapter: "Class Test", topic: "Class test", clo: "CLO – 1 & CLO – 2", section: "Midterm" },
      { chapter: "Transition, Lanthanides and Actinides Elements", topic: "Definitions, Electronic configurations, general properties, Review class and Discussion", lectures: 7, clo: "CLO – 2", section: "Midterm" },
      { chapter: "Electrochemistry", topic: "Electrolytic dissociation, Theory of electrolytic conductance, Ionic mobility and transference number, Simple ideas about electrode potential and reversible cells", lectures: 4, clo: "CLO – 3", section: "Final" },
      { chapter: "Types and properties of solutions", topic: "Units of concentration, ideal and real solutions, Henry's Law, Distribution of solids between two immiscible liquids, Distribution law, Partition coefficient and solvent extraction, Properties of dilute solutions", lectures: 5, clo: "CLO – 2", section: "Final" },
      { chapter: "Chemical Equilibrium", topic: "Law of mass action, Determination of equilibrium constant, heterogeneous and homogeneous equilibrium, Le Chateilar principle and Van Hoff equation, Class test", lectures: 4, clo: "CLO – 3", section: "Final" },
      { chapter: "Chemical Kinetics", topic: "Order and molecularity kinetics of first and second order reaction, Determination of order of reactions, Arrhenius equation and energy of activation", lectures: 4, clo: "CLO – 2", section: "Final" },
      { chapter: "Surface Chemistry and Colloids", topic: "Adsorption, Langmuir and Gibbs adsorption isotherm, Colloids, Definitions of terms, Electrodialysis, Classification & Preparation and properties of colloids, Elementary idea about emulsions and gels, Importance of colloids", lectures: 4, clo: "CLO – 1 & CLO – 3", section: "Final" }
    ],
    textBooks: [
      "R D Madan & Satya Prakash, \"Modern Inorganic Chemistry\", S. Chand Publishing, 4/e, 1987",
      "M.M. Haque and M.A. Nawab, \"Principles of Physical Chemistry\", Nawab Publications, 2005"
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "3-9",
    code: "CHEM-2302",
    title: "Chemistry Sessional",
    creditHours: 1,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [
      "Compare and contrast the chemical behaviour and physical properties of common substances.",
      "Demonstrate effective laboratory procedures such as transfer of solids, weighing of solids, pouring of liquids, measurement of liquid volume.",
      "Demonstrate the careful recording of observations and data in the laboratory.",
      "Calculate the molarity, normality and molality of solutions.",
      "Solve quantitative problems (stoichiometric) involving chemical formulas and equations.",
      "Record, graph, chart and interpret data obtained from experimentation.",
      "Summarize the results of experimental observations and data."
    ],
    outcomes: [
      { clo: "CLO: 1", description: "To develop the knowledge on determination and standardization of different chemical solution.", plo: "PLO – 1", bloomsLevel: "Cognitive (Understanding)" },
      { clo: "CLO: 2", description: "To conduct the experiment and analyze data properly.", plo: "PLO – 4", bloomsLevel: "Cognitive (Understanding)" }
    ],
    content: [
      { chapter: "Experiment No: 1", topic: "Introduction to chemistry laboratory use of equipment's: Molarity, Normality, Primary, Secondary standard solutions, Volumetric titrations, Quantitative analysis, Quantitative analysis errors etc.", lectures: 3, clo: "CLO 1", section: "Final" },
      { chapter: "Experiment No: 2", topic: "Acidimetri-Alkalimetri: Determination of the strength and amount of hydrochloric acid.", section: "Final" },
      { chapter: "Experiment No: 3", topic: "Preparation of sodium oxalate solution and standardization of potassium permanganate solution.", lectures: 1, clo: "CLO 2", section: "Final" },
      { chapter: "Experiment No: 4", topic: "Determination of Ferrous ion (Fe2+) with standard potassium permanganate solution.", clo: "CLO 2", section: "Final" },
      { chapter: "Experiment No: 5", topic: "Preparation of standard potassium dichromate solution and standardization of sodium thiosulphate solution.", section: "Final" },
      { chapter: "Experiment No: 6", topic: "Determination of copper by iodometric ally with standard sodium thiosulphate solution.", lectures: 1, section: "Final" },
      { chapter: "Experiment No: 7", topic: "Determination of calcium in calcium carbonate.", section: "Final" },
      { chapter: "Experiment No: 8", topic: "Conductometric titration of strong acid with strong base.", section: "Final" },
      { chapter: "Experiment No: 9", topic: "Conductometric titration of weak acid with strong base.", section: "Final" },
      { chapter: "Experiment No: 10", topic: "Determination of PH of a solution: PH metric titration of a strong acid with strong base.", section: "Final" }
    ],
    textBooks: [
      "R D Madan & Satya Prakash, \"Modern Inorganic Chemistry\", S. Chand Publishing, 4/e, 1987",
      "M.M. Haque and M.A. Nawab, \"Principles of Physical Chemistry\", Nawab Publications, 2005"
    ],
    assessment: { attendance: 10, classTest: 0, midterm: 0, final: 90 },
    deliveryMethods: ["Lecture", "White Board Writing", "Power point Presentation", "Practical Demonstration", "Data Collection", "Data Analysis", "Report Writing", "Q/A", "discussion"],
    assessmentTools: ["Class Attendance", "Assignment", "Lab Report", "Quizzes", "Lab Exams (Mid & Final)", "Viva"]
  }
];
