import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "accent";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  download?: boolean;
  external?: boolean;
  ariaLabel?: string;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-medium transition-all duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--text)] text-[var(--bg)] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10",
  accent:
    "bg-[var(--accent)] text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--accent-soft)]",
  ghost:
    "border border-hair text-ink hover:border-[var(--accent)] hover:text-[var(--accent)]",
};

export const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download = false,
  external = false,
  ariaLabel,
}: ButtonProps) => {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
        {...(download ? { download: "" } : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
};
