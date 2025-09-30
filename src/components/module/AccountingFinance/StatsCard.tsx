import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: LucideIcon;
}

export const StatsCard = ({ title, value, change, trend, icon: Icon }: StatsCardProps) => {
  const trendColors = {
    up: "text-success",
    down: "text-danger", 
    neutral: "text-muted-foreground"
  };

  return (
    <Card className="p-6 bg-gradient-secondary hover:shadow-soft transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
          <p className={`text-sm mt-1 ${trendColors[trend]}`}>
            {change}
          </p>
        </div>
        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  );
};