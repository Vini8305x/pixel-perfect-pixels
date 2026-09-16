import { Check } from "lucide-react";
import aboutCrew from "@/assets/about-crew.jpg";
import { Reveal } from "./Reveal";

const POINTS = [
  {
    title: "Craftsmanship first",
    body: "Our own crews — never day labor — install to manufacturer spec, with proper underlayment, ice-and-water shield and ventilation.",
  },
  {
    title: "Transparent pricing",
    body: "A line-item proposal with materials, labor and disposal spelled out. The number we quote is the number you pay.",
  },
  {
    title: "Reliable communication",
    body: "You get a project lead by name, a start date in writing, and a daily photo update while we're on your roof.",
  },
  {
    title: "Safety on every job",
    body: "Harnessed crews, protected landscaping, magnet sweeps morning and night, and full liability and workers' comp coverage.",
  },
  {
    title: "Warranty that means it",
    body: "A 5-year workmanship warranty on top of your manufacturer coverage, honored by the same people who did the work.",
  },
];

export function About() {
  return (
    <section id="about" className="section-pad bg-card">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <img
              src={aboutCrew}
              alt="IronPeak Roofing crew installing shingles in safety harnesses"
              width={1280}
              height={1280}
              loading="lazy"
              className="w-full object-cover shadow-panel"
            />
            <div className="absolute -bottom-6 -right-4 hidden bg-ink px-8 py-6 shadow-lift sm:block lg:-right-8">
              <p className="font-display text-4xl leading-none text-primary">2,500+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-muted">
                Roofs completed since 2011
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">
            <span className="eyebrow-rule" />
            About IronPeak
          </p>
          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
            Why homeowners choose IronPeak
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We're a local roofing company built on repeat customers and neighbor referrals. That only
            works if the roof holds and the experience is easy — so we've built the whole business
            around both.
          </p>

          <ul className="mt-9 space-y-6">
            {POINTS.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center bg-primary">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </span>
                <div>
                  <h3 className="text-base tracking-wide">{point.title}</h3>
                  <p className="mt-1 text-[0.975rem] leading-relaxed text-muted-foreground">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
