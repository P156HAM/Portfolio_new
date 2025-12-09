import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  icon?: string;
  className?: string;
}

export const Badge = ({ children, icon, className = "" }: BadgeProps) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-full shadow-lg ${className}`}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      <span className="text-sm font-bold text-gray-700">{children}</span>
    </div>
  );
};

