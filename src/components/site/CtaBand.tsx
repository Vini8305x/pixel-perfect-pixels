import { Phone } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";
import { COMPANY } from "./nav";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="hatch absolute inset-0" />
      <div className="shell relative py-20 lg:py-24">
        <Reveal className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl leading-tight text-primary-foreground sm:text-5xl">
              Ready to protect your home?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/85">
              Get your free roofing estimate today.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaButton href="#contact" variant="dark" size="lg">
              Request My Free Estimate
            </CtaButton>
            <CtaButton
              href={COMPANY.phoneHref}
              size="lg"
              className="border border-primary-foreground/50 bg-transparent text-primary-foreground shadow-none hover:bg-primary-foreground/10 hover:brightness-100"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
