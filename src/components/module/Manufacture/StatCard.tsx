import { Card, CardContent } from "@/components/ui/card";
import { Package, CheckCircle, Calculator, ArrowRight } from "lucide-react";

const integrations = [
  {
    title: "Stock Management",
    description: "Sinkronisasi otomatis dengan inventory untuk kontrol stok real-time",
    icon: Package,
  },
  {
    title: "Quality Control",
    description: "Integrasi penuh dengan sistem quality assurance untuk standar produk terjamin",
    icon: CheckCircle,
  },
  {
    title: "Accounting",
    description: "Perhitungan biaya produksi otomatis langsung ke sistem akuntansi",
    icon: Calculator,
  },
];

const StatCard = () => {
  return (
    <section className="py-24 bg-gradient-hero from-primary via-primary/95 to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Integrasi Menyeluruh
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Sistem yang terhubung sempurna untuk operasional yang lebih efisien
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {integrations.map((integration, index) => (
            <Card 
              key={index}
              className="bg-background/95 backdrop-blur border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-4 rounded-full bg-gradient-hero from-primary to-accent mb-4">
                  <integration.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {integration.title}
                </h3>
                <p className="text-muted-foreground">
                  {integration.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '450ms' }}>
          <div className="inline-flex items-center gap-2 text-primary-foreground/90 text-lg">
            <span>Dan masih banyak integrasi lainnya</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatCard;