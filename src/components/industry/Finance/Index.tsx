import { Shield, Banknote, Users2, Briefcase } from "lucide-react";
import heroImage from "@/assets/industry/Finance/hero-finance.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import Accounting from "@/assets/industry/Finance/accounting-dashboard.jpg";
import CRMImage from "@/assets/industry/Finance/crm-dashboard.jpg";
import Compliance from "@/assets/industry/Finance/compliance.jpg";


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
    title: "Accounting Terintegrasi",
    description: "Sistem akuntansi yang powerful untuk pencatatan finansial yang akurat, laporan real-time, dan manajemen aset yang efisien untuk operasional perbankan dan asuransi.",
    bullets: ["Pencatatan transaksi otomatis & akurat", "Laporan keuangan real-time", "Multi-currency & multi-entity support"],
    image: Accounting,
  },
  {
    title: "CRM untuk Layanan Nasabah",
    description: "Platform CRM lengkap untuk mengelola hubungan dengan nasabah, meningkatkan engagement, dan memantau seluruh aktivitas layanan di satu tempat.",
    bullets: ["360° view profil nasabah", "Otomasi follow-up & reminder", "Analitik kepuasan nasabah"],
    image: CRMImage,
  },
  {
    title: "Kustomisasi untuk Compliance",
    description: "Framework fleksibel untuk memenuhi kebutuhan audit, keamanan data, dan standar industri finansial sesuai regulasi lokal maupun global.",
    bullets: ["Audit trail lengkap & otomatis", "Role-based access control", "Reporting sesuai standar regulasi"],
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
const financeStats = [
  { value: "80%", label: "Efisiensi Pencatatan" },
  { value: "65%", label: "Customer Retention" },
  { value: "99%", label: "Akurasi Transaksi" },
  { value: "100%", label: "Compliance Ready" },
];

export default function FinancePage() {
  return (
    <>
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
        stats={financeStats}
        theme="secondary"
        gradientBg
      />
    </>
  );
}
