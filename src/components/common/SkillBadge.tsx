interface SkillBadgeProps {
  skill: string;
  index: number;
}

export const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  return (
    <div
      className="inline-block mr-3 mb-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-bold text-gray-800 hover:border-purple-600 hover:scale-110 hover:rotate-3 transition-all cursor-pointer shadow-lg"
      style={{
        animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
        animationDelay: `${index * 0.2}s`,
      }}
    >
      {skill}
    </div>
  );
};

