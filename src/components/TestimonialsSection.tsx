import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      position: "CEO",
      company: "PT Maju Bersama",
      content: "ERPIndo mengubah cara kami mengelola produksi. Efisiensi meningkat 300% dalam 6 bulan.",
      rating: 5,
      avatar: "BS",
      logo: "PMB"
    },
    {
      name: "Sari Wijaya",
      position: "Finance Director", 
      company: "CV Sukses Mandiri",
      content: "Integrasi HR dan Finance sangat membantu. Kami hemat 20 jam kerja per minggu.",
      rating: 5,
      avatar: "SW",
      logo: "CSM"
    },
    {
      name: "Ahmad Rahman",
      position: "Operations Manager",
      company: "PT Teknologi Nusa",
      content: "Project management dan time tracking membuat tim kami lebih produktif. ROI terlihat dalam 3 bulan.",
      rating: 5,
      avatar: "AR",
      logo: "PTN"
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Dipercaya oleh Perusahaan Terkemuka
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bergabunglah dengan 100+ perusahaan Indonesia yang sudah merasakan manfaat ERPIndo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="feature-card p-6 rounded-xl space-y-6 relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Profile */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-6 h-6 bg-muted-darker rounded text-xs flex items-center justify-center font-medium">
                      {testimonial.logo}
                    </div>
                    <span className="text-xs text-primary font-medium">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company logos section */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Dipercaya oleh berbagai industri</p>
          </div>
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
};

export default TestimonialsSection;