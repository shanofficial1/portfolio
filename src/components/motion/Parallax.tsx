import { motion, useScroll, useTransform } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps extends PropsWithChildren {
  className?: string;
  yFrom?: number; // starting translateY
  yTo?: number;   // ending translateY
}

export function Parallax({ children, className, yFrom = 40, yTo = -40 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [yFrom, yTo]);

  return (
    <motion.div ref={ref} style={{ y }} className={cn(className)}>
      {children}
    </motion.div>
  );
}

export default Parallax;
