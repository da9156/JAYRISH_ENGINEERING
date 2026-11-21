export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Admissions" | "Courses" | "Facilities";
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Who can join the training programs at JAYRISH ENGINEERING?",
    answer: "Our courses are specifically structured for Diploma Engineering students, BE / B.Tech mechanical engineering students, ITI technicians, freshers, job seekers, and existing CNC/VMC operators aiming to transition into programming or CAD/CAM roles.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "What is the typical duration of the courses?",
    answer: "Most technical training courses are structured around an approximate 3-month duration. Exact timelines may vary based on whether you choose individual software modules (like AutoCAD) or comprehensive operating and programming tracks.",
    category: "Courses"
  },
  {
    id: "faq-3",
    question: "Do you provide classroom / offline training?",
    answer: "Yes. All training is conducted in offline classroom mode at our center in Vikhroli East, Mumbai, ensuring structured face-to-face instruction, direct faculty guidance, and interactive problem solving.",
    category: "General"
  },
  {
    id: "faq-4",
    question: "Do you provide a course completion certificate?",
    answer: "Yes. An official course completion certificate is awarded to every candidate upon successful completion of the course syllabus and evaluation.",
    category: "Admissions"
  },
  {
    id: "faq-5",
    question: "Do you offer separate CNC and VMC programming courses?",
    answer: "Yes. We offer dedicated courses for both CNC Turning Programming and Vertical Machining Center (VMC) 3-Axis Milling Programming, as well as integrated programs.",
    category: "Courses"
  },
  {
    id: "faq-6",
    question: "Which CAD/CAM software programs are taught?",
    answer: "Our software curriculum includes Mastercam 2D & 3D, Delcam / PowerMill programming, AutoCAD 2D Drafting, and Siemens CNC Sinumerik control systems.",
    category: "Courses"
  },
  {
    id: "faq-7",
    question: "Can working professionals join your batches?",
    answer: "Yes. Working professionals, machine operators, and supervisors frequently enroll with us to upgrade their technical credentials. Flexible morning, evening, and weekend batch slots are available.",
    category: "Admissions"
  },
  {
    id: "faq-8",
    question: "What are the course fees and payment options?",
    answer: "Please contact JAYRISH ENGINEERING directly via phone or WhatsApp (+91 82374 97354) for complete course-wise fee structures, seasonal offers, and admission details.",
    category: "Admissions"
  },
  {
    id: "faq-9",
    question: "Are weekend batches available for working operators?",
    answer: "Yes, we organize dedicated weekend and flexible time-slot batches. Please get in touch with our admissions coordinator to verify upcoming weekend schedule dates.",
    category: "Admissions"
  },
  {
    id: "faq-10",
    question: "Is practical machine training available?",
    answer: "Our classroom training provides thorough coverage of machine operating procedures, control console handling, coordinate setting, tooling principles, and program simulation. Actual hands-on live machine training is subject to the confirmation of available machine workshop facilities.",
    category: "Facilities"
  }
];
