import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MaskedDivProps {
  children: ReactNode;
  maskType: "type-1" | "type-2" | "type-3" | "type-4";
  size?: number;
  className?: string;
}

const maskStyles = {
  "type-1": {
    clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)",
    aspectRatio: "4/5",
  },
  "type-2": {
    clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
    aspectRatio: "4/5",
  },
  "type-3": {
    clipPath: "polygon(0% 15%, 100% 0%, 100% 85%, 0% 100%)",
    aspectRatio: "16/9",
  },
  "type-4": {
    clipPath: "polygon(0% 0%, 85% 15%, 100% 100%, 15% 85%)",
    aspectRatio: "1/1",
  },
};

export default function MaskedDiv({
  children,
  maskType,
  size = 1,
  className,
}: MaskedDivProps) {
  const maskStyle = maskStyles[maskType];
  
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-lg",
        className
      )}
      style={{
        clipPath: maskStyle.clipPath,
        aspectRatio: maskStyle.aspectRatio,
        width: size < 1 ? `${size * 100}%` : "100%",
        maxWidth: size < 1 ? `${size * 600}px` : "600px",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}