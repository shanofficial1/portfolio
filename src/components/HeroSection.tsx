import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "./config/site";

export function HeroSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -40]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.05]);

  return (
    <section id="home" className="scroll-mt-32 h-screen  flex  justify-center items-center  " aria-label="Home">
      <div ref={ref} className="relative overflow-hidden ">
        <motion.div
          style={{ y, scale }}
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="h-screen bg-[radial-gradient(1000px_400px_at_50%_-50%,hsl(var(--ring)/0.25),transparent)]" />
        </motion.div>

        <div className="container grid gap-10 py-16 md:grid-cols-[1fr_1.2fr] md:gap-16 md:py-24 items-center">
          <motion.img
            src={siteConfig.profileImg}
            alt={`${siteConfig.name} profile portrait`}
            className="mx-auto aspect-square w-44 rounded-full ring-4 ring-primary/20 shadow-[var(--shadow-glow)] object-cover"
            loading="lazy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <div>
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {siteConfig.name}
            </motion.h1>
            <motion.p
              className="mt-3 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {siteConfig.tagline}
            </motion.p>

            {/* CTA buttons removed as requested */}

          </div>
        </div>
      </div>
    </section>
  );
}