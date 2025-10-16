import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ShoppingCart, Receipt, Users, TrendingUp, BarChart3, Package, CreditCard, Target, ArrowRight, CheckCircle2, Zap } from "lucide-react";

import pipelineIllustration from "@/assets/module/Sales/pipeline-illustration.png";
import analyticsIllustration from "@/assets/module/Sales/analytics-illustration.png";
import invoiceIllustration from "@/assets/module/Sales/invoice-illustration.png";
import customerPortal from "@/assets/module/Sales/customer-portal.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSection from "@/components/BannerSection";

const Sales = () => {
  const features = [
    {
      icon: FileText,
      title: "Quotation & Proposal",
      description: "Buat penawaran profesional dengan template kustomisasi. Tracking status real-time dan konversi otomatis ke sales order.",
      highlights: ["Template Designer", "E-Signature", "Auto Follow-up"],
      image: null,
    },
    {
      icon: ShoppingCart,
      title: "Sales Order Processing",
      description: "Kelola pesanan dari pembuatan hingga fulfillment. Workflow approval otomatis dan integrasi langsung dengan inventory.",
      highlights: ["Multi-Currency", "Batch Processing", "Order Tracking"],
      image: null,
    },
    {
      icon: Receipt,
      title: "Invoice Automation",
      description: "Generate invoice otomatis dari sales order. Pengiriman email terjadwal dan reminder pembayaran cerdas.",
      highlights: ["Recurring Invoice", "Payment Gateway", "Tax Calculator"],
      image: invoiceIllustration,
    },
    {
      icon: Users,
      title: "Customer Portal",
      description: "Portal self-service untuk pelanggan melihat quotation, order, invoice, dan riwayat transaksi mereka.",
      highlights: ["Real-time Updates", "Document Download", "Payment History"],
      image: customerPortal,
    },
    {
      icon: Target,
      title: "Pipeline & Opportunities",
      description: "Visualisasi sales pipeline dengan drag-and-drop. Tracking opportunities dan forecast revenue akurat.",
      highlights: ["Kanban View", "Win Rate Analysis", "Sales Forecasting"],
      image: pipelineIllustration,
    },
    {
      icon: BarChart3,
      title: "Revenue Analytics",
      description: "Dashboard real-time untuk monitoring performa penjualan. Report komprehensif per produk, pelanggan, dan sales team.",
      highlights: ["Custom Reports", "Data Export", "Trend Analysis"],
      image: analyticsIllustration,
    },
    {
      icon: Package,
      title: "Inventory Integration",
      description: "Sinkronisasi otomatis dengan inventory. Real-time stock checking dan automatic reservation saat order dibuat.",
      highlights: ["Stock Alerts", "Backorder Management", "Serial Tracking"],
      image: null,
    },
    {
      icon: CreditCard,
      title: "Payment Management",
      description: "Tracking pembayaran multi-metode. Automatic reconciliation dan integrasi dengan berbagai payment gateway.",
      highlights: ["Split Payment", "Installment Plan", "Credit Limit"],
      image: null,
    },
  ];

  // const stats = [
  //   {
  //     label: "Monthly Revenue",
  //     value: "Rp 2.4M",
  //     change: "+12% from last month",
  //     trend: "up",
  //     icon: TrendingUp,
  //   },
  //   {
  //     label: "Outstanding Invoices",
  //     value: "24",
  //     change: "-8% from last month",
  //     trend: "down",
  //     icon: Receipt,
  //   },
  //   {
  //     label: "Conversion Rate",
  //     value: "68%",
  //     change: "All requirements met",
  //     trend: "stable",
  //     icon: Target,
  //   },
  //   {
  //     label: "Active Customers",
  //     value: "156",
  //     change: "+5% this quarter",
  //     trend: "up",
  //     icon: Users,
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-100" />
        {/* Content */}
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">Sales Management System</Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Otomasi Siklus Penjualan dengan Pengalaman Pelanggan Terbaik</h1>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">Sistem penjualan terintegrasi untuk mengelola quotation, sales order, invoice hingga customer portal dengan monitoring pipeline & revenue real-time.</p>

            <div className="flex flex-wrap gap-4 justify-center pt-4 z-10">
              <Button variant="hero" size="lg" className="gap-2">
                <Zap className="w-5 h-5" />
                Mulai Gratis
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-white">
                <FileText className="w-5 h-5 text-white" />
                Lihat Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription className="text-muted-foreground font-medium">{stat.label}</CardDescription>
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className={`text-sm flex items-center gap-1 ${stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-orange-600" : "text-muted-foreground"}`}>
                    {stat.trend === "up" && <TrendingUp className="w-4 h-4" />}
                    {stat.change}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20">Fitur Utama</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sistem Penjualan Terlengkap</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Kelola seluruh proses penjualan dari quotation hingga payment dengan fitur-fitur canggih yang memudahkan bisnis Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/30 hover:shadow-[var(--shadow-medium)] transition-all duration-300 group overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {feature.image && (
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
              )}
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-[image:var(--gradient-primary)] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm group/item hover:translate-x-1 transition-transform">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <BannerSection
        title="Siap Tingkatkan Performa Penjualan Anda?"
        description="Mulai otomasi proses penjualan Anda hari ini. Dapatkan akses penuh ke semua fitur tanpa biaya setup."
        primaryAction={{ label: "Mulai Sekarang", onClick: () => console.log("Primary") }}
        secondaryAction={{ label: "Hubungi Sales", onClick: () => console.log("Secondary") }}
      />
      <Footer />
    </div>
  );
};

export default Sales;
