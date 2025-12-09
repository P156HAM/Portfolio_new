interface SectionTitleProps {
  subtitle: string;
  title: string;
  className?: string;
}

export const SectionTitle = ({
  subtitle,
  title,
  className = "",
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 sm:mb-16 md:mb-20 text-center ${className}`}>
      <div className="text-xs sm:text-sm font-bold tracking-widest text-purple-600 mb-3 sm:mb-4 uppercase">
        {subtitle}
      </div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
        {title}
      </h2>
      <div className="w-24 sm:w-28 md:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-full mx-auto" />
    </div>
  );
};

