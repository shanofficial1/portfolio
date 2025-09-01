import { projects } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { TextScroll } from "@/components/ui/text-scroll";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />
      
      <div className="container relative">
        {/* Animated title */}
        <div className="mb-16">
          <TextScroll
            className="font-display text-center text-4xl font-semibold tracking-tighter text-foreground md:text-6xl md:leading-[4rem]"
            text="Featured Projects • Innovations • "
            default_velocity={2}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title + idx}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border/50 shadow-card hover:shadow-glass transition-all duration-500"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="aspect-video overflow-hidden rounded-t-2xl">
                <motion.img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-3"
                  >
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-white transition-all hover:bg-white/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </motion.a>
                    <motion.button
                      className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-white transition-all hover:bg-white/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </motion.button>
                  </motion.div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <motion.h3 
                  className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-muted-foreground leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                >
                  {project.tags.map((tag, tagIdx) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 + 0.4 + tagIdx * 0.05 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      >
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
