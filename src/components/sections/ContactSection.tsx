import { Github, Linkedin, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const items = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      Icon: Mail,
    },
    {
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
      Icon: Phone,
    },
    {
      label: "Location",
      value: siteConfig.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.location)}`,
      Icon: MapPin,
    },
    {
      label: "GitHub",
      value: siteConfig.socials.github.replace("https://github.com/", "@"),
      href: siteConfig.socials.github,
      Icon: Github,
    },
    {
      label: "LinkedIn",
      value: siteConfig.socials.linkedin.replace("https://www.linkedin.com/in/", "@"),
      href: siteConfig.socials.linkedin,
      Icon: Linkedin,
    },
    {
      label: "Instagram",
      value: siteConfig.socials.instagram.replace("https://instagram.com/", "@"),
      href: siteConfig.socials.instagram,
      Icon: Instagram,
    },
    // {
    //   label: "Facebook",
    //   value: siteConfig.socials.facebook.replace("https://facebook.com/", "@"),
    //   href: siteConfig.socials.facebook,
    //   Icon: Facebook,
    // },
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-muted-foreground">Reach me via any of the channels below.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Location" ? "_blank" : undefined}
              rel={label === "Location" ? "noopener noreferrer" : undefined}
              className="group rounded-lg border bg-card p-4 transition-shadow hover:shadow-md"
              aria-label={`${label}: ${value}`}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="font-medium">{value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
