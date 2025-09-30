import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  category: string;
  isPopular?: boolean;
}

export const FeatureCard = ({ 
  title, 
  description, 
  image, 
  features, 
  category, 
  isPopular = false 
}: FeatureCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
      {isPopular && (
        <Badge className="absolute top-4 right-4 z-10 bg-gradient-primary text-primary-foreground">
          Popular
        </Badge>
      )}
      
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <Badge variant="secondary" className="mb-3">
          {category}
        </Badge>
        
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          className="w-full group/btn bg-primary hover:shadow-glow transition-all duration-300"
          size="sm"
        >
          Explore Features
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
};