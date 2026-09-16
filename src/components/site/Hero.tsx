import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import heroRoof from "@/assets/hero-roof.jpg";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-ink">
      <img
        src={heroRoof}
        alt="Newly installed charcoal shingle roof on a large suburban American home at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="hatch absolute inset-0" />

      <div className="shell relative pb-20 pt-40 md:pb-28 lg:pb-32">
        <div className="max-w-2xl">
          <p className="eyebrow">
            <span className="eyebrow-rule" />
            Licensed &amp; Insured Roofing Contractor
          </p>
          <h1 className="mt-6 text-5xl leading-[0.95] text-ink-foreground sm:text-6xl lg:text-7xl">
            Protect Your Home.
            <span className="block text-primary">Built to Last.</span>
          </h1>
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-muted">
            Professional roofing solutions built for American homes. Quality workmanship, reliable
            service, and a roof you can count on.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="#contact" size="lg">
              Get a Free Estimate <ArrowRight className="h-4 w-4" />
            </CtaButton>
            <CtaButton href="#services" variant="ghostLight" size="lg">
              View Our Services
            </CtaButton>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-ink-muted">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              5-Year Workmanship Warranty
            </span>
            <span className="flex items-center gap-2">
              <span className="flex text-primary">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              4.9 average homeowner rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
