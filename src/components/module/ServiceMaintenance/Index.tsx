import { Factory, FileText, Wrench } from "lucide-react";
import heroImage from "@/assets/module/ServiceMaintenance/hero-maintenance.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturesCard from "./FeatureCard";
import StatsCard from "./StatCard";
import BannerSection from "@/components/BannerSection";
import HeroSection from "../HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection
        badge="Service & Maintenance"
        title="Reliability Tinggi dengan Perawatan Terencana"
        description="Tujuan: menjaga keandalan aset dan menurunkan downtime. Fitur utama: preventive & corrective maintenance, work order & technician assignment, serta spare-part & riwayat servis. Scope: integrasi penuh dengan stock dan accounting."
        primaryAction={{
          label: "Jadwalkan Maintenance",
          onClick: () => console.log("Service&Maintenance: Schedule clicked"),
          icon: <Wrench className="mr-2 h-5 w-5" />,
        }}
        secondaryAction={{
          label: "Lihat Demo",
          onClick: () => console.log("Service&Maintenance: Demo clicked"),
          icon: <FileText className="mr-2 h-5 w-5" />,
        }}
        heroImage={heroImage}
        stats={[
          {
            value: "99.9%",
            label: "Asset Uptime",
            subLabel: "Preventive Coverage",
            position: "bottom-left",
          },
          {
            value: "MTTR",
            label: "Lebih Rendah",
            subLabel: "Perbaikan Cepat",
            position: "top-right",
            delay: "0.3s",
          },
        ]}
      />

      <FeaturesCard />
      <StatsCard />
      <BannerSection
        variant="simple"
        title="Kurangi Downtime, Maksimalkan Performa Aset"
        description="Atur preventive & corrective maintenance, kelola WO teknisi, dan kontrol spare-part—semua dalam satu modul."
        primaryAction={{ label: "Coba Modul Maintenance", onClick: () => console.log("Service&Maintenance: Coba clicked") }}
        secondaryAction={{ label: "Pelajari Lebih Lanjut", onClick: () => console.log("Service&Maintenance: Pelajari clicked") }}
      />

      <Footer />
    </div>
  );
};

export default Index;
