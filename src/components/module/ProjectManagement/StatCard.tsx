import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const StatCard = ({ icon: Icon, value, label }: StatCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-white/20">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="text-3xl font-bold text-white mb-1">
            {value}
          </div>
          <div className="text-sm text-white/80">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};
