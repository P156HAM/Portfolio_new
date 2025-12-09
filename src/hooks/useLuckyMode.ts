import { useState } from "react";
import { LuckyMode, Theme, Project } from "@/types";
import { LUCKY_MODES, LUCKY_MODE_DURATION, PROJECT_SCROLL_DELAY } from "@/constants";
import { THEMES } from "@/constants";

export const useLuckyMode = (projects: Project[]) => {
  const [luckyMode, setLuckyMode] = useState<LuckyMode>(null);
  const [theme, setTheme] = useState<Theme>("default");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleLuckyClick = () => {
    const randomMode =
      LUCKY_MODES[Math.floor(Math.random() * LUCKY_MODES.length)];
    setLuckyMode(randomMode);

    if (randomMode === "theme") {
      // Theme change happens immediately but effect stays visible
      setTimeout(() => {
        const themeKeys = Object.keys(THEMES) as Theme[];
        const randomTheme =
          themeKeys[Math.floor(Math.random() * themeKeys.length)];
        setTheme(randomTheme);
        // Keep mode visible for duration
        setTimeout(() => setLuckyMode(null), LUCKY_MODE_DURATION);
      }, 100);
    } else if (randomMode === "project") {
      const randomProject =
        projects[Math.floor(Math.random() * projects.length)];
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setHoveredProject(projects.indexOf(randomProject));
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

