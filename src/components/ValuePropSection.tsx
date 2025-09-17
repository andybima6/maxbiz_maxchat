import { Clock, BarChart3, Shield } from "lucide-react";

const ValuePropSection = () => {
  const valueProps = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hemat Waktu",
      description: "Otomatisasi laporan & payroll",
      color: "text-primary"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Kontrol Stok", 
      description: "Live inventory per gudang",
      color: "text-secondary"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Keuangan Real-time",
      description: "Buku besar otomatis",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4 ${prop.color} group-hover:scale-110 transition-transform`}>
                {prop.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{prop.title}</h3>
              <p className="text-muted-foreground">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;