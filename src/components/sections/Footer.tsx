import { EMAIL, SOCIAL_LINKS } from "@/constants";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hair px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-ink">
            © {year} Hamdi Almasalmeh — Gothenburg, Sweden
          </p>
          <p className="mt-1 text-xs text-muted">Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
        <div className="flex items-center gap-6">
          <a href={`mailto:${EMAIL}`} className="text-sm text-muted transition-colors hover:text-ink">
            Email
          </a>
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
