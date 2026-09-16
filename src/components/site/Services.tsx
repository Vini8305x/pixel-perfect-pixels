import {
  CloudLightning,
  Home,
  Building2,
  Search,
  Waves,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: Home,
    title: "Roof Replacement",
    body: "Full tear-off and replacement with architectural shingles, metal or synthetic systems. We haul away every nail and leave your property spotless.",
  },
  {
    icon: Wrench,
    title: "Roof Repair",
    body: "Leaks, missing shingles, flashing failures and worn valleys repaired quickly, with photo documentation of what we found and what we fixed.",
  },
  {
    icon: CloudLightning,
    title: "Storm Damage",
    body: "Emergency tarping, hail and wind damage assessment, and straightforward help documenting the damage for your insurance claim.",
  },
  {
    icon: Search,
    title: "Roof Inspection",
    body: "A 20-point inspection covering decking, ventilation, penetrations and gutters, delivered as a written report with photos and a clear timeline.",
  },
  {
    icon: Waves,
    title: "Gutter Installation",
    body: "Seamless aluminum gutters, oversized downspouts and leaf protection sized to your roof's actual runoff so water stays off your foundation.",
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    body: "TPO, EPDM and modified bitumen systems for small commercial buildings, scheduled around your business hours to avoid downtime.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-background">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="eyebrow-rule" />
            What We Do
          </p>
          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
            Roofing services for every part of your home
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            One crew, one point of contact, and workmanship that holds up through every season.
            Every project starts with an honest assessment — not a sales pitch.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90}>
              <article className="group relative h-full bg-background p-8 transition-colors duration-300 hover:bg-ink lg:p-10">
                <span className="absolute inset-x-0 top-0 h-[3px] w-0 bg-primary transition-all duration-400 group-hover:w-full" />
                <service.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-6 text-xl transition-colors group-hover:text-ink-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground transition-colors group-hover:text-ink-muted">
                  {service.body}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.18em] text-primary"
                >
                  Request Estimate
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-wrap items-center gap-4">
          <CtaButton href="#contact" size="lg">
            Get My Free Estimate
          </CtaButton>
          <p className="text-sm text-muted-foreground">
            Free, no-pressure estimates — usually within two business days.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
