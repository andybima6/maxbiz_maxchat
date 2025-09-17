import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Analisa Gratis",
      description: "30 menit discovery call untuk memahami kebutuhan bisnis Anda",
      details: "Tim ahli kami akan menganalisa proses bisnis dan memberikan rekomendasi",
      color: "text-primary"
    },
    {
      number: "02", 
      title: "Implementasi",
      description: "Konfigurasi + data migration (2–8 minggu)",
      details: "Setup sistem, migrasi data, dan kustomisasi sesuai workflow Anda",
      color: "text-secondary"
    },
    {
      number: "03",
      title: "Go Live & Support",
      description: "Training + SLA support berkelanjutan",
      details: "User training, dokumentasi lengkap, dan support 24/7",
      color: "text-accent"
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Implementasi dalam 3 Langkah Mudah
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proses yang terbukti untuk mengintegrasikan ERP ke bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="feature-card p-8 rounded-xl text-center group">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted-darker mb-6 ${step.color} text-2xl font-bold`}>
                  {step.number}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {step.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {step.details}
                  </p>
                </div>

                {/* Checkmark */}
                <div className="mt-6">
                  <CheckCircle className={`w-6 h-6 mx-auto ${step.color}`} />
                </div>
              </div>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Minta Analisa Gratis
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Konsultasi gratis, tidak ada kewajiban berlangganan
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;