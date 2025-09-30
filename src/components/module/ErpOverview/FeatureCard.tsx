import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const FeatureCard = ({ icon, title, description, features, delay = 0 }: FeatureCardProps) => {
  return (
    <Card 
      className="group hover:shadow-large transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader>
        <div className="mb-4 rounded-xl overflow-hidden shadow-medium group-hover:shadow-large transition-shadow duration-300 animate-float">
          {icon}
        </div>
        <CardTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <CardDescription className="text-base mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-primary mt-2 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;