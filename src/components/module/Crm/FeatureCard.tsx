import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  gradient?: string;
  image?: string;
}

export const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  features, 
  gradient = "from-primary to-secondary",
  image 
}: FeatureCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
      
      <div className="relative p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          {image && (
            <img 
              src={image} 
              alt={title}
              className="w-16 h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity animate-float"
            />
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs hover:bg-primary hover:text-white transition-colors cursor-default"
            >
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};