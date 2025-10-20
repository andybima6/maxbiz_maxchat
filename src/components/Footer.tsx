import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, MessageCircle, Download } from "lucide-react";
import logo from "@/assets/logo_maxbiz.svg";

const Footer = () => {
  const footerLinks = {
    Produk: ["Fitur ERP", "Industri", "Pricing", "Demo"],
    Resources: ["Blog", "Case Studies", "E-book Gratis", "Webinar"],
    Perusahaan: ["Tentang Kami", "Tim", "Karir", "Partner"],
    Legal: ["Privacy Policy", "Terms of Service", "SLA", "Security"],
  };

  return (
    <footer className="bg-[hsl(228,58%,12%)] text-[hsl(0,0%,95%)]">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-12 w-12 items-center justify-center ">
                <img src={logo} alt="MaxBiz Logo" className="" />
              </div>
              <span className="text-xl font-bold">MaxBiz</span>
            </div>
            <p className="text-background/70 max-w-sm">Platform ERP modern yang dirancang khusus untuk kebutuhan bisnis Indonesia. Integrasikan seluruh operasi bisnis dalam satu sistem yang mudah digunakan.</p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3 text-sm text-background/70">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-background/70">
                <Phone className="w-4 h-4" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-background/70">
                <Mail className="w-4 h-4" />
                <span>hello@MaxBiz.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-background/70">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +62 812 3456 7890</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="font-semibold text-background">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-background/70 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-background/70">© {new Date().getFullYear()} MaxBiz. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-sm text-background/70">
                <a href="#privacy" className="hover:text-primary transition-colors">
                  Privacy
                </a>
                <a href="#terms" className="hover:text-primary transition-colors">
                  Terms
                </a>
                <a href="#cookies" className="hover:text-primary transition-colors">
                  Cookies
                </a>
              </div>
              <div className="flex items-center space-x-2 text-xs text-background/50">
                <span>🔒 SSL Secured</span>
                <span>|</span>

                <span>🇮🇩 GDPR Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/6281234511449?text=Halo%2C%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20ERP%20perusahaan%20Anda."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-secondary text-secondary-foreground rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
