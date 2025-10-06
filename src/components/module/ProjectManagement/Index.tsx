import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/module/ProjectManagement/FeatureCard";
import { StatCard } from "@/components/module/ProjectManagement/StatCard";
import { IntegrationCard } from "@/components/module/ProjectManagement/IntegrationCard";
import { CheckSquare, Milestone, Clock, Users, TrendingUp, Target, Timer, DollarSign, UserCheck, BarChart3, Building2, Wallet, ShoppingCart, ArrowRight, Calculator, FileText } from "lucide-react";
import heroDashboard from "@/assets/module/ProjectManagement/hero-dashboard.jpg";
import ganttChart from "@/assets/module/ProjectManagement/gantt-chart.jpg";
import timesheet from "@/assets/module/ProjectManagement/timesheet.jpg";
import resources from "@/assets/module/ProjectManagement/resources.jpg";
import BannerSection from "@/components/BannerSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "../HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <HeroSection
        badge="Project Management"
        title="Kelola Proyek dari Planning hingga Delivery"
        description="Platform manajemen proyek komprehensif yang mengintegrasikan task management, timesheet, resource allocation, dan lebih banyak lagi dalam satu ekosistem."
        primaryAction={{ label: "Mulai Sekarang", onClick: () => console.log("Start clicked"), icon: <Calculator className="mr-2 h-5 w-5" /> }}
        secondaryAction={{ label: "Lihat Demo", onClick: () => console.log("Demo clicked"), icon: <FileText className="mr-2 h-5 w-5" /> }}
        heroImage={heroDashboard}
        stats={[
          {
            value: "98%",
            label: "Akurasi Order",
            subLabel: "Otomatis Terverifikasi",
            position: "bottom-left",
          },
          {
            value: "50%",
            label: "Lebih Cepat",
            subLabel: "Proses Pembelian",
            position: "top-right",
            delay: "0.3s",
          },
        ]}
      />
  
      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Fitur Lengkap untuk Manajemen Proyek</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Semua yang Anda butuhkan untuk mengelola proyek dengan efisien, dari planning hingga execution</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={CheckSquare}
                title="Task Management"
                description="Kelola semua task proyek dengan sistem yang terorganisir dan mudah digunakan"
                image={ganttChart}
                subFeatures={[
                  {
                    title: "Kanban Board",
                    description: "Visualisasi alur kerja dengan drag-and-drop untuk mengatur prioritas task dengan mudah",
                  },
                  {
                    title: "Priority Levels",
                    description: "Tetapkan tingkat prioritas (High, Medium, Low) untuk fokus pada task yang paling penting",
                  },
                  {
                    title: "Task Dependencies",
                    description: "Atur ketergantungan antar task untuk memastikan alur kerja yang logis dan terstruktur",
                  },
                  {
                    title: "Collaborative Comments",
                    description: "Diskusi dan berkolaborasi langsung di setiap task dengan tim Anda",
                  },
                ]}
              />

              <FeatureCard
                icon={Milestone}
                title="Milestones & Gantt Chart"
                description="Visualisasi timeline proyek dan track progress dengan mudah"
                subFeatures={[
                  {
                    title: "Visual Timeline",
                    description: "Lihat seluruh proyek dalam satu tampilan timeline yang interaktif dan mudah dipahami",
                  },
                  {
                    title: "Milestone Tracking",
                    description: "Tetapkan dan monitor pencapaian milestone penting dalam proyek Anda",
                  },
                  {
                    title: "Progress Monitoring",
                    description: "Track kemajuan proyek real-time dengan indikator visual yang jelas",
                  },
                  {
                    title: "Critical Path Analysis",
                    description: "Identifikasi task-task kritis yang mempengaruhi deadline proyek",
                  },
                ]}
              />

              <FeatureCard
                icon={Clock}
                title="Timesheet & Expense Tracking"
                description="Catat waktu kerja dan kelola pengeluaran proyek dengan akurat"
                image={timesheet}
                subFeatures={[
                  {
                    title: "Time Logging",
                    description: "Catat jam kerja tim dengan mudah, termasuk overtime dan leave tracking",
                  },
                  {
                    title: "Budget Management",
                    description: "Monitor anggaran proyek dan bandingkan dengan actual spending secara real-time",
                  },
                  {
                    title: "Expense Reports",
                    description: "Generate laporan pengeluaran detail untuk transparansi dan audit",
                  },
                  {
                    title: "Invoice Integration",
                    description: "Konversi timesheet menjadi invoice client dengan sekali klik",
                  },
                ]}
              />

              <FeatureCard
                icon={Users}
                title="Resource Allocation"
                description="Optimalkan penggunaan sumber daya tim untuk hasil maksimal"
                image={resources}
                subFeatures={[
                  {
                    title: "Team Capacity Planning",
                    description: "Visualisasi kapasitas tim dan alokasi resource untuk menghindari overload",
                  },
                  {
                    title: "Workload Balancing",
                    description: "Distribusikan pekerjaan secara merata untuk produktivitas optimal",
                  },
                  {
                    title: "Skill Matching",
                    description: "Assign task berdasarkan skill dan expertise anggota tim",
                  },
                  {
                    title: "Availability Calendar",
                    description: "Track ketersediaan tim member untuk planning yang lebih akurat",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <BannerSection
        title="Siap Tingkatkan Performa Penjualan Anda?"
        description="Mulai otomasi proses penjualan Anda hari ini. Dapatkan akses penuh ke semua fitur tanpa biaya setup."
        primaryAction={{ label: "Mulai Sekarang", onClick: () => console.log("Primary") }}
        secondaryAction={{ label: "Hubungi Sales", onClick: () => console.log("Secondary") }}
      />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
