import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkiperCardProps {
  title: string;
  description: string;
  bgClass?: string;
  image: {
    step1light1: string;
    step1light2: string;
    step2light1: string;
    step2light2: string;
    step3light: string;
    step4light: string;
    alt: string;
  };
  step1img1Class?: string;
  step1img2Class?: string;
  step2img1Class?: string;
  step2img2Class?: string;
  step3imgClass?: string;
  step4imgClass?: string;
}

export function SkiperCard({
  title,
  description,
  bgClass,
  image,
  step1img1Class,
  step1img2Class,
  step2img1Class,
  step2img2Class,
  step3imgClass,
  step4imgClass,
}: SkiperCardProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Responsive Design",
      images: [
        { src: image.step1light1, className: step1img1Class },
        { src: image.step1light2, className: step1img2Class },
      ],
    },
    {
      id: 2,
      title: "Interactive Components",
      images: [
        { src: image.step2light1, className: step2img1Class },
        { src: image.step2light2, className: step2img2Class },
      ],
    },
    {
      id: 3,
      title: "Modern Interface",
      images: [{ src: image.step3light, className: step3imgClass }],
    },
    {
      id: 4,
      title: "Performance Optimized",
      images: [{ src: image.step4light, className: step4imgClass }],
    },
  ];

  return (
    <motion.div
      className={cn(
        "group relative h-[400px] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8",
        bgClass
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative z-20 flex h-full flex-col">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-sm text-white/70">{description}</p>
        </div>

        <div className="mb-6 flex gap-2">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-medium transition-all",
                currentStep === step.id
                  ? "bg-white text-black"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              )}
            >
              {step.title}
            </button>
          ))}
        </div>

        <div className="relative flex-1">
          <AnimatePresence mode="wait">
            {steps.map((step) => (
              currentStep === step.id && (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {step.images.map((img, idx) => (
                    <motion.img
                      key={idx}
                      src={img.src}
                      alt={image.alt}
                      className={cn("absolute", img.className)}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}