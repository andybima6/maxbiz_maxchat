import { Calendar, ClipboardList, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import schedulingImage from "@/assets/module/ServiceMaintenance/scheduling.jpg";
import workOrdersImage from "@/assets/module/ServiceMaintenance/work-orders.jpg";
import sparePartsImage from "@/assets/module/ServiceMaintenance/spare-parts.jpg";


const features = [
  {
    icon: Calendar,
    title: "Preventive & Corrective Maintenance",
    description: "Jadwalkan pemeliharaan preventif dan korektif secara otomatis untuk menjaga kinerja aset optimal",
    image: schedulingImage,
  },
  {
    icon: ClipboardList,
    title: "Work Order & Assignment",
    description: "Kelola work order dengan sistem penugasan teknisi yang efisien dan real-time tracking",
    image: workOrdersImage,
  },
  {
    icon: Package,
    title: "Spare-Part Management",
    description: "Pantau inventori spare-part dan riwayat servis untuk memastikan ketersediaan komponen kritis",
    image: sparePartsImage,
  },
];

const FeatureCard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fitur Unggulan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solusi komprehensif untuk manajemen pemeliharaan yang lebih efektif
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;