import { SOCIAL_LINKS } from "@/constants";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"
          style={{ top: "10%", left: "10%", right: "20%" }}
        />
        <div
          className="absolute w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: "10%",
            right: "10%",
            left: "20%",
            animationDelay: "1s",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="text-xs sm:text-sm font-bold tracking-widest text-cyan-300 mb-4 sm:mb-5 md:mb-6 uppercase">
          Let's Create Together
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-8 sm:mb-10 md:mb-12 leading-tight">
          Ready to
          <br />
          <span className="inline-block hover:scale-110 transition-transform">
            Build?
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 sm:mb-12 md:mb-14 lg:mb-16 opacity-90 max-w-2xl mx-auto leading-relaxed px-4">
          I'm always excited to work on new projects and meet amazing people 🚀
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center mb-8 sm:mb-10 md:mb-12 px-4">
          <a
            href="mailto:a.hamdi.almasalmeh@gmail.com"
            className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-white text-purple-900 font-black text-base sm:text-lg md:text-xl rounded-full hover:scale-110 hover:rotate-3 transition-all shadow-2xl"
          >
            Email Me ✉️
          </a>
          <a
            href="#"
            className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 border-4 border-white text-white font-black text-base sm:text-lg md:text-xl rounded-full hover:bg-white hover:text-purple-900 hover:scale-110 hover:-rotate-3 transition-all"
          >
            Schedule Call 📞
          </a>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center text-base sm:text-lg md:text-xl px-4">
          {SOCIAL_LINKS.map((social, i) => (
            <a
              key={i}
              href={social.url}
              className="hover:text-cyan-300 transition-colors hover:scale-125 transform"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
