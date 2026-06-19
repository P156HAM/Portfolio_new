import { Button } from "../common/Button";

const MARQUEE = [
  "React",
  "React Native",
  "TypeScript",
  "Node.js",
  "Next.js",
  "OpenAI / LLMs",
  "Supabase",
  "Firebase",
  "Python",
  "Expo",
  "MCP",
  "Tailwind CSS",
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[42rem] w-[42rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-soft), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-content">
        <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-hair bg-[var(--surface)] px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-muted">
            Available for freelance &amp; full-time
          </span>
        </div>

        <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
          I build <span className="gradient-text">AI-powered</span>
          <br />
          web &amp; mobile products,
          <br />
          <span className="italic text-muted">end to end.</span>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          Full-stack developer from Gothenburg, Sweden. I take ideas from
          prototype to the App Store — and build open-source tools for
          developers along the way.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button variant="primary" onClick={() => scrollTo("work")}>
            View work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-0.5" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Button>
          <Button variant="ghost" onClick={() => scrollTo("contact")}>
            Get in touch
          </Button>
          <a
            href="/Hamdi_Resume.pdf"
            download
            className="group ml-1 inline-flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            Download CV
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-0.5" aria-hidden="true">
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
            </svg>
          </a>
        </div>
      </div>

      {/* tech marquee */}
      <div className="absolute inset-x-0 bottom-8 hidden overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] sm:block">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap pr-10">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="text-sm font-medium uppercase tracking-wider text-muted/70">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
