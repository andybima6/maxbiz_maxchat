// components/ScrollMask.tsx
import { motion, useAnimation, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useMemo, useRef } from "react";
import clsx from "clsx";

type MaskShape = "circle" | "ellipse" | "inset" | "diamond" | "hexagon" | "triangle" | "star";
type Offset =
  | `${"start" | "center" | "end"} ${number}%`
  | `${"start" | "center" | "end"} ${"0%" | "10%" | "20%" | "25%" | "33%" | "40%" | "50%" | "60%" | "66%" | "75%" | "80%" | "90%" | "100%"}`;

interface ScrollMaskProps {
  children: React.ReactNode;
  shape?: MaskShape;
  steps?: number;         // jumlah langkah saat DI DALAM viewport (default 4)
  startSizePct?: number;  // 100 = full (unmask)
  endSizePct?: number;    // 40 = mask akhir
  insetRadius?: string;   // utk inset (rounded), default "24px"
  /** Mapping progress: 0 saat elemen BARU akan masuk (start=100%), 1 saat elemen akan KELUAR (end=0%) */
  offset?: [Offset, Offset]; // default ["start 100%","end 0%"]
  stepDuration?: number;  // detik (default 0.35)
  ease?: "linear" | "easeIn" | "easeOut" | "easeInOut";
  className?: string;
  ariaLabel?: string;
}

function clamp01(v: number) { return Math.max(0, Math.min(1, v)); }
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

function diamondPoints(s: number) {
  const r = s * 50, c = 50;
  return [`${c}% ${c - r}%`, `${c + r}% ${c}%`, `${c}% ${c + r}%`, `${c - r}% ${c}%`].join(", ");
}
function hexagonPoints(s: number) {
  const r = s * 50, c = 50, dx = (Math.sqrt(3)/2)*r, dy = 0.5*r;
  return [
    `${c - dx}% ${c - dy}%`,
    `${c + dx}% ${c - dy}%`,
    `${c + r}% ${c}%`,
    `${c + dx}% ${c + dy}%`,
    `${c - dx}% ${c + dy}%`,
    `${c - r}% ${c}%`,
  ].join(", ");
}
function trianglePoints(s: number) {
  const r = s * 50, c=50, topY=c - r, baseY=c + r*0.866, leftX=c - r*0.866, rightX=c + r*0.866;
  return [`${c}% ${topY}%`, `${rightX}% ${baseY}%`, `${leftX}% ${baseY}%`].join(", ");
}
function starPoints(s: number) {
  const rO=s*50, rI=rO*0.5, c=50; const pts:string[]=[];
  for (let i=0;i<8;i++){
    const a=(i*45*Math.PI)/180, r=i%2===0?rO:rI;
    pts.push(`${c + r*Math.cos(a)}% ${c + r*Math.sin(a)}%`);
  }
  return pts.join(", ");
}

function buildClipPath(
  shape: MaskShape,
  t: number,            // 0..1 (0=unmask, 1=mask akhir)
  startSizePct: number, // biasanya 100
  endSizePct: number,   // mis. 40
  insetRadius: string
) {
  const size = lerp(startSizePct, endSizePct, clamp01(t));
  switch (shape) {
    case "circle":  return `circle(${size}% at 50% 50%)`;
    case "ellipse": return `ellipse(${size*1.1}% ${size*0.8}% at 50% 50%)`;
    case "inset":   { const m = Math.max(0, 50 - size); return `inset(${m}% ${m}% ${m}% ${m}% round ${insetRadius})`; }
    case "diamond": return `polygon(${diamondPoints(size/100)})`;
    case "hexagon": return `polygon(${hexagonPoints(size/100)})`;
    case "triangle":return `polygon(${trianglePoints(size/100)})`;
    case "star":    return `polygon(${starPoints(size/100)})`;
    default:        return `circle(${size}% at 50% 50%)`;
  }
}

export const ScrollMask: React.FC<ScrollMaskProps> = ({
  children,
  shape = "circle",
  steps = 4,
  startSizePct = 100,
  endSizePct = 40,
  insetRadius = "24px",
  // 👉 progress 0 saat elemen baru mau masuk (start 100% = bawah viewport),
  //    progress 1 saat elemen selesai lewat viewport (end 0% = atas viewport).
  offset = ["start 100%", "end 0%"],
  stepDuration = 0.35,
  ease = "easeInOut",
  className,
  ariaLabel,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const controls = useAnimation();

  // stage_0 = FULL (di luar viewport), stage_1..N = bertahap MASK (di dalam viewport)
  const variants = useMemo(() => {
    const total = Math.max(1, Math.floor(steps));
    const vs: Record<string, any> = {};
    vs["stage_0"] = {
      clipPath: buildClipPath(shape, 0, startSizePct, endSizePct, insetRadius),
      transition: { duration: stepDuration, ease },
    };
    for (let i = 1; i <= total; i++) {
      const t = i / total; // 0..1
      vs[`stage_${i}`] = {
        clipPath: buildClipPath(shape, t, startSizePct, endSizePct, insetRadius),
        transition: { duration: stepDuration, ease },
      };
    }
    return vs;
  }, [shape, steps, startSizePct, endSizePct, insetRadius, stepDuration, ease]);

  // State saat ini untuk mencegah spam animasi
  let currentStage = 0;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // v < 0  → belum masuk viewport (browser bisa clamp ke 0)
    // v == 0 → tepi bawah elemen tepat di tepi bawah viewport (belum tampak) → FULL
    // 0 < v < 1 → elemen ada di viewport → MASK BERJALAN (step-by-step)
    // v >= 1 → elemen sudah lewat viewport → FULL lagi
    let nextStage = 0;

    if (v <= 0 || v >= 1) {
      nextStage = 0; // FULL di luar viewport
    } else {
      const total = Math.max(1, Math.floor(steps));
      const idx = Math.max(1, Math.min(total, Math.ceil(v * total)));
      nextStage = idx;
    }

    if (nextStage !== currentStage) {
      currentStage = nextStage;
      controls.start(`stage_${nextStage}`);
    }
  });

  return (
    <div ref={ref} className={clsx("relative", className)} aria-label={ariaLabel}>
      <motion.div
        className="relative overflow-hidden rounded-2xl"
        variants={variants}
        initial="stage_0"   // mulai FULL
        animate={controls}  // berubah saat masuk viewport
      >
        {children}
      </motion.div>
    </div>
  );
};
