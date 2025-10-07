import heroImage from "@/assets/industry/Government/hero-government.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FolderKanban, Headset, PieChart, Gauge, HeartHandshake, Shield, Clock, EyeOff, FileX } from "lucide-react";
import dashboardImage from "@/assets/industry/Government/dashboard-preview.jpg";
import citizenImage from "@/assets/industry/Government/citizen-services.jpg";
import transparencyImage from "@/assets/industry/Government/transparency.jpg";
import BannerSection from "@/components/BannerSection";

const Index = () => {
  const governmentChallenges = [
    {
      icon: Clock,
      title: "Administrasi Lambat & Manual",
      description: "Proses birokrasi yang masih mengandalkan kertas dan manual memperlambat layanan kepada masyarakat dan meningkatkan potensi kesalahan.",
    },
    {
      icon: EyeOff,
      title: "Transparansi Anggaran Kurang",
      description: "Kurangnya sistem pelaporan yang terbuka membuat pengawasan anggaran publik menjadi sulit dan menurunkan kepercayaan masyarakat.",
    },
    {
      icon: FileX,
      title: "Layanan Publik Sulit Diawasi",
      description: "Tidak adanya sistem terintegrasi membuat pengawasan kualitas layanan publik menjadi tidak efektif dan sulit diukur.",
    },
  ];

  const governmentSolutions = [
    {
      icon: FolderKanban,
      title: "Project Management",
      description: "Kelola proyek pembangunan dan program birokrasi dengan sistem yang terintegrasi, timeline yang jelas, dan monitoring real-time.",
      image: dashboardImage,
      benefits: ["Tracking progress proyek secara real-time", "Manajemen anggaran yang efisien", "Kolaborasi tim yang lebih baik"],
    },
    {
      icon: Headset,
      title: "Help Desk Layanan Publik",
      description: "Platform terpusat untuk menangani pengaduan dan permintaan layanan masyarakat dengan sistem ticketing yang responsif.",
      image: citizenImage,
      benefits: ["Respon cepat terhadap pengaduan", "Sistem prioritas otomatis", "Tracking kepuasan masyarakat"],
    },
    {
      icon: PieChart,
      title: "Accounting & Transparansi",
      description: "Sistem akuntansi dan pelaporan keuangan yang transparan untuk meningkatkan akuntabilitas anggaran publik.",
      image: transparencyImage,
      benefits: ["Laporan keuangan real-time", "Audit trail lengkap", "Dashboard analitik mendalam"],
    },
  ];

  const governmentValues = [
    {
      icon: Shield,
      title: "Transparansi & Akuntabilitas",
      description: "Sistem pelaporan yang terbuka dan audit trail lengkap meningkatkan kepercayaan publik dan memastikan setiap anggaran dapat dipertanggungjawabkan.",
    },
    {
      icon: Gauge,
      title: "Efisiensi Birokrasi",
      description: "Automatisasi proses administratif mengurangi waktu pelayanan hingga 70% dan meminimalkan kesalahan manusia dalam pengelolaan dokumen.",
    },
    {
      icon: HeartHandshake,
      title: "Pelayanan Lebih Responsif",
      description: "Help desk terintegrasi memastikan setiap pengaduan masyarakat ditangani dengan cepat dan terukur, meningkatkan kepuasan layanan publik.",
    },
  ];

  const governmentStats = [
    { value: "70%", label: "Waktu Proses Berkurang" },
    { value: "85%", label: "Kepuasan Masyarakat" },
    { value: "60%", label: "Biaya Operasional Turun" },
    { value: "100%", label: "Transparansi Anggaran" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection
        title="Transformasi Digital Layanan Publik dengan ERPNext"
        subtitle="ERP untuk Pemerintahan"
        description="Tingkatkan transparansi, efisiensi birokrasi, dan kualitas pelayanan masyarakat dengan sistem manajemen terintegrasi yang modern dan mudah digunakan."
        image={heroImage}
        badge={{
          icon: <Shield className="w-4 h-4" />,
          text: "Solusi Digital untuk Pemerintahan Modern",
        }}
        primaryAction={{ label: "Mulai Sekarang" }}
        secondaryAction={{ label: "Pelajari Lebih Lanjut" }}
      />
      <ChallengesSection
        title="Masalah dalam Birokrasi Saat Ini"
        subtitle="Pemerintahan modern menghadapi berbagai tantangan yang menghambat pelayanan optimal kepada masyarakat."
        tagline="Tantangan Pemerintahan"
        items={governmentChallenges}
        theme="destructive"
      />
      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Fitur Lengkap untuk Pemerintahan Modern"
        subtitle="ERPNext menyediakan solusi terintegrasi yang dirancang khusus untuk meningkatkan efisiensi dan transparansi pemerintahan."
        items={governmentSolutions}
        theme="primary"
        alternate
      />
      <ValuesSection
        tagline="Value Proposition"
        title="Manfaat Nyata untuk Pemerintahan Anda"
        subtitle="Implementasi ERPNext memberikan dampak langsung pada kualitas layanan dan efisiensi operasional pemerintahan."
        items={governmentValues}
        stats={governmentStats}
        theme="primary"
        gradientBg
      />
      <BannerSection
        variant="simple"
        title="Transformasi Digital Pemerintahan"
        description="Tingkatkan efisiensi birokrasi, transparansi anggaran, dan layanan publik melalui solusi terintegrasi seperti Project Management, Help Desk, dan Accounting."
        primaryAction={{ label: "Coba Modul Government", onClick: () => console.log("Coba Modul Government clicked") }}
        secondaryAction={{ label: "Lihat Solusi", onClick: () => console.log("Lihat Solusi clicked") }}
      />

      <Footer />
    </div>
  );
};

export default Index;
