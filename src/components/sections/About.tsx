import { StatCard } from "../common/StatCard";
import { SkillBadge } from "../common/SkillBadge";
import { STATS, SKILLS } from "@/constants";

export const About = () => {
  const statConfigs = [
    {
      gradientFrom: "from-purple-100",
      gradientTo: "to-pink-100",
      textColor: "text-purple-600",
    },
    {
      gradientFrom: "from-cyan-100",
      gradientTo: "to-blue-100",
      textColor: "text-cyan-600",
    },
    {
      gradientFrom: "from-pink-100",
      gradientTo: "to-orange-100",
      textColor: "text-pink-600",
    },
  ];

  return (
    <div
      id="about"
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-white relative overflow-hidden"
    >
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full bg-purple-100 opacity-20 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full bg-cyan-100 opacity-20 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start md:items-center">
          <div>
            <div className="text-xs sm:text-sm font-bold tracking-widest text-cyan-600 mb-3 sm:mb-4 uppercase">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight">
              Hi, I'm Hamdi
              <span className="inline-block animate-bounce ml-1 sm:ml-2">
                👋
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-5 md:mb-6">
              I'm an independent creative developer from{" "}
              <strong className="text-purple-600">Gothenburg, Sweden</strong>,
              with a passion for building beautiful, functional, and
              user-friendly digital experiences.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
              I combine technical expertise with creative vision to deliver
              exceptional results that make people say{" "}
              <em className="text-pink-600 font-semibold">"Wow!"</em> 🎨✨
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-7 md:mb-8">
              {STATS.map((stat, i) => (
                <StatCard key={i} {...stat} {...statConfigs[i]} />
              ))}
            </div>

            <button className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-black text-white text-sm sm:text-base font-bold rounded-full hover:bg-purple-600 hover:scale-110 transition-all shadow-lg">
              Download Resume 📄
            </button>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="space-y-3 sm:space-y-4">
              {SKILLS.map((skill, i) => (
                <SkillBadge key={i} skill={skill.name} index={i} />
              ))}
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 p-6 sm:p-7 md:p-8 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl sm:rounded-3xl border-4 border-yellow-400 transform rotate-2 hover:rotate-0 transition-all shadow-xl">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">
                ☕
              </div>
              <p className="text-base sm:text-lg font-bold text-gray-800">
                Coffee consumed:{" "}
                <span className="text-orange-600">~4,847 cups</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
