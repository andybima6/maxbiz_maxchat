import { Star } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import AnimatedElement from "../AnimatedElement";
import { ScrollMask } from "@/components/ScrollMask";

const AboutHero = () => {
  return (
    <section className="relative py-20 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8 animate-fade-in">
            <AnimatedElement animation="fade-in-up" delay={100}>
              <div className="flex items-center gap-3 mb-6">
                <Star className="h-8 w-8 text-accent fill-accent" />
                <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground">Tentang MaxBiz</h1>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fade-in-up" delay={200}>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                {" "}
                MaxBiz adalah perusahaan teknologi yang berdedikasi untuk memberikan solusi masa depan bagi klien di seluruh Indonesia. Sejak tahun 2014, kami telah menjadi mitra andal bagi berbagai industri dalam mengimplementasikan sistem
                ERP yang dirancang khusus untuk kebutuhan bisnis mereka.
              </p>
            </AnimatedElement>
            <div className="pt-4">
              <AnimatedElement animation="fade-in-up" delay={300}>
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-foreground/20">
                  <span className="text-primary-foreground font-semibold">Melayani sejak 2014</span>
                </div>
              </AnimatedElement>
            </div>
          </div>

          {/* Image: mask aktif saat pusat elemen mencapai pusat viewport */}
          <div className="space-y-8">
            {/* Circle (default) */}
            <ScrollMask shape="circle" steps={5} startSizePct={100} endSizePct={25} className="shadow-strong">
              {/* <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-30 -rotate-6 scale-110" /> */}
              <img src={teamCollaboration} alt="Tim MaxBiz" className="relative w-full h-auto object-cover" />
            </ScrollMask>

            {/* Ellipse */}
            {/* <ScrollMask shape="ellipse" steps={4} endSizePct={20} className="shadow-strong">
              <img src={teamCollaboration} alt="Tim MaxBiz" className="w-full h-auto object-cover" />
            </ScrollMask> */}

            {/* Inset rounded rect */}
            {/* <ScrollMask shape="inset" steps={2} endSizePct={40} insetRadius="32px" className="shadow-strong">
              <img src={teamCollaboration} alt="Tim MaxBiz" className="w-full h-auto object-cover" />
            </ScrollMask> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
