import { LucideIcon } from "lucide-react";

interface IntegrationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const IntegrationCard = ({ icon: Icon, title, description }: IntegrationCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border/50 p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
      <div className="absolute inset-0 bg-[var(--gradient-card)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        
        <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h4>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
