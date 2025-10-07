import { BarChart3, Users, Gauge, ShoppingBag, Globe2, CalendarCheck2, Truck, CalendarClock, Car, Handshake, BusFront } from "lucide-react";
import heroImage from "@/assets/industry/Retail/hero-retail.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import BookingDashboard from "@/assets/industry/TravelTrasnportasi/solution-project.png";
import FleetDashboard from "@/assets/industry/TravelTrasnportasi/solution-crm.png";
import CRMDashboard from "@/assets/industry/TravelTrasnportasi/challenge-multi-project.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BannerSection from "@/components/BannerSection";

// 🚌 Tantangan di sektor Travel & Transportasi
const travelChallenges = [
  {
    icon: CalendarClock,
    title: "Pemesanan & Jadwal Belum Terintegrasi",
    description: "Proses pemesanan tiket, jadwal keberangkatan, dan perubahan rute masih dilakukan secara manual sehingga sering terjadi kesalahan dan keterlambatan.",
  },
  {
    icon: Truck,
    title: "Manajemen Armada Masih Manual",
    description: "Pemantauan kendaraan, perawatan armada, dan jadwal perjalanan belum terpusat sehingga menghambat efisiensi operasional.",
  },
  {
    icon: Users,
    title: "Pelacakan Pelanggan Sulit Dilakukan",
    description: "Tanpa sistem CRM terpusat, data pelanggan, agen, dan mitra sulit dikelola, menyebabkan peluang bisnis dan retensi pelanggan menurun.",
  },
];

// ⚙️ Solusi ERPNext untuk sektor Travel & Transportasi
const travelSolutions = [
  {
    icon: CalendarCheck2,
    title: "Booking & Scheduling System",
    description: "Atur pemesanan tiket, jadwal keberangkatan, dan rute perjalanan dalam satu platform otomatis dengan pembaruan real-time.",
    image: BookingDashboard, // ilustrasi UI sistem booking / jadwal
    benefits: ["Integrasi pemesanan online & offline", "Notifikasi jadwal & perubahan rute otomatis", "Laporan pemesanan & okupansi armada real-time"],
  },
  {
    icon: Car,
    title: "Fleet Management",
    description: "Pantau lokasi kendaraan, jadwal perawatan, dan rute perjalanan dengan sistem pelacakan armada digital.",
    image: FleetDashboard, // ilustrasi monitoring armada
    benefits: ["Pemeliharaan armada terjadwal otomatis", "Pemantauan lokasi kendaraan real-time", "Efisiensi bahan bakar & perencanaan rute"],
  },
  {
    icon: Handshake,
    title: "CRM & Sales Management",
    description: "Kelola pelanggan, agen, dan mitra perjalanan dalam satu sistem terpusat untuk meningkatkan pelayanan dan loyalitas pelanggan.",
    image: CRMDashboard, // ilustrasi UI CRM/travel agency
    benefits: ["Manajemen data pelanggan & agen", "Riwayat transaksi & perjalanan otomatis", "Program loyalitas & promosi berbasis data"],
  },
];

// 💡 Value Proposition sektor Travel & Transportasi
const travelValues = [
  {
    icon: Gauge,
    title: "Efisiensi Operasional Armada",
    description: "Sistem pemesanan, armada, dan SDM terintegrasi meningkatkan efisiensi operasional hingga 40%.",
  },
  {
    icon: Globe2,
    title: "Peningkatan Pengalaman Pelanggan",
    description: "Pelanggan dapat melakukan pemesanan online dengan status perjalanan real-time dan dukungan layanan otomatis.",
  },
  {
    icon: BarChart3,
    title: "Transparansi & Integrasi Data",
    description: "ERPNext menyatukan data keuangan, pelanggan, dan armada dalam satu sistem transparan untuk pengambilan keputusan cepat.",
  },
];

// 📊 Statistik sektor Travel & Transportasi
const travelStats = [
  { label: "Armada Dikelola", value: "500+" },
  { label: "Rute Aktif", value: "1.200+" },
  { label: "Tingkat Efisiensi", value: "40%" },
  { label: "Reservasi Online", value: "Real-time" },
];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection
        title="Digitalisasi Layanan Travel & Transportasi dengan ERPNext"
        subtitle="Solusi ERP untuk Operasional Perjalanan yang Terintegrasi"
        description="Kelola pemesanan tiket, armada kendaraan, jadwal perjalanan, dan data pelanggan dalam satu sistem ERP terpadu untuk efisiensi maksimal dan pelayanan pelanggan yang lebih baik."
        image={heroImage} // ganti dengan ilustrasi travel seperti bus, pesawat, atau rute perjalanan
        badge={{
          icon: <BusFront className="w-4 h-4" />,
          text: "Tantangan Industri Transportasi",
        }}
        primaryAction={{ label: "Coba Sekarang" }}
        secondaryAction={{ label: "Pelajari Solusi" }}
      />
      <ChallengesSection
        title="Tantangan dalam Industri Travel & Transportasi"
        subtitle="Perusahaan transportasi menghadapi tantangan besar dalam mengelola jadwal perjalanan, armada, dan pengalaman pelanggan tanpa sistem digital terintegrasi."
        tagline="Tantangan Industri Transportasi"
        items={travelChallenges}
        theme="primary"
      />

      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Sistem Terpadu untuk Manajemen Armada & Pemesanan"
        subtitle="ERPNext menyediakan solusi lengkap untuk booking, fleet management, CRM, dan HR dalam satu sistem otomatis dan transparan."
        items={travelSolutions}
        theme="primary"
        alternate
      />

      <ValuesSection
        tagline="Value Proposition"
        title="Manfaat Nyata untuk Sektor Transportasi"
        subtitle="Digitalisasi sistem transportasi meningkatkan efisiensi, transparansi, dan kepuasan pelanggan melalui integrasi penuh antar departemen."
        items={travelValues}
        stats={travelStats}
        theme="secondary"
        gradientBg
      />
      <BannerSection
        variant="simple"
        title="Transformasi Digital untuk Travel & Transportasi"
        description="Tingkatkan efisiensi operasional, manajemen armada, dan kepuasan pelanggan dengan solusi ERPNext yang mengintegrasikan sistem pemesanan, jadwal, dan keuangan dalam satu platform."
        primaryAction={{
          label: "Coba Modul Transportasi",
          onClick: () => console.log("Coba Modul Transportasi clicked"),
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
