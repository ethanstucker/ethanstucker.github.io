export interface Experience {
  id: string;
  company: string;
  location: string;
  title: string;
  type: 'full-time' | 'internship' | 'part-time';
  startDate: string;
  endDate: string | 'Present';
  highlights: string[];
  technologies?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  major: string;
  graduationDate: string;
  relevantCoursework: string[];
}

export interface Skill {
  name: string;
  category: 'language' | 'tool' | 'soft';
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    company: string;
    email: string;
    location: string;
    summary: string;
  };
  experience: Experience[];
  education: Education;
  skills: Skill[];
  projects: Project[];
  socialLinks: SocialLink[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Ethan Stucker",
    title: "Associate Solution Developer",
    company: "Acxiom",
    email: "ethanstucker@example.com",
    location: "Conway, AR",
    summary: "Computer Science graduate from the University of Central Arkansas, now building quality software at Acxiom. Passionate about API development, testing automation, and clean code practices.",
  },
  experience: [
    {
      id: "acxiom-full-time",
      company: "Acxiom LLC",
      location: "Conway, AR",
      title: "Associate Solution Developer",
      type: "full-time",
      startDate: "January 2026",
      endDate: "Present",
      highlights: [
        "Developing and maintaining enterprise software solutions",
        "API development and integration",
        "Quality assurance and automated testing",
        "Collaborating with cross-functional teams on client projects",
      ],
      technologies: ["Java", "API Development", "Automation", "QA Testing"],
    },
    {
      id: "acxiom-intern",
      company: "Acxiom LLC",
      location: "Conway, AR",
      title: "Database Tester Intern",
      type: "internship",
      startDate: "May 2024",
      endDate: "December 2025",
      highlights: [
        "API testing and quality assurance",
        "Developed automation programs for testing workflows",
        "Participated in agile team meetings and sprint planning",
        "Java programming for test automation scripts",
      ],
      technologies: ["Java", "QA Testing", "Automation", "Microsoft Office"],
    },
    {
      id: "chipotle",
      company: "Chipotle",
      location: "Conway, AR",
      title: "Crew / Kitchen Leader",
      type: "part-time",
      startDate: "October 2022",
      endDate: "May 2024",
      highlights: [
        "Customer service and team coordination",
        "Opening/closing procedures and chores",
        "Food and employee safety compliance",
        "Inventory management and food truck ordering",
      ],
    },
    {
      id: "sonic",
      company: "Sonic Drive-In",
      location: "Ash Flat, AR",
      title: "Carhop to Assistant Manager",
      type: "part-time",
      startDate: "March 2021",
      endDate: "May 2022",
      highlights: [
        "Progressed from Carhop to Assistant Manager",
        "Managed nightly deposits and sales receipts",
        "Staff management and scheduling",
        "Maintained food safety and audit readiness",
      ],
    },
  ],
  education: {
    institution: "University of Central Arkansas",
    degree: "Bachelor of Science",
    major: "Computer Science",
    graduationDate: "December 2025",
    relevantCoursework: [
      "Artificial Intelligence",
      "Ethical Hacking",
      "Data Structures",
      "Principles of Programming Languages",
      "Ethical Implications of Technology",
    ],
  },
  skills: [
    // Languages
    { name: "Java", category: "language" },
    { name: "C++", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "Python", category: "language" },
    // Tools
    { name: "API Testing", category: "tool" },
    { name: "QA Automation", category: "tool" },
    { name: "Git", category: "tool" },
    { name: "Microsoft Office", category: "tool" },
    // Soft Skills
    { name: "Fast Learner", category: "soft" },
    { name: "Team Collaboration", category: "soft" },
    { name: "Problem Solving", category: "soft" },
  ],
  projects: [
    {
      name: "Personal Portfolio",
      description: "Modern portfolio website built with React, TypeScript, and Tailwind CSS",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/ethanstucker/ethanstucker.github.io",
      liveUrl: "https://ethanstucker.github.io",
    },
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/ethanstucker" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/ethanstucker" },
  ],
};
