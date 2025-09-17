import { ArrowRight, Clock, DollarSign, Zap } from "lucide-react";

const ProblemSolutionSection = () => {
  const transformations = [
    {
      icon: <Zap className="w-8 h-8" />,
      from: "Manual",
      to: "Otomatis",
      description: "Proses bisnis yang rumit menjadi otomatis dan efisien",
      color: "text-primary"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      from: "Lambat",
      to: "Real-time",
      description: "Data dan laporan tersedia langsung tanpa menunggu",
      color: "text-secondary"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      from: "Mahal",
      to: "Efisien",
      description: "Hemat biaya operasional hingga 30% dengan digitalisasi",
      color: "text-accent"
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Transformasi Digital untuk Bisnis Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ubah cara kerja tradisional menjadi sistem yang modern, efisien, dan terpadu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <div key={index} className="feature-card p-8 rounded-2xl text-center group">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted-darker mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-lg font-medium text-muted-foreground line-through">
                    {item.from}
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className={`text-lg font-bold ${item.color}`}>
                    {item.to}
                  </span>
                </div>
                
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">300%</div>
            <div className="text-sm text-muted-foreground">Peningkatan Efisiensi</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">30%</div>
            <div className="text-sm text-muted-foreground">Penghematan Biaya</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">24/7</div>
            <div className="text-sm text-muted-foreground">Akses Real-time</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">99%</div>
            <div className="text-sm text-muted-foreground">Uptime Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;