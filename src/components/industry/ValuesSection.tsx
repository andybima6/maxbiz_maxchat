import React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export type ValueItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export type StatItem = {
  value: string;
  label: string;
};

type ValuesSectionProps = {
  title?: string;
  subtitle?: string;
  tagline?: string;
  items: ValueItem[];
  stats?: StatItem[];
  theme?: "primary" | "secondary" | "destructive";
  gradientBg?: boolean;
};

const colorVariants = {
  primary: {
    icon: "text-primary",
    cardBg: "bg-primary-foreground/95 border-primary-foreground/20",
    text: "text-foreground",
    muted: "text-muted-foreground",
  },
  secondary: {
    icon: "text-secondary",
    cardBg: "bg-secondary-foreground/95 border-secondary-foreground/20",
    text: "text-foreground",
    muted: "text-muted-foreground",
  },
  destructive: {
    icon: "text-destructive",
    cardBg: "bg-destructive-foreground/95 border-destructive-foreground/20",
    text: "text-foreground",
    muted: "text-muted-foreground",
  },
};

const ValuesSection: React.FC<ValuesSectionProps> = ({
  title = "Manfaat Nyata untuk Organisasi Anda",
  subtitle = "Implementasi ERPNext memberikan dampak langsung pada efisiensi dan kualitas layanan.",
  tagline = "Value Proposition",
  items,
  stats,
  theme = "primary",
  gradientBg = true,
}) => {
  const color = colorVariants[theme];

  return (
    <section
      className={`py-20 relative overflow-hidden ${
        gradientBg ? "bg-gradient-hero" : "bg-background"
      }`}
    >
      {/* Decorative background */}
      {gradientBg && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 text-primary-foreground">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">{tagline}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Values List */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {items.map((item, index) => (
            <Card
              key={index}
              className={`p-8 ${color.cardBg} backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-soft">
                <item.icon className={`w-8 h-8 ${color.icon}`} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${color.text}`}>
                {item.title}
              </h3>
              <p className={`${color.muted} leading-relaxed`}>
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        {stats && stats.length > 0 && (
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center text-primary-foreground">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ValuesSection;
