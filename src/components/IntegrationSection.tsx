import { Button } from "@/components/ui/button";
import { ArrowLeftRight, ArrowRight, BarChart3, Bell, Code2, Globe, Link, Puzzle, RefreshCw, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/integrasi/hero-integration.jpg";
import apiImage from "@/assets/integrasi/api-integration.jpg";
import webhookImage from "@/assets/integrasi/webhook-integration.jpg";
import twowayImage from "@/assets/integrasi/twoway-integration.jpg";
import { Card } from "./ui/card";
import Header from "./Header";
import Footer from "./Footer";

const challange = [
  {
    icon: Link,
    title: "Terhubung dengan CRM, HR, e-commerce, hingga sistem keuangan",
    description: "Integrasikan ERPNext dengan berbagai aplikasi bisnis yang sudah Anda gunakan tanpa batasan platform.",
  },
  {
    icon: RefreshCw,
    title: "Data antar sistem selalu sinkron dan up-to-date",
    description: "Perubahan data di satu sistem akan otomatis tersinkronisasi ke sistem lainnya secara real-time.",
  },
  {
    icon: Zap,
    title: "Kurangi input manual & tingkatkan efisiensi tim",
    description: "Otomatisasi transfer data menghilangkan kebutuhan input manual yang memakan waktu dan rawan kesalahan.",
  },
];

const solutions = [
  {
    icon: Code2,
    image: apiImage,
    category: "API Integration",
    title: "Integrasi Berbasis API",
    features: [
      "Gunakan REST API dengan format JSON dan token authentication",
      "Akses dan kirim data secara aman antar sistem",
      "Contoh: sinkron pelanggan, pesanan, dan stok otomatis",
      "Cocok untuk integrasi dua arah antar platform bisnis"
    ]
  },
  {
    icon: Bell,
    image: webhookImage,
    category: "Webhook Integration",
    title: "Integrasi Berbasis Webhook",
    features: [
      "Dapatkan notifikasi real-time saat data berubah (create/update/delete)",
      "Kirim event otomatis ke sistem eksternal",
      "Mendukung custom header dan payload dinamis",
      "Contoh: notifikasi invoice, status pesanan, dan alert ke Slack/WhatsApp"
    ]
  },
  {
    icon: ArrowLeftRight,
    image: twowayImage,
    category: "Two-way Integration",
    title: "Integrasi Dua Arah (API + Webhook)",
    features: [
      "Kombinasi API & Webhook = integrasi penuh dua arah",
      "ERPNext kirim event → sistem eksternal respon balik otomatis",
      "Semua data selalu konsisten dan real-time",
      "Cocok untuk alur bisnis kompleks multi-platform"
    ]
  }
];
const benefits = [
  {
    icon: RefreshCw,
    title: "Otomatisasi lintas sistem",
    description: "Proses bisnis berjalan otomatis tanpa intervensi manual antar aplikasi."
  },
  {
    icon: BarChart3,
    title: "Data akurat & konsisten",
    description: "Satu sumber kebenaran untuk semua data di seluruh sistem terintegrasi."
  },
  {
    icon: Zap,
    title: "Efisiensi waktu & biaya operasional",
    description: "Hemat waktu dan biaya dengan menghilangkan duplikasi pekerjaan."
  },
  {
    icon: Shield,
    title: "Keamanan tinggi dengan token authentication",
    description: "Komunikasi antar sistem dilindungi dengan enkripsi dan autentikasi."
  },
  {
    icon: Puzzle,
    title: "Fleksibel & mudah diintegrasikan",
    description: "Kompatibel dengan berbagai platform dan mudah disesuaikan."
  },
  {
    icon: Globe,
    title: "ERPNext sebagai pusat ekosistem digital",
    description: "Jadikan ERPNext sebagai pusat kontrol seluruh sistem bisnis Anda."
  }
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
        <Header />
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, hsl(228.8 58.9% 28.6%) 0%, hsl(228.6 35.2% 64.9%) 100%)" }} />

        {/* Hero Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="ERPNext Integration Dashboard with Connected Systems" className="w-full h-full object-cover opacity-20" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">Integrasikan ERPNext dengan Semua Sistem Bisnis Anda</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Hubungkan ERPNext dengan aplikasi eksternal melalui API & Webhook untuk otomatisasi proses, sinkronisasi data real-time, dan efisiensi tanpa batas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-[var(--shadow-button)] hover:scale-105 transition-transform">
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Hubungi Kami untuk Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>
       <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Integrasi Tanpa Batas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hubungkan ERPNext dengan semua sistem yang Anda butuhkan untuk ekosistem bisnis yang terintegrasi penuh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {challange.map((challanges, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border-border/50"
              style={{ background: 'var(--gradient-card)' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <challanges.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {challanges.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {challanges.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Metode Integrasi yang Fleksibel
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih metode integrasi yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                       style={{ background: 'linear-gradient(135deg, hsl(228.8 58.9% 28.6%) 0%, hsl(228.6 35.2% 64.9%) 100%)' }}>
                    <solution.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-6">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {solution.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      className="text-sm text-muted-foreground flex items-start"
                    >
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
     <section className="py-20 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ background: 'var(--gradient-primary)' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Manfaat Utama Integrasi ERPNext
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tingkatkan produktivitas dan efisiensi bisnis dengan integrasi yang sempurna
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                   style={{ background: 'linear-gradient(135deg, hsl(228.8 58.9% 28.6%) 0%, hsl(228.6 35.2% 64.9%) 100%)' }}>
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card 
            className="max-w-4xl mx-auto p-12 relative overflow-hidden border-none"
            style={{ background: 'linear-gradient(135deg, hsl(228.8 58.9% 28.6%) 0%, hsl(228.6 35.2% 64.9%) 100%)' }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Siap Membawa Integrasi Bisnis Anda ke Level Berikutnya?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Hubungkan ERPNext dengan sistem yang Anda gunakan dan nikmati otomatisasi penuh di setiap proses bisnis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-background text-primary font-semibold rounded-lg hover:bg-background/90 transition-colors shadow-[var(--shadow-button)]">
                Jadwalkan Demo Gratis
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors">
                Konsultasi Integrasi Sekarang
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default Hero;
