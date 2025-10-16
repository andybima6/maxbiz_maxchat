import { Button } from "@/components/ui/button";
import { Calculator, FileText, Database, DollarSign, Package } from "lucide-react";
import heroImage from "@/assets/module/Buying/hero-purchasing.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "./FeatureCard";
// import StatsCard from "./StatsCard";
import { Card } from "@/components/ui/card";
import BannerSection from "@/components/BannerSection";
import HeroSection from "../HeroSection";

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
      <HeroSection
        badge="Procurement Management System"
        title="Otomasi Pembelian dengan Efisiensi & Transparansi"
        description="Platform pengadaan terintegrasi untuk mengelola supplier, purchase order, invoice, hingga pelaporan dengan kontrol penuh dan transparansi maksimal."
        primaryAction={{
          label: "Mulai Gratis",
          icon: <Calculator className="mr-2 h-5 w-5" />,
          onClick: () => console.log("Mulai Gratis diklik"),
        }}
        secondaryAction={{
          label: "Lihat Demo",
          icon: <FileText className="mr-2 h-5 w-5" />,
          onClick: () => console.log("Lihat Demo diklik"),
        }}
        heroImage={heroImage}
        stats={[
          {
            value: "98%",
            label: "Akurasi Order",
            subLabel: "Otomatis Terverifikasi",
            position: "bottom-left",
          },
          {
            value: "50%",
            label: "Lebih Cepat",
            subLabel: "Proses Pembelian",
            position: "top-right",
            delay: "0.3s",
          },
        ]}
      />
      {/* <StatsCard /> */}
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
        variant="simple"
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
