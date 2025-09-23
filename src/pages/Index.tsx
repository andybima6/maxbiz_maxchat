import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import ProductsSection from "@/components/ProductsSection";
import ContactUs from "@/components/ContactUs";
import AboutMaxBiz from "@/components/about/AboutMaxBiz";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />

        <FeaturesSection />
        <ProductsSection />
        <AboutMaxBiz />

        <TestimonialsSection />
        <LeadMagnetSection />
        <FAQSection />
        <CTASection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
