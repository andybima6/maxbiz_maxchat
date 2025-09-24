import { Globe, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import integratedSolutions from "@/assets/integrated-solutions.jpg";
import flexibleAccess from "@/assets/flexible-access.jpg";
import AnimatedElement from "../AnimatedElement";

const advantages = [
  {
    id: "integrated",
    icon: Globe,
    title: "Solusi Terintegrasi",
    description: "Untuk berbagai fungsi bisnis dalam satu platform yang terpadu.",
    image: integratedSolutions,
    color: "primary",
    gradient: "bg-gradient-primary",
  },
  {
    id: "collaborative",
    icon: Users,
    title: "Pendekatan Kolaboratif",
    description: "Bersama tim proyek Anda untuk hasil yang optimal.",
    image: integratedSolutions,
    color: "secondary",
    gradient: "bg-gradient-secondary",
  },
  {
    id: "flexible",
    icon: Zap,
    title: "Akses Fleksibel",
    description: "Kemudahan akses dari mana saja, kapan saja sesuai kebutuhan.",
    image: flexibleAccess,
    color: "accent",
    gradient: "bg-gradient-accent",
  },
];

const Advantages = () => {
  return (
    <section className="py-20 bg-background" id="benefit">
      <div className="container mx-auto px-6">
        <AnimatedElement animation="fade-in-up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Keunggulan Kami</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Tiga pilar utama yang menjadikan MaxBiz partner terpercaya untuk transformasi digital bisnis Anda</p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            const hasImage = advantage.image;

            return (
              <AnimatedElement key={advantage.id} animation="fade-in-up" delay={index * 300}>
              <Card key={advantage.id} className={`group hover:shadow-colored transition-all duration-500 border-0 overflow-hidden animate-slide-up ${hasImage ? "row-span-2" : ""}`} style={{ animationDelay: `${index * 150}ms` }}>
                {hasImage && (
                  <div className="relative h-48 overflow-hidden">
                    <img src={advantage.image} alt={`Ilustrasi ${advantage.title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                )}

                <CardContent className="p-8 text-center space-y-6">
                  <div className={`inline-flex p-4 rounded-full ${advantage.gradient} shadow-medium`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className={`text-xl font-bold text-${advantage.color}`}>{advantage.title}</h3>

                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
