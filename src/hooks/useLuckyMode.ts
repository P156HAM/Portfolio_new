import { useState, useRef } from "react";
import { LuckyMode, Theme, Project } from "@/types";
import {
  LUCKY_MODES,
  LUCKY_MODE_DURATION,
  PROJECT_SCROLL_DELAY,
} from "@/constants";

export const useLuckyMode = (projects: Project[]) => {
  const [luckyMode, setLuckyMode] = useState<LuckyMode>(null);
  const [theme, setTheme] = useState<Theme>("default");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const modeIndexRef = useRef(0);

  const handleLuckyClick = () => {
    // Cycle through modes in order
    const currentMode = LUCKY_MODES[modeIndexRef.current];
    modeIndexRef.current = (modeIndexRef.current + 1) % LUCKY_MODES.length;
    setLuckyMode(currentMode);

    if (currentMode === "theme") {
      // Toggle between default and dark themes
      setTimeout(() => {
        if (theme === "default") {
          setTheme("dark");
        } else {
          setTheme("default");
        }
        // Keep mode visible for duration
        setTimeout(() => setLuckyMode(null), LUCKY_MODE_DURATION);
      }, 100);
    } else if (currentMode === "project") {
      // Cycle through projects in order
      const currentProjectIndex =
        hoveredProject !== null ? (hoveredProject + 1) % projects.length : 0;
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setHoveredProject(currentProjectIndex);
        // Keep mode visible for duration
        setTimeout(() => setLuckyMode(null), LUCKY_MODE_DURATION);
      }, PROJECT_SCROLL_DELAY);
    } else {
      // For visual effects, keep them visible for the full duration
      setTimeout(() => setLuckyMode(null), LUCKY_MODE_DURATION);
    }
  };

  return {
    luckyMode,
    theme,
    hoveredProject,
    setHoveredProject,
    handleLuckyClick,
  };
};
