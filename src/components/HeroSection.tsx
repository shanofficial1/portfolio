import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8">
            <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full rounded-full object-cover shadow-2xl glow-effect"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20"></div>
            </div>
          </div>

          {/* Professional Title */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-gradient">Full Stack Developer</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-portfolio-text-light font-light">
              Crafting innovative digital experiences with modern technologies
            </h2>
          </div>

          {/* Introduction */}
          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-portfolio-text-light leading-relaxed">
              Passionate about building scalable web applications and solving complex problems. 
              Experienced in React, Node.js, TypeScript, and cloud technologies with a focus on 
              performance, user experience, and clean code architecture.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="portfolio-gradient hover:glow-effect px-8 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="#projects">
                View My Work
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 transition-all duration-300"
              asChild
            >
              <a href="/resume.pdf" download>
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Tech Stack Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-3xl mx-auto mb-8">
            {[
              "React", "TypeScript", "Node.js", "Python", "AWS", "Docker"
            ].map((tech, index) => (
              <div 
                key={tech}
                className="portfolio-card p-3 text-center hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float">
            <a 
              href="#projects" 
              className="inline-flex items-center text-portfolio-text-light hover:text-primary transition-colors duration-300"
            >
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;