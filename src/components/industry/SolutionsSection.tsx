import { Card } from "@/components/ui/card";
import React from "react";
import AnimatedElement from "../AnimatedElement";

export type SolutionItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image?: string;
  benefits?: string[];
};

type SolutionsSectionProps = {
  tagline?: string;
  title?: string;
  subtitle?: string;
  items: SolutionItem[];
  theme?: "primary" | "secondary" | "destructive";
  alternate?: boolean;
};

const colorVariants = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    iconBg: "bg-gradient-primary",
    dot: "bg-primary",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    iconBg: "bg-gradient-to-br from-secondary to-secondary/60",
    dot: "bg-secondary",
  },
  destructive: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    iconBg: "bg-gradient-to-br from-destructive to-destructive/60",
    dot: "bg-destructive",
  },
};

const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  tagline = "Solusi Terpadu",
  title = "Fitur Lengkap untuk Bisnis Anda",
  subtitle = "Solusi yang dirancang untuk meningkatkan efisiensi, akurasi, dan transparansi di berbagai industri.",
  items,
  theme = "primary",
  alternate = true,
}) => {
  const color = colorVariants[theme];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedElement animation="fade-in" delay={200} duration={800}>
            <div className={`inline-flex items-center gap-2 ${color.bg} px-4 py-2 rounded-full mb-4`}>
              <span className={`text-sm font-medium ${color.text}`}>{tagline}</span>
            </div>
          </AnimatedElement>
          <AnimatedElement animation="fade-in" delay={300} duration={800}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in" delay={400} duration={800}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
          </AnimatedElement>
        </div>

        {/* Content */}
        <div className="space-y-24">
          {items.map((solution, index) => {
            const isReversed = alternate && index % 2 === 1;
            return (
              <AnimatedElement key={index} animation="fade-in" delay={index * 300} duration={800}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  {/* Text Section */}
                  <div className={`${isReversed ? "lg:order-2" : ""}`}>
                    <AnimatedElement animation="slide-in-down" delay={100} duration={800}>
                      <div className={`w-16 h-16 ${color.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-soft`}>
                        <solution.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </AnimatedElement>
                    <AnimatedElement animation="slide-in-down" delay={200} duration={800}>
                      <h3 className="text-3xl font-bold mb-4">{solution.title}</h3>
                    </AnimatedElement>
                    <AnimatedElement animation="slide-in-down" delay={300} duration={800}>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                    </AnimatedElement>

                    {solution.benefits && (
                      <div className="space-y-3">
                        {solution.benefits.map((benefit, idx) => (
                          <AnimatedElement key={idx} animation="slide-in-down" delay={idx * 400} duration={800}>
                            <div key={idx} className="flex items-start gap-3">
                              <div className={`w-6 h-6 ${color.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <div className={`w-2 h-2 ${color.dot} rounded-full`} />
                              </div>
                              <span className="text-foreground">{benefit}</span>
                            </div>
                          </AnimatedElement>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Image Section */}
                  {solution.image && (
                    <AnimatedElement animation="slide-merge-up" delay={400} duration={800}>
                      <div className={`${isReversed ? "lg:order-1" : ""}`}>
                        <Card className="overflow-hidden shadow-elegant border-border/50 hover:shadow-2xl transition-shadow duration-300">
                          <img src={solution.image} alt={solution.title} className="w-full h-auto object-cover" />
                        </Card>
                      </div>
                    </AnimatedElement>
                  )}
                </div>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
