import { BarChart3, Users, Gauge, CalendarClock, BusFront, UsersRound, Wallet, BedDouble, Package, FileSpreadsheet, Building2, Smile, UserCog2 } from "lucide-react";
import heroImage from "@/assets/industry/Hospitality/hotel-reception.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import BookingDashboard from "@/assets/industry/Hospitality/booking-system.jpg";
import PropertyDashboard from "@/assets/industry/Hospitality/inventory-management.jpg";
import GuestDashboard from "@/assets/industry/Hospitality/guest-management.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BannerSection from "@/components/BannerSection";

// 🏨 Tantangan di sektor Hospitality
const hospitalityChallenges = [
  {
    icon: BedDouble,
    title: "Proses Reservasi & Check-in Masih Manual",
    description: "Pemesanan kamar, check-in/out, dan pengelolaan tamu belum terintegrasi, menyebabkan keterlambatan layanan dan data ganda antar cabang.",
  },
  {
    icon: Package,
    title: "Manajemen Inventori Hotel Tidak Real-time",
    description: "Fasilitas, peralatan, dan linen sulit dipantau ketersediaannya karena tidak adanya sistem pelacakan terpusat.",
  },
  {
    icon: Users,
    title: "Data Pelanggan & Kepuasan Tamu Terpisah",
    description: "Informasi preferensi dan feedback tamu belum terdokumentasi dalam satu sistem, menyulitkan personalisasi layanan.",
  },
];

// ⚙️ Solusi ERPNext untuk sektor Hospitality
const hospitalitySolutions = [
  {
    icon: CalendarClock,
    title: "Booking & Reservation Management",
    description: "Kelola reservasi kamar, check-in/out, dan tarif dinamis secara otomatis dengan sistem terintegrasi antar cabang.",
    image: BookingDashboard,
    benefits: ["Reservasi & check-in otomatis dan cepat", "Integrasi cabang dan channel booking", "Laporan okupansi real-time"],
  },
  {
    icon: Building2,
    title: "Property & Inventory Management",
    description: "Pantau ketersediaan kamar, fasilitas, serta peralatan housekeeping secara real-time melalui dashboard terpusat.",
    image: PropertyDashboard,
    benefits: ["Kontrol stok linen & perlengkapan housekeeping", "Manajemen maintenance & jadwal fasilitas", "Notifikasi otomatis untuk perawatan kamar"],
  },
  {
    icon: UsersRound,
    title: "CRM & Guest Management",
    description: "Catat preferensi tamu, loyalty program, dan feedback pelanggan dalam satu database terintegrasi untuk pelayanan personal.",
    image: GuestDashboard,
    benefits: ["Database pelanggan terpusat", "Loyalty & membership tracking", "Analisis kepuasan tamu berbasis data"],
  },
];

// 💡 Value Proposition sektor Hospitality
const hospitalityValues = [
  {
    icon: Gauge,
    title: "Efisiensi Operasional Meningkat",
    description: "Proses reservasi, housekeeping, dan laporan keuangan menjadi lebih cepat dan sinkron antar departemen.",
  },
  {
    icon: Smile,
    title: "Peningkatan Pengalaman Tamu",
    description: "Sistem CRM memungkinkan personalisasi layanan tamu berdasarkan preferensi dan riwayat kunjungan.",
  },
  {
    icon: BarChart3,
    title: "Transparansi & Integrasi Data",
    description: "Semua data operasional hotel terhubung dalam satu platform ERP untuk monitoring real-time dan pengambilan keputusan cepat.",
  },
];

// 📊 Statistik sektor Hospitality
// const hospitalityStats = [
//   { label: "Hotel & Resort Terintegrasi", value: "150+" },
//   { label: "Reservasi Tercatat Setiap Bulan", value: "500.000+" },
//   { label: "Peningkatan Efisiensi Operasional", value: "35%" },
//   { label: "Kepuasan Tamu", value: "98%" },
// ];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection
        title="Digitalisasi Layanan Perhotelan & Akomodasi dengan ERPNext"
        subtitle="Solusi ERP Terpadu untuk Manajemen Hotel Modern"
        description="Kelola reservasi kamar, inventori fasilitas, data tamu, dan laporan keuangan dalam satu sistem ERP yang terintegrasi untuk meningkatkan efisiensi operasional dan pengalaman tamu."
        image={heroImage}
        badge={{
          icon: <BedDouble className="w-4 h-4" />,
          text: "Tantangan Industri Perhotelan",
        }}
        primaryAction={{ label: "Coba Sekarang" }}
        secondaryAction={{ label: "Pelajari Solusi" }}
      />

      <ChallengesSection
        title="Tantangan dalam Industri Hospitality"
        subtitle="Hotel dan resort menghadapi tantangan dalam pengelolaan reservasi, inventori, dan data pelanggan yang membutuhkan solusi ERP terintegrasi."
        tagline="Tantangan Industri Hospitality"
        items={hospitalityChallenges}
        theme="primary"
      />

      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Sistem Terpadu untuk Hotel & Akomodasi"
        subtitle="ERPNext membantu hotel meningkatkan efisiensi operasional, manajemen tamu, dan transparansi laporan keuangan dalam satu platform digital."
        items={hospitalitySolutions}
        theme="primary"
        alternate
      />

      <ValuesSection
        tagline="Value Proposition"
        title="Manfaat Nyata untuk Dunia Perhotelan"
        subtitle="Digitalisasi proses hotel dengan ERPNext menciptakan pengalaman tamu yang lebih baik, efisiensi tinggi, dan transparansi operasional penuh."
        items={hospitalityValues}
        // stats={hospitalityStats}
        theme="secondary"
        gradientBg
      />

      <BannerSection
        variant="simple"
        title="Transformasi Digital Hotel & Akomodasi"
        description="Tingkatkan efisiensi operasional, manajemen properti, dan kepuasan tamu dengan ERPNext. Kelola pemesanan, housekeeping, keuangan, dan layanan pelanggan dalam satu sistem terintegrasi."
        primaryAction={{
          label: "Coba Modul Hospitality",
          onClick: () => console.log("Coba Modul Hospitality clicked"),
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
