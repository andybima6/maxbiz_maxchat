import { ClipboardList, BookOpen, BarChart3, GraduationCap, Users2, Clock, UserCog, Users, MessageSquare, Handshake, Briefcase } from "lucide-react";
import heroImage from "@/assets/industry/Agency/hero-bg.png";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDashboard from "@/assets/industry/agency/challenge-multi-project.png";
import CRMDashboard from "@/assets/industry/agency/challenge-documentation.png";
import HRDashboard from "@/assets/industry/agency/challenge-freelance.png";
import BannerSection from "@/components/BannerSection";

const agencyhallenges = [
  {
    icon: BookOpen,
    title: "Data Akademik Tersebar",
    description: "Informasi siswa, guru, dan nilai tersebar di berbagai sistem terpisah, membuat pengelolaan data akademik menjadi tidak efisien.",
  },
  {
    icon: ClipboardList,
    title: "Administrasi & Keuangan Masih Manual",
    description: "Pencatatan pembayaran, anggaran, dan laporan keuangan sekolah masih dilakukan secara manual sehingga rawan kesalahan dan tidak transparan.",
  },
  {
    icon: GraduationCap,
    title: "Sulit Memantau Aktivitas Belajar",
    description: "Sekolah kesulitan memantau kehadiran, aktivitas belajar, dan performa siswa secara real-time karena kurangnya sistem monitoring terpusat.",
  },
];

// 🎯 Tantangan di sektor Agency
const agencyChallenges = [
  {
    icon: Briefcase,
    title: "Multi Proyek Paralel Sulit Dikontrol",
    description: "Agensi sering menangani banyak proyek sekaligus sehingga sulit memantau timeline, progres, dan alokasi sumber daya secara efektif.",
  },
  {
    icon: Users,
    title: "SDM Freelance Perlu Dikelola Fleksibel",
    description: "Manajemen tenaga kerja lepas sering tidak terintegrasi, membuat pelacakan kontrak, pembayaran, dan performa menjadi rumit.",
  },
  {
    icon: MessageSquare,
    title: "Relasi Klien Kurang Terdokumentasi",
    description: "Tanpa sistem CRM, komunikasi dan histori interaksi dengan klien berisiko hilang, menghambat retensi dan follow-up proyek baru.",
  },
];

// ⚙️ Solusi ERPNext untuk sektor Agency
const agencySolutions = [
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Kelola proyek event atau IT berbasis task dan milestone, lengkap dengan monitoring waktu, biaya, dan kolaborasi tim.",
    image: ProjectDashboard,
    benefits: ["Timeline & progres proyek real-time", "Kolaborasi lintas divisi & stakeholder", "Laporan produktivitas otomatis"],
  },
  {
    icon: Handshake,
    title: "CRM (Customer Relationship Management)",
    description: "Catat interaksi, prospek, dan deal klien dalam satu sistem untuk meningkatkan retensi serta efektivitas follow-up.",
    image: CRMDashboard,
    benefits: ["Manajemen prospek dan klien terpusat", "Tracking komunikasi dan penawaran", "Peningkatan peluang closing deal"],
  },
  {
    icon: UserCog,
    title: "HR & Payroll Management",
    description: "Atur tenaga kerja tetap maupun freelance dengan sistem payroll otomatis dan pencatatan performa yang transparan.",
    image: HRDashboard,
    benefits: ["Manajemen kontrak & absensi karyawan", "Payroll otomatis sesuai proyek", "Evaluasi performa SDM berbasis data"],
  },
];

// 💡 Value Proposition sektor Agency
const agencyValues = [
  {
    icon: Clock,
    title: "Kontrol Proyek Lebih Baik",
    description: "Setiap proyek dapat dipantau secara real-time dari timeline hingga biaya, memudahkan pengambilan keputusan cepat.",
  },
  {
    icon: Users2,
    title: "Kolaborasi Tim & Klien Lebih Efisien",
    description: "Integrasi antara tim internal, freelance, dan klien membuat komunikasi lebih lancar dan transparan.",
  },
  {
    icon: BarChart3,
    title: "Profitabilitas & Produktivitas Meningkat",
    description: "Dengan data terpusat dan laporan otomatis, agensi dapat mengoptimalkan waktu dan biaya pada setiap proyek.",
  },
];

// 📊 Statistik sektor Agency
// const agencyStats = [
//   { label: "Proyek Aktif Dikelola", value: "500+" },
//   { label: "Klien Terlayani", value: "300+" },
//   { label: "Efisiensi Manajemen Waktu", value: "40%" },
//   { label: "Freelancer Terdaftar", value: "1.000+" },
// ];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection
        title="Digitalisasi Operasional Agency dengan ERPNext"
        subtitle="Solusi ERP untuk IT, Event, dan Creative Agency Modern"
        description="Kelola proyek, klien, dan tim dalam satu platform terpadu. Tingkatkan efisiensi, kolaborasi, dan transparansi antar divisi dengan sistem manajemen berbasis ERPNext."
        image={heroImage}
        badge={{
          icon: <Briefcase className="w-4 h-4" />,
          text: "Tantangan Industri Agency",
        }}
        primaryAction={{ label: "Coba Sekarang" }}
        secondaryAction={{ label: "Pelajari Solusi" }}
      />

      <ChallengesSection
        title="Tantangan dalam Industri Agency"
        subtitle="Agensi kreatif, IT, dan event management menghadapi tantangan dalam mengelola banyak proyek, tenaga kerja fleksibel, dan hubungan klien secara bersamaan."
        tagline="Tantangan Industri Agency"
        items={agencyChallenges}
        theme="primary"
      />

      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Sistem Terpadu untuk Agensi Modern"
        subtitle="ERPNext menghadirkan solusi menyeluruh untuk manajemen proyek, klien, dan tenaga kerja agar agensi dapat beroperasi lebih efisien dan transparan."
        items={agencySolutions}
        theme="primary"
        alternate
      />

      <ValuesSection
        tagline="Value Proposition"
        title="Manfaat Nyata untuk Agensi Kreatif & Digital"
        subtitle="ERPNext membantu agensi meningkatkan efisiensi, transparansi, dan profitabilitas dengan sistem manajemen terintegrasi."
        items={agencyValues}
        // stats={agencyStats}
        theme="secondary"
        gradientBg
      />
      <BannerSection
        variant="simple"
        title="Transformasi Digital untuk IT, Event & Creative Agency"
        description="Kelola proyek paralel, tim kreatif, dan relasi klien dengan lebih terstruktur. ERPNext membantu agency bekerja lebih efisien dengan fitur Project Management, CRM, dan HR terintegrasi."
        primaryAction={{ label: "Coba Modul Agency", onClick: () => console.log("Coba Modul Agency clicked") }}
        secondaryAction={{ label: "Lihat Solusi", onClick: () => console.log("Lihat Solusi clicked") }}
      />

      <Footer />
    </div>
  );
}
