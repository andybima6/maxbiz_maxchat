import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Tingkatkan Produktivitas",
    description: "Karyawan yang terlatih dengan baik menghasilkan output 40% lebih tinggi dan berkualitas."
  },
  {
    icon: Shield,
    title: "Kepatuhan Terjamin",
    description: "Pastikan semua karyawan memenuhi standar pelatihan dan regulasi yang diperlukan."
  },
  {
    icon: Users,
    title: "Skalabilitas Tinggi",
    description: "Platform yang dapat berkembang seiring pertumbuhan organisasi Anda tanpa batas."
  },
  {
    icon: Zap,
    title: "Implementasi Cepat",
    description: "Setup dalam hitungan hari, bukan bulan. Mulai pelatihan segera setelah onboarding."
  }
];

const StatCard = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mengapa Memilih Platform Kami?
          </h2>
          <p className="text-lg text-muted-foreground">
            Solusi terpercaya untuk meningkatkan kompetensi dan kepatuhan pelatihan karyawan
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-card/80 backdrop-blur-sm group cursor-pointer"
            >
              <div className="bg-gradient-hero w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-hero rounded-3xl p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-white/80">Uptime</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100K+</div>
              <div className="text-white/80">Courses</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-white/80">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatCard;