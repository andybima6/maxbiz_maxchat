import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo_maxbiz.svg";
import { Cpu, Boxes, Briefcase, HeartHandshake, Database, Megaphone, ChevronDown, ChevronUp, Stethoscope, Landmark, Wallet, Home, GraduationCap, ShoppingBag, Plane, Cog, Scale, Utensils, HandHeart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navItems = [
    {
      label: "Fitur",
      icon: ChevronDown,
      href: "/",
      subItems: [
        { label: "ERPNext", icon: Cpu, href: "/erpnext" },
        { label: "Account & Finance", icon: Boxes, href: "/accounting-finance" },
        { label: "Business Consulting", icon: Briefcase, href: "#consulting" },
        { label: "ERP Implementation", icon: HeartHandshake, href: "#implementation" },
        { label: "CRM", icon: Database, href: "#crm" },
        { label: "Digital Marketing", icon: Megaphone, href: "#marketing" },
      ],
    },
    {
      label: "Industry",
      icon: ChevronDown,
      subItems: [
        { label: "Kesehatan", icon: Stethoscope, href: "#kesehatan" },
        { label: "Government", icon: Landmark, href: "#government" },
        { label: "Finance", icon: Wallet, href: "#finance" },
        { label: "Properti", icon: Home, href: "#properti" },
        { label: "Pendidikan", icon: GraduationCap, href: "#pendidikan" },
        { label: "Retail", icon: ShoppingBag, href: "#retail" },
        { label: "Agency", icon: Briefcase, href: "#agency" },
        { label: "Travel", icon: Plane, href: "#travel" },
        { label: "Utilitas", icon: Cog, href: "#utilitas" },
        { label: "Legal & Konsultan", icon: Scale, href: "#legal" },
        { label: "Food & Beverage", icon: Utensils, href: "#fnb" },
        { label: "NGO", icon: HandHeart, href: "#ngo" },
      ],
    },
    { label: "About", href: "#tentang" },
    { label: "Benefit", href: "#benefit" },
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
              <div key={item.label} className="relative" onMouseEnter={() => item.subItems && setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
                <a href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center">
                  {item.label}
                  {item.icon && <item.icon className="h-4 w-4 ml-1" />}
                </a>

                {item.subItems && openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-1 z-50 w-fit md:w-max">
                    <div className="rounded-lg border bg-background shadow-lg p-2">
                      <div className="grid grid-flow-col grid-rows-6 auto-cols-fr gap-1">
                        {item.subItems.map((sub) => (
                          <a key={sub.label} href={sub.href} className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors">
                            <sub.icon className="h-4 w-4 text-primary" />
                            <span>{sub.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
        <div className={cn("md:hidden transition-all duration-300 ease-in-out", isMenuOpen ? "max-h-999 opacity-100 border-b border-border/40 pb-4" : "max-h-0 opacity-0 overflow-hidden")}>
          <nav className="flex flex-col space-y-3 pt-4">
            {navItems.map((item) => {
              const isOpen = openDropdown === item.label;

              return (
                <div key={item.label} className="flex flex-col">
                  {/* Parent link */}
                  <button
                    onClick={() => (item.subItems ? setOpenDropdown(isOpen ? null : item.label) : setIsMenuOpen(false))}
                    className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                    {item.subItems && (isOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />)}
                  </button>

                  {/* Dropdown subItems */}
                  {item.subItems && isOpen && (
                    <div className="ml-4 flex flex-col space-y-2">
                      {item.subItems.map((sub) => (
                        <a key={sub.label} href={sub.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary py-1" onClick={() => setIsMenuOpen(false)}>
                          <sub.icon className="h-4 w-4 text-primary" />
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* CTA Buttons */}
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
