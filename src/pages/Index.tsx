import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValuePropSection from "@/components/ValuePropSection";
import ProblemSolutionNew from "@/components/ProblemSolutionNew";
import CoreFeatures from "@/components/CoreFeatures";
import HowItWorks from "@/components/HowItWorks";
import PricingSnapshot from "@/components/PricingSnapshot";
import CaseStudyHighlight from "@/components/CaseStudyHighlight";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValuePropSection />
        <ProblemSolutionNew />
        <CoreFeatures />
        <HowItWorks />
        <PricingSnapshot />
        <CaseStudyHighlight />
        <TestimonialsSection />
        <LeadMagnetSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
