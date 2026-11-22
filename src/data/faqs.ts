export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Admissions" | "Courses" | "Facilities";
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Who can join JAYRISH ENGINEERING?",
    answer: "Our courses are specifically structured for Diploma Engineering students, BE / B.Tech mechanical engineering students, ITI technicians, freshers, job seekers, and existing CNC and VMC operators aiming to transition into programming or CAD/CAM roles.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Where is the institute located?",
    answer: "JAYRISH ENGINEERING is located at 06 BLDG, Flat No. 64/6, Station Road, Side Colony, Pirojshanagar, Vikhroli East, Mumbai, Maharashtra 400083, India. The institute is within easy walking distance of Vikhroli Railway Station.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "What is the duration of the CNC course?",
    answer: "CNC machine operating and CNC programming courses generally take around 3 months, depending on the selected syllabus, pace, and whether you are enrolled in weekday or weekend sessions.",
    category: "Courses"
  },
  {
    id: "faq-4",
    question: "What is the duration of the VMC course?",
    answer: "VMC machine operating and VMC milling programming courses typically take approximately 3 months, covering 3-axis milling fundamentals, coordinate systems, canned cycles, and program preparation.",
    category: "Courses"
  },
  {
    id: "faq-5",
    question: "Do you offer offline training?",
    answer: "Yes. All training programs at JAYRISH ENGINEERING are conducted in classroom / offline mode in Vikhroli East, Mumbai to ensure structured technical instruction, direct instructor guidance, and interactive problem-solving.",
    category: "General"
  },
  {
    id: "faq-6",
    question: "Is a course completion certificate provided?",
    answer: "Yes. An official course completion certificate is awarded to each candidate upon successful completion of the course syllabus and final evaluation.",
    category: "Admissions"
  },
  {
    id: "faq-7",
    question: "Do you offer CNC and VMC programming separately?",
    answer: "Yes. We offer separate, dedicated training programs for both CNC Turning Programming and Vertical Machining Center (VMC) Milling Programming, allowing students to specialize according to their career goals.",
    category: "Courses"
  },
  {
    id: "faq-8",
    question: "Which CAD/CAM software is taught?",
    answer: "Our software curriculum includes Mastercam 2D & 3D, Delcam (PowerMill) programming, AutoCAD 2D mechanical drafting, and Siemens CNC Sinumerik control systems.",
    category: "Courses"
  },
  {
    id: "faq-9",
    question: "Can working professionals join?",
    answer: "Yes. Both engineering students and working professionals, such as machine operators, technicians, and toolroom staff, regularly enroll with us to upgrade their technical and programming skills.",
    category: "Admissions"
  },
  {
    id: "faq-10",
    question: "Are weekend batches available?",
    answer: "Yes. We organize flexible batch timings, including dedicated weekend batches and flexible timing slots to accommodate working professionals and college students.",
    category: "Admissions"
  },
  {
    id: "faq-11",
    question: "Is live machine training available?",
    answer: "Our classroom training provides thorough coverage of machine operating procedures, control console handling, coordinate setting, tooling principles, and program simulation. Actual hands-on live machine practice is subject to ongoing workshop facility confirmation.",
    category: "Facilities"
  },
  {
    id: "faq-12",
    question: "How can students enquire about course fees?",
    answer: "Students can enquire about course-wise fee structures, available batches, and admission details by contacting JAYRISH ENGINEERING directly via phone call or WhatsApp at +91 82374 97354.",
    category: "Admissions"
  }
];
