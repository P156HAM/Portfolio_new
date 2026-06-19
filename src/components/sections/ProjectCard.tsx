import { Project } from "@/types";
import { Reveal } from "../common/Reveal";
import { useNpmDownloads } from "@/hooks/useNpmDownloads";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const number = String(index + 1).padStart(2, "0");
  const downloads = useNpmDownloads(project.npmPackage);

  return (
    <Reveal>
      <article
        className="group grid grid-cols-1 gap-6 border-t border-hair py-10 transition-colors duration-300 md:grid-cols-12 md:gap-10 md:py-14"
        style={{ ["--accent" as string]: project.accent }}
      >
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="font-display text-3xl font-semibold text-muted/50 transition-colors duration-300 group-hover:text-[var(--accent)]">
              {number}
            </span>
            {project.featured && (
              <span className="rounded-full border border-[var(--accent)] px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--accent)]">
                Open source
              </span>
            )}
          </div>

          <div className="mt-4 space-y-1 text-sm text-muted">
            <p className="font-medium text-ink">{project.category}</p>
            <p>{project.role}</p>
            <p>{project.year}</p>
          </div>

          {downloads !== null && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--accent)] transition-transform hover:scale-105"
              aria-label={`${downloads.toLocaleString()} npm downloads in the last week`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              {downloads.toLocaleString()} downloads / week
            </a>
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-[var(--surface-2)] px-2.5 py-1 text-xs font-medium text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-8">
          <h3 className="font-display text-3xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-4xl md:text-5xl">
            {project.name}
          </h3>
          <p className="mt-2 text-base font-medium text-muted">{project.tagline}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {project.description}
          </p>

          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm text-ink sm:text-base">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]"
                />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-[var(--accent)]"
          >
            {project.linkLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </div>
      </article>
    </Reveal>
  );
};
