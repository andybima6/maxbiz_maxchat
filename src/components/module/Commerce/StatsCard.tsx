import { TrendingUp, Shield, Zap, Users, HeadphonesIcon, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StatsCard = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Tingkatkan Penjualan",
      description: "Optimalkan konversi dengan checkout yang mudah dan fitur marketing terintegrasi",
      // stat: "+150%",
      statLabel: "Rata-rata peningkatan penjualan"
    },
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description: "Enkripsi SSL, PCI-DSS compliance, dan perlindungan data pelanggan",
      // stat: "99.9%",
      statLabel: "Security uptime"
    },
    {
      icon: Zap,
      title: "Performa Cepat",
      description: "Loading time optimal untuk pengalaman berbelanja yang lebih baik",
      // stat: "<2s",
      statLabel: "Average page load"
    },
    {
      icon: Users,
      title: "Mudah Digunakan",
      description: "Interface intuitif yang memudahkan pengelolaan toko online Anda",
      // stat: "4.9/5",
      statLabel: "User satisfaction"
    },
    {
      icon: HeadphonesIcon,
      title: "Support 24/7",
      description: "Tim support siap membantu Anda kapan saja",
      // stat: "<15min",
      statLabel: "Response time"
    },
    {
      icon: Layers,
      title: "Skalabilitas Tinggi",
      description: "Infrastruktur yang dapat berkembang sesuai pertumbuhan bisnis",
      // stat: "∞",
      statLabel: "Unlimited scaling"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(228.8 58.9% 28.6%) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Mengapa Memilih
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Platform Kami?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Keunggulan yang membuat bisnis Anda berkembang lebih cepat
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground mb-6">{benefit.description}</p>
                
                <div className="pt-6 border-t border-border">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-muted-foreground">{benefit.statLabel}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCard;