import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    quote:
      "Hail took out half our shingles and IronPeak had a tarp up the same evening. The proposal was easy to read, the crew was polite, and they swept the driveway twice before leaving.",
    name: "Danielle R.",
    detail: "Full roof replacement · Millbrook, OH",
  },
  {
    quote:
      "We had three quotes. IronPeak was the only one that got in the attic and showed us photos of the real problem. Price never moved from the estimate.",
    name: "Marcus O.",
    detail: "Roof repair & ventilation · Cedar Hollow, OH",
  },
  {
    quote:
      "They replaced the roof and gutters on our rental in two days without a single complaint from the tenants. Third project we've given them and it won't be the last.",
    name: "Priya & Sam N.",
    detail: "Roof + seamless gutters · Ashford Township, OH",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="section-pad bg-card">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="eyebrow-rule" />
            Homeowner Reviews
          </p>
          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
            What our neighbors say
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 110}>
              <figure className="group relative flex h-full flex-col border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-panel">
                <Quote className="h-8 w-8 text-primary/25 transition-colors group-hover:text-primary/60" />
                <div className="mt-5 flex gap-0.5 text-primary">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[1.0625rem] leading-relaxed text-foreground/90">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5">
                  <p className="font-display text-base tracking-wide">{review.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{review.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-sm text-muted-foreground">
            Portfolio demo content: IronPeak Roofing is a fictional company and these testimonials
            are illustrative examples, not real customer reviews.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
