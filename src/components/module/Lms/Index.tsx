import { BookOpen, Boxes, FileText } from "lucide-react";
import heroImage from "@/assets/module/Lms/hero-lms.jpg";
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
        badge="LMS (Learning Management System)"
        title="Kelola Materi, Evaluasi, & Sertifikasi"
        description="Tujuan: mengelola proses pembelajaran end-to-end. Fitur utama: course & curriculum builder, quiz/assessment & sertifikasi, progress tracking & analytics. Scope: meningkatkan kompetensi dan kepatuhan pelatihan karyawan."
        primaryAction={{
          label: "Buat Kursus",
          onClick: () => console.log("LMS: Buat Kursus clicked"),
          icon: <BookOpen className="mr-2 h-5 w-5" />,
        }}
        secondaryAction={{
          label: "Lihat Demo",
          onClick: () => console.log("LMS: Demo clicked"),
          icon: <FileText className="mr-2 h-5 w-5" />,
        }}
        heroImage={heroImage}
        stats={[
          {
            value: "92%",
            label: "Completion Rate",
            subLabel: "Rata-rata Tim",
            position: "bottom-left",
          },
          {
            value: "4.7/5",
            label: "Course Rating",
            subLabel: "Feedback Peserta",
            position: "top-right",
            delay: "0.3s",
          },
        ]}
      />

      <FeaturesCard />
      {/* <StatsCard /> */}
      <BannerSection
        variant="gradient"
        title="Bangun & Kelola Pembelajaran Karyawan"
        description="Susun kurikulum, kelola materi, uji kompetensi, dan terbitkan sertifikat—semua dalam satu platform LMS."
        primaryAction={{ label: "Coba Modul LMS", onClick: () => console.log("LMS: Coba clicked") }}
        secondaryAction={{ label: "Pelajari Lebih Lanjut", onClick: () => console.log("LMS: Pelajari clicked") }}
      />

      <Footer />
    </div>
  );
};

export default Index;
