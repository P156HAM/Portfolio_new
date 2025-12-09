import { DuotoneCard } from "./DuotoneCard";

interface TechBadgeProps {
  tech: string;
}

export const TechBadge = ({ tech }: TechBadgeProps) => {
  return (
    <DuotoneCard
      baseColor="#f3f4f6"
      topColor="#e5e7eb"
      className="inline-block px-3 py-1 text-xs font-semibold text-gray-700 rounded-full"
      intensity={1}
    >
      {tech}
    </DuotoneCard>
  );
};

