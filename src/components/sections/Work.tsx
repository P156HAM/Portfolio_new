import { PROJECTS } from "@/constants";
import { SectionTitle } from "../common/SectionTitle";
import { ProjectCard } from "./ProjectCard";

export const Work = () => {
  return (
    <section id="work" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-content">
        <SectionTitle index="01" eyebrow="Selected work" title="Things I've shipped" />
        <div>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
