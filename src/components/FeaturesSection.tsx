import { Users, Package, ShoppingCart, Settings, Calculator, Wrench, ClipboardList, UserCog, BarChart3, Headphones, GraduationCap, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import crmFeature from "@/assets/crm-feature.jpg";
import manufacturingFeature from "@/assets/manufacturing-feature.jpg";
import accountingFeature from "@/assets/accounting-feature.jpg";
import serviceFeature from "@/assets/module/ServiceMaintenance/hero-maintenance.jpg";
import projectFeature from "@/assets/module/ProjectManagement/hero-dashboard.jpg";
import hrFeature from "@/assets/module/Hr/hero-hr.jpg";
import inventoryFeature from "@/assets/module/Inventory/hero-warehouse.jpg";
import buyingFeature from "@/assets/module/Buying/hero-purchasing.jpg";
import salesDistribution from "@/assets/module/Sales/sales-hero.jpg";
import erpImage from "@/assets/erp-overview.jpg";
import ecommerceImage from "@/assets/ecommerce.jpg";
import assetImage from "@/assets/asset-management.jpg";
import helpDeskImage from "@/assets/help-desk.jpg";
import lmsImage from "@/assets/lms.jpg";
import AnimatedElement from "./AnimatedElement";
import FeatureScrollShowcase from "./FeatureScrollShowcase";

const mainFeatures = [
  {
    id: "service",
    icon: Wrench,
    title: "Service & Maintenance",
    description:
      "Kelola seluruh aktivitas layanan purna jual dengan mudah. Dari tiket pelanggan, penjadwalan teknisi, hingga perawatan berkala semua bisa diatur otomatis. Modul ini memastikan setiap permintaan layanan tertangani tepat waktu, lengkap dengan tracking SLA dan histori pekerjaan.",
    image: serviceFeature,
    size: "normal",
    bullets: ["Tiket & SLA otomatis", "Penjadwalan teknisi", "Riwayat perbaikan lengkap"],
    href: "/service-maintenance",
  },
  {
    id: "project",
    icon: ClipboardList,
    title: "Project Management",
    description:
      "Rencanakan, jalankan, dan pantau proyek secara kolaboratif dalam satu tempat. Atur timeline, assign task, pantau progres, dan kelola anggaran proyek dengan transparan. Sistem ini membantu memastikan proyek selesai tepat waktu dan sesuai target.",
    image: projectFeature,
    size: "normal",
    bullets: ["Timeline & Gantt", "Task & dependency", "Progress & burn-down"],
    href: "/project-management",
  },
  {
    id: "manufacturing",
    icon: Settings,
    title: "Manufacturing",
    description:
      "Atur perencanaan produksi, pengadaan bahan, hingga kontrol kualitas dengan efisien. Modul ini mendukung perhitungan kebutuhan material (MPS & MRP), multi-level BOM, dan work order yang terintegrasi. Pastikan produksi berjalan lancar tanpa bottleneck.",
    image: manufacturingFeature,
    size: "large",
    bullets: ["MPS & work order", "BOM multi-level", "QC di setiap station"],
    href: "/manufacturing",
  },
  {
    id: "selling",
    icon: ShoppingCart,
    title: "Selling (Sales)",
    description:
      "Tingkatkan efisiensi proses penjualan dari pembuatan penawaran hingga penerimaan pembayaran. Semua tahapan — mulai dari Quotation, Sales Order, hingga Invoice — bisa dikelola otomatis dengan harga dan diskon yang terintegrasi. Cocok untuk tim sales yang butuh kecepatan dan akurasi.",
    image: salesDistribution,
    size: "normal",
    bullets: ["Quotation → SO → Invoice", "Integrasi pembayaran", "Harga & diskon otomatis"],
    href: "/sales",
  },
  {
    id: "buying",
    icon: Package,
    title: "Buying (Purchasing)",
    description:
      "Kelola seluruh siklus pembelian dari permintaan barang (PR) hingga penerimaan (GRN). Modul ini membantu melakukan evaluasi supplier, mengontrol harga, dan memastikan pembelian sesuai anggaran perusahaan. Transparan, efisien, dan terintegrasi dengan stok & akuntansi.",
    image: buyingFeature,
    size: "normal",
    bullets: ["PR → RFQ → PO", "Perbandingan supplier", "3-way match invoice"],
    href: "/buying",
  },
  {
    id: "crm",
    icon: Users,
    title: "CRM",
    description:
      "Bangun hubungan pelanggan yang lebih kuat dengan CRM yang memantau setiap interaksi, mulai dari lead hingga deal. Modul ini menyediakan pipeline visual, aktivitas follow-up, dan forecast otomatis, membantu tim sales fokus pada peluang dengan potensi tertinggi.",
    image: crmFeature,
    size: "normal",
    bullets: ["Lead scoring", "Pipeline & forecast", "Aktivitas & follow-up"],
    href: "/crm",
  },
  {
    id: "hr",
    icon: UserCog,
    title: "HR & Payroll",
    description:
      "Kelola seluruh data karyawan, absensi, cuti, hingga penggajian dalam satu sistem. HR module memastikan transparansi, efisiensi, dan akurasi tinggi untuk seluruh proses SDM — dari rekrutmen hingga payroll dan laporan PPh21 otomatis.",
    image: hrFeature,
    size: "normal",
    bullets: ["Data & absensi", "Cuti & approval", "Payroll & PPh21"],
    href: "/hr-payroll",
  },
  {
    id: "account",
    icon: Calculator,
    title: "Accounting & Finance",
    description:
      "Pantau kondisi keuangan perusahaan secara real-time dengan laporan yang komprehensif. Semua transaksi dari modul lain otomatis tercatat di jurnal, memudahkan pembuatan laporan Laba/Rugi, Neraca, dan Arus Kas. Akurat, transparan, dan selalu up-to-date.",
    image: accountingFeature,
    size: "normal",
    bullets: ["Jurnal otomatis", "L/R, Neraca, Arus Kas", "Rekonsiliasi bank"],
    href: "/accounting-finance",
  },
  {
    id: "inventory",
    icon: Package,
    title: "Inventory / Stock",
    description:
      "Kelola stok di berbagai gudang secara real-time. Modul ini memantau pergerakan barang, batch, dan lot, serta memberi notifikasi otomatis ketika stok minimum tercapai. Proses picking, transfer, dan penyesuaian stok kini jadi jauh lebih mudah dan cepat.",
    image: inventoryFeature,
    size: "normal",
    bullets: ["Multi-gudang & batch", "Minimum stock alert", "Stock move & picking"],
    href: "/inventory",
  },
];

const supportingFeatures = [
  {
    title: "ERPNext Overview",
    description: "Comprehensive business management solution with real-time insights and automation",
    icon: BarChart3,
    image: erpImage,
    link: "/erpnext",
  },
  {
    title: "Website & E-Commerce",
    description: "Build stunning online stores with integrated payment and inventory management",
    icon: ShoppingCart,
    image: ecommerceImage,
    link: "/website-ecommerce",
  },
  {
    title: "Asset Management",
    description: "Track and maintain your company assets with powerful monitoring tools",
    icon: Package,
    image: assetImage,
    link: "/asset-management",
  },
  {
    title: "Help Desk",
    description: "Deliver exceptional customer support with intelligent ticket management",
    icon: Headphones,
    image: helpDeskImage,
    link: "/help-desk",
  },
  {
    title: "LMS (Learning Management System)",
    description: "Create and deliver engaging online courses with comprehensive tracking",
    icon: GraduationCap,
    image: lmsImage,
    link: "/lms",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background" id="fitur">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in translate-y-44">
          <AnimatedElement animation="fade-in-up" delay={100}>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Settings className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Fitur Unggulan</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Fitur Unggulan <span className="text-primary">MaxBiz ERP</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Satu sistem terintegrasi untuk mendukung semua lini bisnis Anda.</p>
          </AnimatedElement>
        </div>

        {/* Main Features Grid */}

        <div className="">
          <FeatureScrollShowcase features={mainFeatures} stickyOffset={80} />
        </div>

        {/* Supporting Features */}
        <section className="py-20 px-4">
          <div className="container mx-auto ">
            <AnimatedElement animation="fade-in-up" delay={300}>
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">Fitur Pendukung Lainnya</h3>
              </div>
            </AnimatedElement>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {supportingFeatures.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Card key={industry.title} className="group overflow-hidden border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 animate-fade-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative h-48 overflow-hidden">
                      <img src={industry.image} alt={industry.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                      <div className="absolute bottom-4 left-4 p-3 rounded-lg bg-primary/90 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">{industry.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{industry.description}</p>
                      <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 group/btn" asChild>
                        <a href={industry.link}>
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <div className="text-center bg-gradient-hero rounded-3xl p-12 animate-scale-in">
          <AnimatedElement animation="fade-in-up" delay={300}>
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">Siap mengembangkan bisnis Anda dengan ERP yang fleksibel dan lengkap?</h3>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={400}>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">Dapatkan demo gratis dan konsultasi dengan tim ahli kami untuk solusi ERP yang sesuai dengan kebutuhan bisnis Anda.</p>
          </AnimatedElement>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedElement animation="fade-in-up" delay={500}>
              <a href="#kontak">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
                  📅 Jadwalkan Demo Gratis
                </Button>
              </a>
            </AnimatedElement>
            <AnimatedElement animation="fade-in-up" delay={600}>
              <a href="#harga">
                <Button size="lg" variant="accent" className="border-white text-white">
                  📞 Hitung Estimasi
                </Button>
              </a>
            </AnimatedElement>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturesSection;
