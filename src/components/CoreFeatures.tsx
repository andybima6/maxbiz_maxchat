import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  Package, 
  Users, 
  UserCheck,
  ArrowRight
} from "lucide-react";

const CoreFeatures = () => {
  const features = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Finance",
      subtitle: "Laporan & rekonsiliasi otomatis",
      bullets: ["GL otomatis, multi-currency", "Cash flow real-time"],
      color: "bg-primary/10 text-primary",
      link: "#finance"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory",
      subtitle: "Kontrol stok & B2B order",
      bullets: ["Min-stock alert, barcode", "Multi-gudang tracking"],
      color: "bg-secondary/10 text-secondary",
      link: "#inventory"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "HR & Payroll",
      subtitle: "Absensi → payroll otomatis",
      bullets: ["Self-service karyawan", "Compliance BPJS/PPh21"],
      color: "bg-accent/10 text-accent",
      link: "#hr"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "CRM & Sales",
      subtitle: "Pipeline & integrasi WA",
      bullets: ["Follow-up otomatis", "Lead scoring & analytics"],
      color: "bg-primary/10 text-primary",
      link: "#crm"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            4 Modul Inti untuk Semua Kebutuhan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Integrasikan seluruh operasi bisnis dengan modul yang saling terhubung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card p-8 rounded-xl group cursor-pointer"
            >
              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="flex items-start space-x-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 pl-20">
                  {feature.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pl-20">
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary group/link"
                  >
                    Pelajari fitur
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;