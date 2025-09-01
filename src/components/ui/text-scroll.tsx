import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextScrollProps {
  text: string;
  className?: string;
  default_velocity?: number;
}

export function TextScroll({
  text,
  className,
  default_velocity = 5,
}: TextScrollProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`${default_velocity}%`, `-${default_velocity}%`]
  );

  return (
    <div ref={targetRef} className="relative overflow-hidden">
      <motion.div
        style={{ x }}
        className={cn(
          "whitespace-nowrap will-change-transform",
          className
        )}
      >
        {text.repeat(20)}
      </motion.div>
    </div>
  );
}