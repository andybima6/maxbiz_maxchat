import { Card, CardContent } from "@/components/ui/card";
import { FileText, ClipboardList, Calendar } from "lucide-react";
import bomImage from "@/assets/module/Manufacture/bom-feature.jpg";
import workorderImage from "@/assets/module/Manufacture/workorder-feature.jpg";
import planningImage from "@/assets/module/Manufacture/planning-feature.jpg";

const features = [
  {
    title: "Bill of Materials",
    description: "Kelola struktur produk dan komponen dengan detail. Lacak setiap material dari supplier hingga produk jadi dengan akurasi tinggi.",
    icon: FileText,
    image: bomImage,
  },
  {
    title: "Work Order & Job Card",
    description: "Buat dan kelola work order dengan mudah. Monitor progress produksi real-time dan optimasi alur kerja di shop floor.",
    icon: ClipboardList,
    image: workorderImage,
  },
  {
    title: "Production Planning",
    description: "Rencanakan jadwal produksi dengan cerdas. Optimalkan kapasitas mesin dan tenaga kerja untuk hasil maksimal.",
    icon: Calendar,
    image: planningImage,
  },
];

const FeatureCard = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Fitur Unggulan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Semua yang Anda butuhkan untuk mengelola produksi manufaktur dengan efisien</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="relative h-48 overflow-hidden">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-hero from-primary to-accent">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
