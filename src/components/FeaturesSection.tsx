import { Users, Package, ShoppingCart, Settings, Calculator, Building, CreditCard, FolderOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import crmFeature from "@/assets/crm-feature.jpg";
import inventoryFeature from "@/assets/inventory-feature.jpg";
import manufacturingFeature from "@/assets/manufacturing-feature.jpg";
import accountingFeature from "@/assets/accounting-feature.jpg";
import salesDistribution from "@/assets/Sales_Distribution.png";
import AnimatedElement from "./AnimatedElement";
import FeatureScrollShowcase from "./FeatureScrollShowcase";

const mainFeatures = [
  {
    id: "crm",
    icon: Users,
    title: "CRM",
    description: "Kelola hubungan pelanggan, lead, dan peluang penjualan dengan mudah.",
    image: crmFeature,
    size: "normal",
  },
  {
    id: "inventory",
    icon: Package,
    title: "Inventory Management",
    description: "Pantau stok barang secara real-time dengan notifikasi otomatis.",
    image: inventoryFeature,
    size: "normal",
  },
  {
    id: "sales",
    icon: ShoppingCart,
    title: "Sales & Distribution",
    description: "Proses pesanan hingga distribusi lebih efisien dan terkontrol.",
    image: salesDistribution,
    size: "normal",
  },
  {
    id: "manufacturing",
    icon: Settings,
    title: "Manufacturing Planning & Control",
    description: "Rencanakan dan kontrol seluruh proses produksi dari bahan baku hingga produk jadi dengan sistem yang terintegrasi.",
    image: manufacturingFeature,
    size: "large",
  },
  {
    id: "accounting",
    icon: Calculator,
    title: "Accounting & Reporting",
    description: "Sistem akuntansi lengkap dengan laporan keuangan real-time dan analisis bisnis mendalam.",
    image: accountingFeature,
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
        <FeatureScrollShowcase features={mainFeatures} stickyOffset={80} />

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
