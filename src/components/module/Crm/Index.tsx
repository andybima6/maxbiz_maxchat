import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/module/Crm/FeatureCard";
import { StatCard } from "@/components/module/Crm/StatCard";
import { 
  Users, 
  Target, 
  TrendingUp, 
  MessageSquare, 
  BarChart3, 
  UserPlus,
  Zap,
  Award,
  Clock
} from "lucide-react";
import heroImage from "@/assets/module/Crm/hero-crm.jpg";
import pipelineIcon from "@/assets/module/Crm/pipeline-icon.png";
import contactsIcon from "@/assets/module/Crm/contacts-icon.png";
import opportunitiesIcon from "@/assets/module/Crm/opportunities-icon.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSection from "@/components/BannerSection";

const Index = () => {
  const features = [
    {
      title: "Leads Management",
      description: "Tangkap, kualifikasi, dan prioritaskan prospek Anda dengan sistem lead scoring otomatis.",
      icon: UserPlus,
      gradient: "from-primary to-secondary",
      image: pipelineIcon,
      features: [
        "Lead Capture",
        "Lead Scoring",
        "Auto-Assignment",
        "Lead Nurturing",
        "Qualification"
      ]
    },
    {
      title: "Opportunities",
      description: "Kelola peluang penjualan dari prospek hingga closing dengan pipeline visual yang jelas.",
      icon: Target,
      gradient: "from-secondary to-accent",
      image: opportunitiesIcon,
      features: [
        "Pipeline Stages",
        "Deal Tracking",
        "Forecasting",
        "Win/Loss Analysis",
        "Revenue Prediction"
      ]
    },
    {
      title: "Contacts Management",
      description: "Database pelanggan terpusat dengan riwayat interaksi lengkap dan profil detail.",
      icon: Users,
      gradient: "from-accent to-primary",
      image: contactsIcon,
      features: [
        "Customer Profiles",
        "Interaction History",
        "Contact Segmentation",
        "Duplicate Detection",
        "Data Enrichment"
      ]
    },
    {
      title: "Communication Tracking",
      description: "Lacak semua komunikasi dengan pelanggan - email, telepon, dan meeting dalam satu timeline.",
      icon: MessageSquare,
      gradient: "from-primary to-accent",
      features: [
        "Email Integration",
        "Call Logging",
        "Meeting Notes",
        "Activity Timeline",
        "Follow-up Reminders"
      ]
    },
    {
      title: "Sales Pipeline",
      description: "Visualisasi funnel penjualan dengan analisis mendalam di setiap tahap untuk optimasi konversi.",
      icon: BarChart3,
      gradient: "from-secondary to-primary",
      features: [
        "Visual Funnel",
        "Stage Analysis",
        "Bottleneck Detection",
        "Conversion Rates",
        "Pipeline Health"
      ]
    },
    {
      title: "Performance Analytics",
      description: "Dashboard dan laporan real-time untuk memantau kinerja tim dan mencapai target penjualan.",
      icon: TrendingUp,
      gradient: "from-accent to-secondary",
      features: [
        "Sales Reports",
        "Team Performance",
        "KPI Tracking",
        "Revenue Analytics",
        "Custom Dashboards"
      ]
    }
  ];

  const stats = [
    {
      title: "Total Leads",
      value: "2,847",
      change: "+12.5% dari bulan lalu",
      icon: UserPlus,
      trend: "up" as const
    },
    {
      title: "Active Opportunities",
      value: "184",
      change: "+8.2% dari bulan lalu",
      icon: Target,
      trend: "up" as const
    },
    {
      title: "Conversion Rate",
      value: "24.8%",
      change: "+3.1% dari bulan lalu",
      icon: TrendingUp,
      trend: "up" as const
    },
    {
      title: "Avg. Deal Size",
      value: "$12,450",
      change: "+15.3% dari bulan lalu",
      icon: Award,
      trend: "up" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
        <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-outline border border-white">
                <Zap className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Customer Relationship Management</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Tingkatkan Hubungan{" "}
                <span className=" bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
                  dengan Pelanggan
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Platform CRM lengkap untuk mengelola leads, opportunities, dan contacts. 
                Dari prospek hingga closing, semua dalam satu sistem yang terintegrasi.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="warning" size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 shadow-elegant">
                  <Zap className="w-5 h-5" />
                  Mulai Sekarang
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Lihat Demo
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-white" />
                  <span className="text-sm text-white/90">Setup 5 menit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-white" />
                  <span className="text-sm text-white/90">No credit card</span>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse" />
              <img 
                src={heroImage} 
                alt="CRM Dashboard" 
                className="relative rounded-3xl shadow-2xl border border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <StatCard {...stat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Fitur{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Lengkap & Powerful
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Semua yang Anda butuhkan untuk mengelola customer relationship secara efektif, 
              dari lead generation hingga customer retention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Customer Journey{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                End-to-End
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Proses customer-centric dari prospek hingga closing yang terintegrasi sempurna.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Prospecting", desc: "Identifikasi dan capture leads potensial" },
              { step: "02", title: "Qualification", desc: "Kualifikasi leads berdasarkan kriteria" },
              { step: "03", title: "Proposal", desc: "Presentasi solusi dan negosiasi" },
              { step: "04", title: "Closing", desc: "Finalisasi deal dan onboarding" }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative p-6 rounded-2xl border-2 border-primary/20 bg-card hover:border-primary/50 transition-all group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <div className="pt-6 space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
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