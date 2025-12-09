import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  variant?: "primary" | "secondary" | "lucky";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) => {
  const baseClasses = "font-bold rounded-full transition-all shadow-lg";
  
  const variantClasses = {
    primary:
      "px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white text-lg hover:scale-110 hover:rotate-2 shadow-2xl relative overflow-hidden group",
    secondary:
      "px-10 py-5 border-4 border-gray-900 text-gray-900 text-lg hover:bg-gray-900 hover:text-white hover:scale-110 hover:-rotate-2",
    lucky:
      "px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm hover:scale-110 relative overflow-hidden group",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      )}
      {variant === "lucky" && (
        <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

