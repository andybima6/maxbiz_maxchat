import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export type HeroSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  primaryAction?: { label: string; onClick?: () => void };
  secondaryAction?: { label: string; onClick?: () => void };
  image: string;
  badge?: { icon?: React.ReactNode; text: string };
};

const HeroSection = ({ title, subtitle, description, primaryAction, secondaryAction, image, badge }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-95 z-0" />

      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground animate-fade-in">
            {badge && (
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                {badge.icon}
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            )}

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              {primaryAction && (
                <Button size="lg" variant="hero" className="text-lg shadow-elegant" onClick={primaryAction.onClick}>
                  {primaryAction.label}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              )}
              {secondaryAction && (
                <Button size="lg" variant="outline" className="text-lg bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" onClick={secondaryAction.onClick}>
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </div>

          <div className="relative animate-slide-in hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img src={image} alt={subtitle} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
