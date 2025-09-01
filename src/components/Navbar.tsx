import { useEffect, useState, useRef } from "react";
import { navLinks, siteConfig } from "@/config/site";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectionIds = navLinks.map((n) => n.id);

export function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handler = () => {
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
          break;
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (nameRef.current) {
      // Animate the text appearance with a typing effect
      const element = nameRef.current;
      element.style.opacity = '0';
      element.style.transform = 'translateX(-20px)';
      
      setTimeout(() => {
        element.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
      }, 300);
    }
  }, []);

  const NavLink = ({ id, label }: { id: string; label: string }) => (
    <a
      href={`#${id}`}
      onClick={() => setOpen(false)}
      className={`px-3 py-2 rounded-md text-sm transition-colors story-link ${
        active === id ? "text-primary" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight hover-scale">
          <span
            ref={nameRef}
            className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent opacity-0"
          >
            {siteConfig.name}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((n) => (
            <NavLink key={n.id} {...n} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label="Open navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col py-2">
            {navLinks.map((n) => (
              <NavLink key={n.id} {...n} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
