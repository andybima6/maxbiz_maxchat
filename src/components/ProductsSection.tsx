import { Calculator, FolderOpen, Users, Settings, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import accountingSolution from "@/assets/accounting-solution.jpg";
import projectSolution from "@/assets/project-management-solution.jpg";
import crmSolution from "@/assets/crm-solution.jpg";
import AnimatedElement from "./AnimatedElement";

const mainModules = [
  {
    id: "accounting",
    icon: Calculator,
    title: "Akuntansi",
    color: "emerald",
    gradient: "from-emerald-500 to-emerald-600",
    image: accountingSolution,
    features: ["Multi-currency support", "Pelaporan real-time", "Sistem faktur otomatis"],
  },
  {
    id: "project",
    icon: FolderOpen,
    title: "Manajemen Proyek",
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    image: projectSolution,
    features: ["Pengelolaan tim dan tugas", "Pelacakan waktu dan biaya"],
  },
  {
    id: "crm",
    icon: Users,
    title: "Customer Relationship Management (CRM)",
    color: "orange",
    gradient: "from-orange-500 to-orange-600",
    image: crmSolution,
    features: ["Funneling prospek yang efisien", "Integrasi omnichannel"],
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <AnimatedElement animation="fade-in-up" delay={100}>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Settings className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Solusi MaxBiz ERP</span>
            </div>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={200}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Solusi
              <span className="text-primary">MaxBiz ERP</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={400}>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">MaxBiz ERP dirancang untuk menyederhanakan operasional bisnis Anda melalui modul-modul terintegrasi yang powerful dan mudah digunakan.</p>
          </AnimatedElement>
        </div>

        {/* Main Modules */}
        <div className="mb-16">
          <AnimatedElement animation="fade-in-up" delay={500}>
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">Modul Utama</h3>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainModules.map((module, index) => {
              const Icon = module.icon;

              return (
                <AnimatedElement key={module.id} animation="fade-in-up" delay={500 * index}>
                  <Card className="group hover:shadow-colored transition-all duration-500 border-0 overflow-hidden animate-slide-up hover:-translate-y-2" style={{ animationDelay: `${index * 150}ms` }}>
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <img src={module.image} alt={`Ilustrasi ${module.title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      {/* Icon */}
                      <div className="absolute top-4 left-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-r ${module.gradient} shadow-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-4">{module.title}</h4>

                      <div className="space-y-3">
                        {module.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className={`h-5 w-5 text-${module.color}-500 mt-0.5 flex-shrink-0`} />
                            <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero  backdrop-blur-sm rounded-3xl p-12 border border-border/50 animate-scale-in">
          <AnimatedElement animation="fade-in-up" delay={300}>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-white">Siap Mengoptimalkan Bisnis Anda?</h3>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={400}>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto text-white">Jelajahi semua modul MaxBiz ERP dan temukan paket yang sesuai dengan kebutuhan bisnis Anda.</p>
          </AnimatedElement>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedElement animation="fade-in-up" delay={500}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
                <Settings className="h-5 w-5 mr-2" />
                Lihat Semua Modul
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </AnimatedElement>
            <AnimatedElement animation="fade-in-up" delay={600}>
              <Button size="lg" variant="accent" className="text-white">
                📊 Bandingkan Paket Harga
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
