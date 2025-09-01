import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
