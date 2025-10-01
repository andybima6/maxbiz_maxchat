import { 
  Users, 
  Globe, 
  FileText, 
  ShoppingCart, 
  MessageSquare, 
  Receipt, 
  PiggyBank, 
  FileSignature, 
  GitBranch, 
  BarChart3 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import iconSupplier from "@/assets/module/Buying/icon-supplier.png";
import iconPO from "@/assets/module/Buying/icon-po.png";
import iconInvoice from "@/assets/module/Buying/icon-invoice.png";
import iconAnalytics from "@/assets/module/Buying/icon-analytics.png";

const features = [
  {
    icon: Users,
    title: "Supplier Management",
    description: "Database supplier lengkap dengan rating, evaluasi kinerja, dan manajemen kontrak terintegrasi.",
    image: iconSupplier
  },
  {
    icon: Globe,
    title: "Vendor Portal",
    description: "Portal self-service untuk vendor submit quotation, tracking order, dan komunikasi real-time.",
    image: null
  },
  {
    icon: FileText,
    title: "Purchase Requisition",
    description: "Sistem permintaan pembelian internal dengan workflow approval yang dapat dikustomisasi.",
    image: null
  },
  {
    icon: ShoppingCart,
    title: "Purchase Order Management",
    description: "Buat, kelola, dan tracking PO dengan status real-time dan notifikasi otomatis.",
    image: iconPO
  },
  {
    icon: MessageSquare,
    title: "RFQ/RFP Management",
    description: "Kelola Request for Quotation dan Proposal dengan perbandingan vendor otomatis.",
    image: null
  },
  {
    icon: Receipt,
    title: "Invoice Processing",
    description: "Automated 3-way matching: PO, GRN, dan Invoice untuk approval yang akurat dan cepat.",
    image: iconInvoice
  },
  {
    icon: PiggyBank,
    title: "Budget Control",
    description: "Monitoring real-time terhadap budget dengan alert otomatis saat mendekati limit.",
    image: null
  },
  {
    icon: FileSignature,
    title: "Contract Management",
    description: "Simpan, kelola, dan tracking kontrak supplier dengan reminder perpanjangan otomatis.",
    image: null
  },
  {
    icon: GitBranch,
    title: "Approval Workflows",
    description: "Multi-level approval dengan routing otomatis berdasarkan nilai, kategori, atau departemen.",
    image: null
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description: "Dashboard analytics lengkap dengan insights procurement, spend analysis, dan KPI tracking.",
    image: iconAnalytics
  }
];

const FeatureCard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Fitur Utama
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sistem Pembelian Lengkap & Terintegrasi
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Otomasi seluruh proses procurement dari requisition hingga payment dengan kontrol penuh dan transparansi maksimal
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card border-none shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="mb-6">
                {feature.image ? (
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-primary/10 p-2 group-hover:scale-110 transition-transform duration-300">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;