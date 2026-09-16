import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaButton } from "./CtaButton";
import { COMPANY, NAV_LINKS } from "./nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-ink text-ink-muted md:block">
        <div className="shell flex h-10 items-center justify-between text-xs tracking-wide">
          <span>{COMPANY.area}</span>
          <div className="flex items-center gap-6">
            <span>{COMPANY.hours}</span>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 text-ink-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/95 backdrop-blur-md shadow-panel"
            : "bg-background",
        )}
      >
        <div
          className={cn(
            "shell flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-10 w-10 place-items-center bg-ink transition-colors group-hover:bg-primary">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M12 3 3 11h3v9h5v-6h2v6h5v-9h3Z" fill="currentColor" className="text-primary-foreground" />
              </svg>
            </span>
            <span className="font-display text-xl leading-none tracking-tight">
              Iron<span className="text-primary">Peak</span>
              <span className="mt-0.5 block font-sans text-[0.6rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Roofing
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-display text-sm uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <CtaButton href="#contact" className="hidden sm:inline-flex">
              Get a Free Estimate
            </CtaButton>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center border border-input text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-b border-ink-border bg-ink transition-[max-height,opacity] duration-400 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="shell flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink-border py-4 font-display text-lg uppercase tracking-[0.12em] text-ink-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-6 pb-2">
            <CtaButton href="#contact" size="lg" onClick={() => setOpen(false)}>
              Get a Free Estimate
            </CtaButton>
            <CtaButton href={COMPANY.phoneHref} variant="ghostLight" size="lg">
              Call {COMPANY.phone}
            </CtaButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
