import proj1 from "@/assets/project1.jpg";
import proj2 from "@/assets/project2.jpg";
import proj3 from "@/assets/project3.jpg";
import cert1 from "@/assets/cert1.jpg";
import cert2 from "@/assets/cert2.jpg";
import cert3 from "@/assets/cert3.jpg";
import cert4 from "@/assets/cert4.jpg";

export const siteConfig = {
  name: "Shan.A",
  tagline: "MERN Developer • Frontend & Backend Enthusiast",
  email: "shanr1164@gmail.com",
  phone: "+918590795942",
  location: "Kannur, Kerala, India",
  githubUsername: "shanofficial1",
  profileImg :"https://i.postimg.cc/d3dFqYXX/shan1.jpg",
  socials: {
    github: "https://github.com/shanofficial1",
    linkedin: "https://www.linkedin.com/in/shanofficial/",
    instagram: "https://www.instagram.com/___sh__.an__/",
  },
} as const;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "activities", label: "Activities & Hackathon" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "repos", label: "Git Repository" },
  { id: "contact", label: "Contact" },
] as const;

export const education = [
  {
    level: "Postgraduate",
    degree: "Master of Computer Applications (MCA)",
    institution: "Kannur University Campus (KUC), Mangattuparamba",
    years: "2025 - 2027",
    location: "Mangattuparamba, Kannur, Kerala",
  },
  {
    level: "Undergraduate",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Amsteck Arts and Science College,Kalliasseri",
    years: "2022 - 2025",
    location: "Kalliasseri,Kannur, Kerala",
  },
  {
    level: "Secondary",
    degree: "SSLC (10th Standard)",
    institution: "Azhikode High School",
    years: "2018 - 2019",
    location: "Azhikode, Kannur, Kerala",
  },
];


export const projects = [
  {
    title: "CharityLink-Crowdfunding Platform",
    description:
      "Is a Kerala-based crowdfunding platform that helps patients and families raise funds for medical treatment. It connects donors with genuine causes, ensuring transparent, quick, and secure contributions.",
    image: "https://i.postimg.cc/3rmH681X/charitylink-media.jpg",
    demoUrl: "#",
    tags: ["React.js", "Node.js","Express.js", "TailwindCss", "MongoDB"],
  },

];

export const activities = [
  {
    title: "Hackathon XYZ",
    date: "Jun 2024",
    location: "Virtual",
    summary: "Built an AI-powered note summarizer in 24 hours.",
    details:
      "Collaborated in a team of 4 to design and build a summarization tool using open-source models, achieving 2nd place.",
    image: cert1,
  },
  {
    title: "Open Source Sprint",
    date: "Mar 2024",
    location: "Community Event",
    summary: "Contributed bug fixes to a UI library and improved docs.",
    details:
      "Submitted PRs focused on performance and accessibility improvements; mentored first-time contributors.",
    image: cert2,
  },
  {
    title: "Tech Meetup Talk",
    date: "Jan 2024",
    location: "Local Meetup",
    summary: "Gave a talk on state management patterns in React.",
    details:
      "Covered context, reducers, and modern libraries; included live coding and Q&A.",
    image: cert3,
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Git",
  "REST APIs",
  "Accessibility",
  "CI/CD",
];

export const certificates = [
  { title: "Certificate of Excellence", issuer: "Tech Org", year: "2024", image: cert1 },
  { title: "Frontend Specialist", issuer: "Online Academy", year: "2023", image: cert2 },
  { title: "React Professional", issuer: "Certification Board", year: "2023", image: cert3 },
  { title: "Web Performance", issuer: "Web School", year: "2022", image: cert4 },
];
