"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";

export type FeatureItem = {
  id: string | number;
  title: string;
  description: string;
  image?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type Props = {
  features: FeatureItem[];
  stickyOffset?: number; // jarak dari atas untuk kompensasi navbar
  defaultIndex?: number; // index awal aktif
};

/**
 * Behaviour:
 * - Kiri: teks scrollable penuh, snap tiap section
 * - Kanan: gambar sticky di tengah viewport
 * - Gambar berubah mengikuti teks aktif
 */
const FeatureScrollShowcase: React.FC<Props> = ({ features, stickyOffset = 96, defaultIndex = 0 }) => {
  const [textActiveIndex, setTextActiveIndex] = React.useState(defaultIndex);
  const [imageActiveIndex, setImageActiveIndex] = React.useState(defaultIndex);
  const scrollRootRef = React.useRef<HTMLDivElement | null>(null);

  // Delay kecil supaya transisi gambar halus
  React.useEffect(() => {
    const t = setTimeout(() => setImageActiveIndex(textActiveIndex), 150);
    return () => clearTimeout(t);
  }, [textActiveIndex]);

  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 px-4">
        {/* LEFT: Scrollable Text */}
        <div ref={scrollRootRef} className="flex-1 h-[100vh] overflow-y-auto snap-y snap-proximity [scroll-snap-stop:always] pr-2 scrollbar-hide">
          {/* === MOBILE VERSION === */}
          <div className="block lg:hidden">
            {features.map((feature, i) => (
              <section
                key={feature.id}
                className="min-h-[50vh] snap-center flex flex-col justify-center" // ⬅ ubah dari 100vh ke 75vh
              >
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: "easeOut" }} viewport={{ once: true, amount: 0.4 }} className="w-full">
                  <Card className="border-0 shadow-lg overflow-hidden ">
                    <CardContent className="p-0">
                      {/* IMAGE */}
                      {feature.image ? (
                        <img src={feature.image} alt={feature.title} className="w-full aspect-[16/10] object-cover" />
                      ) : (
                        <div className="w-full aspect-[16/10] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                          <feature.icon className="h-16 w-16 text-primary" />
                        </div>
                      )}
                      {/* TEXT */}
                      <div className="p-6">
                        <h3 className="mb-4 text-2xl font-bold text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>
            ))}
          </div>

          {/* === DESKTOP VERSION (scroll text only) === */}
          <div className="hidden lg:block">
            {features.map((feature, i) => (
              <ScrollTextItem key={feature.id} index={i} feature={feature} onActive={setTextActiveIndex} root={scrollRootRef} stickyOffset={stickyOffset} />
            ))}
          </div>
        </div>

        {/* RIGHT: Sticky Image */}
        <div className="hidden lg:block flex-1 relative">
          <div className="sticky flex items-center justify-center" style={{ top: stickyOffset, height: `calc(100vh - ${stickyOffset}px)` }}>
            <Card className="border-0 shadow-sm overflow-hidden w-full max-w-lg">
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] w-full">
                  <AnimatePresence mode="wait">
                    {features.map((f, idx) => {
                      const isActive = idx === imageActiveIndex;
                      return (
                        <motion.div
                          key={idx}
                          className="absolute inset-0"
                          initial={{ opacity: 0, scale: 1.02 }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1 : 1.02,
                          }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                        >
                          {f.image ? (
                            <img src={f.image} alt={f.title} className="h-full w-full object-cover" />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                              <f.icon className="h-16 w-16 text-primary" />
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureScrollShowcase;

/* ====================== ITEM TEKS ======================= */

type ScrollTextItemProps = {
  index: number;
  feature: FeatureItem;
  onActive: (index: number) => void;
  stickyOffset: number;
  root: React.RefObject<HTMLElement | null>;
};

const ScrollTextItem: React.FC<ScrollTextItemProps> = ({ index, feature, onActive, root, stickyOffset }) => {
  const { ref, inView } = useInView({
    threshold: 0.55,
    triggerOnce: false,
    root: root.current ?? undefined,
    rootMargin: `-${stickyOffset / 2}px 0px -${stickyOffset / 2}px 0px`,
  });

  React.useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <section ref={ref as React.LegacyRef<HTMLDivElement>} className="min-h-[100vh] snap-center flex items-center">
      <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: inView ? 0 : 24, opacity: inView ? 1 : 0.35 }} transition={{ duration: 0.45, ease: "easeOut" }} className="w-full" style={{ willChange: "transform, opacity" }}>
        <Card className="relative border border-border/40 border-l-4 border-l-primary rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group bg-gradient-to-br from-background via-background to-muted/20">
          <CardContent className="p-0">
            <div className="p-6 lg:p-8 flex flex-col gap-4">
              {/* Icon */}
              {feature.icon && (
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};
