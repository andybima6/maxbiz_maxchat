import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight, Calculator, FileText } from "lucide-react";
import heroImage from "@/assets/module/Commerce/hero-ecommerce.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturesCard from "./FeatureCard";
import StatsCard from "./StatsCard";
import BannerSection from "@/components/BannerSection";
import HeroSection from "../HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <HeroSection
        badge="Platform E-Commerce Terpadu"
        title="Solusi E-Commerce All-in-One"
        description="Platform lengkap dengan CMS, shopping cart, payment gateway, dan integrasi inventory-accounting untuk bisnis online Anda."
        primaryAction={{
          label: "Mulai Sekarang",
          onClick: () => console.log("Start clicked"),
          icon: <Calculator className="mr-2 h-5 w-5" />,
        }}
        secondaryAction={{
          label: "Lihat Demo",
          onClick: () => console.log("Demo clicked"),
          icon: <FileText className="mr-2 h-5 w-5" />,
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

      <FeaturesCard />
      <StatsCard />
      <BannerSection
        variant="gradient"
        title="Mulai Perjalanan E-Commerce Anda dengan MaxBiz"
        description="Daftar sekarang dan nikmati kemudahan mengelola bisnis online Anda dalam satu platform terpadu."
        primaryAction={{ label: "Coba Gratis", onClick: () => console.log("Coba Gratis clicked") }}
        secondaryAction={{ label: "Pelajari Lebih Lanjut", onClick: () => console.log("Pelajari Lebih Lanjut clicked") }}
      />
      <Footer />
    </div>
  );
};

export default Index;
