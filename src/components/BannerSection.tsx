import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import AnimatedElement from "./AnimatedElement";

interface BannerSectionProps {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
  };
  variant?: "gradient" | "simple"; // 👈 pilih model banner
}

const BannerSection = ({ title, description, primaryAction, secondaryAction, variant = "gradient" }: BannerSectionProps) => {
  if (variant === "simple") {
    return (
      <section className="container mx-auto px-4 py-20 text-center">
        <AnimatedElement animation="fade-in" delay={200} duration={800}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
        </AnimatedElement>
        <AnimatedElement animation="fade-in" delay={300} duration={800}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{description}</p>
        </AnimatedElement>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <AnimatedElement animation="fade-in" delay={400} duration={800}>
            <Button size="lg" onClick={primaryAction.onClick} className="gap-2">
              {primaryAction.label}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </AnimatedElement>
          {secondaryAction && (
            <AnimatedElement animation="fade-in" delay={500} duration={800}>
              <Button variant="outline" size="lg" onClick={secondaryAction.onClick}>
                {secondaryAction.label}
              </Button>
            </AnimatedElement>
          )}
        </div>
      </section>
    );
  }

  // default → gradient style (model 1)
  return (
    <section className="container mx-auto px-4 py-20">
      <Card className="border-none shadow-[var(--shadow-medium)] overflow-hidden relative animate-scale-in bg-gradient-hero">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZtMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0tMTggMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZtMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIvPjwvZz48L3N2Zz4=')] opacity-20" />
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />

        <CardContent className="p-12 md:p-16 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <AnimatedElement animation="fade-in" delay={200} duration={800}>
              <h2 className="text-3xl md:text-4xl font-bold text-white animate-fade-in">{title}</h2>
            </AnimatedElement>
            <AnimatedElement animation="fade-in" delay={300} duration={800}>
              <p className="text-lg text-white/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {description}
              </p>
            </AnimatedElement>
            <div className="flex flex-wrap gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <AnimatedElement animation="fade-in" delay={400} duration={800}>
                <Button variant="hero" size="lg" onClick={primaryAction.onClick} className="gap-2 hover:scale-105 transition-transform">
                  {primaryAction.label}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </AnimatedElement>
              {secondaryAction && (
                <AnimatedElement animation="fade-in" delay={500} duration={800}>
                  <Button variant="outline" size="lg" onClick={secondaryAction.onClick} className="hover:scale-105 transition-transform text-white">
                    {secondaryAction.label}
                  </Button>
                </AnimatedElement>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BannerSection;
