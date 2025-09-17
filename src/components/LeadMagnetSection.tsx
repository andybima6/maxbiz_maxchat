import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Calendar } from "lucide-react";

const LeadMagnetSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* E-book Lead Magnet */}
          <div className="feature-card p-8 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <Download className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    E-book Gratis
                  </h3>
                  <p className="text-muted-foreground">
                    "Checklist: 10 Hal sebelum Pilih ERP"
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Panduan lengkap untuk memilih sistem ERP yang tepat untuk bisnis Anda. 
                  Termasuk checklist evaluasi vendor dan perhitungan ROI.
                </p>
                
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
                  <Input 
                    type="email" 
                    placeholder="Email Anda"
                    className="w-full"
                  />
                  <Button variant="hero" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download E-book Gratis
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Webinar CTA */}
          <div className="feature-card p-8 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Webinar Gratis
                  </h3>
                  <p className="text-muted-foreground">
                    "Digitalisasi Bisnis dengan ERP"
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Sesi live 90 menit bersama expert ERP. Pelajari strategi implementasi, 
                  best practices, dan tanya jawab langsung.
                </p>

                <div className="bg-secondary/10 p-4 rounded-lg">
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Webinar Berikutnya:</p>
                    <p className="text-secondary font-medium">Kamis, 28 Nov 2024 - 14:00 WIB</p>
                    <p className="text-sm text-muted-foreground">
                      "ROI ERP: Menghitung Return Investment yang Realistis"
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span>90 menit sesi interaktif</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span>Q&A dengan expert</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span>Recording tersedia 7 hari</span>
                  </div>
                </div>

                <Button variant="accent" className="w-full" size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Daftar Webinar Gratis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;