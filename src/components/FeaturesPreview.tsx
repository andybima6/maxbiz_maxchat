import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calculator, 
  Package, 
  UserCheck, 
  Briefcase, 
  Settings,
  ArrowRight
} from "lucide-react";

const FeaturesPreview = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "HR Management",
      description: "Kelola karyawan, absensi, dan payroll dalam satu sistem",
      color: "bg-primary/10 text-primary",
      link: "#hr"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Akuntansi",
      description: "Pembukuan otomatis dengan laporan keuangan real-time",
      color: "bg-secondary/10 text-secondary",
      link: "#accounting"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory",
      description: "Tracking stok barang dan manajemen gudang terpadu",
      color: "bg-accent/10 text-accent",
      link: "#inventory"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "CRM",
      description: "Kelola customer dan sales pipeline dengan mudah",
      color: "bg-primary/10 text-primary",
      link: "#crm"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Project",
      description: "Manajemen proyek dengan tracking progress real-time",
      color: "bg-secondary/10 text-secondary",
      link: "#project"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Manufaktur",
      description: "Kontrol produksi dan quality control terintegrasi",
      color: "bg-accent/10 text-accent",
      link: "#manufacturing"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Fitur Lengkap untuk Semua Kebutuhan Bisnis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Satu platform untuk mengintegrasikan seluruh operasi bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card p-6 rounded-xl group cursor-pointer border border-border/50 hover:border-primary/20 transition-all"
            >
              <div className="space-y-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color}`}>
                  {feature.icon}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                <div className="flex items-center text-primary group-hover:text-primary-dark transition-colors">
                  <span className="text-sm font-medium">Pelajari lebih lanjut</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="group">
            Lihat Semua Fitur
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPreview;