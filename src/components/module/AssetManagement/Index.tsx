// File: src/pages/landing/Index.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { TrendingDown, Calendar, ClipboardList, Laptop, Car, Building2, Hammer, Wrench, Package, ArrowRight, CheckCircle2, BarChart3, Shield, Zap, Calculator, FileText } from "lucide-react";
import StatsCard from "./StatsCard";
import FeatureCard from "./FeatureCard";
import HeroSection from "../HeroSection";
import heroImage from "@/assets/module/AssetManagement/hero-assetmanagement.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSection from "@/components/BannerSection";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Automatic Depreciation Calculator",
      description: "Calculate asset depreciation automatically using various methods (straight-line, declining balance, units of production)",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Asset Lifecycle Management",
      description: "Track complete asset journey from acquisition, operation, maintenance, to disposal with detailed timeline",
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Maintenance Log & Schedule",
      description: "Record all maintenance activities, set reminders, and schedule preventive maintenance automatically",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-Time Analytics",
      description: "Get insights on asset utilization, costs, ROI, and performance with interactive dashboards",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance & Audit Trail",
      description: "Maintain complete audit trail for compliance, warranty tracking, and regulatory requirements",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Smart Notifications",
      description: "Receive alerts for maintenance due, warranty expiration, depreciation milestones, and more",
    },
  ];

  const assetCategories = [
    {
      icon: <Laptop className="h-8 w-8" />,
      name: "IT Equipment",
      description: "Computers, servers, networking",
      color: "from-primary to-primary-light",
    },
    {
      icon: <Car className="h-8 w-8" />,
      name: "Vehicles",
      description: "Cars, trucks, fleet management",
      color: "from-accent to-primary",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      name: "Real Estate",
      description: "Buildings, land, properties",
      color: "from-primary-light to-accent",
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      name: "Furniture",
      description: "Office furniture, fixtures",
      color: "from-primary to-accent",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      name: "Tools & Equipment",
      description: "Machinery, tools, equipment",
      color: "from-accent to-primary-light",
    },
    {
      icon: <Package className="h-8 w-8" />,
      name: "Software Licenses",
      description: "Digital assets, subscriptions",
      color: "from-primary-light to-primary",
    },
  ];

  // const stats = [
  //   { value: "40%", label: "Downtime Reduction" },
  //   { value: "25%", label: "Maintenance Cost Savings" },
  //   { value: "+18%", label: "Asset Utilization" },
  //   { value: "100%", label: "Audit-ready" },
  // ];

  const benefits = ["Reduce asset downtime by 40%", "Optimize maintenance costs", "Improve asset utilization efficiency", "Ensure regulatory compliance", "Accurate financial reporting", "Extend asset lifespan"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <HeroSection
        badge="Asset Management"
        title="Kelola Aset & Depresiasi Otomatis"
        description="Tujuan: mencatat, memelihara, dan menghitung depresiasi aset. Fitur utama: asset lifecycle (acquisition → disposal), depreciation schedule otomatis, dan maintenance log. Scope: meningkatkan efisiensi pemanfaatan aset perusahaan."
        primaryAction={{
          label: "Mulai Kelola Aset",
          onClick: () => console.log("Start Asset Management clicked"),
          icon: <Calculator className="mr-2 h-5 w-5" />,
        }}
        secondaryAction={{
          label: "Lihat Demo",
          onClick: () => console.log("Demo clicked"),
          icon: <FileText className="mr-2 h-5 w-5" />,
        }}
        heroImage={heroImage}
        stats={[
          {
            value: "100%",
            label: "Aset Tercatat",
            subLabel: "Inventaris Terverifikasi",
            position: "bottom-left",
          },
          {
            value: "Auto",
            label: "Depresiasi",
            subLabel: "Jadwal & Jurnal",
            position: "top-right",
            delay: "0.3s",
          },
        ]}
      />

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20" variant="secondary">
              Complete Asset Lifecycle Control
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Manage Your Assets with <span className="bg-gradient-hero from-primary to-accent bg-clip-text text-transparent"> Intelligence & Efficiency </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Record, maintain, and calculate depreciation for all your company assets. Optimize utilization, reduce costs, and ensure compliance with automated workflows.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" onClick={() => navigate("/dashboard")} className="bg-gradient-hero from-primary to-accent hover:opacity-90 transition-opacity">
                Start Managing Assets <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Manage All Types of Assets</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From IT equipment to real estate, track and optimize every asset in your organization</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assetCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className={`h-16 w-16 rounded-lg bg-gradient-hero ${category.color} flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform`}>{category.icon}</div>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Powerful Features for Complete Control</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need to manage assets efficiently from acquisition to disposal</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s, i) => (
              <StatsCard key={i} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Platform?</h2>
              <p className="text-muted-foreground text-lg">Proven results that drive efficiency and cost savings</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-border/50">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* banner */}
      <BannerSection
        variant="gradient"
        title="Optimalkan Pengelolaan Aset Perusahaan"
        description="Catat aset, jadwalkan depresiasi otomatis, dan pantau maintenance dalam satu platform terpadu."
        primaryAction={{ label: "Coba Modul Aset", onClick: () => console.log("Coba Modul Aset clicked") }}
        secondaryAction={{ label: "Lihat Fitur", onClick: () => console.log("Lihat Fitur clicked") }}
      />

      <Footer />
    </div>
  );
};

export default Index;
