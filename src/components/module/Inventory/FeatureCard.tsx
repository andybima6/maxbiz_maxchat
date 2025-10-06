import { Warehouse, Package, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import dashboardMockup from "@/assets/module/Inventory/dashboard-mockup.jpg";

const features = [
  {
    icon: Warehouse,
    title: "Multi-Warehouse Management",
    description: "Seamlessly manage inventory across multiple warehouse locations with real-time synchronization and centralized control.",
  },
  {
    icon: Package,
    title: "Batch & Serial Number Tracking",
    description: "Track every item with precision using batch numbers and serial tracking for complete traceability and compliance.",
  },
  {
    icon: TrendingUp,
    title: "Stock Valuation & Reconciliation",
    description: "Automated stock valuation with advanced reconciliation tools to maintain accurate inventory records and financial reporting.",
  },
];

const FeatureCard = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-gradient-primary blur-[120px] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful Features for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern Inventory
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your warehouse operations efficiently
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/50 bg-card"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-full" />
            <img 
              src={dashboardMockup} 
              alt="Inventory management dashboard interface" 
              className="relative rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-bold">
              Powerful Dashboard for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Real-Time Insights
              </span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Monitor your entire inventory ecosystem from a single, intuitive dashboard. 
              Track stock levels, manage orders, and make data-driven decisions with 
              real-time analytics and customizable reports.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Live Stock Updates</h4>
                  <p className="text-sm text-muted-foreground">Track inventory changes across all locations in real-time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Custom Reports</h4>
                  <p className="text-sm text-muted-foreground">Generate detailed reports tailored to your business needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Predictive Analytics</h4>
                  <p className="text-sm text-muted-foreground">AI-powered insights to optimize stock levels and reduce costs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;