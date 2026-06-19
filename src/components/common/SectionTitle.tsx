import { Reveal } from "./Reveal";

interface SectionTitleProps {
  index?: string;
  eyebrow: string;
  title: string;
  className?: string;
}

export const SectionTitle = ({ index, eyebrow, title, className = "" }: SectionTitleProps) => {
  return (
    <Reveal className={`mb-12 sm:mb-16 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {index && <span className="eyebrow text-accent">{index}</span>}
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px flex-1 bg-hair" />
      </div>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
    </Reveal>
  );
};
