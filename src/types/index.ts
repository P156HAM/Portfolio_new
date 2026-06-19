export interface Project {
  name: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  description: string;
  highlights: string[];
  tech: string[];
  url: string;
  linkLabel: string;
  accent: string;
  featured?: boolean;
  /** npm package name — when set, the card shows a live weekly download count */
  npmPackage?: string;
}

export type Theme = "light" | "dark";

export interface SocialLink {
  name: string;
  url: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
