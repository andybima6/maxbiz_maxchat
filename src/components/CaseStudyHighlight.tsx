import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const CaseStudyHighlight = () => {
  const caseStudies = [
    {
      company: "PT ABC Manufacturing",
      industry: "Manufaktur",
      logo: "ABC",
      metric: "30%",
      description: "Hemat biaya operasi dalam 6 bulan",
      details: "Otomatisasi produksi dan inventory management menghasilkan efisiensi signifikan",
      timeline: "6 bulan implementasi",
      bgColor: "bg-primary/10"
    },
    {
      company: "CV Digital Retail",
      industry: "Retail & E-commerce", 
      logo: "CDR",
      metric: "200%",
      description: "Peningkatan efisiensi stok management",
      details: "Integrasi multi-channel dan real-time inventory tracking",
      timeline: "4 bulan implementasi", 
      bgColor: "bg-secondary/10"
    }
  ];

  return (
    <section className="section-padding" id="case-study">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Hasil Nyata dari Klien Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat bagaimana perusahaan Indonesia mencapai transformasi digital dengan ERPIndo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div key={index} className={`feature-card p-8 rounded-xl ${study.bgColor} group cursor-pointer`}>
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                      {study.logo}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {study.company}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {study.industry}
                      </p>
                    </div>
                  </div>
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>

                {/* Metric */}
                <div className="text-center py-6">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {study.metric}
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    {study.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {study.details}
                  </p>
                </div>

                {/* Timeline */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">
                    ⏱️ {study.timeline}
                  </span>
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="text-primary group/link p-0"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Lihat Semua Case Study
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHighlight;