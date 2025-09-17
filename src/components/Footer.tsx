import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, MessageCircle, Download } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Produk": ["Fitur ERP", "Industri", "Pricing", "Demo"],
    "Resources": ["Blog", "Case Studies", "E-book Gratis", "Webinar"],
    "Perusahaan": ["Tentang Kami", "Tim", "Karir", "Partner"],
    "Legal": ["Privacy Policy", "Terms of Service", "SLA", "Security"]
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">E</span>
              </div>
              <span className="text-xl font-bold">ERPIndo</span>
            </div>
            <p className="text-background/70 max-w-sm">
              Platform ERP modern yang dirancang khusus untuk kebutuhan bisnis Indonesia. 
              Integrasikan seluruh operasi bisnis dalam satu sistem yang mudah digunakan.
            </p>
            
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
                <span>hello@erpindo.com</span>
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
                    <a 
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Newsletter & E-book</h4>
            <p className="text-sm text-background/70 max-w-sm">
              Dapatkan tips bisnis digital dan e-book "10 Hal sebelum Pilih ERP" gratis.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Email Anda"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="hero" size="sm" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Dapatkan E-book
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-background/70">
              © 2024 ERPIndo. All rights reserved. Made with ❤️ in Indonesia.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-sm text-background/70">
                <a href="#privacy" className="hover:text-primary transition-colors">Privacy</a>
                <a href="#terms" className="hover:text-primary transition-colors">Terms</a>
                <a href="#cookies" className="hover:text-primary transition-colors">Cookies</a>
              </div>
              <div className="flex items-center space-x-2 text-xs text-background/50">
                <span>🔒 SSL Secured</span>
                <span>|</span>
                <span>💾 Daily Backup</span>
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
          href="https://wa.me/6281234567890"
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