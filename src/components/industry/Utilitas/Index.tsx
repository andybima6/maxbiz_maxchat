import { BarChart3, Users, Clock, EyeOff, FileSpreadsheet, Headphones, ShieldCheck, Building2, Construction, AlertTriangle, ClipboardCheck } from "lucide-react";
import heroImage from "@/assets/industry/Utilitas/hero-service.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import AccountingDashboard from "@/assets/industry/Utilitas/accounting-solution.jpg";
import ProjectMonitoringDashboard from "@/assets/industry/Utilitas/project-management-solution.jpg";
import HelpDeskDashboard from "@/assets/industry/Utilitas/helpdesk-solution.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BannerSection from "@/components/BannerSection";

// 💡 Tantangan di sektor Utilities & Layanan Publik
const utilitiesChallenges = [
  {
    icon: AlertTriangle,
    title: "Layanan Publik Lambat Ditangani",
    description: "Proses pelayanan publik masih manual dan tidak terintegrasi, menyebabkan keterlambatan dalam penanganan permintaan masyarakat.",
  },
  {
    icon: EyeOff,
    title: "Kurang Transparansi Biaya",
    description: "Minimnya sistem akuntansi terpusat membuat pengelolaan anggaran dan pelaporan keuangan menjadi tidak transparan.",
  },
  {
    icon: Construction,
    title: "Proyek Infrastruktur Sulit Dipantau",
    description: "Tanpa sistem proyek digital, pelaksanaan dan progres proyek infrastruktur sulit dimonitor secara real-time.",
  },
];

// ⚙️ Solusi ERPNext untuk sektor Utilities & Layanan Publik
const utilitiesSolutions = [
  {
    icon: FileSpreadsheet,
    title: "Accounting & Budgeting",
    description: "Kelola anggaran, pembukuan, dan pelaporan keuangan lembaga publik secara transparan dan akurat.",
    image: AccountingDashboard, // contoh asset: gambar dashboard akuntansi publik
    benefits: ["Pengelolaan anggaran yang efisien dan akuntabel", "Pelaporan keuangan otomatis & transparan", "Integrasi langsung dengan sistem procurement"],
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Pantau proyek infrastruktur, utilitas, dan kegiatan publik secara digital dengan pelacakan progres real-time.",
    image: ProjectMonitoringDashboard, // contoh asset: progress tracking infrastructure
    benefits: ["Monitoring progres proyek & timeline real-time", "Manajemen sumber daya & vendor", "Laporan kinerja proyek otomatis"],
  },
  {
    icon: Headphones,
    title: "Help Desk & Ticketing",
    description: "Tangani keluhan dan permintaan masyarakat melalui sistem help desk terpusat untuk layanan publik yang lebih responsif.",
    image: HelpDeskDashboard, // contoh asset: dashboard keluhan publik
    benefits: ["Keluhan publik tertangani lebih cepat", "Analitik keluhan untuk perbaikan layanan", "Integrasi dengan CRM dan notifikasi otomatis"],
  },
];

// 🏛️ Value Proposition sektor Utilities & Layanan Publik
const utilitiesValues = [
  {
    icon: Clock,
    title: "Layanan Publik Lebih Cepat & Responsif",
    description: "Sistem digital mempercepat proses penanganan permintaan dan meningkatkan kepuasan masyarakat.",
  },
  {
    icon: ShieldCheck,
    title: "Transparansi Anggaran & Keuangan",
    description: "Setiap pengeluaran, anggaran, dan proyek tercatat dengan jelas dan mudah diaudit.",
  },
  {
    icon: BarChart3,
    title: "Kontrol Proyek & Anggaran yang Lebih Baik",
    description: "Manajemen proyek dan dana publik menjadi lebih terarah dan efisien melalui sistem terintegrasi ERPNext.",
  },
];

// 📊 Statistik sektor Utilities & Public Service
// const utilitiesStats = [
//   { label: "Instansi & Lembaga Terintegrasi", value: "120+" },
//   { label: "Efisiensi Penanganan Layanan", value: "40%" },
//   { label: "Proyek Infrastruktur Termanage", value: "500+" },
//   { label: "Transparansi Keuangan", value: "100%" },
// ];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection
        title="Digitalisasi Layanan Publik & Utilitas dengan ERPNext"
        subtitle="Solusi ERP untuk Pemerintahan & Layanan Masyarakat Modern"
        description="Kelola proyek infrastruktur, anggaran, dan keluhan publik dalam satu sistem ERP terintegrasi untuk meningkatkan transparansi, efisiensi, dan pelayanan masyarakat."
        image={heroImage} // ganti dengan ilustrasi seperti peta kota, proyek infrastruktur, atau layanan publik digital
        badge={{
          icon: <Building2 className="w-4 h-4" />,
          text: "Tantangan Sektor Utilitas & Layanan Publik",
        }}
        primaryAction={{ label: "Coba Sekarang" }}
        secondaryAction={{ label: "Pelajari Solusi" }}
      />

      <ChallengesSection
        title="Tantangan dalam Sektor Utilities & Layanan Publik"
        subtitle="Instansi pemerintah dan penyedia layanan publik sering menghadapi masalah kecepatan layanan, transparansi anggaran, serta pengawasan proyek yang kompleks."
        tagline="Tantangan Industri Utilities & Public Service"
        items={utilitiesChallenges}
        theme="primary"
      />

      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Sistem Terpadu untuk Layanan Publik & Infrastruktur"
        subtitle="ERPNext menghadirkan solusi menyeluruh untuk pengelolaan anggaran, proyek, keluhan masyarakat, dan tenaga kerja dalam satu platform terintegrasi."
        items={utilitiesSolutions}
        theme="primary"
        alternate
      />

      <ValuesSection
        tagline="Value Proposition"
        title="Manfaat Nyata untuk Layanan Publik Modern"
        subtitle="Digitalisasi layanan publik dengan ERPNext memastikan efisiensi, transparansi, dan kontrol penuh terhadap proyek serta keuangan instansi."
        items={utilitiesValues}
        // stats={utilitiesStats}
        theme="secondary"
        gradientBg
      />

      <BannerSection
        variant="simple"
        title="Transformasi Digital untuk Utilitas & Layanan Publik"
        description="Tingkatkan efisiensi pengelolaan anggaran, monitoring proyek infrastruktur, serta respons terhadap keluhan publik dengan solusi ERPNext yang menyatukan data dan proses dalam satu platform transparan."
        primaryAction={{
          label: "Coba Modul Utilitas",
          onClick: () => console.log("Coba Modul Utilitas clicked"),
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
