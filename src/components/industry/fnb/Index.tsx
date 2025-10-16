import { Users, BusFront, ClipboardList, Megaphone, PackageSearch, PackageCheck, Activity, HeartHandshake, BriefcaseBusiness, Utensils, ShoppingCart } from "lucide-react";
import heroImage from "@/assets/industry/fnb/restaurant-hero.jpg";
import HeroSection from "../HeroSection";
import ChallengesSection from "../ChallengesSection";
import SolutionsSection from "../SolutionsSection";
import ValuesSection from "../ValuesSection";
import POSDashboard from "@/assets/industry/fnb/pos-system.jpg";
import SalesDashboard from "@/assets/industry/fnb/inventory-fnb.jpg";
import CRMDashboard from "@/assets/industry/fnb/loyalty-program.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BannerSection from "@/components/BannerSection";

// 🍽️ Tantangan di sektor Food & Beverage
const fnbChallenges = [
  {
    icon: PackageSearch,
    title: "Stok Bahan Baku Tidak Akurat",
    description: "Tanpa sistem real-time, restoran dan katering sering kesulitan memantau ketersediaan bahan baku, menyebabkan pemborosan atau kekurangan saat operasional sibuk.",
  },
  {
    icon: ClipboardList,
    title: "Order Manual Memperlambat Layanan",
    description: "Pemesanan masih dilakukan manual antara kasir dan dapur, menimbulkan risiko kesalahan dan memperlambat penyajian kepada pelanggan.",
  },
  {
    icon: Megaphone,
    title: "Promosi & Loyalitas Pelanggan Sulit Dijalankan",
    description: "Tanpa sistem CRM, sulit melacak preferensi pelanggan, mengelola promo, atau membangun program loyalitas yang efektif.",
  },
];

// ⚙️ Solusi ERPNext untuk sektor Food & Beverage
const fnbSolutions = [
  {
    icon: Utensils,
    title: "Point of Sale (POS) & Inventory Management",
    description: "Sistem POS terintegrasi dengan inventori memastikan pesanan langsung tercatat ke stok bahan baku dan laporan penjualan otomatis.",
    image: POSDashboard,
    benefits: ["Sinkronisasi real-time antara kasir & dapur", "Pengurangan human error dalam order", "Monitoring stok bahan baku otomatis"],
  },
  {
    icon: ShoppingCart,
    title: "Sales & Order Management",
    description: "Kelola pemesanan dine-in, take-away, atau catering dengan sistem digital yang terhubung langsung ke billing dan produksi.",
    image: SalesDashboard,
    benefits: ["Pemesanan multi-channel (kasir, online, telepon)", "Status order dapur real-time", "Integrasi ke laporan keuangan"],
  },
  {
    icon: Users,
    title: "CRM & Loyalty Program",
    description: "Bangun hubungan jangka panjang dengan pelanggan melalui CRM untuk promosi, feedback, dan program loyalitas digital.",
    image: CRMDashboard,
    benefits: ["Manajemen pelanggan berbasis data", "Promosi dan diskon otomatis", "Loyalty point & reward tracking"],
  },
];

// 💡 Value Proposition sektor Food & Beverage
const fnbValues = [
  {
    icon: Activity,
    title: "Layanan Lebih Cepat & Akurat",
    description: "Dengan sistem POS terintegrasi, pesanan langsung diteruskan ke dapur dan laporan keuangan diperbarui otomatis.",
  },
  {
    icon: PackageCheck,
    title: "Stok Bahan Baku Selalu Terpantau",
    description: "Sistem inventori real-time memastikan stok bahan baku selalu akurat dan meminimalkan pemborosan.",
  },
  {
    icon: HeartHandshake,
    title: "Pelanggan Lebih Loyal dengan Program Digital",
    description: "CRM dan loyalty program membantu mempertahankan pelanggan dengan promosi berbasis data dan reward otomatis.",
  },
];

// 📊 Statistik sektor Food & Beverage
// const fnbStats = [
//   { label: "Restoran & Katering Terintegrasi", value: "150+" },
//   { label: "Transaksi Diproses Otomatis", value: "1.000.000+" },
//   { label: "Efisiensi Operasional", value: "35%" },
//   { label: "Pelanggan Loyal", value: "80K+" },
// ];

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection
        title="Digitalisasi Bisnis Food & Beverage dengan ERPNext"
        subtitle="Solusi ERP Terpadu untuk Restoran, Cafe, dan Catering Modern"
        description="Kelola stok bahan baku, pesanan pelanggan, jadwal produksi, hingga laporan keuangan dalam satu sistem ERP terintegrasi untuk efisiensi operasional dan peningkatan pengalaman pelanggan."
        image={heroImage}
        badge={{
          icon: <Utensils className="w-4 h-4" />,
          text: "Tantangan Industri F&B",
        }}
        primaryAction={{ label: "Coba Sekarang" }}
        secondaryAction={{ label: "Pelajari Solusi" }}
      />
      <ChallengesSection
        title="Tantangan dalam Industri Food & Beverage"
        subtitle="Restoran dan bisnis katering menghadapi tantangan dalam pengelolaan stok, kecepatan layanan, dan retensi pelanggan yang memerlukan sistem digital terpadu."
        tagline="Tantangan Industri F&B"
        items={fnbChallenges}
        theme="primary"
      />

      <SolutionsSection
        tagline="Solusi ERPNext"
        title="Sistem Terpadu untuk Restoran & Katering"
        subtitle="ERPNext menghadirkan solusi menyeluruh untuk manajemen stok bahan baku, pemesanan, CRM, dan tenaga kerja dalam satu sistem terintegrasi."
        items={fnbSolutions}
        theme="primary"
        alternate
      />

      <ValuesSection
        tagline="Value Proposition"
        title="Manfaat Nyata untuk Bisnis Food & Beverage"
        subtitle="Digitalisasi proses restoran dan katering meningkatkan kecepatan layanan, kontrol stok, dan loyalitas pelanggan."
        items={fnbValues}
        // stats={fnbStats}
        theme="secondary"
        gradientBg
      />

      <BannerSection
        variant="simple"
        title="Transformasi Digital Restoran & Catering dengan ERPNext"
        description="Optimalkan efisiensi dapur, manajemen stok, dan layanan pelanggan dengan sistem ERPNext yang menghubungkan POS, inventory, dan CRM dalam satu platform terintegrasi."
        primaryAction={{
          label: "Coba Modul F&B",
          onClick: () => console.log("Coba Modul F&B clicked"),
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
