import { education } from "@/config/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight">Education</h2>
        <div className="mt-8 relative">
          <div className="absolute left-4 top-0 bottom-0 border-l border-muted md:left-1/2 md:-translate-x-1/2" aria-hidden />
          <div className="space-y-10">
            {education.map((edu, idx) => (
                <motion.article
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.05,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="relative md:grid md:grid-cols-2 md:gap-8"
              >
                <div
                  className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[var(--shadow-glow)] md:left-1/2"
                  aria-hidden
                />
                <div className={`md:pr-8 ${idx % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="hover-scale overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-white/10">
                      <CardHeader>
                        <CardTitle className="text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                          {edu.level}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                          <span>{edu.years}</span>
                          <span>{edu.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
