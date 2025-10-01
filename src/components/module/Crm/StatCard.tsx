import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down";
}

export const StatCard = ({ title, value, change, icon: Icon, trend }: StatCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            {value}
          </p>
          <p className={`text-sm font-medium ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
            {change}
          </p>
        </div>
        <div className="p-3 rounded-xl bg-gradient-hero">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </Card>
  );
};
