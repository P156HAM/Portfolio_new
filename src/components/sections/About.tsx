import { STATS, SKILL_GROUPS } from "@/constants";
import { Reveal } from "../common/Reveal";
import { Button } from "../common/Button";

export const About = () => {
  return (
    <section
      id="about"
      className="border-t border-hair bg-[var(--surface)] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto grid max-w-content gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="eyebrow text-accent">02</span>
            <span className="eyebrow">About</span>
          </div>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Hi, I'm Hamdi.
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I'm a full-stack developer based in{" "}
              <span className="font-medium text-ink">Gothenburg, Sweden</span>. I
              build AI-powered web and mobile products — owning them from the
              first prototype through to production, the App Store, and the npm
              registry.
            </p>
            <p>
              I care about the details that make software feel effortless: fast
              interfaces, clear flows, and code that's a pleasure to maintain.
              Lately I've been deep in voice AI, LLM tooling, and developer
              experience.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-hair p-4">
                <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/Hamdi_Resume.pdf" download variant="accent">
              Download CV
            </Button>
            <Button
              href="https://www.linkedin.com/in/hamdi-almasalmeh/"
              external
              variant="ghost"
            >
              LinkedIn
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-8">
            <p className="eyebrow">What I work with</p>
            {SKILL_GROUPS.map((group) => (
              <div key={group.category} className="border-t border-hair pt-5">
                <h3 className="mb-3 text-sm font-semibold text-ink">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-hair px-3 py-1.5 text-sm text-muted transition-colors hover:border-[var(--accent)] hover:text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
