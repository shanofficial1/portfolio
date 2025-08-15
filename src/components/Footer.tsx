import { Button } from "@/components/ui/button";
import { Github, Linkedin, Facebook, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/shanofficial1", icon: Github, label: "GitHub" },
    { href: "www.linkedin.com/in/shanofficial", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.facebook.com/profile.php?id=61561053655193", icon: Facebook, label: "Twitter" },
    { href: "mailto:shanr1164@gmail.com", icon: Mail, label: "Email" },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    // { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

 

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gradient mb-4">Shan A</h3>
            <p className="text-portfolio-text-light mb-4 leading-relaxed max-w-md">
             Passionate about building impactful digital solutions with creativity and precision.
Guided by leadership, confidence, and a drive to inspire positive change.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-portfolio-text-light hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-portfolio-text-light">
              <li>
                <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                  shanr1164@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918590795942" className="hover:text-primary transition-colors">
                  +91 8590795942
                </a>
              </li>
              <li>Azhikode, Kannur</li>
              {/* <li>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-primary hover:text-primary-glow transition-colors"
                >
                  Start a Project →
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-portfolio-text-light">
            © {currentYear} Shan.A
          </div>
          
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;