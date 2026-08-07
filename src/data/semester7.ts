import { Course } from "./types";

export const semester7Courses: Course[] = [
  {
    id: "7-1",
    code: "URIH-4701",
    title: "A Survey of Islamic History and Culture",
    creditHours: 1,
    contactHours: "2 CH per Week",
    prerequisite: "URED-3604",
    objectives: [
      "The objective of this study is to enrich the learners with the glorious history of four pious Khalifah of Islam and their remarkable contributions towards the development of just administration, advancement of civilization and education and their great services towards humanity at large.",
      "This course also aims at making the students acquainted with the glorious contribution of the Muslims towards the world civilization during the Ummayads and Abbasids Khilafah.",
      "The contributions include the advancement of administration, society, civilization, different branches of science such as geography, mathematics, history, medical science, philosophy etc."
    ],
    outcomes: [
      { clo: "CLO1", description: "With the study of this course, the learners will be able to explore the glorious history of early Islamic society and state, particularly of four pious Khalifah and their successors.", plo: "PLO6", bloomsLevel: "Cognitive/Understanding" },
      { clo: "CLO2", description: "The learners will also have the idea about the Muslim contributions towards the difference branches of world civilization.", plo: "PLO6", bloomsLevel: "Cognitive/Understanding" },
      { clo: "CLO3", description: "This study will also help the students to realize the historical processes of development of Muslim society in early time and to make a comparison with the present society.", plo: "PLO6", bloomsLevel: "Cognitive/Applying" },
      { clo: "CLO4", description: "It will enable the learners to appreciate various good practices and cultures that will in turn be resulted in becoming a responsible citizen.", plo: "PLO6", bloomsLevel: "Cognitive/Analyze" }
    ],
    content: [
      { chapter: "Chapter One", topic: "Khilafah: Definition, Origin and Development of Khilafah; Types of Khilafah; Election system to the office of Khilafah; Khilafah and Mulukiyyah; Qualifications, Duties and Responsibilities of a Khalifah.", lectures: 3, clo: "CLO1", section: "Midterm" },
      { chapter: "Chapter Two", topic: "Introduction to the Four Pious Khalifah: Achievements and Contributions of the Pious Khalifah. Comprehensive study of the historical events during four pious Khalifah: Abu Bakr (R) - the savior of Islam, Umar (R) - the model of modern administration and great conqueror of Islamic empire, Uthman (R) – compiler of the Holy Qur'an, Causes of revolt, assassination of Uthman (R) and its effect on the history, Ali (R) - civil wars during his time and end of the four Pious Khalifah.", lectures: 6, clo: "CLO2, CLO3, CLO7", section: "Midterm" },
      { chapter: "Chapter Three", topic: "Administration under the Four Pious Khalifah: The Shura, Civil Administration, Revenue System, Bait-al-Mal, Judicial Administration, Police-Prison, Religious Administration and Military Administration.", lectures: 3, clo: "CLO7", section: "Midterm" },
      { chapter: "Chapter Four", topic: "The Umayyads Khilafah (661 A.D-750 A.D): A brief introduction to Umayyads Khilafah, Credit and Achievements of Muawiah (R), Administrative reforms of Abdul Malik, Expansion of Islamic empire under Walid bin Abdul Malik, Umar bin Abdul Aziz and his Administrative Reforms. Central and Provincial Administration, Social Condition. Umayyads contribution towards the development of civilization & education, and Fall of the Umayyads.", lectures: 6, clo: "CLO4", section: "Final" },
      { chapter: "Chapter Five", topic: "The Abbasids Khilafah (750 A.D-1258 A.D): Golden Age of the Abbasids - Abul Abbas as Saffah, Abu Zafar al-Mansur, Harun or-Rashid, Al-Mamun, Abbasids Society, Rights of Women and non-Muslims in Muslim Society, Scientific and Literary development, Education, Development of Art and Architecture. Abbasids Administration - Civil, Military, Judicial and Revenue Administration and Fall of Baghdad.", lectures: 6, clo: "CLO4, CLO7", section: "Final" },
      { chapter: "Chapter Six", topic: "A Brief Analysis on the Umayyads Khilafah of Spain and Fatimids Khilafah of Egypt and North Africa.", lectures: 2, clo: "CLO4, CLO5", section: "Final" },
      { chapter: "Chapter Seven", topic: "Muslim contribution to different fields of civilization: a) Geography; b) Medical Sciences and Medicine; c) Chemistry; d) Mathematics; e) Astronomy; f) Historiography; g) Art and literature; and h) Painting and Calligraphy", lectures: 4, clo: "CLO5, CLO6", section: "Final" }
    ],
    textBooks: [
      "P.K. Hitti, History of the Arabs, Macmillan edition, 1970, London.",
      "K. Ali, A Study of Islamic History, Adam Publishers & Distributors, 2006, Dhaka.",
      "Mofizullah Kabir, An Outline of Islamic History, Dhaka.",
      "S.A.Q. Hussaini, The Arab Administration, 1956, Lahore.",
      "Syeed Ameer Ali, A Short History of Saracens, Macmillan edition, 1916, London.",
      "T.I. Arnold, The Caliphate, Oxford, 1924, London.",
      "Muhammad Ali, The Early Caliphate, Cambridge, 1936, London.",
      "R. Levy, The Social Structure of Islam, Cambridge 1979, London.",
      "R.A. Nicholson, A Literary History of the Arabs, Cambridge 1930, London.",
      "S.M. Imamuddin, Arab Muslim Administration, 1976, Karachi.",
      "S. Khuda Baksh, Islamic Civilization, vol 1-2, Idara Islamiyat-e-Diniyat, or Kitab Bhavan, 1984, Delhi.",
      "R.H. Turner, Science in Medieval Islam: An Illustrated Introduction. 1995, Austin: University of Texas Press.",
      "Musa Ansari, Moddhojuger Muslim Sovvota o Sonskriti, Bangla Academy, 1999, Dhaka.",
      "Board of Researchers, Scientific Indications in the Holy Quran, Islamic Foundation Bangladesh, 2004, Dhaka.",
      "Ziauddin Sardar, Science, Technology and development in the Muslim World, Croom Helm, 1977, London."
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/ Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "7-2",
    code: "CCE-4701",
    title: "Data Communication and Computer Networking",
    creditHours: 3,
    contactHours: "3 CH per Week",
    prerequisite: "CCE-2407 & CCE-3611",
    objectives: [
      "The main course is to infer the working knowledge of data transmission and computer networks concepts, line control and line sharing and also is to understand the operation of compression optimizing data transfer algorithms.",
      "Also, understand the organization of computer networks, factors influencing computer network development and the reasons for having variety of different types of networks.",
      "Resource sharing, high Reliability, increase in system performance, and security in network are the main objectives."
    ],
    outcomes: [
      { clo: "CLO1", description: "Have the basic knowledge of computer networks and its applications in telecommunication engineering.", plo: "PLO-1", bloomsLevel: "Cognitive (Understand)" },
      { clo: "CLO2", description: "Have the knowledge of data sharing and their protocols", plo: "PLO-2", bloomsLevel: "Cognitive (Understand & Analysis)" }
    ],
    content: [
      { chapter: "Introduction", topic: "Computer Networks and Applications, OSI reference model, TCP/IP model and terminology, Connectionless and Connection Oriented services, Service primitives, The ARPANET.", lectures: 5, section: "Midterm" },
      { chapter: "Physical Layer", topic: "Circuit switching and Packet switching, X-25 protocol, Frame relay and Cell relay, ATM reference model.", lectures: 5, clo: "CLO-1", section: "Midterm" },
      { chapter: "Medium Access Sublayer", topic: "Pure and slotted ALOHA, Persistent and Non-persistent CSMA, CSMA with collision detection and collision free protocols, IEEE standard 802.3 and Ethernet.", lectures: 5, section: "Midterm" },
      { chapter: "Data Link Layer", topic: "Types of errors, framing, error detection & correction methods; Flow control, Stop & wait ARQ, Go-Back-N ARQ, Selective repeat ARQ, HDLC.", lectures: 6, clo: "CLO-2", section: "Final" },
      { chapter: "Network Layer", topic: "Internet address, classful address, subnetting, static vs. dynamic routing, shortest path algorithm, flooding, distance vector routing, link state routing, ARP, RARP, IP, ICMP.", lectures: 6, clo: "CLO-2", section: "Final" },
      { chapter: "Transport Layer", topic: "UDP, TCP, Connection management, Addressing, Establishing and Releasing Connection, Congestion control algorithm, Flow control and Buffering, Multiplexing.", lectures: 6, clo: "CLO-1", section: "Final" },
      { chapter: "Presentation Layer and Application Layer", topic: "Data Compression techniques, Frequency Dependent Coding, Context Dependent Encoding.", lectures: 6, section: "Final" },
      { chapter: "Networking in Practice", topic: "Designing LAN, Cabling, Establishing Client-Server network, Configuring: Directory Server, Proxy server, FTP server, E-mail server, web server, DB server, Firewall, Network troubleshooting, network maintenance, network monitoring, Network programming.", lectures: 6, clo: "CLO-2", section: "Final" }
    ],
    textBooks: [
      "Behrouz A. Forouzan, \"TCP/IP Protocol Suite\", McGraw-Hill, 4th Edition, 2008",
      "Andrew S. Tanenbaum, \"Computer Networks\", Prentice Hall, 2nd Edition, 2010",
      "William Stallings, \"Data and Computer Communications\", Prentice Hall, 4th Edition, 2012",
      "Behrouz A. Forouzan, \"Data Communications and Networking\", McGraw-Hill, 5th Edition, 2014"
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/ Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "7-3",
    code: "CCE-4702",
    title: "Data Communication and Computer Networking Sessional",
    creditHours: 1.5,
    contactHours: "3 CH per Week",
    prerequisite: "CCE-2408 & CCE-3612",
    objectives: [
      "The purpose of this sessional course is to impart empirical knowledge and hand-on experience on different topic of data communication and computer networks.",
      "Understand and analyze different network infrastructures, applications of different types of computer networks to facilitate communication and resource-sharing among a wide range of users."
    ],
    outcomes: [
      { clo: "CLO1", description: "Identify the different internetworking devices, network topologies and protocols with their functions.", plo: "PLO-1", bloomsLevel: "Cognitive (Understand, Identify)" },
      { clo: "CLO2", description: "Use the relevant network model for the specified data communication system.", plo: "PLO-2", bloomsLevel: "Cognitive (Evaluate)" },
      { clo: "CLO3", description: "Design and Analyze error detection/correction and flow control of data in the data network.", plo: "PLO-3", bloomsLevel: "Cognitive (Design and Analyze)" }
    ],
    content: [
      { chapter: "Experiment", topic: "Introduce to Computer Network Security Laboratory experiment", clo: "CLO-1", section: "Midterm" },
      { chapter: "Experiment", topic: "To familiarize students with different network simulation technologies.", clo: "CLO-2", section: "Midterm" },
      { chapter: "Experiment", topic: "To impart the empirical knowledge on data link layer fundamentals, e.g., error detection, correction and flow control techniques.", clo: "CLO-3", section: "Midterm" },
      { chapter: "Experiment", topic: "Register Jacket (RJ)45 connector connection and configure design", clo: "CLO-1 & 2", section: "Final" },
      { chapter: "Experiment", topic: "IP Addressing, Basic Configuration of Cisco Packet Tracer,", section: "Final" },
      { chapter: "Experiment", topic: "Basic Network Configuration, Physical Network Interface Connection/ Router & Switch Configuration,", clo: "CLO-4", section: "Final" },
      { chapter: "Experiment", topic: "Experiment on creation of network topology between UNIVERSITY administration and ETE department and ping testing", clo: "CLO-4 & 5", section: "Final" },
      { chapter: "Experiment", topic: "Experiment on Addition of Switch-to-Switch connection and new Ethernet slot addition to router", section: "Final" }
    ],
    textBooks: ["Lab Manual Prepared by course instructor."],
    assessment: { attendance: 10, classTest: 0, midterm: 40, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Power point Presentation", "Practical Demonstration", "Data Collection", "Data Analysis", "Report Writing", "Q/A", "discussion"],
    assessmentTools: ["Class Attendance", "Assignment", "Lab Report", "Quizzes", "Lab Exams (Mid & Final)", "Viva"]
  },
  {
    id: "7-4",
    code: "CCE-4705",
    title: "Operating Systems",
    creditHours: 2,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [
      "The Operating System (OS) course is designed to provide a comprehensive understanding to the modern Operating Systems.",
      "The course begins with the history of operating system and the review of computer hardware and concentrates on operating system concepts, system structure, process and threads, memory management, file system and related security aspects.",
      "It also deals with multiprocessor systems, virtualizations and cloud service."
    ],
    outcomes: [
      { clo: "CLO1", description: "Classify, identify and analyze modern operating systems; concept for virtualization, cloud and multiple processor systems.", plo: "PLO-1", bloomsLevel: "Cognitive (Understand)" },
      { clo: "CLO2", description: "Understand and analyze process, thread, memory and file management systems.", plo: "PLO-2", bloomsLevel: "Cognitive (Analysis, Create)" },
      { clo: "CLO3", description: "Understand and implement algorithms for process, thread, deadlock and memory management.", plo: "PLO-3", bloomsLevel: "Cognitive (Understand, Create)" }
    ],
    content: [
      { chapter: "Principle of operating systems and Operating system structure", topic: "Definition of operating system, Different kinds of operating systems (Desktop, Multiprocessor, Distributed, Clustered, Real time, Handheld systems), Operating-System Services, User Operating-System Interface, System Calls, Types of System Calls, System Programs, Operating-System Design and Implementation, Operating-System Structure, Virtual Machines.", lectures: 5, section: "Midterm" },
      { chapter: "Process", topic: "process management, inter-process communication, Process scheduling, Process Concept, Operations on Processes, Inter process Communication, Communication in Client-Server Systems, Basic Concepts of Process Scheduling, Multiprocessing and time sharing, Process coordination: Multiple-Processor Scheduling, Thread Scheduling, Algorithm Evaluation, Control and scheduling of large information processing systems, Resource allocation; Dispatching; Processor access methods; Job control languages.", lectures: 10, clo: "CLO-1", section: "Midterm" },
      { chapter: "Deadlocks", topic: "Deadlock Characterization, Methods for Handling Deadlocks, Deadlock Prevention, Deadlock Avoidance, Deadlock Detection, Recovery from Deadlock.", lectures: 6, clo: "CLO-2", section: "Final" },
      { chapter: "Memory management", topic: "Background, Swapping, Contiguous Memory Allocation, Paging, Structure of the Page Table, Segmentation.", lectures: 6, section: "Final" },
      { chapter: "Virtual memory", topic: "The idea and advantage of virtual memory, Demand Paging, Page Replacement, Page Replacement Algorithms (FIFO, Optimal page replacement, LRU), Thrashing.", lectures: 6, clo: "CLO-1", section: "Final" },
      { chapter: "File systems", topic: "File Concept, Access Methods, Directory Structure, File-System Mounting, File Sharing, File-System Implementation, Directory Implementation, Allocation Methods.", lectures: 6, section: "Final" },
      { chapter: "Protection and security", topic: "Protection, Principles of Protection, Domain of Protection, Access Matrix, Access Control, Revocation of Access Rights, The Security Problem, Program Threats, System and Network Threats, Cryptography as a Security Tool, User Authentication, Implementing Security Defenses, Fire walling to Protect Systems and Networks.", lectures: 6, clo: "CLO-2", section: "Final" }
    ],
    textBooks: [
      "Andrew S. Tanenbaum, \"Modern Operating Systems\", 4th Edition, Prentice Hall, 2009",
      "William Stallings, \"Operating Systems: Internals and Design Principles\", 4th Edition, 2012",
      "A. Silberschatz, P.B. Galvin, Greg Gagne, \"Operating System concepts\", 2015"
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/ Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "7-5",
    code: "CCE-4706",
    title: "Operating Systems Sessional",
    creditHours: 1,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [
      "The Operating System (OS) Sessional course is designed to provide hands on understanding on basic components of Operating Systems.",
      "The lab begins with the activities related to development of operating systems like Linux and WINDOWS.",
      "Subsequently the course deals with virtualization and different key components of Operating System e.g., kernel compilation, process and thread scheduling, deadlocks, memory management, synchronization and system call etc."
    ],
    outcomes: [
      { clo: "CLO1", description: "Understand and respond to major operating systems like Windows, Linux etc.", plo: "PLO-1", bloomsLevel: "Cognitive (Understanding)" },
      { clo: "CLO2", description: "Apply and modify algorithms for process, thread and memory management through group project work.", plo: "PLO-2", bloomsLevel: "Cognitive (Understanding & Apply)" },
      { clo: "CLO3", description: "Enhance security of Windows and Linux like operating systems.", plo: "PLO-3 & 4", bloomsLevel: "Cognitive (Analyze & Create)" }
    ],
    content: [
      { chapter: "Lab", topic: "Process scheduling", lectures: 3, section: "Midterm" },
      { chapter: "Lab", topic: "Algorithm evaluation of job scheduling", section: "Midterm" },
      { chapter: "Lab", topic: "Inter process communication", section: "Midterm" },
      { chapter: "Lab", topic: "Time sharing system", clo: "CLO-1, 2 & 3", section: "Final" },
      { chapter: "Lab", topic: "Applying system calls", clo: "CLO-1, 2 & 3", section: "Final" },
      { chapter: "Lab", topic: "Deadlock handling", clo: "CLO-1, 2 & 3", section: "Final" },
      { chapter: "Lab", topic: "Apply swapping technique", clo: "CLO-1, 2 & 3", section: "Final" },
      { chapter: "Lab", topic: "Paging structure implementation", clo: "CLO-1, 2 & 3", section: "Final" },
      { chapter: "Lab", topic: "Understanding segmentation, File sharing implementation", section: "Final" }
    ],
    textBooks: ["Lab Manual Prepared by course instructor."],
    assessment: { attendance: 10, classTest: 0, midterm: 40, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Power point Presentation", "Practical Demonstration", "Data Collection", "Data Analysis", "Report Writing", "Q/A", "discussion"],
    assessmentTools: ["Class Attendance", "Assignment", "Lab Report", "Quizzes", "Lab Exams (Mid & Final)", "Viva"]
  },
  {
    id: "7-6",
    code: "CCE-4707",
    title: "Microwave Engineering",
    creditHours: 2,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [
      "The overall aim of the course is to understand the theoretical principles underlying microwave devices and networks.",
      "The course also aims to deliver fundamental concepts and working principles of different microwave tubes, semiconductor devices and amplifiers.",
      "Different analytical techniques needed to understand operation of microwave circuits are also covered in the course.",
      "It also includes the design of different microwave system components such as transmission lines, waveguides, resonators, filters, waveguide components etc."
    ],
    outcomes: [
      { clo: "CLO1", description: "Understand the working principle of different Microwave Components", plo: "PLO-1", bloomsLevel: "Cognitive (Understand)" },
      { clo: "CLO2", description: "Analyze Microwave Circuits and Components using suitable engineering analytical techniques", plo: "PLO-2", bloomsLevel: "Cognitive (Understand)" },
      { clo: "CLO3", description: "Design different Microwave Components satisfying specified criteria", plo: "PLO-3", bloomsLevel: "Cognitive (Apply/Create)" },
      { clo: "CLO4", description: "Prepare and present a term paper on selected title", plo: "PLO-2", bloomsLevel: "Affective (Understand)" }
    ],
    content: [
      { chapter: "Introduction", topic: "Introduction to the course, Discussion of Lesson Plan; Necessity of the course, RF Behaviour of Resistors, Inductors and Capacitors at Microwave Frequency", lectures: 2, clo: "CLO1-4", section: "Midterm" },
      { chapter: "Transmission Line", topic: "Introduction to Transmission Line, When to use it, Equivalent Circuit of Transmission Line, Telegrapher's Equation", lectures: 2, clo: "CLO1", section: "Midterm" },
      { chapter: "Transmission Line", topic: "Wave Equation on Transmission Line, Parameters, Terminated Lossless Transmission Lines, Return Loss, Average Power Flow; Special Terminated Transmission Lines, Input Impedance of the line, VSWR", lectures: 4, section: "Midterm" },
      { chapter: "Transmission Line", topic: "Sourced and Loaded TL, Specific cases of source and load impedances, Power Delivered to the load", lectures: 3, clo: "CLO2", section: "Midterm" },
      { chapter: "Smith Chart", topic: "Introduction to Smith Chart, Problems Based on Smith Chart", lectures: 1, section: "Midterm" },
      { chapter: "Waveguide", topic: "Introduction to Waveguide, Comparison between different types of waveguides, General Solution of TEM, TE and TM waves", lectures: 1, clo: "CLO1", section: "Midterm" },
      { chapter: "Waveguide Analysis", topic: "Analysis of Parallel plate waveguide; Analysis of Rectangular Waveguide", lectures: 3, clo: "CLO2, CLO3", section: "Midterm" },
      { chapter: "Waveguide Analysis", topic: "Analysis of Circular Waveguide, Introduction to Microstrip Line and Stripline Technology, Review of Mid-Term Syllabus", lectures: 2, clo: "CLO1-3", section: "Midterm" },
      { chapter: "Discussion", topic: "Discussion on Mid Term Question and Showing of Answer Script, Introduction to Final Syllabus", lectures: 1, clo: "CLO1-3", section: "Final" },
      { chapter: "Cavity Resonator", topic: "Analysis of Rectangular and Circular Cavity Resonator", lectures: 1, clo: "CLO2, CLO3", section: "Final" },
      { chapter: "Microwave Network Analysis", topic: "Introduction Microwave Network Analysis, Equivalent Voltage and Current, Different types of Impedances, Impedance and Admittance Matrix, Reciprocal, Lossless and Matched at all ports networks", lectures: 2, clo: "CLO2", section: "Final" },
      { chapter: "S Matrix", topic: "Introduction to S Matrix, Reciprocal and Lossless Networks, Examples, ABCD Matrix, Solution of ABCD Matrix, Distribution of Paper", lectures: 1, clo: "CLO2, CLO4", section: "Final" },
      { chapter: "Waveguide Components", topic: "Waveguide Directional Coupler, Coupled line Directional Coupler, Attenuator, Phase shifter, Isolator", lectures: 2, clo: "CLO1", section: "Final" },
      { chapter: "Waveguide Components", topic: "E Plane Tee, H plane Tee and Magic Tee, Hybrid Tee Junction.", lectures: 2, clo: "CLO1,2,3", section: "Final" },
      { chapter: "Microwave Filters", topic: "By insertion loss method and Coupled Resonators", lectures: 1, clo: "CLO1, CLO3", section: "Final" },
      { chapter: "Microwave Tubes", topic: "Construction, Operation and Analysis of Multicavity Klystoron Amplifier, Reflex Klystoron; Construction, Operation and Analysis of Magnetron; Construction, Operation and Analysis of Travelling Wave Tube, Backward Wave Oscillator", lectures: 3, clo: "CLO1", section: "Final" },
      { chapter: "Semiconductor Devices", topic: "Construction, operation and application of Tunnel Diode, Gunn Diode and PIN Diode", lectures: 2, section: "Final" },
      { chapter: "Amplifier Design", topic: "Two port power Gains, Single stage transistor amplifier design, Low noise amplifier design, Broadband amplifier Design", lectures: 2, clo: "CLO2", section: "Final" },
      { chapter: "Review", topic: "Review", lectures: 1, section: "Final" }
    ],
    textBooks: [
      "David M. Pozar, \"Microwave Engineering\", 3rd Edition, Wiley, Singapore.",
      "Samuel Y. Liao, \"Microwave Devices and Circuits\", 3rd Edition, PHI, 1994."
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/ Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "7-7",
    code: "CCE-4708",
    title: "Microwave Engineering Sessional",
    creditHours: 1,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [
      "Overall aim of the course is to introduce the students to Microwave Components with knowledge of what they do, to show how they look and are interconnected using ED-3000 Microwave Test Bench.",
      "The course also aims to make students skilled at designing and analyzing various microwave components using CST Microwave Studio software.",
      "The course finishes with a complex engineering problem solving project related to Microwave Engineering."
    ],
    outcomes: [
      { clo: "CLO1", description: "To apply the knowledge of Microwave Transmission Lines, Waveguides, Waveguide Components, Resonators, Filters, Antenna etc. in developing solution of a complex microwave engineering problem.", plo: "PLO-1", bloomsLevel: "Cognitive (Design and Creation)" },
      { clo: "CLO2", description: "Analyze and compare design alternatives and use measures of performance or other criteria to rank alternatives in solution of the complex microwave engineering problem.", plo: "PLO-2", bloomsLevel: "Cognitive (Evaluation)" },
      { clo: "CLO3", description: "Consult video instructions and materials, design experiments, simulate, analyze and interpret results to analyze microwave components and decide the best solution to the complex microwave engineering problem.", plo: "PLO-4", bloomsLevel: "Psychomotor (Complex Overt Response), Cognitive (Evaluation)" },
      { clo: "CLO4", description: "Model and simulate different microwave components and develop a prototype of the solution of complex microwave engineering problem using CST Studio Suite.", plo: "PLO-5", bloomsLevel: "Cognitive (Creating/Designing), Psychomotor (Complex Overt Response)" },
      { clo: "CLO5", description: "Able to do the lab works individually and as members or leader of a teams, report individual and team performance against the plan", plo: "PLO-9", bloomsLevel: "Affective (Organize)" },
      { clo: "CLO6", description: "Communicate the team's technical approaches to the design project in a polished, co-authored, written format, using language and graphics appropriate to the technical discipline.", plo: "PLO-10", bloomsLevel: "Affective (Organize), Cognitive (Evaluation)" }
    ],
    content: [
      { chapter: "Discussion", topic: "Discussion on Course Specification", lectures: 1, clo: "CLO1-6", section: "Midterm" },
      { chapter: "Lab", topic: "Design, Simulation and Analysis of Coaxial Transmission Line using CST Microwave Studio", clo: "CLO1,3,4,5", section: "Midterm" },
      { chapter: "Lab", topic: "Design, Simulation and Analysis of Microstrip Transmission Line using CST Microwave Studio", clo: "CLO1,3,4,5", section: "Midterm" },
      { chapter: "Lab", topic: "Analysis of Quarter Wavelength Transformer matching using CST Microwave Studio", clo: "CLO1,3,4,5", section: "Midterm" },
      { chapter: "Lab", topic: "Design, Simulation and Analysis of Rectangular Waveguide and Waveguide Tees using CST Microwave Studio", clo: "CLO1,3,4,5", section: "Midterm" },
      { chapter: "Project", topic: "Distribution of Term Project", clo: "CLO1-6", section: "Final" },
      { chapter: "Introduction", topic: "Introduction to Microwave Test Bench ED-3000", lectures: 2, section: "Final" },
      { chapter: "Discussion", topic: "Discussion and Approval of Group Wise Project Solution", clo: "CLO1,2,3,5,6", section: "Final" },
      { chapter: "Lab", topic: "Design, Simulation and analysis of Microwave Rectangular Cavity Resonator in CST Microwave Studio", clo: "CLO1,3,4,5", section: "Final" },
      { chapter: "Lab", topic: "Design, Simulation and analysis of Microwave Filters using CST Microwave Studio", clo: "CLO1,3,4,5", section: "Final" },
      { chapter: "Project", topic: "Project Submission", clo: "CLO1-6", section: "Final" }
    ],
    textBooks: ["Lab Manual Prepared by course instructor."],
    assessment: { attendance: 10, classTest: 0, midterm: 40, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Power point Presentation", "Practical Demonstration", "Data Collection", "Data Analysis", "Report Writing", "Q/A", "discussion"],
    assessmentTools: ["Class Attendance", "Assignment", "Lab Report", "Quizzes", "Lab Exams (Mid & Final)", "Viva"]
  },
  {
    id: "7-8",
    code: "CCE-4711",
    title: "Satellite Communication and Radar Navigation",
    creditHours: 2,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [
      "This course provides learn the fundamentals and the techniques for the design and analysis of satellite communication systems.",
      "Satellite Orbits, Space Stations and Ground Terminals, Frequency Allocation, Link Calculation and Signal Propagation, Digital Modulation, Multiple Access, Receiver Synchronization, Baseband Processing and the basics of various Satellite types."
    ],
    outcomes: [
      { clo: "CLO1", description: "Acquire the basic knowledge of Satellite, Satellite launching technique, Link development and applications.", plo: "PLO-1", bloomsLevel: "Cognitive (Understand)" },
      { clo: "CLO2", description: "Investigate the real time problems and challenges in satellite communications", plo: "PLO-2", bloomsLevel: "Cognitive (Understand & Evaluating)" },
      { clo: "CLO3", description: "Ability to understand the future trends and applications of satellite communications", plo: "PLO-3", bloomsLevel: "Cognitive (Understand & Analyze)" }
    ],
    content: [
      { chapter: "Introduction", topic: "Merits and demerits of satellite communications, Types of satellites based on their applications, Orbital Elements & Kepler's law of planetary motion", lectures: 2, section: "Midterm" },
      { chapter: "Orbits", topic: "Developing the equations of the orbit; Describing the orbit of a satellite, Locating the satellite in the orbit, Locating the satellite with respect to the earth", lectures: 2, section: "Midterm" },
      { chapter: "Orbits", topic: "Newton's Law of gravitation, Definitions of terms for earth-orbiting satellites, orbital parameters.", lectures: 2, section: "Midterm" },
      { chapter: "Orbits", topic: "Types of orbits based on shapes and height, Geo-stationary orbits and non-geo-stationary orbits", lectures: 2, section: "Midterm" },
      { chapter: "Orbits", topic: "Look angle determination, Limits of visibility, Orbital perturbations, Station Keeping", lectures: 2, clo: "CLO-1", section: "Midterm" },
      { chapter: "Satellite Systems", topic: "Earth eclipse of satellite, Sub satellite points, Launching orbits, Attitude and orbit control systems, Telemetry Tracking", lectures: 4, section: "Midterm" },
      { chapter: "Satellite Systems", topic: "Command subsystem, Transponders, Wideband receiver, Receive-only home TV system, MATV and CATV", lectures: 4, section: "Midterm" },
      { chapter: "Propagation", topic: "Quantifying attenuation and depolarization, Propagation effects that are not associated with hydrometeors; Prediction of rain attenuation, Prediction of XPD, Propagation impairments countermeasures.", lectures: 2, clo: "CLO-2", section: "Final" },
      { chapter: "Link Design", topic: "EIRP, Transmission Losses; Free-space transmission, System noise temperature; G/T ratio, Noise figure, Design of downlinks, Design of uplink, Design of specified C/N: combining C/N and C/I values in satellite links, Overall C/No, Link design procedure.", lectures: 4, clo: "CLO-2", section: "Final" },
      { chapter: "Multiple Access", topic: "Pre-assigned FDMA, Demand-assigned FDMA; Spade System, TDMA, Frame and burst formats of TDMA; Reference burst, On-board signal processing, Network Synchronization, Satellite-Switched TDMA", lectures: 6, clo: "CLO-2", section: "Final" },
      { chapter: "VSAT Systems", topic: "Overview of VSAT systems, Network architectures; VSAT Access control protocols, Interference issues; VSAT earth station engineering.", lectures: 3, clo: "CLO-3", section: "Final" },
      { chapter: "GPS", topic: "GPS position location principles; Satellite signal acquisition; GPS signal levels, Timing accuracy, GPS receiver operation, GPS navigation message", lectures: 4, section: "Final" }
    ],
    textBooks: [
      "Dennis Roddy, \"Satellite Communication System\", McGraw Hill Companies Inc., 2001.",
      "Tri. T. Haa, \"Digital Satellite Communications\", McGraw-Hill Companies Inc., 1990."
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/ Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "7-9",
    code: "CCE-4715",
    title: "Research Methodology",
    creditHours: 1,
    contactHours: "1 CH per Week",
    prerequisite: "",
    objectives: [
      "The Fundamentals of Research Methodology is a hands-on course designed to impart education in the foundational methods and techniques of academic research in Science and Engineering context.",
      "UG students would examine and be practically exposed to the main components of a research framework i.e., problem definition, research design, data collection, ethical issues in research, time management, report writing, and presentation.",
      "Once equipped with this knowledge, participants would be well-placed to conduct disciplined research under supervision in an area of their choosing.",
      "In addition to their application in an academic setting, many of the methodologies discussed in this course would be similar to those deployed in professional research environments."
    ],
    outcomes: [
      { clo: "CLO1", description: "Comprehend various steps and their chronology for a good design of Research", plo: "PLO-1", bloomsLevel: "Comprehension" },
      { clo: "CLO2", description: "Comprehend and apply the methods of efficient literature review, data collection and sampling design", plo: "PLO-2", bloomsLevel: "Application" },
      { clo: "CLO3", description: "Critically evaluate current research and propose possible alternate directions for further work", plo: "PLO-8", bloomsLevel: "Evaluation" },
      { clo: "CLO4", description: "Comprehend various issues connected to writing a good research report including Plagiarism", plo: "PLO-12", bloomsLevel: "Comprehension" }
    ],
    content: [
      { chapter: "Introduction to Research Methods", topic: "Philosophy of Science, Evolutionary Epistemology, Scientific Methods, Hypotheses Generation and Evaluation.", lectures: 3, clo: "CLO-1,2,3&4", section: "Midterm" },
      { chapter: "Research Design", topic: "Current issues in engineering education research, Code of Research Ethics, Research Design - Survey Research - Case Study Research.", lectures: 2, section: "Midterm" },
      { chapter: "Fundamentals", topic: "Definition and Objectives of Research, Various Steps in Scientific Research, Types of Research; Research Purposes.", lectures: 2, section: "Midterm" },
      { chapter: "Literature Reviews", topic: "Element of research, reviewing of related works, choosing of methodology, comparative method, proposed method, Design of Research Methodology: Designing of proposed method.", lectures: 2, clo: "CLO-1,2,3&4", section: "Final" },
      { chapter: "Data Collection and Sampling Design", topic: "Sources of Data: Primary Data, Secondary Data; Procedure Questionnaire- Survey and Experiments – Design of Survey and Experiments.", lectures: 2, section: "Final" },
      { chapter: "Sampling", topic: "Sampling Merits and Demerits - Control Observations - Procedures – Sampling Errors. Qualitative research approaches, Statistics & quantitative research approaches.", lectures: 1, section: "Final" },
      { chapter: "Research Reports", topic: "Structure and Components of Research Report, Types of Report, Layout of Research Report, Mechanism of writing a research report. Research design, including mixed methods, Measures of research quality.", lectures: 2, clo: "CLO-1,2,3&4", section: "Final" },
      { chapter: "Plagiarism", topic: "Abstract, introduction, materials and methods, results, discussion, table, figures, citations, references, format, latex, conference paper, journal paper, Seminar and presentation", lectures: 1, section: "Final" }
    ],
    textBooks: ["C.R. Kothari, \"Research Methodology Methods and Techniques\", 2/e, Vishwa Prakashan, 2000"],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/ Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "7-10",
    code: "LAW-4721",
    title: "Professional Ethics and Environmental Protection Law",
    creditHours: 2,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [
      "In this course student learn about \"Professional Ethics and Environmental Protection Law\" in regards to nature and concept of law, company law, labour law, history and development of engineering ethics, ethical expectations and cyber law."
    ],
    outcomes: [
      { clo: "CLO1", description: "Identify the legal problems in social and environmental contexts commonly encountered by engineers in their professional fields/industries.", plo: "PLO-2", bloomsLevel: "Cognitive / Analyzing" },
      { clo: "CLO2", description: "Understand the impact of knowledge about Constitutional provisions for the protection of environment need for development.", plo: "PLO-7", bloomsLevel: "Cognitive / Understanding" },
      { clo: "CLO3", description: "Demonstrate analytical skills through investigation and evaluation of ethical problems in engineering settings.", plo: "PLO-8", bloomsLevel: "Cognitive / Analyzing" },
      { clo: "CLO4", description: "Communicate effectively about their duties and responsibilities as professionals through gaining knowledge of the philosophies of ethics, professional practice, and world culture", plo: "PLO-10", bloomsLevel: "Affective / Responding" }
    ],
    content: [
      { chapter: "Law Basics", topic: "Definition and Theories of Law, Nature and Scope of Law, Purposes of Law, Sources of Law, School of Jurisprudence, Theories of Punishment, Meaning of Rights and Duties, Legal Personality, Ownership and Possession, Administration of Justice.", lectures: 5, section: "Midterm" },
      { chapter: "Law of Contract", topic: "Definition and Essential Elements of Contract, Principles of Law of Contract, Law of Agency, Law of Partnership, Law of Sale of Goods, Law of Negotiable Instruments, Law of Insurance and Insolvency.", lectures: 5, clo: "CLO-1,2,3&4", section: "Midterm" },
      { chapter: "Labour Law", topic: "The Scope and Sources of Labour Law, Elementary Principles of Labour Law, Labour Laws in Bangladesh, Law in relation to wages, working hours and leave, Law in relation to health, safety and other condition to work.", section: "Midterm" },
      { chapter: "Company Law", topic: "The Companies Act with special reference to the amendment and ordinances applicable in Bangladesh. Law relating to the formation, incorporation, management and winding up of companies", clo: "CLO-1,2,3&4", section: "Midterm" },
      { chapter: "History and development of Engineering Ethics", topic: "History and Development of Engineering Ethics, Meaning of Ethics and Engineering Ethics, Applied Ethics in Engineering, Human Qualities of an Engineer, Obligation of an Engineer to the clients and to other Engineers, Measures to be taken in order to improve the quality of engineering profession.", clo: "CLO-4", section: "Final" },
      { chapter: "Ethical Expectation", topic: "Employers and Employees inter-professional relationship, maintaining a commitment of Ethical Standards, Desired characteristics of professional code.", section: "Final" },
      { chapter: "Cyber Law Introduction", topic: "Definition and Nature of Cyber Law, The need for cyber law, Regulation of Technology and Internet, The Internet and Problems of Geography and Sovereignty, Freedom of Expression on Internet.", clo: "CLO-1,2,3&4", section: "Final" },
      { chapter: "The Relationship between Legal and Technological Regulations", topic: "Intellectual Property, Copy rights, Trade Marks, Industrial Designs, Electronic and Digital Signature, Electronic Contract.", clo: "CLO-3", section: "Final" },
      { chapter: "Liabilities of Internet Intermediaries", topic: "Defamatory Contents, Privacy, copy rights, infringement. Liabilities relating to electronic financial transaction", section: "Final" }
    ],
    textBooks: [
      "Mohammadullah Mojaher, \"Essential Laws for Professionals\", Arabi Library, 2017",
      "M.C. Kuchhal & Vivek Kuchhall, \"Mercantile Law\", Vikas Publishing House, 8th Edition, 2000",
      "AI Khan, \"Fundamentals of Company Law with The Law of Partnership\", Dhaka, 8th edition, 2017",
      "Abdul Halim, \"The Bangladesh Labour Code, 2006\", Dhaka CCB Foundation, 2011"
    ],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: ["Lecture", "White Board Writing", "Questions and Answers", "Tutorial", "Discussions", "Power point Presentation"],
    assessmentTools: ["Class Attendance", "Class test", "Quizzes/ Assignment on problem solution", "Mid-Term & Semester End Examination", "Project evaluation & Viva"]
  },
  {
    id: "7-11",
    code: "CCE-47XX",
    title: "Elective I",
    creditHours: 2,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [],
    outcomes: [],
    content: [],
    textBooks: [],
    assessment: { attendance: 10, classTest: 10, midterm: 30, final: 50 },
    deliveryMethods: [],
    assessmentTools: []
  },
  {
    id: "7-12",
    code: "CCE-47XX",
    title: "Elective I Sessional",
    creditHours: 1,
    contactHours: "2 CH per Week",
    prerequisite: "",
    objectives: [],
    outcomes: [],
    content: [],
    textBooks: [],
    assessment: { attendance: 10, classTest: 0, midterm: 40, final: 50 },
    deliveryMethods: [],
    assessmentTools: []
  }
];
