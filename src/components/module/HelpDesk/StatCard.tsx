import { TrendingUp, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Users",
    trend: "+25% this month",
  },
  {
    icon: Clock,
    value: "2.5h",
    label: "Avg. Resolution Time",
    trend: "-40% faster",
  },
  {
    icon: Award,
    value: "95%",
    label: "Customer Satisfaction",
    trend: "+15% improvement",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "SLA Compliance",
    trend: "Best in class",
  },
];

const StatsCard = () => {
  return (
    <section className="py-24 bg-[image:var(--gradient-primary)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Hasil yang Terbukti</h2>
          <p className="text-xl text-white/90">Bergabunglah dengan ribuan perusahaan yang telah meningkatkan layanan pelanggan mereka dengan platform kami.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 shadow-strong animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-sm text-white/70">{stat.trend}</span>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCard;
