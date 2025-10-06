import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar, Star, DollarSign, Users, FileText, UserCheck, Shield, User, Bell, Download, CheckCircle, Calculator } from "lucide-react";
import heroImage from "@/assets/module/hr/hero-hr.jpg";
import attendanceIcon from "@/assets/module/hr/attendance-icon.jpg";
import leaveIcon from "@/assets/module/hr/leave-icon.jpg";
import appraisalIcon from "@/assets/module/hr/appraisal-icon.jpg";
import payrollIcon from "@/assets/module/hr/payroll-icon.jpg";
import recruitmentIcon from "@/assets/module/hr/recruitment-icon.jpg";
import Header from "@/components/Header";
import FeatureCard from "./FeatureCard";
import { Card, CardContent } from "@/components/ui/card";
import StatCard from "./StatCard";
import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";
import HeroSection from "../HeroSection";

const Index = () => {
  const features = [
    {
      title: "Attendance Management",
      description: "Sistem absensi otomatis dengan tracking real-time, geofencing, dan integrasi biometric",
      icon: Clock,
      image: attendanceIcon,
      subFeatures: ["Clock in/out otomatis", "Geofencing & GPS tracking", "Integrasi fingerprint", "Laporan kehadiran realtime"],
    },
    {
      title: "Leave Management",
      description: "Kelola cuti karyawan dengan mudah, approval workflow otomatis, dan saldo cuti realtime",
      icon: Calendar,
      image: leaveIcon,
      subFeatures: ["Request cuti online", "Approval workflow", "Saldo cuti otomatis", "Kalender cuti tim"],
    },
    {
      title: "Performance Appraisal",
      description: "Evaluasi kinerja karyawan secara berkala dengan sistem penilaian yang objektif",
      icon: Star,
      image: appraisalIcon,
      subFeatures: ["KPI tracking", "360-degree feedback", "Goal setting & review", "Performance analytics"],
    },
    {
      title: "Payroll Processing",
      description: "Proses penggajian otomatis dengan perhitungan pajak, BPJS, dan komponen gaji lainnya",
      icon: DollarSign,
      image: payrollIcon,
      subFeatures: ["Perhitungan gaji otomatis", "Integrasi PPh & BPJS", "Slip gaji digital", "Laporan payroll lengkap"],
    },
    {
      title: "Recruitment Workflow",
      description: "Kelola proses rekrutmen dari job posting hingga onboarding karyawan baru",
      icon: Users,
      image: recruitmentIcon,
      subFeatures: ["Job posting otomatis", "Applicant tracking", "Interview scheduling", "Onboarding checklist"],
    },
    {
      title: "Employee Self-Service",
      description: "Portal karyawan untuk akses informasi pribadi, dokumen, dan transaksi HR",
      icon: UserCheck,
      subFeatures: ["Profil karyawan", "Dokumen digital", "Request & approval", "Notifikasi realtime"],
    },
    {
      title: "Document Management",
      description: "Penyimpanan dokumen digital yang aman dengan akses berbasis role",
      icon: FileText,
      subFeatures: ["Cloud storage aman", "E-signature", "Version control", "Access management"],
    },
    {
      title: "Compliance & Reporting",
      description: "Pastikan kepatuhan terhadap peraturan ketenagakerjaan dengan laporan lengkap",
      icon: Shield,
      subFeatures: ["Laporan BPJS otomatis", "Tax compliance", "Audit trail", "Custom reports"],
    },
  ];
  const portalFeatures = [
    {
      icon: User,
      title: "Profil Pribadi",
      description: "Kelola informasi pribadi dan data keluarga",
    },
    {
      icon: FileText,
      title: "Dokumen Digital",
      description: "Akses kontrak, sertifikat, dan dokumen penting",
    },
    {
      icon: Clock,
      title: "Riwayat Absensi",
      description: "Lihat histori kehadiran dan jam kerja",
    },
    {
      icon: Calendar,
      title: "Pengajuan Cuti",
      description: "Submit dan tracking status cuti",
    },
    {
      icon: DollarSign,
      title: "Slip Gaji",
      description: "Download slip gaji dan riwayat pembayaran",
    },
    {
      icon: Bell,
      title: "Notifikasi",
      description: "Update terkini tentang status request",
    },
  ];
  const complianceItems = [
    {
      title: "UU Ketenagakerjaan",
      description: "Sesuai dengan UU No. 13 Tahun 2003 dan perubahannya",
    },
    {
      title: "BPJS Ketenagakerjaan",
      description: "Integrasi otomatis untuk pelaporan dan pembayaran BPJS TK",
    },
    {
      title: "BPJS Kesehatan",
      description: "Manajemen kepesertaan dan pelaporan BPJS Kesehatan",
    },
    {
      title: "Perpajakan PPh 21",
      description: "Perhitungan dan pelaporan pajak penghasilan karyawan",
    },
    {
      title: "THR & Bonus",
      description: "Kalkulasi THR sesuai regulasi pemerintah",
    },
    {
      title: "Audit Trail",
      description: "Jejak audit lengkap untuk setiap transaksi",
    },
  ];
  const complianceStats = [
    { number: "99.9%", label: "Uptime" },
    { number: "100%", label: "Compliance" },
    { number: "24/7", label: "Support" },
    { number: "500+", label: "Perusahaan" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <HeroSection
        badge="HR & Payroll Management System"
        title="Manajemen SDM & penggajian otomatis untuk meningkatkan efisiensi bisnis Anda"
        description="Sistem terintegrasi untuk absensi, payroll, kepatuhan regulasi, serta pengelolaan karyawan yang lebih cepat, akurat, dan efisien."
        primaryAction={{
          label: "Mulai Sekarang",
          onClick: () => console.log("Start clicked"),
          icon: <Calculator className="mr-2 h-5 w-5" />,
        }}
        secondaryAction={{
          label: "Lihat Demo",
          onClick: () => console.log("Demo clicked"),
          icon: <FileText className="mr-2 h-5 w-5" />,
        }}
        heroImage={heroImage}
        stats={[
          {
            value: "98%",
            label: "Akurasi Order",
            subLabel: "Otomatis Terverifikasi",
            position: "bottom-left",
          },
          {
            value: "50%",
            label: "Lebih Cepat",
            subLabel: "Proses Pembelian",
            position: "top-right",
            delay: "0.3s",
          },
        ]}
      />
      <FeatureCard title="Fitur Lengkap untuk HR Modern" subtitle="Solusi komprehensif untuk mengelola seluruh aspek sumber daya manusia dalam satu platform" features={features} />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Employee <span className="text-gradient">Self-Service Portal</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">Berikan kemudahan kepada karyawan untuk mengakses informasi dan melakukan transaksi HR secara mandiri, kapan saja dan di mana saja.</p>

              <div className="space-y-4 mb-8">
                {["Akses 24/7 dari desktop atau mobile", "Interface yang user-friendly dan intuitif", "Keamanan data dengan enkripsi tingkat enterprise", "Real-time notification untuk setiap update"].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="gradient-primary text-white border-0">
                <Download className="mr-2 h-5 w-5" />
                Download Portal Guide
              </Button>
            </div>

            {/* Right Content - Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {portalFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold mb-2 text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <StatCard title="Compliance & Reporting" subtitle="Pastikan kepatuhan perusahaan terhadap seluruh peraturan ketenagakerjaan di Indonesia" items={complianceItems} stats={complianceStats} />
      <BannerSection
        variant="simple"
        title="Siap Transformasi HR Anda?"
        description="Bergabunglah dengan ratusan perusahaan yang telah mengoptimalkan manajemen SDM mereka dengan sistem kami"
        primaryAction={{ label: "Mulai Free Trial 30 Hari" }}
        secondaryAction={{ label: "Jadwalkan Demo" }}
      />
      <Footer />
    </div>
  );
};

export default Index;
