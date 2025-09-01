import { skills } from "@/config/site";
import { TextScroll } from "@/components/ui/text-scroll";

export function SkillsSection() {
  // Create a string of all skills separated by bullets
  const skillsText = skills.join(" • ") + " • ";

  return (
    <section id="skills" className="scroll-mt-24 py-16 md:py-24 overflow-hidden">
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">Skills & Technologies</h2>
        
        {/* Primary skills scroll */}
        <div className="mb-8">
          <TextScroll
            className="font-display text-center text-4xl font-semibold tracking-tighter text-foreground dark:text-white md:text-7xl md:leading-[5rem]"
            text={skillsText}
            default_velocity={5}
          />
        </div>
        
        {/* Secondary skills scroll in reverse */}
        <div className="mb-8">
          <TextScroll
            className="font-display text-center text-2xl font-medium tracking-wider text-muted-foreground md:text-4xl md:leading-[3rem]"
            text={skillsText}
            default_velocity={-3}
          />
        </div>
        
        {/* Tertiary skills scroll */}
        <div>
          <TextScroll
            className="font-display text-center text-xl font-light tracking-widest text-muted-foreground/60 md:text-2xl md:leading-[2rem]"
            text={skillsText}
            default_velocity={2}
          />
        </div>
      </div>
    </section>
  );
}
