import { Wallet, HeartPulse, ClipboardList, BookOpen, BarChart3, Presentation, Database, ClipboardCheck, GraduationCap, Users2 } from "lucide-react";
import heroImage from "@/assets/industry/education/hero-education.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSection from "@/components/BannerSection";
import SISDashboard from "@/assets/industry/education/student-information-system.jpg";
import FinanceDashboard from "@/assets/industry/education/school-finance.jpg";
import LMSDashboard from "@/assets/industry/education/learning-management.jpg";

const educationChallenges = [
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

// ⚙️ Solusi ERPNext untuk sektor pendidikan
const educationSolutions = [
  {
    icon: Users2,
    title: "Student Information System (SIS)",
    description: "Kelola data siswa, guru, nilai, kehadiran, dan jadwal akademik secara terpusat dalam satu sistem digital yang mudah digunakan.",
    image: SISDashboard,
    benefits: ["Manajemen data siswa, guru, dan kelas", "Tracking nilai & kehadiran otomatis", "Integrasi jadwal akademik & kalender kegiatan"],
  },
  {
    icon: Wallet,
    title: "Finance & Fees Management",
    description: "Atur seluruh transaksi keuangan sekolah mulai dari pembayaran siswa, anggaran operasional, hingga laporan keuangan terintegrasi.",
    image: FinanceDashboard,
    benefits: ["Pencatatan pembayaran & tagihan otomatis", "Laporan keuangan real-time", "Manajemen anggaran sekolah & yayasan"],
  },
  {
    icon: Presentation,
    title: "Learning Management & Assessment",
    description: "Sistem pembelajaran digital untuk memantau aktivitas belajar, ujian, dan hasil akademik secara efisien dan transparan.",
    image: LMSDashboard,
    benefits: ["Manajemen materi & ujian online", "Monitoring performa akademik siswa", "Feedback otomatis & analitik pembelajaran"],
  },
];

const educationValues = [
  {
    icon: ClipboardCheck,
    title: "Administrasi Sekolah Lebih Efisien",
    description: "Digitalisasi administrasi mengurangi beban kerja staf dan meningkatkan transparansi dalam proses akademik dan keuangan.",
  },
  {
    icon: Database,
    title: "Data Akademik Terintegrasi",
    description: "Semua data siswa, guru, dan kegiatan belajar terpusat dalam satu platform yang mudah diakses oleh pihak terkait.",
  },
  {
    icon: BarChart3,
    title: "Kualitas Pembelajaran Meningkat",
    description: "Sistem monitoring berbasis data membantu sekolah mengambil keputusan yang tepat untuk meningkatkan kualitas pendidikan.",
  },
];

const educationStats = [
  { label: "Sekolah & Kampus Terintegrasi", value: "150+" },
  { label: "Data Siswa Tersimpan Aman", value: "500.000+" },
  { label: "Efisiensi Administrasi", value: "40%" },
  { label: "Monitoring Akademik", value: "Real-time" },
];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection
        title="Digitalisasi Manajemen Pendidikan dengan ERPNext"
        subtitle="Solusi ERP untuk Sekolah & Institusi Pendidikan Modern"
        description="Kelola data siswa, guru, nilai, keuangan, dan kegiatan belajar mengajar dalam satu sistem terintegrasi untuk meningkatkan efisiensi administrasi dan kualitas pendidikan."
        image={heroImage}
        badge={{
          icon: <GraduationCap className="w-4 h-4" />,
          text: "Tantangan Industri Pendidikan",
        }}
        primaryAction={{ label: "Coba Sekarang" }}
        secondaryAction={{ label: "Pelajari Solusi" }}
      />
      <ChallengesSection
        title="Tantangan dalam Dunia Pendidikan"
        subtitle="Institusi pendidikan menghadapi tantangan besar dalam mengelola data akademik, administrasi, dan pembelajaran yang membutuhkan sistem digital terintegrasi."
        tagline="Tantangan Industri Pendidikan"
        items={educationChallenges}
        theme="primary"
      />

      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Sistem Terpadu untuk Sekolah & Kampus"
        subtitle="ERPNext menyediakan solusi lengkap untuk manajemen akademik, keuangan, dan pembelajaran dalam satu platform digital."
        items={educationSolutions}
        theme="primary"
        alternate
      />

      <ValuesSection
        tagline="Value Proposition"
        title="Manfaat Nyata untuk Dunia Pendidikan"
        subtitle="Digitalisasi sekolah dengan ERPNext meningkatkan efisiensi administrasi, transparansi data, dan kualitas pembelajaran."
        items={educationValues}
        stats={educationStats}
        theme="secondary"
        gradientBg
      />
      <BannerSection
        variant="simple"
        title="Transformasi Digital Sekolah & Institusi Pendidikan"
        description="Tingkatkan efisiensi administrasi, integrasi data akademik, dan transparansi keuangan sekolah dengan solusi ERPNext yang dirancang untuk dunia pendidikan."
        primaryAction={{ label: "Coba Modul Pendidikan", onClick: () => console.log("Coba Modul Pendidikan clicked") }}
        secondaryAction={{ label: "Lihat Solusi", onClick: () => console.log("Lihat Solusi clicked") }}
      />

      <Footer />
    </div>
  );
}
