import { Building2, Wallet, Activity, ShieldCheck, FileSpreadsheet, CalendarCheck, Smile, HeartPulse, PackageSearch, Pill, FileText, Stethoscope } from "lucide-react";
import heroImage from "@/assets/industry/HealthCare/hero-healthcare.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EMRDashboard from "@/assets/industry/HealthCare/medical-records.jpg";
import InventoryDashboard from "@/assets/industry/HealthCare/inventory-management.jpg";
import BillingDashboard from "@/assets/industry/HealthCare/billing-system.jpg";
import AppointmentDashboard from "@/assets/industry/HealthCare/appointment-system.jpg";
import BannerSection from "@/components/BannerSection";

// 🩺 Tantangan di sektor kesehatan
const healthcareChallenges = [
  {
    icon: FileText,
    title: "Rekam Medis Masih Manual",
    description: "Pencatatan data pasien masih dilakukan secara manual dan tersebar di berbagai tempat, membuat akses informasi menjadi lambat dan rawan kesalahan.",
  },
  {
    icon: Stethoscope,
    title: "Koordinasi Antar Unit Tidak Efisien",
    description: "Kurangnya integrasi antara dokter, apotek, laboratorium, dan administrasi menyebabkan keterlambatan layanan serta komunikasi yang tidak sinkron.",
  },
  {
    icon: Pill,
    title: "Sulit Memantau Stok Obat & Alat Kesehatan",
    description: "Tanpa sistem real-time, rumah sakit kesulitan memantau persediaan obat dan peralatan medis, meningkatkan risiko kekosongan stok atau pemborosan.",
  },
];

// ⚙️ Solusi ERPNext untuk sektor kesehatan
const healthcareSolutions = [
  {
    icon: HeartPulse,
    title: "Healthcare Module (EMR)",
    description: "Kelola data pasien, dokter, dan rekam medis elektronik (EMR) dalam satu sistem terpusat yang aman dan mudah diakses.",
    image: EMRDashboard,
    benefits: ["Manajemen data pasien & dokter terintegrasi", "Riwayat medis elektronik (EMR) real-time", "Keamanan & privasi data sesuai regulasi kesehatan"],
  },
  {
    icon: PackageSearch,
    title: "Inventory & Purchase Management",
    description: "Pantau stok obat, alat kesehatan, dan kebutuhan medis secara real-time dengan sistem pembelian otomatis dan laporan stok yang akurat.",
    image: InventoryDashboard,
    benefits: ["Kontrol stok & expiry date obat", "Proses pembelian otomatis & efisien", "Laporan penggunaan alat kesehatan real-time"],
  },
  {
    icon: FileSpreadsheet,
    title: "Billing & Accounting",
    description: "Kelola tagihan pasien, asuransi, dan laporan keuangan dengan transparan untuk memastikan efisiensi administrasi rumah sakit dan klinik.",
    image: BillingDashboard,
    benefits: ["Tagihan otomatis untuk pasien & asuransi", "Integrasi langsung dengan sistem akuntansi", "Laporan keuangan transparan & mudah diaudit"],
  },
  {
    icon: CalendarCheck,
    title: "Appointment & Scheduling",
    description: "Permudah pengaturan jadwal dokter dan pasien dengan sistem appointment digital yang fleksibel dan sinkron antar departemen.",
    image: AppointmentDashboard,
    benefits: ["Booking online & notifikasi otomatis", "Integrasi jadwal antar departemen", "Manajemen kapasitas dokter & ruang rawat"],
  },
];

// 💡 Value Proposition sektor kesehatan
const healthcareValues = [
  {
    icon: Activity,
    title: "Efisiensi Operasional Meningkat",
    description: "Proses administrasi, pelayanan, dan manajemen sumber daya menjadi lebih efisien dengan sistem terintegrasi.",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan & Aksesibilitas Data Pasien",
    description: "Data pasien tersimpan dengan aman dan dapat diakses dengan mudah antar departemen sesuai izin akses.",
  },
  {
    icon: Wallet,
    title: "Transparansi Biaya & Pengelolaan Keuangan",
    description: "Sistem billing dan accounting otomatis memastikan seluruh biaya layanan terekam dengan jelas dan akurat.",
  },
];

// 📊 Statistik sektor kesehatan
// const healthcareStats = [
//   { label: "Rumah Sakit & Klinik Terintegrasi", value: "200+" },
//   { label: "Data Pasien Tersimpan Aman", value: "1.000.000+" },
//   { label: "Efisiensi Operasional", value: "30%" },
//   { label: "Akses Data Pasien", value: "Real-time" },
// ];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection
        title="Digitalisasi Layanan Kesehatan Terpadu dengan ERPNext"
        subtitle="Solusi ERP untuk Rumah Sakit & Klinik Modern"
        description="Kelola data pasien, jadwal dokter, stok obat, dan laporan keuangan dalam satu sistem terintegrasi untuk meningkatkan efisiensi dan kualitas pelayanan kesehatan."
        image={heroImage}
        badge={{
          icon: <HeartPulse className="w-4 h-4" />,
          text: "Tantangan Industri Kesehatan",
        }}
        primaryAction={{ label: "Coba Sekarang" }}
        secondaryAction={{ label: "Pelajari Solusi" }}
      />
      <ChallengesSection
        title="Tantangan dalam Industri Kesehatan"
        subtitle="Fasilitas kesehatan menghadapi tantangan besar dalam manajemen data, koordinasi layanan, dan efisiensi operasional yang membutuhkan sistem digital terintegrasi."
        tagline="Tantangan Industri Kesehatan"
        items={healthcareChallenges}
        theme="primary"
      />

      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Sistem Terpadu untuk Rumah Sakit & Klinik"
        subtitle="ERPNext menyediakan solusi lengkap untuk manajemen pasien, inventori medis, keuangan, dan penjadwalan dalam satu platform."
        items={healthcareSolutions}
        theme="primary"
        alternate
      />

      <ValuesSection
        tagline="Value Proposition"
        title="Manfaat Nyata untuk Dunia Kesehatan"
        subtitle="Digitalisasi layanan kesehatan dengan ERPNext meningkatkan kualitas pelayanan, efisiensi administrasi, dan kepuasan pasien."
        items={healthcareValues}
        // stats={healthcareStats}
        theme="secondary"
        gradientBg
      />
      <BannerSection
        variant="simple"
        title="Transformasi Digital Rumah Sakit & Klinik"
        description="Tingkatkan efisiensi operasional, koordinasi antar unit, dan transparansi biaya layanan dengan solusi ERPNext untuk manajemen pasien, inventori medis, dan keuangan."
        primaryAction={{ label: "Coba Modul Kesehatan", onClick: () => console.log("Coba Modul Kesehatan clicked") }}
        secondaryAction={{ label: "Lihat Solusi", onClick: () => console.log("Lihat Solusi clicked") }}
      />

      <Footer />
    </div>
  );
}
