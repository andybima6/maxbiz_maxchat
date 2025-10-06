import { Eye, BarChart3, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Full Supply Chain Visibility",
    description: "Track every movement from supplier to customer with complete transparency",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Make data-driven decisions with live inventory insights and reporting",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with role-based access and audit trails",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process thousands of transactions per second with zero downtime",
  },
];

const StatCard = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Complete <span className="bg-gradient-hero bg-clip-text text-transparent">Supply Chain Control</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Get unprecedented visibility and control over your entire supply chain operation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4 p-6 rounded-xl hover:bg-background/50 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-lg bg-gradient-hero flex items-center justify-center">
                <benefit.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatCard;
