import { Boxes, Calculator, FileText } from "lucide-react";
import heroImage from "@/assets/module/Inventory/hero-warehouse.jpg";
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
        badge="Inventory / Stock"
        title="Kontrol Stok & Arus Barang Multi-Gudang"
        description="Tujuan: mengontrol stok dan arus barang di gudang. Fitur utama: multi-warehouse, batch/serial number tracking, serta stock valuation & reconciliation. Scope: visibilitas penuh atas supply chain."
        primaryAction={{
          label: "Kelola Stok",
          onClick: () => console.log("Inventory: Kelola Stok clicked"),
          icon: <Boxes className="mr-2 h-5 w-5" />,
        }}
        secondaryAction={{
          label: "Lihat Demo",
          onClick: () => console.log("Inventory: Demo clicked"),
          icon: <FileText className="mr-2 h-5 w-5" />,
        }}
        heroImage={heroImage}
        stats={[
          {
            value: "99.5%",
            label: "Akurasi Stok",
            subLabel: "Real-time Sync",
            position: "bottom-left",
          },
          {
            value: "Multi",
            label: "Gudang",
            subLabel: "Lokasi Terpadu",
            position: "top-right",
            delay: "0.3s",
          },
        ]}
      />

      <FeaturesCard />
      <StatsCard />
      <BannerSection
        variant="gradient"
        title="Optimalkan Pengelolaan Stok & Gudang"
        description="Pantau ketersediaan, batch/serial, dan valuasi stok lintas gudang dalam satu dashboard terpadu."
        primaryAction={{ label: "Coba Modul Inventory", onClick: () => console.log("Inventory: Coba Gratis clicked") }}
        secondaryAction={{ label: "Pelajari Lebih Lanjut", onClick: () => console.log("Inventory: Pelajari clicked") }}
      />

      <Footer />
    </div>
  );
};

export default Index;
