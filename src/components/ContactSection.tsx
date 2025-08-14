import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Calendar, Download } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@yourusername",
      href: "https://github.com/yourusername",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Your Name",
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@yourusername",
      href: "https://twitter.com/yourusername",
      color: "hover:text-sky-400"
    }
  ];

  const projectTypes = [
    "Web Application",
    "E-commerce Site",
    "Mobile App",
    "API Development",
    "Consulting",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: ""
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 animate-fade-in">
            <Card className="portfolio-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Get in Touch
                </CardTitle>
                <CardDescription>
                  Multiple ways to reach me for your project needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactInfo.map((contact) => (
                    <div key={contact.label} className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <contact.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-portfolio-text-light">{contact.label}</div>
                        <a 
                          href={contact.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold mb-4">Connect Online</h4>
                  <div className="space-y-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors ${social.color}`}
                      >
                        <social.icon className="h-4 w-4" />
                        <div>
                          <div className="text-sm text-portfolio-text-light">{social.label}</div>
                          <div className="font-medium">{social.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="pt-6 border-t border-border space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href="/resume.pdf" download>
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href="https://calendly.com/yourname" target="_blank" rel="noopener noreferrer">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule a Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="portfolio-card">
              <CardHeader>
                <CardTitle>Start Your Project</CardTitle>
                <CardDescription>
                  Tell me about your project requirements and let's discuss how I can help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <Badge
                          key={type}
                          variant={formData.projectType === type ? "default" : "outline"}
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => handleInputChange("projectType", type)}
                        >
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Brief description of your project"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me more about your project requirements, timeline, and budget..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={6}
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="portfolio-gradient flex-1 hover:glow-effect"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                    <Button type="button" variant="outline" className="flex-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Call Instead
                    </Button>
                  </div>
                </form>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-portfolio-text-light">
                    <strong>Response Time:</strong> I typically respond within 24 hours. 
                    For urgent projects, feel free to call or schedule a direct meeting.
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