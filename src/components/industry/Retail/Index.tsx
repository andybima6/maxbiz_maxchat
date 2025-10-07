import { HeartPulse, PackageSearch, ShoppingCart, BarChart3, MonitorSmartphone, Boxes, Users, Gauge, Layers, BarChart, ShoppingBag } from "lucide-react";
import heroImage from "@/assets/industry/Retail/hero-retail.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import POSDashboard from "@/assets/industry/retail/pos-system.jpg";
import InventoryDashboard from "@/assets/industry/retail/warehouse-management.jpg";
import LoyaltyDashboard from "@/assets/industry/retail/customer-loyalty.jpg";
import BannerSection from "@/components/BannerSection";

const retailChallenges = [
  {
    icon: PackageSearch,
    title: "Manajemen Stok yang Tidak Akurat",
    description: "Data stok barang sering tidak sinkron antara gudang dan toko cabang, menyebabkan kelebihan atau kekurangan stok.",
  },
  {
    icon: ShoppingCart,
    title: "Proses Penjualan & Pembelian Masih Manual",
    description: "Transaksi dilakukan tanpa sistem terintegrasi, membuat laporan penjualan dan pembelian sulit dipantau secara real-time.",
  },
  {
    icon: BarChart3,
    title: "Kesulitan Analisis Performa Penjualan",
    description: "Tanpa data terpusat, pengambilan keputusan bisnis dan strategi promosi menjadi lambat dan tidak berbasis data.",
  },
];

const retailSolutions = [
  {
    icon: MonitorSmartphone,
    title: "Point of Sale (POS) & Sales Management",
    description: "Kelola transaksi penjualan online dan offline secara otomatis dengan integrasi ke stok dan laporan keuangan.",
    image: POSDashboard,
    benefits: ["Integrasi penjualan online & offline", "Laporan penjualan real-time", "Otomatisasi invoice & pembayaran"],
  },
  {
    icon: Boxes,
    title: "Inventory & Warehouse Management",
    description: "Pantau ketersediaan barang di setiap cabang secara real-time dengan sistem pengelolaan gudang terpusat.",
    image: InventoryDashboard,
    benefits: ["Pemantauan stok multi-gudang", "Tracking pergerakan barang otomatis", "Laporan stok & perputaran barang real-time"],
  },
  {
    icon: Users,
    title: "Customer & Loyalty Management",
    description: "Tingkatkan retensi pelanggan dengan sistem manajemen pelanggan, diskon, dan program loyalitas berbasis data.",
    image: LoyaltyDashboard,
    benefits: ["Sistem membership & poin loyalitas", "Segmentasi pelanggan & promosi otomatis", "Analitik perilaku pelanggan real-time"],
  },
];

const retailValues = [
  {
    icon: Gauge,
    title: "Operasional Toko Lebih Efisien",
    description: "Proses penjualan, stok, dan pembelian dikelola secara otomatis untuk meningkatkan efisiensi operasional harian.",
  },
  {
    icon: Layers,
    title: "Sistem Terintegrasi & Transparan",
    description: "Semua data transaksi dan stok tersimpan dalam satu sistem, meminimalkan kesalahan dan duplikasi data.",
  },
  {
    icon: BarChart,
    title: "Pengambilan Keputusan Lebih Cepat",
    description: "Manajemen dapat memantau performa penjualan secara real-time untuk menentukan strategi bisnis yang tepat.",
  },
];

const retailStats = [
  { label: "Cabang Ritel Terintegrasi", value: "500+" },
  { label: "Transaksi Tercatat", value: "2.000.000+" },
  { label: "Efisiensi Operasional", value: "40%" },
  { label: "Analitik Penjualan", value: "Real-time" },
];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection
        title="Digitalisasi Operasional Ritel Terpadu dengan ERPNext"
        subtitle="Solusi ERP untuk Bisnis Ritel Modern"
        description="Kelola stok barang, transaksi penjualan, dan hubungan pelanggan dalam satu sistem terintegrasi untuk meningkatkan efisiensi dan profitabilitas toko Anda."
        image={heroImage}
        badge={{
          icon: <ShoppingBag className="w-4 h-4" />,
          text: "Tantangan Industri Ritel",
        }}
        primaryAction={{ label: "Coba Sekarang" }}
        secondaryAction={{ label: "Pelajari Solusi" }}
      />

      <ChallengesSection
        title="Tantangan dalam Industri Ritel"
        subtitle="Bisnis ritel menghadapi tantangan besar dalam manajemen stok, transaksi, dan analisis penjualan yang memerlukan sistem terintegrasi."
        tagline="Tantangan Industri Ritel"
        items={retailChallenges}
        theme="primary"
      />

      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Sistem Terpadu untuk Bisnis Ritel Modern"
        subtitle="ERPNext membantu bisnis ritel mengelola stok, transaksi, pelanggan, dan laporan keuangan secara efisien dalam satu platform."
        items={retailSolutions}
        theme="primary"
        alternate
      />

      <ValuesSection
        tagline="Value Proposition"
        title="Manfaat Nyata untuk Dunia Ritel"
        subtitle="ERPNext memberikan efisiensi operasional, transparansi, dan insight bisnis real-time untuk pertumbuhan bisnis ritel Anda."
        items={retailValues}
        stats={retailStats}
        theme="secondary"
        gradientBg
      />
      <BannerSection
        variant="simple"
        title="Transformasi Digital untuk Bisnis Ritel"
        description="Tingkatkan efisiensi operasional, kelola stok dengan akurat, dan optimalkan strategi penjualan melalui solusi ERPNext yang terintegrasi untuk ritel."
        primaryAction={{
          label: "Coba Modul Ritel",
          onClick: () => console.log("Coba Modul Ritel clicked"),
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
