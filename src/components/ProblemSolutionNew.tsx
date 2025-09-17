import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProblemSolutionNew = () => {
  const problems = [
    {
      problem: "Laporan bulanan telat",
      solution: "Laporan real-time 1 klik",
      benefit: "Kurangi waktu closing 70%",
      cta: "Lihat Demo"
    },
    {
      problem: "Stok tidak terkontrol",
      solution: "Alert otomatis min-stock",
      benefit: "Zero stockout guaranteed",
      cta: "Coba Fitur"
    },
    {
      problem: "Payroll manual ribet",
      solution: "Absensi → payroll otomatis",
      benefit: "Hemat 15 jam/bulan",
      cta: "Hitung ROI"
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Dari Manual ke Otomatis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atasi masalah operasional dengan solusi ERP yang terbukti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="feature-card p-6 rounded-xl space-y-4">
              {/* Problem */}
              <div className="pb-4 border-b border-border/50">
                <h3 className="text-lg font-semibold text-destructive mb-2">
                  ❌ {item.problem}
                </h3>
              </div>

              {/* Solution */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-secondary">
                  ✅ {item.solution}
                </h4>
                
                {/* Benefit */}
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-primary font-medium text-center">
                    {item.benefit}
                  </p>
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group"
                >
                  {item.cta}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionNew;