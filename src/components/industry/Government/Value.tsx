import { Card } from "@/components/ui/card";
import { CheckCircle2, Gauge, HeartHandshake, Shield } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Transparansi & Akuntabilitas",
    description: "Sistem pelaporan yang terbuka dan audit trail lengkap meningkatkan kepercayaan publik dan memastikan setiap anggaran dapat dipertanggungjawabkan."
  },
  {
    icon: Gauge,
    title: "Efisiensi Birokrasi",
    description: "Automatisasi proses administratif mengurangi waktu pelayanan hingga 70% dan meminimalkan kesalahan manusia dalam pengelolaan dokumen."
  },
  {
    icon: HeartHandshake,
    title: "Pelayanan Lebih Responsif",
    description: "Help desk terintegrasi memastikan setiap pengaduan masyarakat ditangani dengan cepat dan terukur, meningkatkan kepuasan layanan publik."
  }
];

const Value = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 text-primary-foreground">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Value Proposition</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Manfaat Nyata untuk Pemerintahan Anda
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Implementasi ERPNext memberikan dampak langsung pada kualitas layanan dan efisiensi operasional pemerintahan
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-8 bg-primary-foreground/95 backdrop-blur-sm border-primary-foreground/20 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-soft">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center text-primary-foreground">
            <div className="text-5xl font-bold mb-2">70%</div>
            <p className="text-primary-foreground/80">Waktu Proses Berkurang</p>
          </div>
          <div className="text-center text-primary-foreground">
            <div className="text-5xl font-bold mb-2">85%</div>
            <p className="text-primary-foreground/80">Kepuasan Masyarakat</p>
          </div>
          <div className="text-center text-primary-foreground">
            <div className="text-5xl font-bold mb-2">60%</div>
            <p className="text-primary-foreground/80">Biaya Operasional Turun</p>
          </div>
          <div className="text-center text-primary-foreground">
            <div className="text-5xl font-bold mb-2">100%</div>
            <p className="text-primary-foreground/80">Transparansi Anggaran</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;