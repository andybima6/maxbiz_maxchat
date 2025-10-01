import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SubFeature {
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  subFeatures: SubFeature[];
  image?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, subFeatures, image }: FeatureCardProps) => {
  return (
    <Card className="group relative overflow-hidden rounded-2xl border-border/50 bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-[var(--shadow-hover)]">
      <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8">
        <div className="flex items-start gap-6 mb-6">
          <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {image && (
          <div className="mb-6 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="space-y-4">
          {subFeatures.map((feature, index) => (
            <div 
              key={index}
              className="flex gap-3 p-4 rounded-lg bg-muted hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};