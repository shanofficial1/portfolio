import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SparklesIcon } from "lucide-react";
import { SkiperCard } from "@/components/ui/skiper-card";
import MaskedDiv from "@/components/ui/masked-div";
import { TextScroll } from "@/components/ui/text-scroll";
import { cn } from "@/lib/utils";

// Import activity images
import activity1 from "@/assets/project1.jpg";
import activity2 from "@/assets/project2.jpg";
import activity3 from "@/assets/project3.jpg";
import cert1 from "@/assets/cert1.jpg";
import cert2 from "@/assets/cert2.jpg";

export function ActivitiesShowcase() {
  return (
    <section className="relative my-20 w-full overflow-hidden" id="activities">
      {/* Animated title */}
      <div className="mb-16">
        <TextScroll
          className="font-display text-center text-4xl font-semibold tracking-tighter text-foreground md:text-7xl md:leading-[5rem]"
          text="Activities • Hackathons • Events • "
          default_velocity={3}
        />
      </div>

      <div className="container p-2">
        <div className="mb-8 mx-auto pt-4">
          <div className="mx-auto">
            <div className="flex w-full items-center justify-center">
              <Badge
                variant="outline"
                className="mb-8 rounded-[14px] border border-border bg-card text-base"
              >
                <SparklesIcon className="mr-2 h-4 w-4 fill-primary/20 stroke-primary" />
                My Journey
              </Badge>
            </div>

            <div className="mx-auto max-w-4xl rounded-[34px] bg-muted/50">
              <div className="relative z-10 grid w-full gap-8 rounded-[28px] bg-card p-4 shadow-lg">
                <SkiperCard
                  step1img1Class={cn(
                    "pointer-events-none w-[50%] border border-border/50 transition-all duration-500 rounded-lg",
                    "left-1/4 top-[57%] max-md:scale-[160%] md:left-[35px] md:top-[29%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step1img2Class={cn(
                    "pointer-events-none w-3/5 overflow-hidden border border-border/50 transition-all duration-500",
                    "left-[69%] top-[53%] rounded-lg max-md:scale-[160%] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
                    "md:group-hover:-translate-y-6"
                  )}
                  step2img1Class={cn(
                    "pointer-events-none w-[50%] overflow-hidden rounded-lg border border-border/50 transition-all duration-500",
                    "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
                    "md:group-hover:translate-y-2"
                  )}
                  step2img2Class={cn(
                    "pointer-events-none w-2/5 overflow-hidden rounded-lg border border-border/50 transition-all duration-500 group-hover:-translate-y-6",
                    "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
                    "md:group-hover:-translate-y-6"
                  )}
                  step3imgClass={cn(
                    "pointer-events-none w-[90%] overflow-hidden rounded-lg border border-border/50 transition-all duration-500",
                    "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
                  )}
                  step4imgClass={cn(
                    "pointer-events-none w-[90%] overflow-hidden rounded-lg border border-border/50 transition-all duration-500",
                    "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
                  )}
                  description="Building innovative solutions 🚀"
                  bgClass="bg-gradient-to-br from-primary/5 to-secondary/5"
                  image={{
                    step1light1: activity1,
                    step1light2: activity2,
                    step2light1: activity3,
                    step2light2: cert1,
                    step3light: cert2,
                    step4light: activity1,
                    alt: "Activity showcase",
                  }}
                  title="Hackathons & Competitions"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Masked image gallery */}
      <div className="mt-20">
        <div className="flex max-w-6xl mx-auto flex-wrap justify-center gap-8 p-4">
          <MaskedDiv maskType="type-1" size={0.45} className="hover:rotate-2 transition-transform duration-300">
            <img
              src={activity1}
              alt="Hackathon project showcase"
              className="h-full w-full object-cover cursor-pointer transition-all duration-300 hover:scale-105"
            />
          </MaskedDiv>
          
          <MaskedDiv maskType="type-1" size={0.45} className="rotate-180 hover:-rotate-2 transition-transform duration-300">
            <img
              src={activity2}
              alt="Team collaboration"
              className="h-full w-full object-cover cursor-pointer transition-all duration-300 hover:scale-105"
            />
          </MaskedDiv>
          
          <MaskedDiv maskType="type-3" className="hover:scale-105 transition-transform duration-300">
            <img
              src={activity3}
              alt="Innovation workshop"
              className="h-full w-full object-cover cursor-pointer transition-all duration-300 hover:scale-105"
            />
          </MaskedDiv>
          
          <MaskedDiv maskType="type-4" className="hover:-rotate-1 transition-transform duration-300">
            <img
              src={cert1}
              alt="Achievement moment"
              className="h-full w-full object-cover cursor-pointer transition-all duration-300 hover:scale-105"
            />
          </MaskedDiv>
          
          <MaskedDiv maskType="type-2" className="hover:rotate-1 transition-transform duration-300">
            <img
              src={cert2}
              alt="Recognition ceremony"
              className="h-full w-full object-cover cursor-pointer transition-all duration-300 hover:scale-105"
            />
          </MaskedDiv>
        </div>
      </div>

      {/* Activity details cards */}
      <div className="mt-20 container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Hackathon XYZ",
              date: "Jun 2024",
              location: "Virtual",
              description: "Collaborated in a team of 4 to design and build a summarization tool using open-source models, achieving 2nd place.",
              image: activity1,
            },
            {
              title: "Innovation Challenge",
              date: "Mar 2024",
              location: "Tech Hub",
              description: "Developed an AI-powered solution for real-time data analysis, securing top 3 position among 50+ teams.",
              image: activity2,
            },
            {
              title: "Code Sprint",
              date: "Jan 2024",
              location: "University",
              description: "Built a full-stack application in 48 hours, focusing on user experience and scalable architecture.",
              image: activity3,
            },
          ].map((activity, idx) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span>{activity.date}</span>
                  <span>{activity.location}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}