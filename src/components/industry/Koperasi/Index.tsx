import { Users, FileText, FileSpreadsheet, ShieldCheck, Activity, Wallet, Handshake } from "lucide-react";
import heroImage from "@/assets/industry/Koperasi/hero-cooperative.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import LoanSavingsDashboard from "@/assets/industry/Koperasi/loan-savings-management.jpg";
import AccountingDashboard from "@/assets/industry/Koperasi/integrated-accounting.jpg";
import CRMDashboard from "@/assets/industry/Koperasi/membership-crm.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BannerSection from "@/components/BannerSection";

// 🏦 Tantangan di sektor koperasi
const cooperativeChallenges = [
  {
    icon: FileText,
    title: "Pencatatan Simpan Pinjam Masih Manual",
    description: "Banyak koperasi masih mencatat transaksi simpanan, pinjaman, dan angsuran secara manual, menyebabkan risiko kesalahan dan keterlambatan laporan.",
  },
  {
    icon: FileSpreadsheet,
    title: "Laporan Keuangan Tidak Terpadu",
    description: "Data dari berbagai unit (simpan pinjam, toko, jasa) tidak terintegrasi, menyulitkan pengurus untuk mendapatkan gambaran keuangan yang akurat.",
  },
  {
    icon: Users,
    title: "Pengelolaan Anggota Kurang Efisien",
    description: "Data anggota tersebar di berbagai file dan dokumen, sehingga sulit untuk melacak keaktifan, saldo simpanan, dan riwayat pinjaman.",
  },
];

// ⚙️ Solusi ERPNext untuk koperasi
const cooperativeSolutions = [
  {
    icon: FileText,
    title: "Loan & Savings Management",
    description: "Otomatisasi proses simpanan anggota, pengajuan pinjaman, dan perhitungan bunga atau bagi hasil dalam satu sistem yang transparan.",
    image: LoanSavingsDashboard,
    benefits: ["Transaksi simpan pinjam otomatis & transparan", "Perhitungan bunga / bagi hasil real-time", "Riwayat anggota dan pinjaman terintegrasi"],
  },
  {
    icon: FileSpreadsheet,
    title: "Integrated Accounting & Reporting",
    description: "Laporan keuangan koperasi tersaji real-time dan terintegrasi dengan setiap transaksi dari unit usaha yang berbeda.",
    image: AccountingDashboard,
    benefits: ["Laporan keuangan real-time & akurat", "Integrasi semua unit usaha", "Mudah untuk audit dan monitoring"],
  },
  {
    icon: Users,
    title: "Membership & CRM",
    description: "Kelola data anggota, status keanggotaan, kontribusi, serta komunikasi antar anggota dengan sistem digital yang mudah diakses.",
    image: CRMDashboard,
    benefits: ["Manajemen data anggota efisien", "Tracking simpanan dan pinjaman", "Fasilitasi komunikasi & notifikasi anggota"],
  },
];

// 💡 Value Proposition koperasi
const cooperativeValues = [
  {
    icon: Activity,
    title: "Administrasi Lebih Efisien",
    description: "Proses pencatatan transaksi dan pengelolaan anggota menjadi lebih cepat dan akurat.",
  },
  {
    icon: ShieldCheck,
    title: "Transaksi Otomatis & Transparan",
    description: "Simpanan, pinjaman, dan laporan keuangan tercatat otomatis sehingga mengurangi risiko kesalahan.",
  },
  {
    icon: Wallet,
    title: "Keputusan Cepat Berbasis Data",
    description: "Pengurus dapat mengambil keputusan cepat dengan laporan keuangan real-time.",
  },
];

// 📊 Statistik koperasi (contoh)
// const cooperativeStats = [
//   { label: "Koperasi Terintegrasi", value: "150+" },
//   { label: "Anggota Terdaftar", value: "50.000+" },
//   { label: "Efisiensi Administrasi", value: "40%" },
//   { label: "Laporan Real-time", value: "Ya" },
// ];
export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection
        title="Efisiensi dan Transparansi Operasional Koperasi dengan ERPNext"
        subtitle="Solusi ERP untuk Koperasi Simpan Pinjam & Serba Usaha"
        description="Kelola anggota, simpanan, pinjaman, transaksi keuangan, dan laporan tahunan dalam satu sistem terintegrasi untuk mendukung pertumbuhan koperasi yang sehat dan transparan."
        image={heroImage}
        badge={{
          icon: <Users className="w-4 h-4" />,
          text: "Tantangan Manajemen Koperasi",
        }}
        primaryAction={{ label: "Coba Sekarang" }}
        secondaryAction={{ label: "Pelajari Solusi" }}
      />
      <ChallengesSection
        title="Tantangan di Sektor Koperasi"
        subtitle="Koperasi menghadapi kendala dalam pencatatan transaksi, laporan keuangan, dan pengelolaan anggota yang membutuhkan sistem digital terintegrasi."
        tagline="Tantangan Koperasi"
        items={cooperativeChallenges}
        theme="primary"
      />

      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Sistem Terpadu untuk Koperasi"
        subtitle="ERPNext menyediakan solusi lengkap untuk manajemen simpanan, pinjaman, keuangan, dan anggota dalam satu platform."
        items={cooperativeSolutions}
        theme="primary"
        alternate
      />

      <ValuesSection
        tagline="Value Proposition"
        title="Manfaat Nyata untuk Koperasi"
        subtitle="Digitalisasi koperasi dengan ERPNext meningkatkan efisiensi administrasi, transparansi transaksi, dan pengambilan keputusan berbasis data."
        items={cooperativeValues}
        // stats={cooperativeStats}
        theme="secondary"
      />
      <BannerSection
        variant="simple"
        title="Digitalisasi Manajemen Koperasi Modern"
        description="ERPNext membantu koperasi mengelola simpan pinjam, anggota, dan laporan keuangan dengan transparansi penuh. Wujudkan tata kelola koperasi yang efisien, akuntabel, dan berkelanjutan."
        primaryAction={{
          label: "Coba Modul Koperasi",
          onClick: () => console.log("Coba Modul Koperasi clicked"),
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
