import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <AnimatedElement animation="fade-in-up" delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Siap Transformasi Digital Bisnis Anda?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Bergabunglah dengan 100+ perusahaan Indonesia yang sudah meningkatkan efisiensi bisnis dengan MaxBiz. Konsultasi gratis, implementasi mudah, support lokal 24/7.
              </p>
            </AnimatedElement>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedElement animation="fade-in-up" delay={200}>
              <a href="#kontak">
                <Button variant="hero" size="lg" className="group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Jadwalkan Demo Gratis
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </AnimatedElement>
            <AnimatedElement animation="fade-in-up" delay={300}>
              <Button variant="accent" size="lg" className="group">
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi via WhatsApp
              </Button>
            </AnimatedElement>
          </div>

          {/* Trust signals */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <AnimatedElement animation="fade-in-up" delay={400}>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">💬</div>
                <div className="text-sm text-muted-foreground">
                  <strong>Konsultasi Gratis</strong>
                  <br />
                  Tim ahli siap membantu
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fade-in-up" delay={500}>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-secondary">⚡</div>
                <div className="text-sm text-muted-foreground">
                  <strong>Setup Cepat</strong>
                  <br />
                  Go-live dalam 2 minggu
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fade-in-up" delay={600}>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">🇮🇩</div>
                <div className="text-sm text-muted-foreground">
                  <strong>Support Lokal</strong>
                  <br />
                  Tim Indonesia 24/7
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* No commitment message */}
          <AnimatedElement animation="fade-in-up" delay={700}>
            <p className="text-sm text-muted-foreground">* Tidak ada biaya tersembunyi • Cancel kapan saja • Data aman terjamin</p>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
