import { EMAIL, CALENDAR_URL, SOCIAL_LINKS } from "@/constants";
import { Reveal } from "../common/Reveal";
import { Button } from "../common/Button";

export const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent-soft), transparent 70%)" }}
      />

      <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-5">Contact</p>
        <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl md:text-7xl">
          Let's build
          <br />
          <span className="gradient-text">something good.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          Have a product in mind, or a role you think I'd be great for? I'm
          always happy to talk through ideas.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${EMAIL}`} variant="accent">
            Email me
          </Button>
          <Button href={CALENDAR_URL} external variant="ghost">
            Schedule a call
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {social.name}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
