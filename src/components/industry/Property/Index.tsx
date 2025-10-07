import { Calculator, Building2, ClipboardCheck, HardHat, Wallet, BarChart3, Ruler, FileSearch, PenLine } from "lucide-react";
import heroImage from "@/assets/industry/property/hero-property.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CRMPipeline from "@/assets/industry/Property/crm-property.jpg";
import ProjectManagement from "@/assets/industry/Property/project-construction.jpg";
import Accounting from "@/assets/industry/Property/accounting-property.jpg";
import BannerSection from "@/components/BannerSection";

// 🧩 Tantangan sektor keuangan
const propertyChallenges = [
  {
    icon: PenLine,
    title: "Pipeline Penjualan Tidak Terpantau",
    description: "Data penjualan dan prospek sulit melacak progres, follow-up, dan status deal secara real-time, menyebabkan kehilangan peluang besar.",
  },
  {
    icon: HardHat,
    title: "Manajemen Proyek Pembangunan Kompleks",
    description: "Koordinasi antar kontraktor, supplier, dan tim lapangan sering tidak sinkron, menyebabkan delay dan cost overrun.",
  },
  {
    icon: Wallet,
    title: "Keuangan Kontrak Kurang Transparan",
    description: "Pencatatan pembayaran cicilan, arus kas, dan laporan keuangan kontrak properti tidak terintegrasi dan sulit diaudit.",
  },
];
// ⚙️ Solusi ERPNext untuk sektor keuangan

const propertySolutions = [
  {
    icon: Building2,
    title: "CRM + Sales Pipeline",
    description: "Kelola database klien, tracking prospek, dan pipeline penjualan properti dalam satu platform terintegrasi.",
    image: CRMPipeline,
    benefits: ["Lead management & scoring otomatis", "Follow-up reminder & task automation", "Sales funnel real-time & retention tracking"],
  },
  {
    icon: ClipboardCheck,
    title: "Project Management Konstruksi",
    description: "Monitor progress pembangunan, koordinasi tim, dan timeline proyek konstruksi secara real-time.",
    image: ProjectManagement,
    benefits: ["Gantt chart & milestone tracking", "Vendor & subcontractor management", "Progress photos & documentation"],
  },
  {
    icon: Calculator,
    title: "Accounting & Contract Management",
    description: "Catat pembayaran, cicilan, arus kas, dan laporan keuangan kontrak properti secara transparan.",
    image: Accounting,
    benefits: ["Contract & payment tracking", "Cash flow & revenue forecasting", "Financial report automation"],
  },
];

// 💡 Value Proposition sektor keuangan
const propertyValues = [
  {
    icon: BarChart3,
    title: "Penjualan Properti Lebih Terstruktur",
    description: "Pipeline penjualan yang jelas, follow-up otomatis, dan manajemen prospek yang lebih efisien dengan sistem CRM terintegrasi.",
  },
  {
    icon: Ruler,
    title: "Proyek Pembangunan Terpantau Real-time",
    description: "Monitor progres harian, koordinasi tim, vendor, serta material secara real-time untuk memastikan proyek selesai tepat waktu dan efisien.",
  },
  {
    icon: FileSearch,
    title: "Laporan Finansial Lebih Transparan",
    description: "Pencatatan kontrak, cicilan, arus kas, dan aset yang akurat dalam satu sistem ERP membuat laporan keuangan lebih mudah dipantau dan diaudit.",
  },
];

// 📊 Statistik sektor keuangan
const propertyStats = [
  { label: "Developer & Agen Properti", value: "500+" },
  { label: "Unit Properti Dikelola", value: "10,000+" },
  { label: "Monitoring Dashboard", value: "Real-time" },
  { label: "Support & Training", value: "24/7" },
];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection
        title="Digitalisasi Manajemen Properti Terpadu dengan ERPNext"
        subtitle="Solusi ERP untuk Industri Real Estate"
        description="Kelola proyek pembangunan, penjualan unit, dan keuangan properti dalam satu sistem terintegrasi untuk efisiensi dan transparansi maksimal."
        image={heroImage}
        badge={{
          icon: <Building2 className="w-4 h-4" />,
          text: "Tantangan Industri Properti",
        }}
        primaryAction={{ label: "Coba Sekarang" }}
        secondaryAction={{ label: "Pelajari Solusi" }}
      />

      <ChallengesSection
        title="Kompleksitas dalam Bisnis Real Estate"
        subtitle="Industri properti modern menghadapi berbagai tantangan operasional yang membutuhkan sistem manajemen yang terintegrasi dan transparan."
        tagline="Tantangan Industri Properti"
        items={propertyChallenges}
        theme="primary"
      />

      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Sistem Lengkap untuk Property & Real Estate"
        subtitle="Platform terintegrasi yang menghubungkan penjualan, pembangunan, dan keuangan properti dalam satu ekosistem."
        items={propertySolutions}
        theme="primary"
        alternate
      />

      <ValuesSection
        tagline="Value Proposition"
        title="Manfaat Nyata untuk Bisnis Properti Anda"
        subtitle="Tingkatkan efisiensi operasional dan profitabilitas dengan sistem manajemen properti yang terintegrasi."
        items={propertyValues}
        stats={propertyStats}
        theme="secondary"
        gradientBg
      />
      <BannerSection
        variant="simple"
        title="Digitalisasi Manajemen Properti & Real Estate"
        description="Kelola proyek pembangunan, penjualan unit, dan laporan keuangan properti secara efisien dan transparan dengan solusi terintegrasi seperti CRM, Project Management, dan Accounting."
        primaryAction={{ label: "Coba Modul Properti", onClick: () => console.log("Coba Modul Properti clicked") }}
        secondaryAction={{ label: "Lihat Solusi", onClick: () => console.log("Lihat Solusi clicked") }}
      />

      <Footer />
    </div>
  );
}
