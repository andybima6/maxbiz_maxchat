import FeatureCard from "@/components/module/ErpOverview/FeatureCard";
import StatCard from "@/components/module/ErpOverview/StatCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/module/erpoverview/hero-erp.jpg";
import dashboardIcon from "@/assets/module/erpoverview/dashboard-icon.jpg";
import multiCompanyIcon from "@/assets/module/erpoverview/multi-company-icon.jpg";
import currencyIcon from "@/assets/module/erpoverview/currency-icon.jpg";
import reportsIcon from "@/assets/module/erpoverview/reports-icon.jpg";
import unifiedIcon from "@/assets/module/erpoverview/unified-icon.jpg";
import integrationIcon from "@/assets/module/erpoverview/integration-icon.jpg";
import { ArrowRight, Calculator, CheckCircle2, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSection from "@/components/BannerSection";
import HeroSection from "../HeroSection";

const Index = () => {
  const features = [
    {
      icon: <img src={dashboardIcon} alt="Real-time Dashboard" className="w-full h-full object-cover" />,
      title: "Dashboard Real-Time",
      description: "Pantau seluruh operasi bisnis Anda dalam satu tampilan komprehensif yang update secara real-time",
      features: [
        "Visualisasi data bisnis interaktif dan dinamis",
        "Monitoring performa departemen secara langsung",
        "Notifikasi otomatis untuk aktivitas penting",
        "Widget yang dapat dikustomisasi sesuai kebutuhan",
        "Akses cepat ke laporan dan metrik kunci",
      ],
    },
    {
      icon: <img src={multiCompanyIcon} alt="Multi-Company" className="w-full h-full object-cover" />,
      title: "Multi-Company Management",
      description: "Kelola berbagai entitas bisnis dalam satu platform terpadu dengan mudah",
      features: ["Manajemen terpusat untuk multiple perusahaan", "Konsolidasi laporan lintas entitas", "Setting independen per perusahaan", "Transfer antar perusahaan yang seamless", "Hak akses berbasis hierarki organisasi"],
    },
    {
      icon: <img src={currencyIcon} alt="Multi-Currency" className="w-full h-full object-cover" />,
      title: "Multi-Currency Support",
      description: "Transaksi dalam berbagai mata uang dengan konversi otomatis dan akurat",
      features: ["Support berbagai mata uang internasional", "Update kurs otomatis real-time", "Laporan keuangan multi-currency", "Perhitungan gain/loss otomatis", "Konversi mata uang yang fleksibel"],
    },
    {
      icon: <img src={reportsIcon} alt="Automated Reports" className="w-full h-full object-cover" />,
      title: "Laporan Otomatis",
      description: "Generate laporan bisnis komprehensif secara otomatis dengan scheduling yang fleksibel",
      features: ["Pembuatan laporan otomatis terjadwal", "Template laporan yang dapat dikustomisasi", "Export ke berbagai format (PDF, Excel, CSV)", "Analisis data mendalam dengan visualisasi", "Email laporan otomatis ke stakeholder"],
    },
    {
      icon: <img src={unifiedIcon} alt="Unified Platform" className="w-full h-full object-cover" />,
      title: "Platform Terpadu",
      description: "Satu sistem terintegrasi untuk semua kebutuhan bisnis Anda, tanpa perlu multiple software",
      features: ["Integrasi seamless antar modul", "Data terpusat dan konsisten", "Eliminasi duplikasi data entry", "Workflow otomatis antar departemen", "Single source of truth untuk semua data"],
    },
    {
      icon: <img src={integrationIcon} alt="Process Integration" className="w-full h-full object-cover" />,
      title: "Integrasi Proses Bisnis",
      description: "Otomasi dan optimalisasi seluruh proses bisnis dengan workflow yang terkoneksi",
      features: ["Otomasi proses end-to-end", "Approval workflow yang fleksibel", "Tracking proses real-time", "Notifikasi dan alert otomatis", "Integrasi dengan sistem eksternal via API"],
    },
  ];

  // const stats = [
  //   { number: "100%", label: "Terintegrasi" },
  //   { number: "24/7", label: "Real-Time Access" },
  //   { number: "∞", label: "Scalability" },
  //   { number: "1", label: "Unified Platform" },
  // ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <HeroSection
        badge="ERPNext Overview"
        title="Sistem ERP All-in-One untuk Semua Proses Bisnis"
        description="Menyatukan data dan fungsi dalam satu platform terintegrasi yang powerful, menjadi   Menyatukan data dan fungsi dalam satu platform terintegrasi yang powerful, menjadi fondasi semua departemen untuk mengurangi penggunaan software terpisah"
        primaryAction={{
          label: "Mulai Gratis",
          icon: <Calculator className="mr-2 h-5 w-5" />,
          onClick: () => console.log("Mulai Gratis diklik!"),
        }}
        secondaryAction={{
          label: "Lihat Demo",
          icon: <FileText className="mr-2 h-5 w-5" />,
          onClick: () => console.log("Lihat Demo diklik!"),
        }}
        heroImage={heroImage}
        stats={[
          { value: "98%", label: "Akurasi Order", subLabel: "Otomatis Terverifikasi", position: "bottom-left" },
          { value: "50%", label: "Lebih Cepat", subLabel: "Proses Pembelian", position: "top-right", delay: "0.3s" },
        ]}
      />

      {/* Stats Section */}
      {/* <section className="py-12 bg-card shadow-medium">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} number={stat.number} label={stat.label} delay={index * 100} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Main Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-primary">Tujuan Utama ERPNext</h2>
            <p className="text-lg text-muted-foreground">Menyediakan sistem ERP all-in-one yang mengintegrasikan semua proses bisnis, menyatukan data dan fungsi dalam satu platform yang powerful dan mudah digunakan</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} features={feature.features} delay={index * 100} />
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-card shadow-large">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Keunggulan Platform Terintegrasi</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Efisiensi Operasional</h4>
                  <p className="text-sm text-card/80">Otomasi proses bisnis mengurangi pekerjaan manual dan meningkatkan produktivitas tim</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Data Terpusat</h4>
                  <p className="text-sm text-card/80">Single source of truth untuk semua informasi bisnis, eliminasi data duplikat</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Skalabilitas Tinggi</h4>
                  <p className="text-sm text-card/80">Berkembang bersama bisnis Anda dari startup hingga enterprise</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Cost Effective</h4>
                  <p className="text-sm text-card/80">Satu platform untuk semua kebutuhan, mengurangi biaya lisensi multiple software</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Kolaborasi Tim</h4>
                  <p className="text-sm text-card/80">Departemen bekerja seamless dengan akses ke data yang sama real-time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Keputusan Data-Driven</h4>
                  <p className="text-sm text-card/80">Insight real-time membantu pengambilan keputusan bisnis yang lebih baik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
