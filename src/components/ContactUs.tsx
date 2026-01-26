import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormCheckbox,
} from "@/components/ui/form";
import { Mail, Phone, MapPin, Send, Download, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import businessConsultation from "@/assets/business-consultation.jpg";
import customerSupport from "@/assets/customer-support.jpg";
import digitalPattern from "@/assets/digital-pattern.jpg";
import AnimatedElement from "./AnimatedElement";
import { useState } from "react";
import { industries_options } from "@/constants/industries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama harus minimal 2 karakter" }),
  perusahaan: z
    .string()
    .min(2, { message: "Perusahaan harus minimal 2 karakter" }),
  industri: z.string().min(2, { message: "Industri harus minimal 2 karakter" }),
  email: z
    .string()
    .email({ message: "Format email tidak valid" })
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .min(10, { message: "Nomor telepon harus minimal 10 digit" }),
  notes: z
    .string()
    .min(10, { message: "Pesan harus minimal 10 karakter" })
    .optional()
    .or(z.literal("")),
  subscribeNewsletter: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const industry_options = industries_options;
  const API_URL = import.meta.env.VITE_URL_LOCAL;
  const LISTMONK_URL = import.meta.env.VITE_LISTMONK_URL;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      perusahaan: "",
      industri: "",
      email: "",
      phone: "",
      notes: "",
      subscribeNewsletter: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // deliver ke gateway ERP
      const erpResponse = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: data.name,
          company_name: data.perusahaan,
          industry: data.industri,
          email_id: data.email,
          whatsapp_no: data.phone,
          custom_note: data.notes,
        }),
      });

      if (!erpResponse.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await erpResponse.json();
      console.log("ERP Response:", result);

      if (result && result.created_demo) {
        toast({
          title: "Pesan Terkirim!",
          description: "Tim kami akan segera menghubungi Anda.",
        });
        form.reset();
      }
    } catch (error) {
      toast({
        title: "Terjadi kesalahan",
        description: "Silakan coba lagi nanti.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "support@maxbiz.id",
      href: "mailto:support@maxbiz.id",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 812 3456 7890",
      href: "tel:+6281234567890",
    },
    {
      icon: MapPin,
      label: "Alamat",
      value: "Gedung MaxBiz, Jl. Kemajuan Bisnis No. 10, Jakarta Selatan",
      href: "#",
    },
  ];

  return (
    <section
      className="relative py-20 px-4 bg-gradient-to-br from-background to-muted overflow-hidden"
      id="kontak"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={digitalPattern}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Hero Image */}

        <div className="text-center mb-16">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-3xl transform rotate-3"></div>

            <AnimatedElement animation="bounce-in" delay={200}>
              <img
                src={businessConsultation}
                alt="Tim MaxBiz sedang berkonsultasi dengan klien"
                className="relative w-full max-w-4xl mx-auto h-64 md:h-80 object-cover rounded-3xl shadow-elegant"
              />
            </AnimatedElement>
          </div>
          <AnimatedElement animation="fade-in-up" delay={400}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hubungi Kami
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-down" delay={500}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ingin tahu lebih banyak tentang solusi kami? Tim MaxBiz siap
              membantu Anda setiap langkah dalam perjalanan digitalisasi bisnis
              Anda.
            </p>
          </AnimatedElement>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="relative">
              {/* Support Representative Image */}
              <div className="mb-8">
                <AnimatedElement animation="fade-in-up" delay={100}>
                  <img
                    src={customerSupport}
                    alt="Customer support representative"
                    className="w-full h-80 object-cover rounded-2xl shadow-elegant"
                  />
                </AnimatedElement>
                <AnimatedElement animation="fade-in-up" delay={300}>
                  <div className="absolute -bottom-8 -right-4 bg-gradient-hero text-primary-foreground p-4 rounded-xl shadow-glow z-10 ">
                    <div className="text-center">
                      <div className="text-lg font-bold">24/7</div>
                      <div className="text-sm">Support</div>
                    </div>
                  </div>
                </AnimatedElement>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-2 bg-white hover:shadow-elegant transition-all duration-300 border-0 shadow-md rounded-2xl">
                {contactInfo.map((item, index) => (
                  <AnimatedElement
                    key={index}
                    animation="fade-in-up"
                    delay={index * 200}
                  >
                    <div>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <item.icon className="w-6 h-6 text-primary-foreground" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1">
                              {item.label}
                            </h4>
                            {item.href === "#" ? (
                              <p className="text-muted-foreground leading-relaxed">
                                {item.value}
                              </p>
                            ) : (
                              <a
                                href={item.href}
                                className="text-primary hover:text-primary-dark transition-colors duration-200"
                              >
                                {item.value}
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
            {/* <h3 className="text-2xl font-semibold text-foreground mb-6">Daftarkan Berlangganan</h3>
            <div className="space-y-4 bg-white p-4">
              <h4 className="font-semibold text-foreground">Newsletter & E-book</h4>
              <p className="text-sm text-foreground max-w-sm">Dapatkan tips bisnis digital dan e-book "10 Hal sebelum Pilih ERP" gratis.</p>
              <div className="space-y-3">
                <Input type="email" placeholder="Email Anda" className="bg-slate-400 border-background/20 text-foreground placeholder:text-background/50" />
                <Button size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Dapatkan E-book
                </Button>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 shadow-elegant border-0 shadow-2xl">
            <AnimatedElement animation="fade-in-up" delay={300}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Formulir Demo
                </h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">
                            Nama
                            <span className="text-destructive ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Masukkan nama lengkap Anda"
                              {...field}
                              className="h-12 focus:border-primary transition-colors duration-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="perusahaan"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">
                            Perusahaan
                            <span className="text-destructive ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="PT ...."
                              {...field}
                              className="h-12 focus:border-primary transition-colors duration-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="industri"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">
                            Industri
                            <span className="text-destructive ml-1">*</span>
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-12 focus:border-primary transition-colors duration-200">
                                <SelectValue placeholder="Pilih industri Anda" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {industry_options.map((industry) => (
                                <SelectItem
                                  key={industry.value}
                                  value={industry.value}
                                >
                                  {industry.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">
                            Email
                          </FormLabel>
                          <span className="text-destructive ml-1">*</span>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="nama@email.com"
                              {...field}
                              className="h-12 focus:border-primary transition-colors duration-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">
                            Nomor Telepon (whatsapp active)
                            <span className="text-destructive ml-1">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+62 812 3456 7890"
                              {...field}
                              className="h-12 focus:border-primary transition-colors duration-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">
                            Pesan Anda
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ceritakan kebutuhan bisnis Anda..."
                              className="min-h-[120px] focus:border-primary transition-colors duration-200"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subscribeNewsletter"
                      render={({ field }) => (
                        <FormItem className="flex gap-3 items-center">
                          <FormControl>
                            <FormCheckbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-foreground font-medium !mt-0 cursor-pointer leading-relaxed">
                            Dapatkan tips bisnis digital dan e-book "10 Hal
                            sebelum Pilih ERP" gratis.
                          </FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full h-12  hover:bg-gradient-to-r hover:from-primary-dark hover:to-primary transition-all duration-300 shadow-glow hover:shadow-elegant font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Mohon Tunggu...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Konsultasikan Kebutuhan Anda
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </AnimatedElement>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
