import { Stat } from "@/types";

interface StatCardProps extends Stat {
  gradientFrom: string;
  gradientTo: string;
  textColor: string;
}

export const StatCard = ({
  value,
  label,
  gradientFrom,
  gradientTo,
  textColor,
}: StatCardProps) => {
  return (
    <div
      className={`text-center p-3 sm:p-4 md:p-5 lg:p-6 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 transition-transform`}
    >
      <div className={`text-2xl sm:text-3xl md:text-4xl font-black ${textColor}`}>{value}</div>
      <div className="text-xs sm:text-sm font-semibold text-gray-600 mt-1 sm:mt-2">{label}</div>
    </div>
  );
};

