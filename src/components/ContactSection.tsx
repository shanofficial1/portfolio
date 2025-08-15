import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Calendar, Download, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "developer@example.com",
      href: "mailto:developer@example.com",
      description: "Send me an email"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      description: "Give me a call"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kerala, India",
      href: "https://maps.google.com/?q=Kerala,India",
      description: "Where I'm based"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@yourusername",
      href: "https://github.com/yourusername",
      description: "Check out my code"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Your Name",
      href: "https://linkedin.com/in/yourprofile",
      description: "Professional network"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@yourusername",
      href: "https://twitter.com/yourusername",
      description: "Follow my thoughts"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-lg text-portfolio-text-light max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <Card className="portfolio-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Get in Touch
                </CardTitle>
                <CardDescription>
                  Let's connect and discuss opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Methods */}
                <div className="space-y-6">
                  {contactInfo.map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.label === "Location" ? "_blank" : undefined}
                      rel={contact.label === "Location" ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <contact.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {contact.label}
                        </div>
                        <div className="text-portfolio-text-light text-sm mb-1">
                          {contact.description}
                        </div>
                        <div className="font-medium text-foreground">
                          {contact.value}
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links & Actions */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="portfolio-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  Connect Online
                </CardTitle>
                <CardDescription>
                  Follow me on social platforms and download my resume
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Social Links */}
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <social.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {social.label}
                        </div>
                        <div className="text-portfolio-text-light text-sm mb-1">
                          {social.description}
                        </div>
                        <div className="font-medium text-foreground">
                          {social.value}
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="pt-6 border-t border-border space-y-3">
                  <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                    <a href="/resume.pdf" download>
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                    <a href="https://calendly.com/yourname" target="_blank" rel="noopener noreferrer">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule a Call
                    </a>
                  </Button>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-portfolio-text-light">
                    <strong>Available for:</strong> Full-time opportunities, freelance projects, and consulting work.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;