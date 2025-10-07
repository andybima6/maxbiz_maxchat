import { Card } from "@/components/ui/card";
import { BookOpen, ClipboardCheck, LineChart } from "lucide-react";
import courseBuilderImg from "@/assets/module/Lms/course-builder.jpg";
import quizCertificationImg from "@/assets/module/Lms/quiz-certification.jpg";
import progressAnalyticsImg from "@/assets/module/Lms/progress-analytics.jpg";


const features = [
  {
    icon: BookOpen,
    title: "Course & Curriculum Builder",
    description: "Buat dan kelola materi pembelajaran dengan mudah. Susun kurikulum yang terstruktur dan sesuai dengan kebutuhan organisasi Anda.",
    image: courseBuilderImg,
    highlights: [
      "Drag & drop interface",
      "Multi-format content",
      "Template library",
      "Version control"
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Quiz/Assessment & Sertifikasi",
    description: "Evaluasi pemahaman karyawan dengan sistem assessment yang komprehensif dan berikan sertifikasi otomatis untuk meningkatkan motivasi.",
    image: quizCertificationImg,
    highlights: [
      "Multiple question types",
      "Auto-grading system",
      "Digital certificates",
      "Compliance tracking"
    ]
  },
  {
    icon: LineChart,
    title: "Progress Tracking & Analytics",
    description: "Monitor perkembangan pembelajaran secara real-time dengan dashboard analytics yang powerful dan insight yang actionable.",
    image: progressAnalyticsImg,
    highlights: [
      "Real-time dashboards",
      "Custom reports",
      "Performance metrics",
      "Predictive analytics"
    ]
  }
];

const FeatureCard = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gradient-hero text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            Fitur Unggulan
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Solusi Lengkap untuk Pembelajaran
          </h2>
          <p className="text-lg text-muted-foreground">
            Platform all-in-one yang dirancang untuk meningkatkan efektivitas pelatihan dan kepatuhan karyawan
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-hero rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <Card className="p-8 lg:p-10 border-2 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <div className="bg-gradient-hero w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {feature.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                        <span className="text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;