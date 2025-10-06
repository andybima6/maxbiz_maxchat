import { 
  ShoppingCart, 
  FileText, 
  Search, 
  CreditCard, 
  Database, 
  BarChart3,
  Package,
  Wallet,
  Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import cmsImage from "@/assets/module/Commerce/feature-cms.jpg";
import cartImage from "@/assets/module/Commerce/feature-cart.jpg";
import seoImage from "@/assets/module/Commerce/feature-seo.jpg";

const FeaturesCard = () => {
  const mainFeatures = [
    {
      icon: FileText,
      title: "Content Management System",
      description: "Kelola konten website dengan mudah menggunakan CMS intuitif",
      image: cmsImage,
      subFeatures: [
        "Drag & Drop Page Builder",
        "Rich Text Editor",
        "Media Library Management",
        "Multi-language Support"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Shopping Cart & Checkout",
      description: "Proses pembelian yang smooth dan user-friendly",
      image: cartImage,
      subFeatures: [
        "Smart Shopping Cart",
        "One-Click Checkout",
        "Guest Checkout Option",
        "Cart Abandonment Recovery"
      ]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Optimalkan website untuk mesin pencari",
      image: seoImage,
      subFeatures: [
        "Meta Tags Management",
        "XML Sitemap Generator",
        "Structured Data Markup",
        "Performance Optimization"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: CreditCard,
      title: "Payment Gateway",
      description: "Integrasi dengan berbagai metode pembayaran",
      gradient: "from-[hsl(228.8_58.9%_28.6%)] to-[hsl(228.6_35.2%_64.9%)]"
    },
    {
      icon: Database,
      title: "Inventory Management",
      description: "Kelola stok produk secara real-time",
      gradient: "from-accent to-primary"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Dashboard analytics komprehensif",
      gradient: "from-primary to-accent"
    },
    {
      icon: Package,
      title: "Product Management",
      description: "Manage produk, variasi, dan kategori",
      gradient: "from-[hsl(228.6_35.2%_64.9%)] to-accent"
    },
    {
      icon: Wallet,
      title: "Accounting Integration",
      description: "Sinkronisasi otomatis dengan sistem akuntansi",
      gradient: "from-accent to-[hsl(228.8_58.9%_28.6%)]"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Notifikasi dan update real-time",
      gradient: "from-primary to-[hsl(228.6_35.2%_64.9%)]"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Fitur Lengkap untuk
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Bisnis E-Commerce Anda
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Semua yang Anda butuhkan untuk menjalankan toko online yang sukses
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 p-3 rounded-lg bg-primary/90 backdrop-blur-sm">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.subFeatures.map((sub, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <CardContent className="p-6 relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCard;