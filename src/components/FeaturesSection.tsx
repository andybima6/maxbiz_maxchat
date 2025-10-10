import { Users, Package, ShoppingCart, Settings, Calculator, Building, CreditCard, FolderOpen, Wrench, ClipboardList, UserCog, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
import AnimatedElement from "./AnimatedElement";
import FeatureScrollShowcase from "./FeatureScrollShowcase";

const mainFeatures = [
  {
    id: "service",
    icon: Wrench,
    title: "Service Management",
    description: "Kelola layanan pelanggan, jadwal perawatan, dan tiket servis dengan sistem terpusat untuk meningkatkan kepuasan pelanggan.",
    image: serviceFeature,
    size: "normal",
  },
  {
    id: "project",
    icon: ClipboardList,
    title: "Project Management",
    description: "Rencanakan, pantau, dan kendalikan proyek dengan timeline, tugas, dan progres yang terintegrasi dalam satu sistem.",
    image: projectFeature,
    size: "normal",
  },
  {
    id: "manufacturing",
    icon: Settings,
    title: "Manufacturing",
    description: "Kelola perencanaan produksi, bill of materials, dan kontrol kualitas untuk efisiensi proses manufaktur dari bahan baku hingga produk jadi.",
    image: manufacturingFeature,
    size: "large",
  },
  {
    id: "selling",
    icon: ShoppingCart,
    title: "Selling",
    description: "Proses penjualan lebih cepat dengan integrasi penawaran, pesanan, faktur, dan pembayaran secara otomatis.",
    image: salesDistribution,
    size: "normal",
  },
  {
    id: "buying",
    icon: Package,
    title: "Buying",
    description: "Optimalkan proses pembelian dari permintaan, penawaran supplier, hingga penerimaan barang dan faktur.",
    image: buyingFeature,
    size: "normal",
  },
  {
    id: "crm",
    icon: Users,
    title: "CRM",
    description: "Bangun dan kelola hubungan pelanggan, pantau lead, dan tingkatkan peluang konversi penjualan dengan data real-time.",
    image: crmFeature,
    size: "normal",
  },
  {
    id: "hr",
    icon: UserCog,
    title: "Human Resource",
    description: "Atur data karyawan, absensi, gaji, cuti, dan penilaian kinerja dalam satu modul HR terintegrasi.",
    image: hrFeature,
    size: "normal",
  },
  {
    id: "account",
    icon: Calculator,
    title: "Accounting",
    description: "Kelola laporan keuangan, arus kas, dan analisis profitabilitas dengan sistem akuntansi otomatis dan transparan.",
    image: accountingFeature,
    size: "normal",
  },

  {
    id: "inventory",
    icon: Package,
    title: "Inventory",
    description: "Kelola stok barang secara real-time, pantau pergerakan produk di setiap gudang, dan hindari kehabisan atau kelebihan stok.",
    image: inventoryFeature,
    size: "normal",
  },
];

const supportingFeatures = [
  {
    id: "asset",
    icon: Building,
    title: "Asset Management",
    description: "Kelola aset perusahaan dengan tracking dan maintenance scheduling.",
  },
  {
    id: "hrm",
    icon: Users,
    title: "Human Resource Management",
    description: "Manajemen karyawan dari rekrutmen hingga payroll system.",
  },
  {
    id: "pos",
    icon: CreditCard,
    title: "PoS System",
    description: "Point of Sale terintegrasi untuk retail dan outlet.",
  },
  {
    id: "project",
    icon: FolderOpen,
    title: "Project Management",
    description: "Kelola proyek dengan timeline, resource allocation, dan monitoring.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background" id="fitur">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
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
        <AnimatedElement animation="fade-in-up" delay={500}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isLarge = feature.size === "large";

              return (
                <Card
                  key={feature.id}
                  className={`group hover:shadow-colored transition-all duration-500 border-0 overflow-hidden animate-slide-up hover:-translate-y-2 ${isLarge ? "md:col-span-2 lg:col-span-2" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {feature.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img src={feature.image} alt={`Ilustrasi ${feature.title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="p-3 rounded-full bg-primary/90 backdrop-blur-sm shadow-medium">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  )}

                  <CardContent className={`p-6 ${!feature.image ? "pt-8" : ""}`}>
                    {!feature.image && (
                      <div className="flex justify-center mb-4">
                        <div className="p-4 rounded-full bg-gradient-primary shadow-medium">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-foreground mb-3 text-center">{feature.title}</h3>

                    <p className="text-muted-foreground leading-relaxed text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </AnimatedElement>
        <div className="">
          <h1 className="text-3xl lg:text-5xl font-bold  text-center mb-12">
            Satu Sistem Terintegrasi untuk <span className="text-primary">Operasional Bisnis Anda</span>
          </h1>
          <p className="text-muted-foreground text-lg text-center mb-12">Dari CRM hingga Akuntansi — kelola seluruh proses bisnis dalam satu platform yang efisien dan mudah digunakan.</p>
          <FeatureScrollShowcase features={mainFeatures} stickyOffset={80} />
        </div>

        {/* Supporting Features */}
        <AnimatedElement animation="fade-in-up" delay={300}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Fitur Pendukung Lainnya</h3>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {supportingFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <AnimatedElement key={feature.id} animation="fade-in-up" delay={index * 200} className="mb-4">
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2 animate-slide-up bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-secondary/20 group-hover:bg-secondary transition-colors duration-300">
                        <Icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                      </div>
                    </div>

                    <h4 className="font-semibold text-foreground mb-3">{feature.title}</h4>

                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-3xl p-12 animate-scale-in">
          <AnimatedElement animation="fade-in-up" delay={300}>
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">Siap mengembangkan bisnis Anda dengan ERP yang fleksibel dan lengkap?</h3>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={400}>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">Dapatkan demo gratis dan konsultasi dengan tim ahli kami untuk solusi ERP yang sesuai dengan kebutuhan bisnis Anda.</p>
          </AnimatedElement>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedElement animation="fade-in-up" delay={500}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
                📅 Jadwalkan Demo Gratis
              </Button>
            </AnimatedElement>
            <AnimatedElement animation="fade-in-up" delay={600}>
              <Button size="lg" variant="accent" className="border-white text-white">
                📞 Hitung Estimasi
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
