import { TrendingUp, FileCheck, Shield, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: TrendingUp,
    label: "Purchase Orders",
    value: "1,250",
    change: "+18% dari bulan lalu",
    color: "text-green-600"
  },
  {
    icon: FileCheck,
    label: "Invoice Terproses",
    value: "892",
    change: "-5% dari bulan lalu",
    color: "text-blue-600"
  },
  {
    icon: Shield,
    label: "Kepatuhan",
    value: "100%",
    change: "Semua persyaratan terpenuhi",
    color: "text-purple-600"
  },
  {
    icon: Users,
    label: "Supplier Aktif",
    value: "234",
    change: "+12% kuartal ini",
    color: "text-indigo-600"
  }
];

const StatsCard = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-none shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
              <p className={`text-xs ${stat.color} font-medium`}>{stat.change}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCard;