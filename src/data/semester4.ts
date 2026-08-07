import { Course } from "./types";

export const semester4Courses: Course[] = [
  {
    id: "4-1",
    code: "GEBL-2401",
    title: "Bangla Language & Literature",
    creditHours: 2,
    contactHours: "2 Contact Hours per Week",
    prerequisite: "",
    objectives: [
      "Mother language is an essential accompaniment of human life. Bangla is our mother language and the state language of independent, sovereign Bangladesh achieved through the great Liberation War. To develop students' linguistic and creative skills, this course has been made timely and balanced by combining the origin and development of the Bangla language, notable practical topics of grammar, and some notable literary works of prominent litterateurs in various forms of Bangla literature."
    ],
    outcomes: [
      { clo: "CLO1", description: "Students will be able to gain flawless linguistic proficiency in conversation through the study of language and rules.", plo: "PLO10", bloomsLevel: "Cognitive/Understand" },
      { clo: "CLO2", description: "Students will be capable of building a competent, career-oriented personality with effective communication skills appropriate for a competitive work environment by acquiring the techniques of preparing reports and speeches.", plo: "PLO10", bloomsLevel: "Cognitive/Understand" },
      { clo: "CLO3", description: "Students' creativity will be developed through skills related to story reading and story writing.", plo: "PLO10", bloomsLevel: "Cognitive/Apply" },
      { clo: "CLO4", description: "The ability to understand the form of the various forms of literature (poetry, short story, essay, drama) in the context of notable literary works of Bangla literature will build students' capacity to know about social systems and resolve conflicts appropriately.", plo: "PLO10", bloomsLevel: "Cognitive/Apply" },
      { clo: "CLO5", description: "Through reading non-communal, Bangla culture, and Liberation War-conscious, rich and life-oriented stories and poems, students will be able to acquire liberal aesthetic human values.", plo: "PLO8", bloomsLevel: "Cognitive/Understand" },
      { clo: "CLO6", description: "Brief discussion on national, international, and historical topics will create a positive attitude towards Bangla folk culture and art-literature.", plo: "PLO10", bloomsLevel: "Cognitive/Evaluate" }
    ],
    content: [
      { chapter: "Language and Grammar", topic: "Origin and development of the Bangla language", lectures: 12, section: "Midterm", clo: "CLO1" },
      { chapter: "Language and Grammar", topic: "Bangla alphabets and phonetics", section: "Midterm", clo: "CLO2" },
      { chapter: "Language and Grammar", topic: "Report and speech writing", section: "Midterm", clo: "CLO4" },
      { chapter: "Bangla Literature", topic: "Short Stories: (a) Postmaster (Rabindranath Tagore); (b) Puinmacha (Bibhutibhushan Bandyopadhyay); (c) Noyontara (Syed Waliullah)", lectures: 10, section: "Midterm", clo: "CLO5" },
      { chapter: "Chapter 1: Spelling", topic: "Origin and development of the Bangla language; Bangla alphabets and phonetics; rules of Bangla spelling; punctuation marks", lectures: 4, section: "Midterm", clo: "CLO1" },
      { chapter: "Chapter 2: Writing", topic: "Translation/short story writing; report and speech writing; letter writing; brief discussion", lectures: 4, section: "Midterm", clo: "CLO1" },
      { chapter: "Chapter 3: Poetry", topic: "(a) Sotobhasha (Michael Madhusudan Dutta); (b) Aaj Srishti Sukher Ullashe (Kazi Nazrul Islam); (c) Tomake Pabar Jonyo Hey Swadhinota (Shamsur Rahman)", lectures: 4, section: "Midterm", clo: "CLO4" },
      { chapter: "Language and Grammar (Final)", topic: "Rules of Bangla spelling; punctuation marks; translation/short story writing; letter writing; brief discussion (Ekushey February; Liberation War; Bangla folk culture; humanity and secularism; modern information technology)", lectures: 18, section: "Final", clo: "CLO3" },
      { chapter: "Bangla Literature (Final)", topic: "Bangla Literature overview", lectures: 20, section: "Final", clo: "CLO4" },
      { chapter: "Chapter 4: Poetry, Essay, Drama and Short Story", topic: "Poetry: (a) Sotobhasha (Michael Madhusudan Dutta); (b) Aaj Srishti Sukher Ullashe (Kazi Nazrul Islam); (c) Tomake Pabar Jonyo Hey Swadhinota (Shamsur Rahman). Essay: (a) Sabhyatar Sonkot (Rabindranath Tagore); (b) Jouban Bidae Rashtrachinta (Pramatha Chowdhury). Drama: Kobor (Munier Chowdhury). Short Story: (a) Postmaster (Rabindranath Tagore); (b) Puinmacha (Bibhutibhushan Bandyopadhyay); (c) Noyontara (Syed Waliullah)", lectures: 6, section: "Final", clo: "CLO5" },
      { chapter: "Chapter 5: Essay", topic: "(a) Sabhyatar Sonkot (Rabindranath Tagore); (b) Jouban Bidae Rashtrachinta (Pramatha Chowdhury)", lectures: 6, section: "Final", clo: "CLO4" },
      { chapter: "Chapter 6: Drama", topic: "Kobor (Munier Chowdhury)", lectures: 6, section: "Final", clo: "CLO4" }
    ],
    textBooks: [
      "Bangla Bhasha O Sahitya (Rafiqul Islam and Soumitra Shekhar)"
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/ Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "4-2",
    code: "CCE-2401",
    title: "Numerical Methods",
    creditHours: 2,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [
      "This course is intended as an introduction to techniques for carrying out numerical computation on computers, historically one of the fundamental disciplines of computer science. It may be considered to be a preparatory course for a course in numerical analysis. Numerical methods, based upon sound computational mathematics, are the basic algorithms underpinning computer predictions in modern systems science. Such methods include techniques for simple optimization, interpolation from the known to the unknown, linear algebra underlying systems of equations, ordinary differential equations to simulate systems, and stochastic simulation under random influences."
    ],
    outcomes: [
      { clo: "CLO1", description: "Demonstrate understanding of common numerical methods and how they are used to obtain approximate solutions.", plo: "PLO – 1", bloomsLevel: "Cognitive (Understand)" },
      { clo: "CLO2", description: "Apply numerical methods to obtain approximate solutions to mathematical problems.", plo: "PLO – 2", bloomsLevel: "Cognitive (Evaluate)" }
    ],
    content: [
      { chapter: "Errors in Numerical Calculations", topic: "Significant figure, rounding off numbers, Error in Numerical Calculation", lectures: 3, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "Roots of Nonlinear Equation", topic: "Solution of Algebraic and Transcendental Equation", lectures: 2, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "Interpolation", topic: "Interpolation with equal and unequal intervals - Missing values", lectures: 1, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "Interpolation", topic: "Newton's binomial expansion formula, Newton's forward and backward interpolation formula", lectures: 2, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "Interpolation", topic: "Central difference interpolation formulae, inverse interpolation", lectures: 1, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "Numerical Differentiation", topic: "Derivates using Newton's forward backward and Starlings' formula", lectures: 1, section: "Final", clo: "CLO – 1 & 2" },
      { chapter: "Numerical Integration", topic: "General quadrature formula for equidistant ordinates", lectures: 1, section: "Final", clo: "CLO – 1 & 2" },
      { chapter: "Numerical Integration", topic: "Trapezoidal rule, Simpson's one-third rule, Simpson's three-eight rules, Weddle's rule", lectures: 3, section: "Final", clo: "CLO – 1 & 2" },
      { chapter: "Numerical solution of ordinary differential equations", topic: "Taylor's series method, Euler's method", lectures: 1, section: "Final", clo: "CLO – 1 & 2" },
      { chapter: "Numerical solution of ordinary differential equations", topic: "Adams Back forth Moulton method, Runge-Kutta method", lectures: 3, section: "Final", clo: "CLO – 1 & 2" },
      { chapter: "Solution of linear equations", topic: "Gauss-elimination method, Iteration methods", lectures: 1, section: "Final", clo: "CLO – 1 & 2" },
      { chapter: "Solution of linear equations", topic: "Gauss-Seidel method, Gauss-Jordan method", lectures: 1, section: "Final", clo: "CLO – 1 & 2" },
      { chapter: "Curve Fitting", topic: "Objective of fitting a curve, fitting a straight line, fitting a parabola", lectures: 1, section: "Final", clo: "CLO – 1 & 2" }
    ],
    textBooks: [
      "S.S Sastry, \"Introductory Methods of Numerical Analysis\", Prentice-Hall of India, New Delhi, 7th ed. 2005.",
      "Richard L. Burden, J. Douglas Faires, \"Numerical analysis, Boston: Prindle\", Weber & Schmidt, 3rd ed. 1985.",
      "Cheney W., Kincaid D., \"Numerical Mathematics & Computing\", Brooks/Cole, 5th Edition, 2004"
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/ Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "4-3",
    code: "CCE-2406",
    title: "Python Programming Sessional",
    creditHours: 1.5,
    contactHours: "3 CH per Week",
    prerequisite: "CCE-1208",
    objectives: [
      "Interpret the use of procedural statements like assignments, conditional statements, loops and function calls.",
      "Infer the supported data structures like lists, dictionaries and tuples in Python.",
      "Illustrate the application of matrices and regular expressions in building the Python programs.",
      "Discover the use of external modules in creating excel files and navigating the file systems.",
      "Describe the need for Object-oriented programming concepts in Python."
    ],
    outcomes: [
      { clo: "CLO1", description: "Describe the Python language syntax including control statements, loops and functions to write programs for a wide variety problem in mathematics, science, and games.", plo: "PLO – 1", bloomsLevel: "Cognitive (Design and Creation)" },
      { clo: "CLO2", description: "Examine the core data structures like lists, dictionaries, tuples and sets in Python to store, process and sort the data.", plo: "PLO – 2", bloomsLevel: "Cognitive (Evaluation)" },
      { clo: "CLO3", description: "Interpret the concepts of Object-oriented programming as used in Python using encapsulation, polymorphism and inheritance.", plo: "PLO – 3", bloomsLevel: "Cognitive (Understand & Evaluation)" },
      { clo: "CLO4", description: "Discover the capabilities of Python regular expression for data verification and utilize matrices for building performance efficient Python programs.", plo: "PLO – 5", bloomsLevel: "Cognitive (Understand & Evaluation)" },
      { clo: "CLO5", description: "Identify the external modules for creating and writing data to excel files and inspect the file operations to navigate the file systems.", plo: "PLO – 9", bloomsLevel: "Cognitive (Understand & Evaluation)" }
    ],
    content: [
      { chapter: "Experiment No – 1", topic: "a. Write a Python program to print all the Disarium numbers between 1 and 100. b. Write a Python program to encrypt the text using Caesar Cipher technique. Display the encrypted text. Prompt the user for input and the shift.", lectures: 4, section: "Final", clo: "CLO – 1 to 5" },
      { chapter: "Experiment No – 2", topic: "Devise a Python program to implement the Rock-Paper-Scissor game.", lectures: 2, section: "Final", clo: "CLO – 1 to 5" },
      { chapter: "Experiment No – 3", topic: "Write a Python program to perform Jump Search for a given key and report success or failure. Prompt the user to enter the key and a list of numbers.", lectures: 3, section: "Final", clo: "CLO – 1 to 5" },
      { chapter: "Experiment No – 4", topic: "The celebrity problem is the problem of finding the celebrity among n people. A celebrity is someone who does not know anyone (including themselves) but is known by everyone.", lectures: 3, section: "Final", clo: "CLO – 1 to 5" },
      { chapter: "Experiment No – 5", topic: "Write a Python program to solve the celebrity problem.", lectures: 2, section: "Final", clo: "CLO – 1 to 5" },
      { chapter: "Experiment No – 6", topic: "Write a Python program to construct a linked list. Prompt the user for input. Remove any duplicate numbers from the linked list.", lectures: 2, section: "Final", clo: "CLO – 1 to 5" },
      { chapter: "Experiment No – 7", topic: "Perform the following file operations using Python: a. Traverse a path and display all the files and subdirectories in each level till the deepest level for a given path. Also, display the total number of files and subdirectories. b. Read a file content and copy only the contents at odd lines into a new file.", lectures: 4, section: "Final", clo: "CLO – 1 to 5" },
      { chapter: "Experiment No – 8", topic: "Create a menu drive Python program with a dictionary for words and their meanings. Write functions to add a new entry (word: meaning), search for a particular word and retrieve meaning, given meaning find words with the same meaning, remove an entry, display all words sorted alphabetically.", lectures: 4, section: "Final", clo: "CLO – 1 to 5" }
    ],
    textBooks: [
      "Lab Manual Prepared by course instructor.",
      "Lewis Taylor and Eric Matthews, \"Python Crash Course: A Hands-On, Project-Based Introduction to Programming\", Independently published (September 9, 2019)",
      "Chris Meyers Allen Downey, Jeffrey Elkner, \"Learning with Python 1st Edition\", Dreamtech Press; 1st edition (October 14, 2015)"
    ],
    assessment: { attendance: 10, classTest: 0, midterm: 40, final: 60 },
    deliveryMethods: ["Lecture", "White Board Writing", "Power point Presentation", "Practical Demonstration", "Data Collection", "Data Analysis", "Report Writing", "Q/A", "discussion"],
    assessmentTools: ["Class Attendance", "Assignment", "Lab Report", "Quizzes", "Lab Exams (Mid & Final)", "Viva"]
  },
  {
    id: "4-4",
    code: "CCE-2407",
    title: "Basic Communication Engineering",
    creditHours: 3,
    contactHours: "3 CH per Week",
    prerequisite: "CCE-1209",
    objectives: [
      "Analog Communication is a foundational course for those majoring in the communication option in second year. This course introduces/analyze students to: (i) the essential approaches, fundamental concepts and design issues in communication engineering. The course emphasizes the understanding of engineering principles. Mathematics is used only at a level that is absolutely necessary; (ii) basic concepts of modulation and demodulation techniques including amplitude modulation (AM), frequency modulation (FM) and phase modulation (PM) that are widely used in analogue communication systems, and basic techniques for analyzing such systems in the time and frequency domains; (iii) basic idea about classification of noise; (iv) fundamental ideas about Television (TV) and basic techniques for analyzing the fundamentals TV receiver."
    ],
    outcomes: [
      { clo: "CLO1", description: "Understand the theoretical concept, generation of Amplitude modulation, Angle modulation, AM Transmitter and Receiver, FM Transmitter and Receiver, TV Transmitter and Receiver.", plo: "PLO – 1", bloomsLevel: "Cognitive (Understand)" },
      { clo: "CLO2", description: "Analyze and identify the effect of DSB-SC, SSB, VSB, FM and PM in terms of modulation index and bandwidth efficiency.", plo: "PLO – 2", bloomsLevel: "Cognitive (Analysis, Identify)" },
      { clo: "CLO3", description: "Estimate the noise performance AM and FM signals.", plo: "PLO – 2", bloomsLevel: "Cognitive (Evaluate)" }
    ],
    content: [
      { chapter: "Introduction", topic: "Introduction to the course, Basic Guidelines and advises for the course, Discussion about specifications of the course", lectures: 1, section: "Midterm" },
      { chapter: "Basic Concept", topic: "Basic communication system, Modulation, Demodulation, Importance, Types of modulation, Standard classification of RF spectrum", lectures: 2, section: "Midterm", clo: "CLO – 1" },
      { chapter: "AM Modulation", topic: "AM Theory, Power & Current of AM, Modulation index, Transmission efficiency, Square & Switching Modulation and Demodulation", lectures: 4, section: "Midterm", clo: "CLO – 1" },
      { chapter: "AM Modulation", topic: "DSB-SC, Balance & Ring Modulation, Coherent Detection", lectures: 3, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "AM Modulation", topic: "SSB Modulation - Filter method, Phase shift method, Third method, VSB Modulation Process and Applications", lectures: 3, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "AM Modulation", topic: "Mathematical Problem Analysis of AM, DSB-SC & VSB", lectures: 0, section: "Midterm", clo: "CLO – 2" },
      { chapter: "Angle Modulation", topic: "Generation of FM wave, Theory of FM & PM, Frequency deviation, Relation between FM & PM", lectures: 3, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "Angle Modulation", topic: "Narrowband FM, Wideband FM, FM generation, Pre-emphasis and De-emphasis circuit", lectures: 3, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "Angle Modulation", topic: "Mathematical Problem Analysis of FM & PM", lectures: 0, section: "Midterm", clo: "CLO – 2" },
      { chapter: "AM Transmitter", topic: "Classifications, Master oscillator, Harmonic Generators", lectures: 1, section: "Final", clo: "CLO – 1" },
      { chapter: "SSB Transmitter", topic: "SSB Transmitter, Radio Telegraphy Transmitter, Frequency Shift Keying Transmitter", lectures: 1, section: "Final", clo: "CLO – 1" },
      { chapter: "FM Transmitter", topic: "Reactance modulator, Frequency Drift", lectures: 1, section: "Final", clo: "CLO – 1" },
      { chapter: "FM Transmitter", topic: "Frequency Mixing, Armstrong FM Transmitter", lectures: 1, section: "Final", clo: "CLO – 1" },
      { chapter: "AM Receiver", topic: "Classification, TRF receivers, Super heterodyne receiver, RF amplifier, Sensitivity, Selectivity & Fidelity of Receiver", lectures: 2, section: "Final", clo: "CLO – 1" },
      { chapter: "AM Receiver", topic: "Frequency Mixers, IF amplifier, Noise limiter, Spurious response in radio receivers", lectures: 2, section: "Final", clo: "CLO – 1" },
      { chapter: "FM Receiver", topic: "Amplitude limiter, FM receiver - AGC & AFC, Slope detector", lectures: 2, section: "Final", clo: "CLO – 1" },
      { chapter: "FM Receiver", topic: "Balance slope detector, Center-tuned discriminator/ Foster-seeley discriminator, Ratio detector, PLL", lectures: 2, section: "Final", clo: "CLO – 1" },
      { chapter: "Noise", topic: "Classification, Noise in receiver, AWGN, SNR, Analysis of noise effects on baseband systems, Effect of noise - AM, DSB-SC, SSB and FM", lectures: 2, section: "Final", clo: "CLO – 1 & 3" },
      { chapter: "Noise", topic: "Effect of noise - AM, DSB-SC, SSB and FM", lectures: 1, section: "Final", clo: "CLO – 3" },
      { chapter: "Noise", topic: "Mathematical Problem Analysis of Noise, AWGN, SNR etc.", lectures: 0, section: "Final", clo: "CLO – 3" },
      { chapter: "Fundamentals of Television", topic: "Block diagram of monochromic TV, Aspect ratio, Horizontal & vertical scanning, Standard scanning pattern", lectures: 2, section: "Final", clo: "CLO – 1" },
      { chapter: "Fundamentals of Television", topic: "Flickers, Composite video signal, Picture tube, Synchronization, Blanking pulses", lectures: 2, section: "Final", clo: "CLO – 1" },
      { chapter: "Fundamentals of Television", topic: "Different TV system, Vestigial sideband transmission, TV channel for broadcast", lectures: 1, section: "Final", clo: "CLO – 1" },
      { chapter: "TV Receiver", topic: "Types, Basic principle of TV receiver", lectures: 1, section: "Final", clo: "CLO – 1" },
      { chapter: "TV Receiver", topic: "Picture tubes, Deflection circuit, High voltage power supply", lectures: 2, section: "Final", clo: "CLO – 1" }
    ],
    textBooks: [
      "Kennedy & Davis, \"Electronic Communication Systems\", Tata McGraw-Hill, Delhi, 4th ed. 1999",
      "G. K. Mithal, \"Radio Engineering\", Delhi: Khanna, 13th ed. 1988",
      "Gulati, \"Monochrome and Color TV\", New age international, Delhi, 2nd ed. 2005",
      "B. P. Lathi, \"Modern digital and analog communication system\", Oxford University Press Inc., 2nd ed. New York, USA, 1995."
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/ Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "4-5",
    code: "CCE-2408",
    title: "Basic Communication Engineering Sessional",
    creditHours: 1.5,
    contactHours: "3 CH per Week",
    prerequisite: "CCE-1210",
    objectives: [
      "The aim of this course is to introduce the students to the basic concepts of communication systems. The main objective of this course is to understand and implement the basic analog communication techniques/circuits also basic function of radio and television with the help of theoretical and practical problem solving. Through lecture, laboratory, and out-of-class assignments, students are provided learning experiences that enable them to Analyze and design basic electronic circuits, to carry out AM and FM modulation, radio and television broadcasting systems experiments using discrete electronic components and become proficient with computer skills (MATLAB) for the analysis and design of circuits."
    ],
    outcomes: [
      { clo: "CLO1", description: "To provide hands-on experience to the students, so that they are able to apply theoretical concepts in practice.", plo: "PLO – 1", bloomsLevel: "Cognitive (Understanding)" },
      { clo: "CLO2", description: "Investigate the performance, effect of modulation and demodulation process such as AM, DSB-SC, SSB, FM also Radio, TV Transmitter and Receiver System using Hardware Tools.", plo: "PLO – 2", bloomsLevel: "Cognitive (Applying)" },
      { clo: "CLO3", description: "To write and Execute Programs in MATLAB to Simulate Various Modulation and Demodulation Techniques.", plo: "PLO – 3", bloomsLevel: "Psychomotor (Complex Overt Response)" }
    ],
    content: [
      { chapter: "Introduction", topic: "Introduction to the course, Basic Guidelines and advises for the course, Discussion about laboratory safety and Training Requirements on working in the LAB.", lectures: 3, section: "Final", clo: "CLO – 1" },
      { chapter: "Experiment", topic: "Amplitude Modulation and Demodulation to calculation of modulation index with spectrum to variable's value changing using Hardware", lectures: 3, section: "Final", clo: "CLO – 1, 2" },
      { chapter: "Experiment", topic: "Amplitude Modulation and Demodulation to calculation of modulation index with spectrum to variable's value changing using Software.", lectures: 3, section: "Final", clo: "CLO – 1, 2 & 3" },
      { chapter: "Experiment", topic: "DSB-SC Modulation and Demodulation using Hardware", lectures: 3, section: "Final", clo: "CLO – 1, 2" },
      { chapter: "Experiment", topic: "DSB-SC Modulation and Demodulation using Software.", lectures: 3, section: "Final", clo: "CLO – 1, 2 & 3" },
      { chapter: "Experiment", topic: "SSB Modulation and Demodulation using Hardware.", lectures: 3, section: "Final", clo: "CLO – 1, 2" },
      { chapter: "Experiment", topic: "AM Transmitter and Receiver using Hardware Tools.", lectures: 3, section: "Final", clo: "CLO – 1, 2" },
      { chapter: "Experiment", topic: "Study on Basic Construction on Cathode Ray Tube (CRT) and Observation Circuit Diagram of TV", lectures: 3, section: "Final", clo: "CLO – 1, 2" }
    ],
    textBooks: [
      "Lab Manual Prepared by course instructor."
    ],
    assessment: { attendance: 10, classTest: 0, midterm: 40, final: 60 },
    deliveryMethods: ["Lecture", "White Board Writing", "Power point Presentation", "Practical Demonstration", "Data Collection", "Data Analysis", "Report Writing", "Q/A", "discussion"],
    assessmentTools: ["Class Attendance", "Assignment", "Lab Report", "Quizzes", "Lab Exams (Mid & Final)", "Viva"]
  },
  {
    id: "4-6",
    code: "CCE-2411",
    title: "Digital Logic Design",
    creditHours: 3,
    contactHours: "3 CH per Week",
    prerequisite: "",
    objectives: [
      "Digital Electronics and Logic Design is a foundational course for those majoring in the communication option in second year. This course introduces/analyze students to:",
      "Introduce the concept of digital and binary systems.",
      "Be able to design and analyze combinational logic circuits.",
      "Be able to design and analyze sequential logic circuits.",
      "Understand the basic hardware tools for the design and implementation of digital circuits and systems",
      "Reinforce theory and techniques taught in the classroom through experiments and projects in the laboratory."
    ],
    outcomes: [
      { clo: "CLO1", description: "Introduce basic digital Electronics, Boolean algebra and fundamental concept for designing logic circuits with simplification various techniques.", plo: "PLO – 1", bloomsLevel: "Cognitive" },
      { clo: "CLO2", description: "Solve Combinational Logic Circuit and Sequential Circuit.", plo: "PLO – 2", bloomsLevel: "Create" }
    ],
    content: [
      { chapter: "Introduction", topic: "Introduction to the course, Basic Guidelines and advises for the course, Discussion about specifications of the course", lectures: 1, section: "Midterm" },
      { chapter: "Digital Systems", topic: "Digital vs. analog systems. Advantages of digital system, Application of Digital system", lectures: 1, section: "Midterm" },
      { chapter: "Logic Families", topic: "Diode logic gates, Transistor Switch. Logic Families: TTL, ECL, IIL and CMOS logic with operation details", lectures: 1, section: "Midterm" },
      { chapter: "Digital Waveform", topic: "Digital waveform, Data Transfer, NOR, NAND, AND, OR, INVERT Implementation.", lectures: 1, section: "Midterm" },
      { chapter: "Number Systems", topic: "Binary, Octal, hexadecimal Numbers", lectures: 1, section: "Midterm" },
      { chapter: "Number Systems", topic: "Number Base Conversions, Arithmetic operations", lectures: 1, section: "Midterm", clo: "CLO – 1" },
      { chapter: "Number Systems", topic: "Base Complement: Subtraction using Complements.", lectures: 1, section: "Midterm" },
      { chapter: "Binary Codes", topic: "Binary codes, Binary storage, Binary logic, Switching circuits", lectures: 1, section: "Midterm" },
      { chapter: "Boolean Algebra", topic: "Fundamentals of Boolean algebra. Basic postulates: fundamental theorems of Boolean algebra", lectures: 1, section: "Midterm" },
      { chapter: "Boolean Algebra", topic: "Forms of Boolean functions, Minimization of Boolean functions using Karnaugh map", lectures: 1, section: "Midterm" },
      { chapter: "Karnaugh Map", topic: "2,3,4 variables Karnaugh map", lectures: 1, section: "Midterm" },
      { chapter: "Karnaugh Map", topic: "Don't care condition", lectures: 1, section: "Midterm" },
      { chapter: "Karnaugh Map", topic: "Five and six variable Karnaugh map", lectures: 1, section: "Midterm" },
      { chapter: "Boolean Functions", topic: "Sum of product and Product of Sum", lectures: 1, section: "Midterm" },
      { chapter: "Boolean Functions", topic: "Assignment on Mathematical Problems", lectures: 1, section: "Midterm" },
      { chapter: "Universal Gates", topic: "Universal gate NAND implementation", lectures: 1, section: "Midterm" },
      { chapter: "Universal Gates", topic: "NOR implementation", lectures: 1, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "Review", topic: "Review of Lecture 1 to lecture 10 syllabus, problem solutions and suggestions", lectures: 1, section: "Midterm" },
      { chapter: "Review", topic: "Review of Lecture 10 to lecture 17 syllabus, problem solutions and suggestions", lectures: 1, section: "Midterm" },
      { chapter: "Combinational Logic", topic: "Steps of design of combinational circuits.", lectures: 1, section: "Final" },
      { chapter: "Combinational Logic", topic: "Design of combinational Full Adders circuits.", lectures: 1, section: "Final" },
      { chapter: "Combinational Logic", topic: "Design of combinational Half Subtractor circuits.", lectures: 1, section: "Final" },
      { chapter: "Combinational Logic", topic: "Design of combinational Full Subtractor circuits.", lectures: 1, section: "Final" },
      { chapter: "Combinational Logic", topic: "Design of code converter combinational circuits.", lectures: 1, section: "Final" },
      { chapter: "Combinational Logic", topic: "Design of Carry principle combinational circuits", lectures: 1, section: "Final", clo: "CLO – 2" },
      { chapter: "Combinational Logic", topic: "Design of Carry principle combinational circuits", lectures: 1, section: "Final" },
      { chapter: "Combinational Logic", topic: "Design of magnitude comparator combinational circuits", lectures: 1, section: "Final" },
      { chapter: "Combinational Logic", topic: "Design of Decimal Adder combinational circuits", lectures: 1, section: "Final" },
      { chapter: "Combinational Logic", topic: "Design of Encoder and Decoder combinational circuits", lectures: 1, section: "Final" },
      { chapter: "Combinational Logic", topic: "Design of multiplexer and de-multiplexer combinational circuits", lectures: 1, section: "Final" },
      { chapter: "Combinational Logic", topic: "Design of ROM", lectures: 1, section: "Final" },
      { chapter: "Combinational Logic", topic: "Design of PLA", lectures: 1, section: "Final", clo: "CLO – 1" },
      { chapter: "Sequential Logic", topic: "Boolean function implementation with ROM and PLA", lectures: 1, section: "Final", clo: "CLO – 1" },
      { chapter: "Sequential Logic", topic: "Difference between combinational circuits and sequential circuits, Types of sequential circuit, Flip-Flops", lectures: 1, section: "Final" },
      { chapter: "Sequential Logic", topic: "(Basic flip-flop circuit, clocked RS flip-flop, D flip-flop, JK flip-flop, T flip-flop), Triggering of Flip-flop", lectures: 1, section: "Final" },
      { chapter: "Sequential Logic", topic: "Analysis of clocked sequential circuits (state table, state diagram, state equations), state reduction, state assignment", lectures: 1, section: "Final" },
      { chapter: "Counters", topic: "Types of counters, Design of synchronous and asynchronous counter, MOD number", lectures: 1, section: "Final", clo: "CLO – 1 & 2" },
      { chapter: "Counters", topic: "Propagation delay in Ripple counter, Ring counter", lectures: 1, section: "Final" },
      { chapter: "Counters", topic: "The Johnson Counter, Asynchronous down counter, Digital clock", lectures: 1, section: "Final" },
      { chapter: "Shift Registers", topic: "Basic shift register, Serial In/Serial out shift registers, Serial In/Parallel out shift register", lectures: 1, section: "Final" },
      { chapter: "Shift Registers", topic: "Parallel In/Serial out shift register, Bidirectional shift register", lectures: 1, section: "Final" },
      { chapter: "Review", topic: "Review of entire syllabus, problem solutions and suggestions", lectures: 1, section: "Final" }
    ],
    textBooks: [
      "M. Morris Mano, \"Digital Logic and Computer Design\", Prentice Hall, India, 4th Edition, 2000",
      "J.F. Wakerly, \"Digital Design Principles & Practices\", 4th Edition, Prentice Hall, 2005",
      "Floyd & Jain, \"Digital Fundamentals\", Pearson Education, 8th Edition, 2009"
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/ Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "4-7",
    code: "CCE-2412",
    title: "Digital Logic Design Sessional",
    creditHours: 1.5,
    contactHours: "3 CH per Week",
    prerequisite: "",
    objectives: [
      "This course introduces/analyze students to:",
      "Introduce the concept of digital and binary systems.",
      "Be able to design and analyze combinational logic circuits.",
      "Be able to design and analyze sequential logic circuits.",
      "Understand the basic hardware tools for the design and implementation of digital circuits and systems",
      "Reinforce theory and techniques taught in the classroom through experiments and projects in the laboratory."
    ],
    outcomes: [
      { clo: "CLO1", description: "Get introduced to Basic trainer Board and implement various Digital Circuitry related design problems.", plo: "PLO – 4", bloomsLevel: "Cognitive" },
      { clo: "CLO2", description: "To solve design circuitry problem by teamwork.", plo: "PLO – 9", bloomsLevel: "Create" }
    ],
    content: [
      { chapter: "Digital Systems", topic: "Digital vs. analog systems. Advantages of digital system, Application of Digital system", lectures: 2, section: "Final" },
      { chapter: "Logic Families", topic: "Diode logic gates, Transistor Switch. Logic Families: TTL, ECL, IIL and CMOS logic with operation details", lectures: 2, section: "Final", clo: "CLO – 1" },
      { chapter: "Digital Waveform", topic: "Digital waveform, Data Transfer, NOR, NAND, AND, OR, INVERT Implementation.", lectures: 1, section: "Final" },
      { chapter: "Experiment", topic: "Verification of basic logic gates", lectures: 1, section: "Final" },
      { chapter: "Experiment", topic: "Justifying NAND and NOR logic gate", lectures: 1, section: "Final" },
      { chapter: "Experiment", topic: "Verification of application of half adder circuit", lectures: 1, section: "Final" },
      { chapter: "Experiment", topic: "Verification of application of full adder circuit", lectures: 1, section: "Final", clo: "CLO – 2" },
      { chapter: "Experiment", topic: "Implementation of XOR and XNOR gate", lectures: 1, section: "Final" },
      { chapter: "Experiment", topic: "Verification of operation of half and full subtractor", lectures: 1, section: "Final" },
      { chapter: "Experiment", topic: "Verification of operation of odd parity generator", lectures: 1, section: "Final" }
    ],
    textBooks: [
      "Lab Manual Prepared by course instructor."
    ],
    assessment: { attendance: 10, classTest: 0, midterm: 40, final: 60 },
    deliveryMethods: ["Lecture", "White Board Writing", "Power point Presentation", "Practical Demonstration", "Data Collection", "Data Analysis", "Report Writing", "Q/A", "discussion"],
    assessmentTools: ["Class Attendance", "Assignment", "Lab Report", "Quizzes", "Lab Exams (Mid & Final)", "Viva"]
  },
  {
    id: "4-8",
    code: "MATH-2401",
    title: "Mathematics-IV (Complex Variable Fourier Series, Laplace Transform & Fourier transform)",
    creditHours: 3,
    contactHours: "3 CH per Week",
    prerequisite: "MATH-2301",
    objectives: [
      "The course provides students with an understanding of how to analyze complex variable, higher trigonometry & random process, complex functions. Upon the successful completion of the course students will become proficient in Response of linear systems to random inputs. Mean square error estimation. Detection and linear filtering. Weiner Filters (Minimum Mean Square Error Filter). Monte Carlo modelling, Markov Chain modelling of random processes with memory, Trigonometric and Exponential functions for complex quantities, Different Relation between Circular Functions and Hyperbolic functions, Inverse circular and hyperbolic functions and Mathematical problems."
    ],
    outcomes: [
      { clo: "CLO1", description: "Demonstrate the basic idea of analyzing complex variable, higher trigonometry & random process, complex functions.", plo: "PLO – 1", bloomsLevel: "Cognitive" },
      { clo: "CLO2", description: "The advancement of the knowledge of Complex variables, higher trigonometry & random process, complex functions, are implemented in engineering problem interpretation and applicability by using the mathematical formulations.", plo: "PLO – 2", bloomsLevel: "Cognitive" }
    ],
    content: [
      { chapter: "Introductory Class", topic: "Complex Number, De-Moivre's Theorem, Complex mapping, Linear Transformation: translation, magnification and rotation, Non-linear transformations: inversion, bilinear. Set theory: Function, Relation etc.", lectures: 5, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "Complex Function Analysis", topic: "Differentiation of a complex function, Analytic function, Singularities, the Cauchy-Riemann Equations, harmonic functions", lectures: 6, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "Complex Integration", topic: "Complex Path Integrals, closed contour, Cauchy's Theorem, The Residue Theorem, Poles", lectures: 5, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "Review", topic: "Review of the Previous Lectures, Class Test-01 (Based on Mid-Term Syllabus), Solve Class.", lectures: 3, section: "Midterm", clo: "CLO – 1 & 2" },
      { chapter: "Fourier Series", topic: "Physical Significance of Fourier series, Periodic Signal, Trigonometric form and Complex form of Fourier series, Fourier Integral, Frequency Spectrum, Piecewise Continuous waveforms, Even symmetry, Odd symmetry, Half-wave symmetry, Phase Spectrum, Sketch different types of Periodic Signals, Application of Fourier Series.", lectures: 4, section: "Final", clo: "CLO – 1 & 2" },
      { chapter: "Convolution", topic: "Convolution Theorem, Convolution Sum, Convolution Integral", lectures: 5, section: "Final", clo: "CLO – 1 & 2" },
      { chapter: "Laplace Transforms", topic: "Unit Step Function, Impulse Function, Ramp Function, Sketch Waveform, Derive Laplace transform from Fourier transform, the Laplace transforms of different functions, shifting and change of scale property, Laplace transforms of derivatives, Solution of Differential Equations by Laplace Transforms, inverse Laplace transforms.", lectures: 7, section: "Final", clo: "CLO – 1 & 2" },
      { chapter: "Fourier Transform", topic: "A-periodic Signal, Fourier transforms, Inverse Fourier Transform. Fourier Analysis using MATLAB.", lectures: 7, section: "Final", clo: "CLO – 1 & 2" },
      { chapter: "Review", topic: "Review of the Previous Lectures", lectures: 2, section: "Final" }
    ],
    textBooks: [
      "Boelkins, Matthew R., Jack L. Goldberg, and Merle C. Potter, \"Differential equations with linear algebra\", OUP USA, 2009.",
      "Stroud, Kenneth Arthur, and Dexter J. Booth. Engineering mathematics. Macmillan International Higher Education, 2013.",
      "Mohammad, Khosh, P. K. Bhattacharjee, and Md Latif., \"A textbook on differential calculus.\", 2001",
      "Das, B. C., and B. C. Mukherjee., \"Integral Calculus: Differential Equations.\", UN Dhur & Sons Private Limited, 55th Edition, 2012"
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/ Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "4-9",
    code: "STAT-2401",
    title: "Statistics",
    creditHours: 2,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [
      "This course is to provide an understanding for the engineering student on statistical concepts to include measurements of location and dispersion, probability, probability distributions, hypothesis testing, regression, and correlation analysis."
    ],
    outcomes: [
      { clo: "CLO1", description: "Demonstrate understanding of descriptive statistics by practical application of quantitative reasoning and to the solution of engineering problems with data visualization.", plo: "PLO1", bloomsLevel: "Cognitive/Understanding" },
      { clo: "CLO2", description: "Will be able to compute and interpret the results of correlation and regression.", plo: "PLO2", bloomsLevel: "Cognitive/ Evaluating" },
      { clo: "CLO3", description: "Demonstrate probability and its related distributions to the solution of engineering problems.", plo: "PLO1", bloomsLevel: "Cognitive/Applying" },
      { clo: "CLO4", description: "Create hypothesis for data analysis", plo: "PLO4", bloomsLevel: "Cognitive/Creating" }
    ],
    content: [
      { chapter: "1", topic: "Preliminary idea of Statistics: Origin, History and Development Statistics, Definition of Statistics, Characteristics, Function, Limitations, Necessity & importance of Statistics, The role of Statistics in Engineering, Population and Sample, Variable and Constants, Different types of variables, Parameter, Statistic, Scale of measurement, Statistical data, collecting engineering data, Preparation of Questionnaire and Schedule, Presentation and Classification of Data, Construction of Frequency distribution, Graphical presentation of Frequency distribution.", lectures: 5, section: "Midterm", clo: "CLO-1" },
      { chapter: "2", topic: "Measures of Central Tendency: Different types of mean with their properties and relationship, Quintiles with their graphical presentation, Application of different measures of central tendency.", lectures: 3, section: "Midterm", clo: "CLO-1" },
      { chapter: "3", topic: "Measures of Dispersion of a Series of Data: Range, Standard Deviation, Mean Deviation, Quartile Deviation, Variance and Standard Deviation, Coefficient of Variation and their uses, Properties and applications of different measures of dispersion, moments, skewness and kurtosis.", lectures: 4, section: "Midterm", clo: "CLO-1" },
      { chapter: "Group-A, 1", topic: "Correlation Theory and Regression Analysis: Simple Correlation and its measure, Scatter Diagram, properties of simple correlation coefficient, Spearman's Rank correlation coefficient, Simple linear regression, properties of regression coefficient, regression curve, regression equation, Least-square method of curve fittings, Co-efficient of determination, Theorems & Problems.", lectures: 4, section: "Final", clo: "CLO-2" },
      { chapter: "Group-A, 2", topic: "Basic concepts of probability: History, meaning and Scope of probability, Approaches of defining probability: Classical, Empirical, Subjective and Axiomatic probability, Experiment, random experiment, Sample Space, Event, different types of events, Tree diagram, Conditional probability and independence, some elementary theorems on probability, and conditional probability, Laws of Probability – Additive and Multiplicative Law, Prior probability, Posterior probability, total probabilities & Bayes' theorem and their applications.", lectures: 4, section: "Final", clo: "CLO-3" },
      { chapter: "Group-B, 1", topic: "Random Variables and Mathematical Expectation: Discrete and continuous random variables, Probability mass function and density function, Distribution function and their properties, Mathematical expectation and variance of a random variables. Theorems & Problems", lectures: 3, section: "Final", clo: "CLO-1" },
      { chapter: "Group-B, 2", topic: "Probability Distributions: Binomial distribution, Poisson distribution and Normal distribution – Their properties, uses, Theorems & Problems", lectures: 4, section: "Final", clo: "CLO-3" },
      { chapter: "Group-B, 3", topic: "Test of hypothesis and Estimation: Preliminary ideas of statistical hypothesis test, level of significance, one tailed and two tailed test, p-value, Test of significance, Test regarding single mean, test of equality of two mean, test of equality of several means (Analysis of variance), test regarding proportion. General concepts of Estimation.", lectures: 3, section: "Final", clo: "CLO-4" }
    ],
    textBooks: [
      "Douglas C. Montgomery & George C. Runger, \"Applied Statistics and Probability for Engineers\", Wiley; 6th Edition, 2013",
      "Ronald E. Walpole, Raymond H. Myers, Sharon L. Myers & Keying E. Ye, \"Probability & Statistics for Engineers & Scientists, MyLab Statistics Update\", Pearson; 9th Edition, 2016",
      "Roy & Manindra Kumar, \"Fundamentals of Probability & Probability Distributions\", Romax Publications, 4th Edition, 2016"
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/ Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  }
];
