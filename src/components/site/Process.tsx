import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Request Your Free Estimate",
    body: "Send the form or call us. We'll confirm your details and get you on the schedule the same day where we can.",
  },
  {
    n: "02",
    title: "Schedule an Inspection",
    body: "A project lead inspects the roof, decking, ventilation and gutters, and photographs anything that needs attention.",
  },
  {
    n: "03",
    title: "Receive Your Proposal",
    body: "A clear, line-item proposal with material options and pricing — no pressure, and no expiring discounts.",
  },
  {
    n: "04",
    title: "We Build It Right",
    body: "Our crew installs to spec, cleans up daily, and walks the finished roof with you before we call it done.",
  },
];

export function Process() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink">
      <div className="hatch absolute inset-0" />
      <div className="shell relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="eyebrow-rule" />
            Our Process
          </p>
          <h2 className="mt-5 text-4xl leading-tight text-ink-foreground sm:text-5xl">
            Four steps, no surprises
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 110}>
              <div className="group relative border-t-2 border-ink-border pt-7 transition-colors duration-300 hover:border-primary">
                <p className="font-display text-5xl leading-none text-ink-border transition-colors duration-300 group-hover:text-primary">
                  {step.n}
                </p>
                <h3 className="mt-5 text-lg text-ink-foreground">{step.title}</h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
