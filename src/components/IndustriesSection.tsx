import { Card } from "@/components/ui/card";
import { Building2, Stethoscope, Landmark, GraduationCap, Home, ShoppingBag, Palette, Plane, Hotel, Lightbulb, Scale, UtensilsCrossed, Heart, Users, Settings } from "lucide-react";

import healthcareImg from "@/assets/industry/HealthCare/kesehatan.webp";
import governmentImg from "@/assets/industry/Government/Government.jpg";
import financeImg from "@/assets/industry/Finance/finance.webp";
import realestateImg from "@/assets/industry/Property/properti.webp";
import educationImg from "@/assets/industry/Education/pendidikan.jpg";
import retailImg from "@/assets/industry/Retail/retail.webp";
import agencyImg from "@/assets/industry/Agency/agency.webp";
import travelImg from "@/assets/industry/TravelTrasnportasi/travel.webp";
import hospitalityImg from "@/assets/industry/Hospitality/hospitality.webp";
import utilitiesImg from "@/assets/industry/utilitas/utilitas.webp";
import legalImg from "@/assets/industry/LegalKonsultan/Konsultan.webp";
import fnbImg from "@/assets/industry/fnb/fnb.webp";
import ngoImg from "@/assets/industry/Ngo/Ngo.jpg";
import cooperativeImg from "@/assets/industry/Koperasi/Koperasi.webp";
import AnimatedElement from "./AnimatedElement";

const industries = [
  {
    icon: Stethoscope,
    title: "Kesehatan",
    description: "Sistem terintegrasi untuk manajemen rumah sakit, klinik, dan fasilitas kesehatan dengan pencatatan medis digital dan pengelolaan inventaris farmasi.",
    image: healthcareImg,
    href: "/healthcare",
  },
  {
    icon: Landmark,
    title: "Government",
    description: "Solusi digital untuk transformasi pelayanan publik, manajemen anggaran daerah, dan peningkatan transparansi administrasi pemerintahan.",
    image: governmentImg,
    href: "/government",
  },
  {
    icon: Building2,
    title: "Finance",
    description: "Platform komprehensif untuk lembaga keuangan dengan fitur akuntansi terintegrasi, manajemen risiko, dan pelaporan keuangan real-time.",
    image: financeImg,
    href: "/finance",
  },
  {
    icon: Home,
    title: "Properti (Real Estate)",
    description: "Sistem manajemen properti end-to-end untuk developer, agen, dan pengelola gedung dengan CRM dan tracking konstruksi terintegrasi.",
    image: realestateImg,
    href: "/property",
  },
  {
    icon: GraduationCap,
    title: "Pendidikan",
    description: "Platform digital untuk institusi pendidikan dengan manajemen akademik, keuangan sekolah, dan sistem informasi siswa yang terpadu.",
    image: educationImg,
    href: "/education",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Solusi POS dan inventory management untuk retail dengan integrasi e-commerce, loyalty program, dan analitik penjualan real-time.",
    image: retailImg,
    href: "/retail",
  },
  {
    icon: Palette,
    title: "Agency",
    description: "Sistem manajemen proyek kreatif dengan time tracking, client management, dan resource planning untuk agensi digital dan kreatif.",
    image: agencyImg,
    href: "/agency",
  },
  {
    icon: Plane,
    title: "Travel & Transportasi",
    description: "Platform terintegrasi untuk booking, fleet management, dan customer service dalam industri travel dan transportasi.",
    image: travelImg,
    href: "/travel-transportasi",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Sistem manajemen hotel dan resort dengan booking engine, housekeeping management, dan guest experience optimization.",
    image: hospitalityImg,
    href: "/hospitality",
  },
  {
    icon: Lightbulb,
    title: "Utilitas",
    description: "Solusi untuk manajemen energi, air, dan utilitas publik dengan monitoring real-time, billing automation, dan maintenance scheduling.",
    image: utilitiesImg,
    href: "/utilities",
  },
  {
    icon: Scale,
    title: "Legal & Konsultan",
    description: "Sistem manajemen kasus hukum, document management, time billing, dan client relationship untuk firma hukum dan konsultan.",
    image: legalImg,
    href: "/legal-consultant",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description: "Solusi F&B dengan recipe management, kitchen display system, online ordering, dan supply chain management terintegrasi.",
    image: fnbImg,
    href: "/food-beverage",
  },
  {
    icon: Heart,
    title: "NGO / Non Profit",
    description: "Platform untuk manajemen donatur, volunteer coordination, program tracking, dan impact reporting untuk organisasi nirlaba.",
    image: ngoImg,
    href: "/ngo",
  },
  {
    icon: Users,
    title: "Koperasi",
    description: "Sistem simpan pinjam, membership management, dan akuntansi terintegrasi untuk koperasi dengan transparansi penuh.",
    image: cooperativeImg,
    href: "/koperasi",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-background/95 to-primary/5" id="industry">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <AnimatedElement animation="fade-in-up" delay={100}>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Settings className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Industry MaxBiz ERP</span>
            </div>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={200}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Industry
              <span className="text-primary"> MaxBiz ERP</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={400}>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">MaxBiz ERP dirancang untuk menyederhanakan operasional bisnis Anda melalui modul-modul terintegrasi yang powerful dan mudah digunakan.</p>
          </AnimatedElement>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <a href={industry.href} className="block" target="_blank" rel="noopener noreferrer">
              <Card key={index} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card relative cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={industry.image} alt={industry.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm">
                        <industry.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{industry.title}</h3>
                  </div>
                </div>

                {/* Deskripsi muncul hanya saat hover */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6 text-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
