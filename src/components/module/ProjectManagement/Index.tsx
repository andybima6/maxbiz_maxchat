import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/module/ProjectManagement/FeatureCard";
import { StatCard } from "@/components/module/ProjectManagement/StatCard";
import { IntegrationCard } from "@/components/module/ProjectManagement/IntegrationCard";
import { CheckSquare, Milestone, Clock, Users, TrendingUp, Target, Timer, DollarSign, UserCheck, BarChart3, Building2, Wallet, ShoppingCart, ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/module/ProjectManagement/hero-dashboard.jpg";
import ganttChart from "@/assets/module/ProjectManagement/gantt-chart.jpg";
import timesheet from "@/assets/module/ProjectManagement/timesheet.jpg";
import resources from "@/assets/module/ProjectManagement/resources.jpg";
import BannerSection from "@/components/BannerSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTggNGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6bTE2IDBjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Kelola Proyek dari
                    <span className="block text-white/90">Planning hingga Delivery</span>
                  </h1>
                  <p className="text-xl text-white/80 leading-relaxed">Platform manajemen proyek komprehensif yang mengintegrasikan task management, timesheet, resource allocation, dan lebih banyak lagi dalam satu ekosistem.</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" className="group">
                    Mulai Sekarang
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
                    Lihat Demo
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8">
                  <StatCard icon={Target} value="99%" label="On-Time Delivery" />
                  <StatCard icon={Users} value="500+" label="Active Teams" />
                  <StatCard icon={TrendingUp} value="40%" label="Produktivitas Meningkat" />
                </div>
              </div>

              <div className="relative animate-fade-in">
                <div className="absolute inset-0 bg-white/10 rounded-2xl blur-3xl" />
                <img src={heroDashboard} alt="Project Management Dashboard" className="relative rounded-2xl shadow-2xl border border-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
