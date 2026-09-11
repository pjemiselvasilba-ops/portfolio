// Single source of truth for portfolio content.
// PLACEHOLDER_* values are clearly marked — replace with real info before deploying.

export const profile = {
  name: "Jemi Selvasilba P",
  role: "MERN Stack Developer",
  tagline: "Building modern, scalable full-stack web applications.",
  location: "Tirunelveli / Tuticorin, Tamil Nadu, India",
  summary:
    "Professional Summary: MERN Stack Developer with practical experience developing real-world full-stack applications during internship and academic projects. Experienced in frontend development, backend APIs, database integration, authentication, and CRUD operations.",
  github: "https://github.com/pjemiselvasilba-ops",
  linkedin: "https://www.linkedin.com/in/p-jemiselva-silba-b1408a326",
  email: "pjemiselvasilba@gmail.com",
  phone: "6369622204",
  resumeUrl: "/portfolio/resume.html",
};

export const education = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Francis Xavier Engineering College, Tirunelveli",
    affiliation: "Anna University — R2024 Curriculum",
    period: "2025 - 2027",
    detail: "Currently pursuing in 2nd Year",
  },
  {
    id: "bsc",
    degree: "B.Sc. Information Technology",
    institution: "Pope's College",
    affiliation: "Manonmaniam Sundaranar University",
    period: "2022 - 2025",
    detail: "CGPA 8.55 / 10 — Rank Holder, Gold Medal",
  },
];

export const skills = {
  Programming: ["C", "C++", "JavaScript"],
  Frontend: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "Mongoose", "MySQL"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "MongoDB Compass", "Netlify", "Vercel"],
  Libraries: [
    "Axios",
    "React Router DOM",
    "Framer Motion",
    "Recharts",
    "TanStack Query",
    "React Hook Form",
    "Zod",
    "Multer",
    "jsPDF",
    "html2canvas",
  ],
  Learning: ["TypeScript", "Advanced Tailwind CSS", "TanStack Router"],
};

export const experience = [
  {
    id: "digisailor",
    company: "Digisailor Pvt. Ltd.",
    role: "Full Stack Development Intern",
    period: "June 2026 - July 2026",
    project: "Global Commerce Compass",
    points: [
      "Developed full-stack web applications using the MERN stack for real-world use cases.",
      "Implemented authentication, CRUD operations, and RESTful APIs for food donation and request workflows.",
      "Designed database schemas and modules for donor, NGO, and admin interactions using MongoDB and Mongoose.",
      "Built and connected frontend interfaces with backend services for seamless end-to-end functionality.",
      "Worked on project deployment and collaborated with team members to deliver the application successfully.",
    ],
  },
];

export const featuredProject = {
  id: "foodshare",
  title: "Smart Food Sharing and Donation Platform",
  shortName: "FoodShare",
  featured: true,
  category: "MERN / Full Stack",
  description:
    "A full-stack MERN web application designed to reduce food wastage by connecting surplus-food donors with NGOs, built during a full-stack development internship at Digisailor.",
  portals: ["Donor Portal", "NGO Portal", "Admin Dashboard"],
  tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Mongoose", "JWT", "Tailwind CSS"],
  features: [
    {
      group: "Authentication",
      items: [
        "User signup, login, and logout",
        "JWT authentication",
        "Role-based authentication",
        "Donor / NGO role selection",
      ],
    },
    {
      group: "Food Donation",
      items: [
        "Donors add food donations with details, quantity, and expiry date/time",
        "Location tagging and food image upload",
        "View own donations",
      ],
    },
    {
      group: "Request & Collection",
      items: [
        "NGOs view and request available food",
        "Donors/admin manage incoming requests",
        "Request and collection status tracking",
        "Request history",
      ],
    },
    {
      group: "Admin",
      items: [
        "View users, donations, and requests",
        "Manage records",
        "Dashboard statistics",
      ],
    },
  ],
  githubUrl: null,
  liveUrl: null,
};

export const otherProjects = [
  {
    id: "global-commerce",
    title: "Global Commerce Compass",
    category: "Full Stack",
    description:
      "A product search and comparison platform that helps users compare global product pricing and visualize market trends.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: null,
    liveUrl: null,
  },
];

export const certifications = [
  {
    id: "nptel-cloud",
    name: "Cloud Computing",
    issuer: "NPTEL",
    topic: "Cloud Computing",
    date: null,
    url: null,
  },
  {
    id: "simplilearn-genai",
    name: "Generative AI Studio",
    issuer: "Simplilearn",
    topic: null,
    date: null,
    url: null,
  },
];

export const achievements = [
  {
    id: "gold-medal",
    title: "Rank Holder — Gold Medal",
    detail:
      "Secured 1st rank and a Gold Medal in B.Sc. Information Technology at Pope's College, with a CGPA of 8.55/10.",
  },
  {
    id: "internship",
    title: "Full Stack Development Internship",
    detail:
      "Completed a full-stack development internship at Digisailor, delivering the Smart Food Sharing and Donation Platform using the MERN stack.",
  },
];

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];
