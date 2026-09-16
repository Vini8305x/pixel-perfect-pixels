import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, NAV_LINKS } from "./nav";

const SERVICES = [
  "Roof Replacement",
  "Roof Repair",
  "Storm Damage",
  "Roof Inspection",
  "Gutter Installation",
  "Commercial Roofing",
];

export function Footer() {
  return (
    <footer className="bg-ink pt-16 text-ink-muted">
      <div className="shell grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center bg-primary">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M12 3 3 11h3v9h5v-6h2v6h5v-9h3Z" className="fill-primary-foreground" />
              </svg>
            </span>
            <span className="font-display text-xl leading-none text-ink-foreground">
              Iron<span className="text-primary">Peak</span>
              <span className="mt-0.5 block font-sans text-[0.6rem] font-medium uppercase tracking-[0.3em] text-ink-muted">
                Roofing
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Licensed and insured roofing contractor building durable roofs for American homes and
            small businesses since 2011.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-sm tracking-[0.2em] text-ink-foreground">Navigation</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm tracking-[0.2em] text-ink-foreground">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICES.map((service) => (
              <li key={service}>
                <a href="#services" className="transition-colors hover:text-primary">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-[0.2em] text-ink-foreground">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={COMPANY.phoneHref} className="transition-colors hover:text-primary">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-primary">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {COMPANY.address}
                <br />
                {COMPANY.area}
              </span>
            </li>
            <li>{COMPANY.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="shell flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>Fictional company created as a portfolio demonstration. Details are placeholders.</p>
        </div>
      </div>
    </footer>
  );
}
