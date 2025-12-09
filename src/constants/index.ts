import { Project, ThemeMap, SocialLink, Stat, Skill } from "@/types";

export const PROJECTS: Project[] = [
  {
    name: "Closar AI - Health Tracker",
    type: "Web & Mobile App",
    year: "2024",
    color: "#ff0080",
    desc: "Health tracker for patients and doctors",
    tech: [
      "React",
      "React Native",
      "Node.js",
      "GCP Cloud Functions",
      "Firebase",
      "Python",
      "Tailwind CSS",
      "TypeScript",
      "Shadcn UI",
    ],
  },
  {
    name: "Quantum Leap",
    type: "Web Experience",
    year: "2024",
    color: "#00ffff",
    desc: "Interactive 3D portfolio for tech startup",
    tech: ["Three.js", "GSAP", "WebGL"],
  },
  {
    name: "Echo System",
    type: "Mobile App",
    year: "2023",
    color: "#8a2be2",
    desc: "Social network for creative professionals",
    tech: ["React Native", "Node.js", "MongoDB"],
  },
  {
    name: "Void Space",
    type: "Branding",
    year: "2023",
    color: "#ff6b35",
    desc: "Complete brand identity for fintech company",
    tech: ["Figma", "After Effects", "Illustrator"],
  },
  {
    name: "Aurora",
    type: "Web App",
    year: "2024",
    color: "#00ff88",
    desc: "Real-time collaboration platform",
    tech: ["Next.js", "Socket.io", "PostgreSQL"],
  },
];

export const THEMES: ThemeMap = {
  default: {
    bg: "bg-white",
    text: "text-gray-900",
    accent: "purple",
    primary: "#8a2be2",
    secondary: "#ff0080",
    gradient: "linear-gradient(135deg, #8a2be2, #ff0080)",
  },
  dark: {
    bg: "bg-gray-900",
    text: "text-white",
    accent: "cyan",
    primary: "#00ffff",
    secondary: "#8a2be2",
    gradient: "linear-gradient(135deg, #00ffff, #8a2be2)",
  },
  neon: {
    bg: "bg-black",
    text: "text-cyan-400",
    accent: "pink",
    primary: "#00ffff",
    secondary: "#ff0080",
    gradient: "linear-gradient(135deg, #00ffff, #ff0080)",
  },
  sunset: {
    bg: "bg-orange-50",
    text: "text-orange-900",
    accent: "orange",
    primary: "#ff6b35",
    secondary: "#ffd700",
    gradient: "linear-gradient(135deg, #ff6b35, #ffd700)",
  },
  ocean: {
    bg: "bg-blue-50",
    text: "text-blue-900",
    accent: "blue",
    primary: "#00ffff",
    secondary: "#0066cc",
    gradient: "linear-gradient(135deg, #00ffff, #0066cc)",
  },
};

export const LUCKY_MODES: Array<
  | "particles"
  | "confetti"
  | "theme"
  | "project"
  | "matrix"
  | "kaleidoscope"
  | "glitch"
> = [
  "particles",
  "confetti",
  "theme",
  "project",
  "matrix",
  "kaleidoscope",
  "glitch",
];

export const PARTICLE_COLORS = [
  "#8a2be2",
  "#ff0080",
  "#00ffff",
  "#ff6b35",
  "#ffd700",
];

export const FLOATING_SHAPE_COLORS = [
  "#8a2be2",
  "#00ffff",
  "#ff0080",
  "#ff6b35",
  "#ffd700",
  "#00ff88",
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "#" },
  { name: "LinkedIn", url: "#" },
];

export const STATS: Stat[] = [
  { value: "10+", label: "Projects" },
  { value: "2", label: "Years Exp" },
  { value: "∞", label: "Ideas" },
];

export const SKILLS: Skill[] = [
  { name: "React" },
  { name: "Three.js" },
  { name: "Figma" },
  { name: "Node.js" },
  { name: "AI/LLM" },
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "Python" },
  { name: "JavaScript" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "SQL" },
  { name: "NoSQL" },
  { name: "Docker" },
  { name: "CI/CD" },
  { name: "Git" },
  { name: "React Native" },
  { name: "Expo" },
];

export const LOADING_DELAY = 2000;
export const PARTICLE_INTERVAL = 100;
export const PARTICLE_COUNT = 5;
export const MAX_PARTICLES = 50;
export const LUCKY_MODE_DURATION = 5000;
export const PROJECT_SCROLL_DELAY = 1000;
export const CIRCLE_PATTERN_COLS = 8;
export const CIRCLE_PATTERN_ROWS = 8;
