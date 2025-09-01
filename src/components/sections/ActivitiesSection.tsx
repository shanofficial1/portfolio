import { activities } from "@/config/site";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";


export function ActivitiesSection() {
  return (
    <section id="activities" className="scroll-mt-24 py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight">Activities & Hackathon</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a, idx) => (
              <motion.article
                key={a.title + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden hover-scale cursor-pointer">
                      {a.image && (
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={a.image}
                            alt={`${a.title} preview`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </AspectRatio>
                      )}
                      <div className="p-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{a.date}</span>
                          <span>{a.location}</span>
                        </div>
                        <h3 className="mt-1 text-lg font-semibold">{a.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{a.summary}</p>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle>{a.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-2 text-sm">
                      <div className="text-muted-foreground">{a.date} • {a.location}</div>
                      <p>{a.details}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  );
}
