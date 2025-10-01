import { Button } from "@/components/ui/button";
import { Calculator, FileText, Database, DollarSign, Package } from "lucide-react";
import heroImage from "@/assets/module/Buying/hero-purchasing.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "./FeatureCard";
import StatsCard from "./StatsCard";
import { Card } from "@/components/ui/card";
import BannerSection from "@/components/BannerSection";

const integrations = [
  {
    icon: DollarSign,
    title: "Finance Integration",
    description: "Sinkronisasi otomatis dengan sistem akuntansi untuk general ledger, AP/AR, dan budget tracking real-time.",
  },
  {
    icon: Package,
    title: "Inventory Integration",
    description: "Terintegrasi dengan warehouse management untuk stock monitoring, reorder point, dan automated purchase trigger.",
  },
  {
    icon: Database,
    title: "ERP Integration",
    description: "Koneksi seamless dengan berbagai sistem ERP untuk data consistency dan process automation  .",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-primary">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        {/* Hero Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">Procurement Management System</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Otomasi Pembelian dengan <span className="text-white/90">Efisiensi & Transparansi</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">Platform pengadaan terintegrasi untuk mengelola supplier, purchase order, invoice, hingga pelaporan dengan kontrol penuh dan transparansi maksimal.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant text-base px-8 h-14">
                  <Calculator className="mr-2 h-5 w-5" />
                  Mulai Gratis
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base px-8 h-14">
                  <FileText className="mr-2 h-5 w-5" />
                  Lihat Demo
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img src={heroImage} alt="Purchasing Management System Dashboard" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-elegant p-4 animate-scale-in hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                    <span className="text-white font-bold text-lg">98%</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Akurasi Order</p>
                    <p className="text-sm font-semibold text-foreground">Otomatis Terverifikasi</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-elegant p-4 animate-scale-in hidden md:block" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                    <span className="text-white font-bold text-lg">50%</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Lebih Cepat</p>
                    <p className="text-sm font-semibold text-foreground">Proses Pembelian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StatsCard />
      <FeatureCard />
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4 border border-white/30">Integrasi Seamless</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Terhubung dengan Sistem Anda</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">Procurement terintegrasi penuh dengan finance, inventory, dan sistem enterprise lainnya</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {integrations.map((integration, index) => (
              <Card key={index} className="p-8 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <integration.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{integration.title}</h3>

                <p className="text-white/80 leading-relaxed">{integration.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <BannerSection
        title="Siap Tingkatkan Performa Penjualan Anda?"
        description="Mulai otomasi proses penjualan Anda hari ini. Dapatkan akses penuh ke semua fitur tanpa biaya setup."
        primaryAction={{ label: "Mulai Sekarang", onClick: () => console.log("Primary") }}
        secondaryAction={{ label: "Hubungi Sales", onClick: () => console.log("Secondary") }}
      />
      <Footer />
    </div>
  );
};

export default Index;
