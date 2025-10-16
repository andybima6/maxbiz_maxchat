import { Building2, FileBarChart2, FileSignature, FileText, Handshake, UserRound, BriefcaseBusiness, BadgeCheck, Users, Briefcase, FileSpreadsheet } from "lucide-react";
import heroImage from "@/assets/industry/LegalKonsultan/legal-hero.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import CaseDashboard from "@/assets/industry/LegalKonsultan/legal-project-management.jpg";
import CRMDashboard from "@/assets/industry/LegalKonsultan/legal-crm.jpg";
import BillingDashboard from "@/assets/industry/LegalKonsultan/legal-accounting.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BannerSection from "@/components/BannerSection";

// 🧩 Tantangan sektor keuangan
const legalChallenges = [
  {
    icon: FileText,
    title: "Kasus & Klien Tidak Terdokumentasi dengan Baik",
    description: "Tanpa sistem digital, pencatatan kasus dan informasi klien sulit dilacak, menyebabkan kehilangan data penting dan keterlambatan proses hukum.",
  },
  {
    icon: FileSignature,
    title: "Billing & Kontrak Masih Manual",
    description: "Pembuatan kontrak dan perhitungan biaya layanan hukum masih dilakukan secara manual, berisiko kesalahan dan keterlambatan pembayaran.",
  },
  {
    icon: Users,
    title: "Hubungan Klien Sulit Dilacak",
    description: "Tidak adanya sistem CRM membuat firm sulit memantau komunikasi, status proyek, dan retainer client secara berkelanjutan.",
  },
];

// ⚙️ Solusi ERPNext untuk sektor Legal & Consultant
const legalSolutions = [
  {
    icon: Briefcase,
    title: "Project & Case Management",
    description: "Kelola setiap kasus hukum atau proyek konsultasi secara terstruktur, dengan timeline, dokumen, dan status yang mudah dipantau.",
    image: CaseDashboard, // 💡 ganti dengan ilustrasi "case management" modern (tema biru profesional)
    benefits: ["Monitoring progres kasus & kontrak", "Dokumentasi digital & riwayat kasus", "Kolaborasi tim hukum secara real-time"],
  },
  {
    icon: UserRound,
    title: "CRM untuk Manajemen Klien",
    description: "Bangun hubungan jangka panjang dengan klien melalui CRM yang mencatat komunikasi, retainer, dan riwayat layanan hukum.",
    image: CRMDashboard, // 💡 ilustrasi dashboard CRM bertema hukum
    benefits: ["Riwayat interaksi klien terdokumentasi", "Notifikasi follow-up otomatis", "Analisis kepuasan & loyalitas klien"],
  },
  {
    icon: FileSpreadsheet,
    title: "Billing, Accounting & Retainer",
    description: "Otomatisasi proses billing, pengelolaan retainer, dan laporan keuangan agar firm bekerja lebih efisien dan transparan.",
    image: BillingDashboard, // 💡 gunakan asset bertema finansial profesional
    benefits: ["Tagihan otomatis & transparan", "Integrasi langsung ke sistem akuntansi", "Laporan pendapatan dan pengeluaran legal firm"],
  },
];

// 💡 Value Proposition sektor Legal & Consultant
const legalValues = [
  {
    icon: BriefcaseBusiness,
    title: "Manajemen Kasus Lebih Profesional",
    description: "Setiap kasus tercatat rapi dengan dokumentasi digital dan timeline yang jelas, meningkatkan kepercayaan klien.",
  },
  {
    icon: Handshake,
    title: "Relasi Klien Terkelola dengan Baik",
    description: "CRM membantu menjaga hubungan klien jangka panjang dan meningkatkan peluang retainer berkelanjutan.",
  },
  {
    icon: FileBarChart2,
    title: "Laporan Finansial Akurat & Transparan",
    description: "Sistem billing dan accounting otomatis mempermudah analisis performa finansial firm secara real-time.",
  },
];

// 📊 Statistik sektor Legal & Consultant
// const legalStats = [
//   { label: "Kasus Terselesaikan", value: "500+" },
//   { label: "Klien Aktif", value: "200+" },
//   { label: "Efisiensi Operasional", value: "35%" },
//   { label: "Dokumen Digital Aman", value: "100%" },
// ];

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
        title="Tantangan dalam Industri Legal & Konsultasi"
        subtitle="Firma hukum dan konsultan menghadapi tantangan besar dalam dokumentasi, manajemen klien, dan efisiensi billing yang membutuhkan sistem digital terintegrasi."
        tagline="Tantangan Industri Legal & Konsultan"
        items={legalChallenges}
        theme="primary"
      />

      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Sistem Terpadu untuk Legal & Consultant Firm"
        subtitle="ERPNext membantu firm hukum dan konsultan mengelola kasus, klien, billing, dan HR dalam satu platform digital yang efisien."
        items={legalSolutions}
        theme="primary"
        alternate
      />

      <ValuesSection
        tagline="Value Proposition"
        title="Manfaat Nyata untuk Dunia Legal & Konsultasi"
        subtitle="Digitalisasi proses hukum dan konsultasi dengan ERPNext menghadirkan efisiensi, transparansi, dan profesionalisme yang lebih tinggi."
        items={legalValues}
        // stats={legalStats}
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
