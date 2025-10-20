import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Business",
      target: "Untuk Perusahaan Berkembang",
      users: "20–100 user",
      price: "7.5jt",
      period: "/bulan",
      features: ["Semua fitur Starter", "CRM & Sales Pipeline", "Multi-Cabang & Approval Flow", "Advanced Analytics", "Custom Report & Integration", "Priority Support"],
      cta: "Pilih & Konsultasi",
      popular: false,
    },
    {
      name: "Standard",
      target: "Untuk UMKM & Bisnis Baru",
      users: "hingga 20 user",
      price: "2.5jt",
      period: "/bulan",
      features: ["Finance & Akuntansi Dasar", "Inventory Management", "HR & Payroll", "Report Dashboard", "Support via Email & Chat"],
      cta: "Pilih & Konsultasi",
      popular: true,
    },
    {
      name: "Enterprise",
      target: "Untuk Korporasi Besar",
      users: "100+ user",
      price: "Custom",
      period: "",
      features: ["Semua fitur Business", "Dedicated Server & API Access", "Kustomisasi Modul", "Training On-site", "SLA & Dedicated Support"],
      cta: "Hubungi Sales",
      popular: false,
    },
  ];

  return (
    <section className="section-padding" id="harga">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Harga Transparan, Tanpa Biaya Tersembunyi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Pilih paket yang sesuai dengan ukuran dan kebutuhan bisnis Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative feature-card p-8 rounded-xl border-2 transition-all ${plan.popular ? "border-primary shadow-lg transform scale-105 bg-primary/5" : "border-border/50 bg-card"}`}>
              {/* Badge Paling Populer */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">Paling Populer</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-1">{plan.target}</p>
                  <p className="text-sm text-muted-foreground">{plan.users}</p>
                </div>

                {/* Price */}
                <div className="text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">{plan.price === "Custom" ? "Custom" : `Rp ${plan.price}`}</span>
                    {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-5 lg:min-h-[250px]">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a href="https://wa.me/6281234511449?text=Halo%2C%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20ERP%20perusahaan%20Anda." target="_blank" rel="noopener noreferrer">
                  <Button variant={plan.popular ? "hero" : "outline"} className="w-full group" size="lg">
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Catatan Bawah */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">Semua paket sudah termasuk setup, training, dan migrasi data</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ghost" size="sm">
              💬 Chat untuk Custom Quote
            </Button>
            <Button variant="ghost" size="sm">
              📊 Bandingkan Semua Fitur
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
