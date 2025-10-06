// FeaturesSection.tsx
import { Card, CardContent } from "@/components/ui/card";

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
  image?: string;
  subFeatures: string[];
};

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

const FeatureCard = ({ title, subtitle, features }: FeaturesSectionProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/20">
                <CardContent className="p-6">
                  {feature.image && (
                    <div className="mb-4 rounded-lg overflow-hidden h-48">
                      <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  )}

                  <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{feature.description}</p>

                  <ul className="space-y-2">
                    {feature.subFeatures.map((subFeature, subIndex) => (
                      <li key={subIndex} className="flex items-start text-sm">
                        <span className="mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{subFeature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
