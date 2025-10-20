"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export type FeatureItem = {
  id: string | number;
  title: string;
  description: string;
  image?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bullets?: string[];
  href?: string; // NEW
};

type Props = {
  features: FeatureItem[];
  stickyOffset?: number;
  defaultIndex?: number;
};

const FeatureScrollShowcase: React.FC<Props> = ({ features, stickyOffset = 96, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = React.useState(defaultIndex);
  const [isSectionInView, setIsSectionInView] = React.useState(false);

  // Observer untuk mendeteksi kapan section ini masuk viewport
  const { ref: sectionRef } = useInView({
    threshold: 0.1,
    triggerOnce: false,
    onChange: (inView) => setIsSectionInView(inView),
  });

  return (
    <section ref={sectionRef} className="relative w-full">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 px-4">
        {/* LEFT: Scrollable Text - mengambil 1/2 width */}
        <div className="flex-1 lg:w-1/2">
          {/* === MOBILE VERSION === */}
          <div className="block lg:hidden">
            {features.map((feature, i) => (
              <section key={feature.id} className="min-h-[75vh] snap-center flex flex-col justify-center mb-8">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: "easeOut" }} viewport={{ once: true, amount: 0.4 }} className="w-full">
                  <Card className="border-0 shadow-lg overflow-hidden">
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
                        <h3 className="mb-3 text-2xl font-bold text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>

                        {feature.bullets?.length ? (
                          <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-foreground/80">
                            {feature.bullets.slice(0, 5).map((b, idx) => (
                              <li key={idx}>{b}</li>
                            ))}
                          </ul>
                        ) : null}

                        {feature.href ? (
                          <a href={feature.href} className="mt-4 inline-flex items-center gap-1 text-primary hover:underline">
                            Pelajari lebih lanjut <ArrowRight className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>
            ))}
          </div>

          {/* === DESKTOP VERSION === */}
          <div className="hidden lg:block ">
            {features.map((feature, i) => (
              <ScrollTextItem key={feature.id} index={i} feature={feature} onActive={setActiveIndex} stickyOffset={stickyOffset} />
            ))}
          </div>
        </div>

        {/* RIGHT: Fixed Image - HANYA AKTIF KETIKA SECTION INI DI VIEWPORT */}
        <div className="hidden lg:block lg:w-1/2">
          {/* Fixed Container */}
          <div
            className="fixed flex items-center justify-center transition-opacity duration-300"
            style={{
              top: stickyOffset,
              right: "5%",
              width: "45%",
              height: `calc(100vh - ${stickyOffset}px)`,
              opacity: isSectionInView ? 1 : 0,
              pointerEvents: isSectionInView ? "auto" : "none",
            }}
          >
            <Card className="border-0 shadow-lg overflow-hidden w-full max-w-lg">
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] w-full">
                  <AnimatePresence mode="wait">
                    {features.map((f, idx) => {
                      const isActive = idx === activeIndex && isSectionInView;
                      if (!isActive) return null;

                      return (
                        <motion.div key={idx} className="absolute inset-0" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                          {f.image ? (
                            <img src={f.image} alt={f.title} className="h-full w-full object-cover" />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                              <f.icon className="h-24 w-24 text-primary" />
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

type ScrollTextItemProps = {
  index: number;
  feature: FeatureItem;
  onActive: (index: number) => void;
  stickyOffset: number;
};

const ScrollTextItem: React.FC<ScrollTextItemProps> = ({ index, feature, onActive, stickyOffset }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
    rootMargin: `-${stickyOffset / 2}px 0px -${stickyOffset / 2}px 0px`,
  });

  React.useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <section ref={ref as React.LegacyRef<HTMLDivElement>} className="min-h-[100vh] flex items-center py-8">
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: inView ? 0 : 30, opacity: inView ? 1 : 0.3 }} transition={{ duration: 0.5, ease: "easeOut" }} className="w-full max-w-2xl">
        <Card className="relative border border-border/40 border-l-4 border-l-primary rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group bg-gradient-to-br from-background via-background to-muted/10">
          <CardContent className="p-0">
            <div className="p-8 flex flex-col gap-4">
              {/* Icon */}
              {feature.icon && (
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{feature.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground">{feature.description}</p>

              {/* Bullets */}
              {feature.bullets?.length ? (
                <ul className="mt-2 grid gap-2 pl-5 list-disc text-foreground/80">
                  {feature.bullets.slice(0, 5).map((b, i) => (
                    <li key={i} className="text-base">
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* CTA link */}
              {feature.href ? (
                <a href={feature.href} className="mt-3 inline-flex items-center gap-1 text-primary hover:underline">
                  Pelajari lebih lanjut <ArrowRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};