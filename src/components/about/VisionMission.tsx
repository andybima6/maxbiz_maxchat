import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedElement from "../AnimatedElement";

const VisionMission = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatedElement animation="fade-in-up" delay={200}>
            <Card className="shadow-xl group hover:shadow-medium transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm animate-slide-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-secondary shadow-soft">
                    <Eye className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-secondary">Visi</h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">Membantu bisnis di Indonesia tumbuh dengan solusi ERP yang andal dan mudah digunakan.</p>
              </CardContent>
            </Card>
          </AnimatedElement>

          <AnimatedElement animation="fade-in-up" delay={400}>
            <Card className="shadow-xl group hover:shadow-medium transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm animate-slide-up [animation-delay:200ms] ">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-accent shadow-soft">
                    <Target className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-accent">Misi</h2>
                </div>

                <p className="text-muted-foreground leading-relaxed lg:min-h-12">Menyederhanakan operasional bisnis dengan teknologi inovatif.</p>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
