// src/components/sections/ChallengesSection.tsx
import { AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import React from "react";

export type ChallengeItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

type ChallengesSectionProps = {
  title?: string;
  subtitle?: string;
  tagline?: string;
  items: ChallengeItem[];
  theme?: "primary" | "destructive" | "secondary";
};

const colorVariants = {
  primary: "text-primary bg-primary/10",
  destructive: "text-destructive bg-destructive/10",
  secondary: "text-secondary bg-secondary/10",
};

const ChallengesSection: React.FC<ChallengesSectionProps> = ({
  title = "Tantangan yang Dihadapi",
  subtitle = "Berbagai kendala yang sering muncul dalam operasional organisasi.",
  tagline = "Tantangan",
  items,
  theme = "primary",
}) => {
  const colorClass = colorVariants[theme];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 ${colorClass} px-4 py-2 rounded-full mb-4`}>
            <AlertCircle className={`w-4 h-4 ${colorClass.split(" ")[0]}`} />
            <span className="text-sm font-medium">{tagline}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border/50"
            >
              <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mb-6`}>
                <item.icon className={`w-8 h-8 ${colorClass.split(" ")[0]}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
