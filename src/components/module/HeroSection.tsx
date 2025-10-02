import { Button } from "@/components/ui/button";
import { Calculator, FileText } from "lucide-react";

interface HeroAction {
  label: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  icon?: React.ReactNode;
}

interface HeroStat {
  value: string;
  label: string;
  subLabel: string;
  position: "bottom-left" | "top-right"; // biar bisa pilih posisinya
  delay?: string;
}

interface HeroSectionProps {
  badge?: string;
  title: string;
  description: string;
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
  heroImage: string;
  stats?: HeroStat[];
}

const HeroSection = ({ badge, title, description, primaryAction, secondaryAction, heroImage, stats = [] }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {badge && (
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">{badge}</span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">{title}</h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant text-base px-8 h-14" onClick={primaryAction.onClick}>
                {primaryAction.icon}
                {primaryAction.label}
              </Button>

              {secondaryAction && (
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base px-8 h-14" onClick={secondaryAction.onClick}>
                  {secondaryAction.icon}
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img src={heroImage} alt="Hero Dashboard" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            {stats.map((stat, index) => {
              const posClass = stat.position === "bottom-left" ? "absolute -bottom-6 -left-6" : "absolute -top-6 -right-6";

              return (
                <div key={index} className={`${posClass} bg-white rounded-xl shadow-elegant p-4 animate-scale-in hidden md:block`} style={{ animationDelay: stat.delay || "0s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{stat.value}</span>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <p className="text-sm font-semibold text-foreground">{stat.subLabel}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
