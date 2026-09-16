import { Award, BadgeCheck, Hammer, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Hammer, value: "2,500+", label: "Roofs Completed" },
  { icon: ShieldCheck, value: "5-Year", label: "Workmanship Warranty" },
  { icon: BadgeCheck, value: "Fully", label: "Licensed & Insured" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="shell grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
        {ITEMS.map((item, i) => (
          <Reveal key={item.label} delay={i * 80}>
            <div className="flex flex-col items-center gap-2 px-4 py-8 text-center md:py-10">
              <item.icon className="h-6 w-6 text-primary" />
              <p className="font-display text-2xl leading-none md:text-3xl">{item.value}</p>
              <p className="text-sm uppercase tracking-[0.14em] text-muted-foreground">
                {item.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
