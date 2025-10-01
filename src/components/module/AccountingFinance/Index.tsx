import { FeatureCard } from "@/components/module/AccountingFinance/FeatureCard";
import { StatsCard } from "@/components/module/AccountingFinance/StatsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Shield, Users, BookOpen, Receipt, PieChart, FileText, DollarSign, Building, CreditCard, BarChart3, Target, CheckCircle } from "lucide-react";

import ledgerIcon from "@/assets/module/AccountingFinance/ledger-icon.jpg";
import taxManagement from "@/assets/module/AccountingFinance/tax-management.jpg";
import accountsReceivable from "@/assets/module/AccountingFinance/accounts-receivable.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSection from "@/components/BannerSection";

const Index = () => {
  const features = [
    {
      title: "General Ledger & Journal Entries",
      description: "Sistem pencatatan transaksi keuangan yang komprehensif dengan automasi penuh dan kontrol ketat untuk transparansi maksimal.",
      image: ledgerIcon,
      category: "Core Accounting",
      isPopular: true,
      features: ["Chart of Accounts Management", "Multi-Currency Support", "Real-time Transaction Recording", "Automated Journal Entries", "Period-end Closing Process", "Audit Trail & History"],
    },
    {
      title: "Accounts Receivable Management",
      description: "Kelola piutang dengan sistem yang terintegrasi, dari invoice hingga collection dengan tracking otomatis dan reminder.",
      image: accountsReceivable,
      category: "Receivables",
      features: ["Customer Invoice Management", "Aging Report & Analysis", "Payment Tracking & Matching", "Credit Limit Management", "Collection Workflow", "Bad Debt Provisions"],
    },
    {
      title: "Tax Management & Compliance",
      description: "Sistem perpajakan lengkap dengan perhitungan otomatis, pelaporan, dan kepatuhan terhadap regulasi terbaru.",
      image: taxManagement,
      category: "Tax & Compliance",
      features: ["VAT/GST Calculation", "Tax Return Preparation", "Withholding Tax Management", "E-Filing Integration", "Tax Planning & Optimization", "Compliance Monitoring"],
    },
  ];

  const statsData = [
    {
      title: "Monthly Revenue",
      value: "Rp 2.4M",
      change: "+12% from last month",
      trend: "up" as const,
      icon: TrendingUp,
    },
    {
      title: "Outstanding Invoices",
      value: "24",
      change: "-8% from last month",
      trend: "down" as const,
      icon: Receipt,
    },
    {
      title: "Tax Compliance",
      value: "100%",
      change: "All requirements met",
      trend: "up" as const,
      icon: Shield,
    },
    {
      title: "Active Clients",
      value: "156",
      change: "+5% this quarter",
      trend: "up" as const,
      icon: Users,
    },
  ];

  const subFeatures = [
    {
      icon: BookOpen,
      title: "Financial Reporting",
      description: "Balance Sheet, P&L, Cash Flow statements dengan real-time analytics",
    },
    {
      icon: Calculator,
      title: "Cost Accounting",
      description: "Job costing, project accounting, dan budget variance analysis",
    },
    {
      icon: PieChart,
      title: "Budget Management",
      description: "Budget planning, forecasting, dan performance monitoring",
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Digital filing system untuk semua dokumen keuangan dan audit trail",
    },
    {
      icon: DollarSign,
      title: "Cash Management",
      description: "Cash flow forecasting, bank reconciliation, dan treasury management",
    },
    {
      icon: Building,
      title: "Multi-Entity Consolidation",
      description: "Consolidated reporting untuk multiple companies dan subsidiaries",
    },
    {
      icon: CreditCard,
      title: "Expense Management",
      description: "Employee expense tracking, approval workflow, dan reimbursement",
    },
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description: "Advanced analytics, KPI dashboards, dan business intelligence",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Accounting & Finance Management System</Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Kelola Keuangan dengan
              <span className="block bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">Transparansi & Kepatuhan</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Sistem akuntansi dan keuangan terintegrasi untuk mengelola general ledger, pajak, hingga laporan keuangan dengan otomasi penuh dan kepatuhan regulasi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
                <Calculator className="mr-2 h-5 w-5" />
                Mulai Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <FileText className="mr-2 h-5 w-5" />
                Lihat Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <StatsCard {...stat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Fitur Utama</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Sistem Akuntansi Terlengkap</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Dari pencatatan transaksi hingga compliance pajak, semua dalam satu platform terintegrasi</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Features Grid */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Fitur Pendukung Lengkap</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">Otomasi penuh transaksi keuangan dengan integrasi pembelian, penjualan, dan HR</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subFeatures.map((feature, index) => (
              <div key={index} className="group p-6 bg-white rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-float">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-white/20 text-white border-white/30">Integrasi Sistem</Badge>

                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">Terhubung dengan Semua Modul Bisnis</h2>

                  <p className="text-white/90 text-lg mb-6 leading-relaxed">Sistem akuntansi yang terintegrasi penuh dengan purchasing, sales, HR, dan inventory untuk memberikan visibilitas real-time across business functions.</p>

                  <div className="space-y-3 mb-8">
                    {["Real-time synchronization dengan semua modul", "Automated workflows dan approval processes", "Centralized reporting dan analytics", "API integration dengan sistem eksternal"].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Target className="mr-2 h-5 w-5" />
                    Explore Integration
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Building, title: "Purchasing", desc: "Purchase orders & vendor management" },
                    { icon: TrendingUp, title: "Sales", desc: "Invoice generation & revenue tracking" },
                    { icon: Users, title: "HR", desc: "Payroll integration & employee costs" },
                    { icon: BarChart3, title: "Inventory", desc: "Stock valuation & cost accounting" },
                  ].map((module, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                      <module.icon className="h-8 w-8 text-white mb-2" />
                      <h4 className="font-semibold text-white mb-1">{module.title}</h4>
                      <p className="text-white/70 text-sm">{module.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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

export default Index;
