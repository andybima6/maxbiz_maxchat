import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedElement from "./AnimatedElement";

const FAQSection = () => {
  const faqs = [
    {
      question: "Apakah MaxBiz bisa di-deploy on-premise atau hanya cloud?",
      answer:
        "MaxBiz tersedia dalam 3 opsi deployment: Cloud (SaaS), On-premise, dan Hybrid. Untuk UMKM kami rekomendasikan cloud karena lebih cost-effective. Untuk enterprise dengan compliance ketat, kami menyediakan on-premise installation.",
    },
    {
      question: "Berapa lama estimasi migrasi data dari sistem lama?",
      answer:
        "Estimasi migrasi data: 1-2 minggu untuk UMKM (< 20 user), 2-4 minggu untuk business (20-100 user), dan 4-8 minggu untuk enterprise (100+ user). Kami menyediakan template import dan assistance team untuk memastikan data accuracy 99.9%.",
    },
    {
      question: "Apa saja yang termasuk dalam SLA & support?",
      answer:
        "SLA kami: 99.9% uptime guarantee, response time support 2 jam (business hours), dan 24 jam (after hours). Support mencakup: Help desk, user training, sistem maintenance, backup harian otomatis, dan quarterly business review untuk optimasi.",
    },
    {
      question: "Bagaimana policy trial dan cancelation?",
      answer:
        "Kami menyediakan demo selama 2 minggu untuk mencoba seluruh fitur. Periode trial sudah termasuk dalam masa berlangganan, sehingga tidak ada biaya tambahan. Pembatalan dapat dilakukan kapan saja sesuai ketentuan berlangganan, dan data Anda dapat diekspor dalam format Excel/CSV sebelum akun ditutup.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <AnimatedElement animation="fade-in-up" delay={300}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Pertanyaan yang Sering Diajukan</h2>
            </AnimatedElement>
            <AnimatedElement animation="fade-in-up" delay={400}>
              <p className="text-lg text-muted-foreground">Temukan jawaban untuk pertanyaan umum tentang MaxBiz</p>
            </AnimatedElement>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedElement key={index} animation="fade-in-up" delay={index * 200}>
                <AccordionItem key={index} value={`item-${index}`} className="feature-card rounded-xl px-6 border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-semibold text-foreground pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              </AnimatedElement>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <AnimatedElement animation="fade-in-up" delay={500}>
              <p className="text-muted-foreground mb-6">Masih ada pertanyaan lain?</p>
            </AnimatedElement>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedElement animation="fade-in-up" delay={600}>
                <a href="https://wa.me/6281234567890" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors">
                  💬 Chat WhatsApp
                </a>
              </AnimatedElement>
              <AnimatedElement animation="fade-in-up" delay={700}>
                <a href="mailto:hello@MaxBiz.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
                  📧 Email Support
                </a>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
