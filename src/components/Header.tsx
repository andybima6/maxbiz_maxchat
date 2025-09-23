import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo_maxbiz.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Produk", href: "#produk" },
    { label: "Fitur", href: "#fitur" },
    { label: "Harga", href: "#harga" },
    { label: "Case Study", href: "#case-study" },
    { label: "Blog", href: "#blog" },
    { label: "Kontak", href: "#kontak" },
  ];

  const [language, setLanguage] = useState("ID");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-12 w-12 items-center justify-center ">
              <img src={logo} alt="MaxBiz Logo" className="" />
            </div>
            <span className="text-xl font-bold text-foreground">MaxBiz</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <button onClick={() => setLanguage(language === "ID" ? "EN" : "ID")} className="px-2 py-1 rounded hover:bg-muted transition-colors">
                {language}
              </button>
            </div> */}
            {/* <Button variant="ghost" size="sm">
              Masuk
            </Button> */}
            <Button variant="hero" size="sm" className="gap-2">
              📞 Demo Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("md:hidden transition-all duration-300 ease-in-out", isMenuOpen ? "max-h-96 opacity-100 border-b border-border/40 pb-4" : "max-h-0 opacity-0 overflow-hidden")}>
          <nav className="flex flex-col space-y-3 pt-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" size="sm">
                Masuk
              </Button>
              <Button variant="hero" size="sm">
                🎥 Demo Gratis
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;