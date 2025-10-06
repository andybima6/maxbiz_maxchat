import { Ticket, BookOpen, Zap, Users, BarChart3, Shield, Clock, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import ticketImage from  "@/assets/module/HelpDesk/hero-helpdesk.jpg";
import knowledgeImage from  "@/assets/module/HelpDesk/hero-helpdesk.jpg";
import automationImage from  "@/assets/module/HelpDesk/hero-helpdesk.jpg";
import heroImage from "@/assets/module/HelpDesk/hero-helpdesk.jpg";

const mainFeatures = [
  {
    icon: Ticket,
    title: "Ticket Management",
    description: "Kelola semua permintaan pelanggan dari berbagai channel dalam satu platform terpusat.",
    image: ticketImage,
    subFeatures: [
      { icon: MessageSquare, title: "Multi-Channel Ticketing", desc: "Email, chat, sosial media, dan telepon" },
      { icon: BarChart3, title: "Priority-Based Routing", desc: "Otomatis kategorisasi berdasarkan urgensi" },
      { icon: Clock, title: "Status Tracking", desc: "Real-time monitoring progres tiket" },
      { icon: Shield, title: "Audit Trail", desc: "Histori lengkap setiap interaksi" }
    ]
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Berdayakan pelanggan untuk menemukan solusi sendiri dengan portal self-service yang powerful.",
    image: knowledgeImage,
    subFeatures: [
      { icon: BookOpen, title: "Self-Service Portal", desc: "Portal bantuan 24/7 untuk pelanggan" },
      { icon: MessageSquare, title: "Searchable Articles", desc: "Pencarian cepat dan akurat" },
      { icon: BarChart3, title: "Category Organization", desc: "Struktur artikel yang terorganisir" },
      { icon: BarChart3, title: "Article Analytics", desc: "Insights artikel paling bermanfaat" }
    ]
  },
  {
    icon: Zap,
    title: "Auto Assignment & Escalation",
    description: "Routing otomatis dan eskalasi cerdas untuk memastikan setiap tiket ditangani dengan tepat waktu.",
    image: automationImage,
    subFeatures: [
      { icon: Zap, title: "Smart Routing Rules", desc: "Assign berdasarkan keahlian dan ketersediaan" },
      { icon: Clock, title: "SLA Monitoring", desc: "Tracking dan alert SLA real-time" },
      { icon: Users, title: "Automated Escalation", desc: "Eskalasi otomatis jika SLA terancam" },
      { icon: BarChart3, title: "Workload Balancing", desc: "Distribusi tiket merata antar agent" }
    ]
  }
];

const FeatureCard = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            FITUR UNGGULAN
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Semua yang Anda Butuhkan untuk
            <span className="block bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
              Layanan Pelanggan Terbaik
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Platform lengkap dengan fitur-fitur canggih yang dirancang untuk meningkatkan 
            efisiensi tim dan kepuasan pelanggan Anda.
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-24">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Feature Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-in fade-in slide-in-from-${index % 2 === 0 ? 'left' : 'right'} duration-700`}>
                <div className="relative rounded-2xl overflow-hidden shadow-medium group">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Feature Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-8 animate-in fade-in slide-in-from-${index % 2 === 0 ? 'right' : 'left'} duration-700 delay-200`}>
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[image:var(--gradient-primary)] text-white mb-6 shadow-medium">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground">{feature.description}</p>
                </div>

                {/* Sub Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {feature.subFeatures.map((sub, subIndex) => (
                    <Card 
                      key={subIndex}
                      className="p-4 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <sub.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{sub.title}</h4>
                          <p className="text-sm text-muted-foreground">{sub.desc}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Enterprise Security",
              desc: "Enkripsi end-to-end dan compliance standar industri"
            },
            {
              icon: BarChart3,
              title: "Advanced Analytics",
              desc: "Dashboard real-time dan custom reporting"
            },
            {
              icon: Users,
              title: "Team Collaboration",
              desc: "Internal notes, mentions, dan assignment"
            }
          ].map((item, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border/50 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero text-white mb-6 shadow-soft group-hover:shadow-medium transition-shadow">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;