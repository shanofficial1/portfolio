const proj1 = "https://avatars.mds.yandex.net/i?id=abcdef1234567890&n=13";
const proj2 = "https://avatars.mds.yandex.net/i?id=9876543210abcdef&n=13";
const proj3 = "https://avatars.mds.yandex.net/i?id=fedcba0987654321&n=13";
const cert1 = "https://avatars.mds.yandex.net/i?id=1111111111111111&n=13";
const cert2 = "https://avatars.mds.yandex.net/i?id=2222222222222222&n=13";
const cert3 = "https://avatars.mds.yandex.net/i?id=3333333333333333&n=13";
const cert4 = "https://avatars.mds.yandex.net/i?id=4444444444444444&n=13";

import profileImg from "@/assets/shan.jpg";
export const siteConfig = {
  name: "Shan A",
  tagline: "MERN Stack Developer • React & Node.js Enthusiast",
  email: "shanr1164@gmail.com",
  phone: "+91 8590795942",
  location: "Kerala, India",
  githubUsername: "shan-official1",

  profileImg,
  socials: {
    github: "https://github.com/octocat",
    linkedin: "https://www.linkedin.com/in/your-linkedin/",
    twitter: "https://twitter.com/your-handle",
    instagram: "https://instagram.com/your-handle",
    facebook: "https://facebook.com/your-handle",
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
    degree: "Master of Business Administration (MBA)",
    institution: "Dr. P.K. Rajan Memorial Campus, Kannur University",
    years: "2025 - 2027",
    location: "Palathadam, Nileshwaram, Kerala",
  },
  {
    level: "Undergraduate",
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Example Institute of Technology",
    years: "2021 - 2025",
    location: "City, Country",
  },
];

export const projects = [
  {
    title: "Analytics Dashboard",
    description:
      "A modular analytics dashboard with live charts and responsive cards built with React and Recharts.",
    image: proj1,
    demoUrl: "#",
    tags: ["React", "Recharts", "Tailwind"],
  },
  {
    title: "Mobile App Concept",
    description:
      "A mobile-first concept with smooth transitions and premium visuals.",
    image: proj2,
    demoUrl: "#",
    tags: ["React", "Framer Motion"],
  },
  {
    title: "Landing Page Kit",
    description:
      "A modern landing page kit with components and accessibility baked in.",
    image: proj3,
    demoUrl: "#",
    tags: ["UI/UX", "Accessibility"],
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
