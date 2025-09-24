import { Star, Quote } from "lucide-react";
import budi from "../assets/images/budi.jpeg";
import AnimatedElement from "./AnimatedElement";

type Testimonial = {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string; // fallback initials
  avatarUrl?: string; // photo url (webp/jpg/png)
  logo: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Budi Santoso",
    position: "CEO",
    company: "PT Maju Bersama",
    content: "MaxBiz mengubah cara kami mengelola produksi. Efisiensi meningkat 300% dalam 6 bulan.",
    rating: 5,
    avatar: "BS",
    avatarUrl: budi,
    logo: "PMB",
  },
  {
    name: "Sari Wijaya",
    position: "Finance Director",
    company: "CV Sukses Mandiri",
    content: "Integrasi HR dan Finance sangat membantu. Kami hemat 20 jam kerja per minggu.",
    rating: 5,
    avatar: "SW",
    avatarUrl: budi,
    logo: "CSM",
  },
  {
    name: "Ahmad Rahman",
    position: "Operations Manager",
    company: "PT Teknologi Nusa",
    content: "Project management dan time tracking membuat tim kami lebih produktif. ROI terlihat dalam 3 bulan.",
    rating: 5,
    avatar: "AR",
    avatarUrl: budi,
    logo: "PTN",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <AnimatedElement animation="fade-in-up" delay={200}>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Dipercaya oleh Perusahaan Terkemuka</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Bergabunglah dengan 100+ perusahaan Indonesia yang sudah merasakan manfaat MaxBiz</p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <AnimatedElement key={idx} animation="fade-in-up" delay={idx * 400}>
              <div className="relative rounded-2xl bg-white p-6 pt-16 shadow-sm border border-border/70 feature-card ">
                {/* Avatar center top */}
                <div className="absolute inset-x-0 -top-10 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-muted overflow-hidden ring-4 ring-white shadow-md">
                    {t.avatarUrl ? (
                      // Pakai <img>. Jika pakai Next.js, ganti ke <Image> sesuai kebutuhan.
                      <img src={t.avatarUrl} alt={t.name} className="z-99 w-full h-full object-cover" loading="lazy" width={160} height={160} />
                    ) : (
                      <div className="w-full h-full grid place-items-center text-lg font-semibold text-foreground">{t.avatar}</div>
                    )}
                  </div>
                </div>

                {/* Quote icon dekoratif */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground italic leading-relaxed text-center lg:min-h-20">“{t.content}”</p>

                {/* Name & meta centered */}
                <div className="text-center mt-6">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.position}</div>
                  <div className="flex items-center justify-center space-x-2 mt-1">
                    <div className="w-6 h-6 bg-muted-darker rounded text-xs flex items-center justify-center font-medium">{t.logo}</div>
                    <span className="text-xs text-primary font-medium">{t.company}</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Company logos section */}
        <div className="mt-16 pt-16 border-top border-t border-border/50">
          <AnimatedElement animation="fade-in-up" delay={200}>
            <div className="text-center mb-8">
              <p className="text-muted-foreground">Dipercaya oleh berbagai industri</p>
            </div>
          </AnimatedElement>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {["Manufaktur", "Retail", "Distribusi", "Jasa", "Pendidikan", "Energi"].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-muted-darker rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xs font-medium text-muted-foreground">{industry.slice(0, 3)}</span>
                </div>
                <p className="text-xs text-muted-foreground">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
