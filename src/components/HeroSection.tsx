import { Button } from "@/components/ui/button";
import { Calendar, Calculator } from "lucide-react";
import heroImage from "@/assets/erp-dashboard-hero.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                ERP untuk Bisnis Indonesia —{" "}
                <span className="text-primary">Cepat, Terukur, Siap Pakai</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Integrasi Finance, Inventory, HR & Sales dalam satu dashboard. 
                Implementasi cepat, ROI jelas. Solusi ERP yang dirancang khusus untuk kebutuhan bisnis Indonesia.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Calendar className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Jadwalkan Demo
              </Button>
              <Button variant="accent" size="lg" className="group">
                <Calculator className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Hitung Estimasi
              </Button>
            </div>

            {/* Micro Trust Bar */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-muted-foreground mb-4 text-center sm:text-left">
                Dipercaya oleh 100+ perusahaan Indonesia
              </p>
              <div className="grid grid-cols-4 gap-4 opacity-60">
                {["PT ABC", "CV XYZ", "UD 123", "Tbk DEF"].map((company, index) => (
                  <div key={index} className="text-center">
                    <div className="h-8 bg-muted-darker rounded flex items-center justify-center">
                      <span className="text-xs font-medium text-muted-foreground">{company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="ERP Dashboard Modern untuk Bisnis Indonesia"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;