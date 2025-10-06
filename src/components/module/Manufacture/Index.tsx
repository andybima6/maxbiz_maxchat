import { Factory, FileText } from "lucide-react";
import heroImage from "@/assets/module/Manufacture/hero-manufacturing.jpg";
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
        badge="Manufacturing"
        title="Otomasi Produksi dari BOM hingga Delivery"
        description="Tujuan: mengotomatiskan proses produksi end-to-end. Fitur utama: Bill of Materials, Work Order & Job Card, serta Production Planning. Scope: integrasi penuh dengan stock, quality, dan accounting."
        primaryAction={{
          label: "Rencanakan Produksi",
          onClick: () => console.log("Manufacturing: Plan clicked"),
          icon: <Factory className="mr-2 h-5 w-5" />,
        }}
        secondaryAction={{
          label: "Lihat Demo",
          onClick: () => console.log("Manufacturing: Demo clicked"),
          icon: <FileText className="mr-2 h-5 w-5" />,
        }}
        heroImage={heroImage}
        stats={[
          {
            value: "95%+",
            label: "On-Time Production",
            subLabel: "WO Tepat Jadwal",
            position: "bottom-left",
          },
          {
            value: "Real-time",
            label: "Tracking",
            subLabel: "WO & Job Card",
            position: "top-right",
            delay: "0.3s",
          },
        ]}
      />

      <FeaturesCard />
      <StatsCard />
      <BannerSection
        variant="simple"
        title="Tingkatkan Efisiensi Produksi"
        description="Susun BOM, jalankan Work Order & Job Card, dan rencanakan kapasitas—semua terintegrasi dengan persediaan, quality, dan accounting."
        primaryAction={{ label: "Coba Modul Manufacturing", onClick: () => console.log("Manufacturing: Coba clicked") }}
        secondaryAction={{ label: "Pelajari Lebih Lanjut", onClick: () => console.log("Manufacturing: Pelajari clicked") }}
      />

      <Footer />
    </div>
  );
};

export default Index;
