import { BarChart3, Users, BusFront, Eye, Users2, FileText, FileBarChart, HandCoins, HeartHandshake, Briefcase, Handshake } from "lucide-react";
import heroImage from "@/assets/industry/Ngo/hero-ngo.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import DonorDashboard from "@/assets/industry/Ngo/donor-management.jpg";
import VolunteerDashboard from "@/assets/industry/Ngo/volunteer-management.jpg";
import ImpactDashboard from "@/assets/industry/Ngo/impact-reporting.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BannerSection from "@/components/BannerSection";

const ngoChallenges = [
  {
    icon: HandCoins,
    title: "Transparansi Donasi & Pengeluaran Kurang Terpantau",
    description: "Banyak organisasi kesulitan melacak aliran dana secara transparan, terutama untuk program dengan banyak donatur dan kegiatan yang beragam.",
  },
  {
    icon: Users,
    title: "Manajemen Relawan & Program Masih Manual",
    description: "Pendataan relawan, penugasan, dan pelaporan kegiatan masih dilakukan lewat spreadsheet, membuat koordinasi lambat dan tidak efisien.",
  },
  {
    icon: FileText,
    title: "Pelaporan kepada Donatur Tidak Terstruktur",
    description: "Tanpa sistem terintegrasi, laporan program dan keuangan sulit diakses secara real-time oleh manajemen maupun donatur.",
  },
];

// ⚙️ Solusi ERPNext untuk sektor NGO
const ngoSolutions = [
  {
    icon: HeartHandshake,
    title: "Donor & Fund Management",
    description: "Kelola data donatur, sumber dana, dan alokasi dana untuk setiap program secara transparan dengan sistem akuntansi terintegrasi.",
    image: DonorDashboard,
    benefits: ["Transparansi penggunaan dana program", "Integrasi penuh dengan sistem akuntansi", "Pelacakan real-time untuk setiap donatur"],
  },
  {
    icon: Users,
    title: "Volunteer & Project Management",
    description: "Pantau aktivitas relawan, progres proyek sosial, serta kebutuhan sumber daya secara real-time di setiap program.",
    image: VolunteerDashboard,
    benefits: ["Manajemen relawan dan tugas otomatis", "Pelacakan progres proyek & dampak sosial", "Koordinasi efisien antar tim & lokasi"],
  },
  {
    icon: FileBarChart,
    title: "Grant & Impact Reporting",
    description: "Otomatisasi pelaporan penggunaan dana, capaian program, dan dampak sosial untuk memudahkan audit dan akuntabilitas publik.",
    image: ImpactDashboard,
    benefits: ["Pelaporan keuangan & sosial otomatis", "Data siap audit & mudah diverifikasi", "Transparansi penuh bagi donatur & publik"],
  },
];

// 💡 Value Proposition sektor NGO
const ngoValues = [
  {
    icon: Eye,
    title: "Transparansi Keuangan Meningkat",
    description: "ERPNext membantu NGO menjaga akuntabilitas dengan pelaporan donasi dan pengeluaran yang jelas dan real-time.",
  },
  {
    icon: Users2,
    title: "Koordinasi Relawan Lebih Efisien",
    description: "Manajemen relawan, proyek, dan sumber daya menjadi terstruktur dan mudah diakses dari mana saja.",
  },
  {
    icon: BarChart3,
    title: "Pelaporan Dampak Sosial Akurat",
    description: "Data program dan keuangan tersaji otomatis untuk memperkuat kepercayaan publik dan donatur.",
  },
];

// 📊 Statistik sektor NGO
// const ngoStats = [
//   { label: "Program Sosial Dikelola", value: "500+" },
//   { label: "Donatur Terdaftar", value: "10.000+" },
//   { label: "Relawan Aktif", value: "5.000+" },
//   { label: "Pelaporan Real-time", value: "100%" },
// ];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection
        title="Transparansi dan Efisiensi Operasional Lembaga Nirlaba dengan ERPNext"
        subtitle="Solusi ERP untuk NGO & Organisasi Sosial Modern"
        description="Kelola donasi, relawan, program sosial, dan laporan dampak dalam satu sistem terintegrasi untuk meningkatkan transparansi, akuntabilitas, dan efisiensi organisasi nirlaba."
        image={heroImage} // ganti dengan ilustrasi bertema sosial: orang bergandengan tangan, simbol hati, atau kegiatan sosial di lapangan
        badge={{
          icon: <Handshake className="w-4 h-4" />,
          text: "Tantangan Organisasi Nirlaba",
        }}
        primaryAction={{ label: "Coba Sekarang" }}
        secondaryAction={{ label: "Pelajari Solusi" }}
      />
      <ChallengesSection
        title="Tantangan dalam Lembaga Nirlaba"
        subtitle="Organisasi nirlaba menghadapi tantangan besar dalam transparansi pendanaan, koordinasi relawan, dan pelaporan program yang akurat."
        tagline="Tantangan Sektor NGO"
        items={ngoChallenges}
        theme="primary"
      />

      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Sistem Terpadu untuk Lembaga Nirlaba"
        subtitle="ERPNext membantu NGO mengelola donasi, program sosial, dan pelaporan keuangan dengan sistem yang transparan dan efisien."
        items={ngoSolutions}
        theme="primary"
        alternate
      />

      <ValuesSection
        tagline="Value Proposition"
        title="Dampak Nyata Digitalisasi untuk NGO"
        subtitle="Dengan ERPNext, lembaga nirlaba dapat meningkatkan transparansi, mempercepat pelaporan, dan memperkuat kepercayaan publik."
        items={ngoValues}
        // stats={ngoStats}
        theme="secondary"
        gradientBg
      />

      <BannerSection
        variant="simple"
        title="Transformasi Digital untuk Organisasi Nirlaba"
        description="ERPNext membantu NGO mengelola donasi, relawan, dan laporan program dengan transparansi penuh. Jadikan setiap kontribusi tercatat dengan akurat dan berdampak nyata bagi masyarakat."
        primaryAction={{
          label: "Coba Modul NGO",
          onClick: () => console.log("Coba Modul NGO clicked"),
        }}
        secondaryAction={{
          label: "Lihat Solusi",
          onClick: () => console.log("Lihat Solusi clicked"),
        }}
      />
      <Footer />
    </div>
  );
}
