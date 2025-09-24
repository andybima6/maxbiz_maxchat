import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Calendar } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const LeadMagnetSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="flex gap-12 justify-center mx-auto items-center ">
          {/* E-book Lead Magnet */}
          <AnimatedElement animation="fade-in-up" delay={400}>
            <div className="feature-card p-8 rounded-xl shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <Download className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">E-book Gratis</h3>
                    <p className="text-muted-foreground">"Checklist: 10 Hal sebelum Pilih ERP"</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">Panduan lengkap untuk memilih sistem ERP yang tepat untuk bisnis Anda. Termasuk checklist evaluasi vendor dan perhitungan ROI.</p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>15 halaman panduan praktis</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Template evaluasi vendor</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Kalkulator ROI sederhana</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Input type="email" placeholder="Email Anda" className="w-full" />
                    <Button variant="hero" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download E-book Gratis
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
