import { useLocation, Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // get data from form submission
  const { name, isNewsletter, newsletterStatus, message } =
    location.state || {};

  // redirect to home if submission data is not available
  const isDataAvailable = location.state !== null;
  useEffect(() => {
    if (!isDataAvailable) {
      navigate("/", { replace: true });
    }

    const timestamp = location.state?.timestamp;
    const isExpired = timestamp && Date.now() - timestamp > 5 * 60 * 1000; // 5 minutes

    if (isExpired) {
      navigate("/", { replace: true });
    }
  }, [isDataAvailable, location.state, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Pesan Utama: Sukses Submit Form */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Terima Kasih{name ? `, ${name}` : ""}!
          </h1>
          <p className="text-lg text-gray-600">
            Permintaan konsultasi Anda telah berhasil kami terima.
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 space-y-6">
            {/* Info Next Step untuk Demo */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-2">
                Langkah Selanjutnya:
              </h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Tim MaxBiz akan menghubungi Anda melalui{" "}
                <strong>WhatsApp/Telepon</strong> dalam waktu 1x24 jam kerja
                untuk konfirmasi jadwal demo. Pastikan nomor Anda aktif.
              </p>
            </div>

            {/* Info Conditional: Newsletter Double Opt-In */}
            {/* Hanya muncul jika user mencentang checkbox newsletter */}
            {isNewsletter && newsletterStatus === "success" ? (
              <div className="border-t pt-6 mt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Cek Email Anda untuk Konfirmasi Langganan E-book
                    </h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      Kami menggunakan sistem keamanan ganda. Tautan konfirmasi
                      telah dikirim ke email Anda.
                      <span className="font-medium text-gray-900">
                        {" "}
                        Wajib klik tombol konfirmasi di email{" "}
                      </span>
                      agar E-book dapat terkirim otomatis oleh sistem.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-destructive text-center mb-4">{message}</div>
            )}
          </CardContent>
        </Card>

        <div className="text-center">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
