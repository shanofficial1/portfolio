import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config/site";
import { TextScroll } from "@/components/ui/text-scroll";
import Beams from '../ui/beam';
export function HeaderSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Home">
      {/* Animated mesh background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15)_0%,transparent_50%)]" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
{/* <div className="absolute inset-0 overflow-hidden pointer-events-none" >
  <Beams
    beamWidth={2}
    beamHeight={150}
    beamNumber={20}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={45}
  />
</div> */}
      <div ref={ref} className="container relative z-10 text-center">
        {/* Profile image with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <motion.img
            src={siteConfig.profileImg}
            alt={`${siteConfig.name} profile portrait`}
            className="mx-auto aspect-square w-32 md:w-40 rounded-full ring-4 ring-primary/20 shadow-[var(--shadow-glow)] object-cover"
            loading="lazy"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Animated name with stagger effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          >
            {siteConfig.name}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {siteConfig.tagline}
            </p>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-[2px] h-8 bg-primary/40 rounded-full relative overflow-hidden"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-full h-2 bg-primary rounded-full absolute"
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom text scroll */}
      <div className="absolute bottom-0 left-0 right-0 py-4 overflow-hidden">
        <TextScroll
          className="text-sm text-muted-foreground/30 font-mono tracking-wider"
          text="Developer • MERN • Frontend • Backend • JavaScript • React • Node.js • Express • MongoDB • "
          default_velocity={1}
        />
      </div>
    </section>
  );
}
