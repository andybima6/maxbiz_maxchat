import { Calculator, FileText, LifeBuoy } from "lucide-react";
import heroImage from "@/assets/module/HelpDesk/hero-helpdesk.jpg";
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
        badge="Help Desk"
        title="Layanan Bantuan dengan SLA Jelas"
        description="Tujuan: menyediakan layanan pelanggan dengan SLA yang terdefinisi. Fitur utama: Ticket management, Knowledge base, dan auto assignment & escalation. Scope: meningkatkan kepuasan pelanggan secara berkelanjutan."
        primaryAction={{
          label: "Mulai Help Desk",
          onClick: () => console.log("Start Help Desk clicked"),
          icon: <LifeBuoy className="mr-2 h-5 w-5" />,
        }}
        secondaryAction={{
          label: "Lihat Demo",
          onClick: () => console.log("Demo clicked"),
          icon: <FileText className="mr-2 h-5 w-5" />,
        }}
        heroImage={heroImage}
        stats={[
          {
            value: "99%",
            label: "Kepatuhan SLA",
            subLabel: "Bulan Ini",
            position: "bottom-left",
          },
          {
            value: "4.8/5",
            label: "CSAT",
            subLabel: "Kepuasan Pelanggan",
            position: "top-right",
            delay: "0.3s",
          },
        ]}
      />

      <FeaturesCard />
      <StatsCard />
      <BannerSection
        variant="simple"
        title="Tingkatkan Layanan Pelanggan dengan Help Desk"
        description="Sediakan SLA yang jelas, kelola tiket, dan gunakan knowledge base untuk resolusi lebih cepat."
        primaryAction={{ label: "Buka Tiket Sekarang", onClick: () => console.log("Help Desk: Buka Tiket clicked") }}
        secondaryAction={{ label: "Lihat SLA & Fitur", onClick: () => console.log("Help Desk: Lihat SLA clicked") }}
      />

      <Footer />
    </div>
  );
};

export default Index;
