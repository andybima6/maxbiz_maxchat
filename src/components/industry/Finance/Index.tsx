import { Shield, Banknote, Users2, Briefcase, Calculator } from "lucide-react";
import heroImage from "@/assets/industry/Finance/hero-finance.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import Accounting from "@/assets/industry/Finance/accounting-dashboard.jpg";
import CRMImage from "@/assets/industry/Finance/crm-banking.jpg";
import Compliance from "@/assets/industry/Finance/compliance-finance.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSection from "@/components/BannerSection";

// 🧩 Tantangan sektor keuangan
const financeChallenges = [
  {
    icon: Shield,
    title: "Regulasi & Kepatuhan Ketat",
    description: "Industri finansial menghadapi regulasi yang kompleks dan terus berubah, memerlukan sistem yang dapat beradaptasi dengan cepat terhadap persyaratan compliance.",
  },
  {
    icon: Banknote,
    title: "Kompleksitas Transaksi Finansial",
    description: "Volume transaksi yang tinggi dan beragam membutuhkan sistem terintegrasi yang akurat, real-time, dan terhindar dari kesalahan.",
  },
  {
    icon: Users2,
    title: "Customer Engagement Lemah",
    description: "Kurangnya sistem CRM yang terstruktur membuat pengelolaan hubungan nasabah tidak optimal dan berdampak pada kepuasan layanan.",
  },
];

// ⚙️ Solusi ERPNext untuk sektor keuangan
const financeSolutions = [
  {
    icon: Calculator,
    title: "Accounting Terintegrasi",
    description: "Sistem akuntansi yang powerful untuk pencatatan finansial yang akurat, laporan real-time, dan manajemen aset yang efisien untuk operasional perbankan dan asuransi.",
    image: Accounting,
    benefits: ["Pencatatan transaksi otomatis & akurat", "Laporan keuangan real-time", "Multi-currency & multi-entity support"],
  },
  {
    icon: Users2,
    title: "CRM untuk Layanan Nasabah",
    description: "Platform CRM lengkap untuk mengelola hubungan dengan nasabah, meningkatkan engagement, dan memantau seluruh aktivitas layanan di satu tempat.",
    image: CRMImage,
    benefits: ["360° view profil nasabah", "Otomasi follow-up & reminder", "Analitik kepuasan nasabah"],
  },
  {
    icon: Banknote,
    title: "Integrasi Sistem Perbankan",
    description: "Framework fleksibel memungkinkan integrasi mudah dengan core banking system, payment gateway, dan layanan regulasi compliance.",
    image: Compliance,
  },
];

// 💡 Value Proposition sektor keuangan
const financeValues = [
  {
    icon: Briefcase,
    title: "Efisiensi Pencatatan Keuangan",
    description: "Automatisasi proses akuntansi mengurangi waktu pencatatan hingga 60% dan meningkatkan akurasi dalam transaksi finansial yang kompleks.",
  },
  {
    icon: Users2,
    title: "Relasi Nasabah Lebih Terkelola",
    description: "Sistem CRM terintegrasi memantau setiap interaksi nasabah secara detail, meningkatkan customer retention hingga 65%.",
  },
  {
    icon: Banknote,
    title: "Integrasi Sistem Perbankan",
    description: "Framework fleksibel memungkinkan integrasi mudah dengan core banking system, payment gateway, dan layanan regulasi compliance.",
  },
];

// 📊 Statistik sektor keuangan
// const financeStats = [
//   { value: "80%", label: "Efisiensi Pencatatan" },
//   { value: "65%", label: "Customer Retention" },
//   { value: "99%", label: "Akurasi Transaksi" },
//   { value: "100%", label: "Compliance Ready" },
// ];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection
        title="Digitalisasi Sistem Keuangan Terpadu dengan ERPNext"
        subtitle="Solusi ERP untuk Sektor Finansial"
        description="Optimalkan efisiensi operasional, kepatuhan regulasi, dan relasi nasabah dengan sistem manajemen finansial yang modern dan terintegrasi."
        image={heroImage}
        badge={{
          icon: <Shield className="w-4 h-4" />,
          text: "Tantangan Industri Finansial",
        }}
        primaryAction={{ label: "Mulai Sekarang" }}
        secondaryAction={{ label: "Pelajari Lebih Lanjut" }}
      />

      <ChallengesSection
        title="Kompleksitas dalam Sektor Keuangan"
        subtitle="Institusi keuangan modern menghadapi berbagai tantangan operasional yang membutuhkan sistem manajemen yang robust dan terintegrasi."
        tagline="Tantangan Industri Finansial"
        items={financeChallenges}
        theme="primary"
      />

      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Fitur Lengkap untuk Institusi Keuangan"
        subtitle="ERPNext menyediakan solusi komprehensif untuk meningkatkan efisiensi operasional dan kepatuhan regulasi di sektor finansial."
        items={financeSolutions}
        theme="primary"
        alternate
      />

      <ValuesSection
        tagline="Value Proposition"
        title="Manfaat Nyata untuk Institusi Keuangan Anda"
        subtitle="Implementasi ERPNext memberikan dampak langsung pada efisiensi operasional, kepuasan nasabah, dan kepatuhan regulasi."
        items={financeValues}
        // stats={financeStats}
        theme="secondary"
        gradientBg
      />
      <BannerSection
        variant="simple"
        title="Transformasi Digital Sektor Keuangan"
        description="Optimalkan efisiensi operasional, kepatuhan regulasi, dan manajemen nasabah dengan solusi terintegrasi seperti Accounting, CRM, dan Compliance Framework."
        primaryAction={{ label: "Coba Modul Finance", onClick: () => console.log("Coba Modul Finance clicked") }}
        secondaryAction={{ label: "Lihat Solusi", onClick: () => console.log("Lihat Solusi clicked") }}
      />

      <Footer />
    </div>
  );
}
