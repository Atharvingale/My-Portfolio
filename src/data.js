// Static resume data — extracted from Atharva Ingale's resume PDF
export const PROFILE = {
  name: "ATHARVA INGALE",
  handle: "atharva.ingale",
  role: "FULL-STACK DEVELOPER",
  subrole: "CLOUD SECURITY ENTHUSIAST",
  location: "PUNE, IN",
  coordinates: "18.5204° N, 73.8567° E",
  email: "ingaleatharv3@gmail.com",
  phone: "+91 74981 17378",
  summary:
    "Third-year CSE student with hands-on experience building full-stack web applications and cloud-connected systems. Skilled in React, Node.js, Firebase, Docker, and SQL. Solved 150+ DSA problems in C++. Holds Google Cybersecurity Certificate. Seeking a software development or cloud-focused internship to apply practical skills and grow in a team environment.",
  resumeUrl:
    "https://drive.google.com/file/d/1485FFTgP0ESltS3oQduCqt8zLkCTha5g/view?usp=sharing",
  socials: {
    github: "https://github.com/Atharvingale",
    linkedin: "https://www.linkedin.com/in/atharva-ingale2005/",
    leetcode: "https://leetcode.com/u/atharva_ingale/",
  },
};

export const SKILLS = [
  {
    label: "LANGUAGES",
    id: "lang",
    items: ["JavaScript", "Python", "C++", "SQL"],
  },
  {
    label: "FRONTEND",
    id: "front",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML / CSS"],
  },
  {
    label: "BACKEND",
    id: "back",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "DATABASES",
    id: "db",
    items: ["MySQL", "Supabase", "Firebase Firestore"],
  },
  {
    label: "CLOUD & DEVOPS",
    id: "cloud",
    items: ["AWS EC2", "Docker", "Vercel", "CI/CD", "Git / GitHub"],
  },
  {
    label: "SECURITY",
    id: "sec",
    items: ["Google Cybersecurity Cert.", "RBAC"],
  },
];

export const PROJECTS = [
  {
    id: "inspira-grid",
    codename: "PROJ_01",
    name: "INSPIRA GRID",
    tagline: "Student Collaboration Platform",
    date: "JAN 2025",
    status: "DEPLOYED",
    tech: ["React", "Node.js", "Express.js", "Firebase Auth", "Firestore", "Vercel"],
    highlights: [
      "Designed and deployed a student collaboration platform with 10–15 REST API endpoints for skill-based team matching.",
      "Implemented Firebase Auth and Firestore for secure authentication and real-time data sync.",
      "Deployed to Vercel with a CI/CD pipeline; Dockerized and hosted on AWS EC2 for containerized practice.",
    ],
    liveUrl: "https://inspira-grid-frontend.vercel.app/",
    repoUrl: "https://github.com/Atharvingale",
  },
  {
    id: "bluecarbon",
    codename: "PROJ_02",
    name: "BLUECARBON",
    tagline: "Blockchain Carbon Credit Platform",
    date: "JUL 2025",
    status: "OPERATIONAL",
    tech: ["React 19", "Node.js", "Express", "Supabase"],
    highlights: [
      "Built a full-stack platform for issuing and managing carbon credits.",
      "Implemented IPCC-compliant scientific carbon calculations covering SOC, biomass, GHG emissions, and uncertainty.",
      "Integrated Supabase for real-time data persistence and role-based access control across the app.",
    ],
    liveUrl: null,
    repoUrl: "https://github.com/Atharvingale",
  },
];

export const EXPERIENCE = [
  {
    id: "reckon-6",
    role: "TEAM LEAD",
    org: "Reckon 6.0 Hackathon · JIET Jodhpur",
    date: "MARCH 2025",
    highlights: [
      "Led a 3-member team to build a CBT exam platform (mock exams + resource hub) in 24 hours.",
      "Architected a real-time Firebase backend; received positive mentor feedback on concept and execution.",
      "Delivered a working prototype — placed in the top 100 out of 1000+ teams.",
    ],
  },
];

export const EDUCATION = {
  degree: "B.Tech · Computer Science Engineering",
  institution: "AISSMS Institute of Information Technology, Pune",
  window: "AUG 2023 — AUG 2027",
  cgpa: "7.88 / 10",
  coursework: ["Data Structures", "Operating Systems", "DBMS", "Computer Networks"],
};

export const PUBLICATIONS = [
  {
    title:
      "A Unified Edge-AI and IoT Framework for Driver Monitoring and Accident Risk Prediction",
    venue: "TQCEBT 2026 · Scopus-indexed",
    date: "APRIL 2026",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Google Cybersecurity Certificate",
    detail: "9-course professional program — Completed",
  },
  {
    title: "150+ DSA Problems on LeetCode",
    detail: "C++ · Arrays, Trees, Graphs, DP",
  },
  {
    title: "Top 100 / 1000+ Teams · Reckon 6.0",
    detail: "24-hour Hackathon, JIET Jodhpur",
  },
];

export const BOOT_LINES = [
  "[  OK  ] Initializing quantum core ..............",
  "[  OK  ] Mounting /dev/portfolio ................",
  "[  OK  ] Loading module: react.dom.hydration ....",
  "[  OK  ] Handshake with satellite ARRAY-07 ......",
  "[  OK  ] Decrypting identity: ATHARVA.INGALE ....",
  "[  OK  ] Skill matrix synced (LANG/CLOUD/SEC) ...",
  "[  OK  ] Booting UI subsystem: chakra_petch v1 ..",
  "> READY.",
];
