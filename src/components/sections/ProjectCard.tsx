import { Project, MousePosition } from "@/types";
import { TechBadge } from "../common/TechBadge";
import { CirclePattern } from "../common/CirclePattern";
import { DuotoneCard } from "../common/DuotoneCard";
import { DuotoneText } from "../common/DuotoneText";

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  mousePos: MousePosition;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const ProjectCard = ({
  project,
  isHovered,
  mousePos,
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps) => {
  return (
    <DuotoneCard
      baseColor="#ffffff"
      topColor={`${project.color}15`}
      className="group p-6 sm:p-8 md:p-10 lg:p-16 border-2 border-gray-100 hover:border-purple-600 rounded-2xl md:rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        transform: isHovered ? "scale(1.02) translateY(-5px)" : "scale(1)",
      }}
    >
      {/* Circle Pattern Background */}
      <CirclePattern color={project.color} />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${project.color}15, transparent 60%)`,
          zIndex: 15,
        }}
      />

      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 md:gap-8 z-20">
        <div className="flex-1 w-full">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl shadow-lg flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${project.color}, ${project.color}80)`,
                transform: isHovered
                  ? "rotate(45deg) scale(1.2)"
                  : "rotate(0deg)",
                transition: "all 0.5s ease",
              }}
            />
            <div>
              <div className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wide">
                {project.type}
              </div>
              <div className="text-xs text-gray-400">{project.year}</div>
            </div>
          </div>

          <DuotoneText
            baseColor="#1a1a1a"
            topColor={project.color}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 leading-tight"
            intensity={1}
            maxOffset={3}
          >
            {project.name}
          </DuotoneText>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mb-3 sm:mb-4 leading-relaxed">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
            {project.tech.map((tech, idx) => (
              <TechBadge key={idx} tech={tech} />
            ))}
          </div>
        </div>

        <div className="hidden md:block text-4xl lg:text-6xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-4 group-hover:scale-125 flex-shrink-0">
          →
        </div>
      </div>

      <div
        className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${project.color}, transparent)`,
          transform: isHovered ? "scale(2)" : "scale(1)",
          zIndex: 15,
        }}
      />
    </DuotoneCard>
  );
};
