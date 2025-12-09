export interface Project {
  name: string;
  type: string;
  year: string;
  color: string;
  desc: string;
  tech: string[];
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

export interface MousePosition {
  x: number;
  y: number;
}

export type LuckyMode =
  | "particles"
  | "confetti"
  | "theme"
  | "project"
  | "matrix"
  | "kaleidoscope"
  | "glitch"
  | null;

export type Theme = "default" | "dark" | "neon" | "sunset" | "ocean";

export interface ThemeConfig {
  bg: string;
  text: string;
  accent: string;
  primary: string;
  secondary: string;
  gradient: string;
}

export interface ThemeMap {
  [key: string]: ThemeConfig;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
}

