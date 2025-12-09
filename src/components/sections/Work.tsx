import { Project, MousePosition, ThemeConfig } from "@/types";
import { SectionTitle } from "../common/SectionTitle";
import { ProjectCard } from "./ProjectCard";

interface WorkProps {
  projects: Project[];
  hoveredProject: number | null;
  mousePos: MousePosition;
  onProjectHover: (index: number | null) => void;
  onCursorEnter: () => void;
  onCursorLeave: () => void;
  theme: ThemeConfig;
}

export const Work = ({
  projects,
  hoveredProject,
  mousePos,
  onProjectHover,
  onCursorEnter,
  onCursorLeave,
  theme,
}: WorkProps) => {
  return (
    <div
      id="work"
      className={`py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 transition-colors duration-1000 ${
        theme.bg === "bg-gray-900" || theme.bg === "bg-black"
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-b from-white via-purple-50/30 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Selected Work" title="Projects" />

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              isHovered={hoveredProject === i}
              mousePos={mousePos}
              onMouseEnter={() => {
                onProjectHover(i);
                onCursorEnter();
              }}
              onMouseLeave={() => {
                onProjectHover(null);
                onCursorLeave();
              }}
              onLinkClick={() => {
                console.log("Clicking project:", project.url);
                if (project.url) {
                  window.open(project.url, "_blank", "noopener,noreferrer");
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
