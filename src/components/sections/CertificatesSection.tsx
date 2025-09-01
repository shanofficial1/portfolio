import { certificates } from "@/config/site";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

export function CertificatesSection() {
  return (
    <section id="certificates" className="scroll-mt-24 py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight">Certificates</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, idx) => (
            <motion.div
              key={c.title + idx}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 80,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
              }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full overflow-hidden rounded-lg border bg-card/50 backdrop-blur-sm text-left group transition-all duration-500 hover:bg-card/80">
                    <div className="overflow-hidden">
                      <img
                        src={c.image}
                        alt={`${c.title} certificate preview`}
                        loading="lazy"
                        className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                        {c.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{c.issuer} • {c.year}</p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>{c.title}</DialogTitle>
                  </DialogHeader>
                  <img src={c.image} alt={`${c.title} enlarged`} className="w-full rounded-md border" />
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
