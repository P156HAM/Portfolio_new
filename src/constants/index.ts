import { Project, SocialLink, Stat, SkillGroup } from "@/types";

export const PROJECTS: Project[] = [
  {
    name: "logslim",
    tagline: "npm package · CLI + MCP server",
    category: "Open Source · Developer Tooling",
    year: "2025",
    role: "Creator & maintainer",
    description:
      "An open-source CLI and MCP server that compacts noisy test and build output before an AI agent reads it — cutting 80–95% of the tokens, and posting readable failure summaries straight onto GitHub pull requests.",
    highlights: [
      "Cuts 80–95% of tokens on failing test/build output for Claude Code, Cursor and other agents",
      "Ships a CLI, an MCP server and a GitHub Action from a single TypeScript codebase",
      "Zero-config — npx logslim -- npm test — MIT licensed and published to npm",
    ],
    tech: ["TypeScript", "Node.js", "MCP", "Zod", "GitHub Actions"],
    url: "https://www.npmjs.com/package/logslim",
    linkLabel: "View on npm",
    accent: "#a78bfa",
    featured: true,
    npmPackage: "logslim",
  },
  {
    name: "Vaxllo",
    tagline: "AI receptionist for small businesses",
    category: "AI · Web & Mobile",
    year: "2025",
    role: "Full-stack developer",
    description:
      "An AI receptionist that answers calls and books appointments for small businesses around the clock, so they never miss a customer.",
    highlights: [
      "Real-time voice automation built on Twilio and OpenAI",
      "React Native client backed by a realtime Supabase backend",
      "Automated call handling, transcription and scheduling",
    ],
    tech: [
      "React Native",
      "Node.js",
      "Supabase",
      "OpenAI",
      "Twilio",
      "TypeScript",
      "Tailwind CSS",
    ],
    url: "https://vaxllo.netlify.app/",
    linkLabel: "Visit site",
    accent: "#7c3aed",
  },
  {
    name: "Closar AI",
    tagline: "Health tracker for patients & doctors",
    category: "Health · Web & Mobile",
    year: "2024",
    role: "Full-stack developer",
    description:
      "A health-tracking platform that gives patients and their doctors a shared, real-time view of care across web and mobile.",
    highlights: [
      "React web app and React Native mobile client sharing one product",
      "Serverless backend on GCP Cloud Functions with Firebase auth & data",
      "Python services for processing health data",
    ],
    tech: [
      "React",
      "React Native",
      "Node.js",
      "GCP Cloud Functions",
      "Firebase",
      "Python",
      "TypeScript",
    ],
    url: "https://closarai.netlify.app/",
    linkLabel: "Visit site",
    accent: "#db2777",
  },
  {
    name: "Selma Services",
    tagline: "Connecting customers with local services",
    category: "Marketplace · iOS",
    year: "2024",
    role: "Mobile developer",
    description:
      "A marketplace app that connects customers with local service providers, shipped to the Apple App Store.",
    highlights: [
      "React Native + Expo, published on the App Store",
      "Booking flow integrated with the Google Calendar API",
      "Serverless backend on GCP and Firebase",
    ],
    tech: [
      "React Native",
      "Expo",
      "Node.js",
      "GCP Cloud Functions",
      "Firebase",
      "Google Calendar API",
    ],
    url: "https://apps.apple.com/se/app/selma-services/id6747241740?l=en-GB",
    linkLabel: "View on App Store",
    accent: "#0ea5e9",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/P156HAM" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/hamdi-almasalmeh/" },
  { name: "npm", url: "https://www.npmjs.com/package/logslim" },
];

export const STATS: Stat[] = [
  { value: "4", label: "Products shipped" },
  { value: "AI", label: "Core focus" },
  { value: "OSS", label: "npm author" },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Three.js"],
  },
  { category: "Mobile", items: ["React Native", "Expo"] },
  {
    category: "Backend & Cloud",
    items: ["Node.js", "Python", "GCP", "Firebase", "Supabase", "SQL / NoSQL", "Docker", "CI/CD"],
  },
  { category: "AI & Automation", items: ["OpenAI / LLMs", "MCP", "Twilio Voice"] },
  { category: "Craft", items: ["Figma", "Git", "Accessibility"] },
];

export const EMAIL = "a.hamdi.almasalmeh@gmail.com";
export const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/r/eventedit?text=Call+with+Hamdi&details=Let%27s+meet+via+Google+Meet.+Pick+a+date+and+time+that+works+for+you.&location=Google+Meet&add=a.hamdi.almasalmeh@gmail.com";
