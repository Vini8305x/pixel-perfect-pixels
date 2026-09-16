import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { CtaSubmit } from "./CtaButton";
import { Reveal } from "./Reveal";
import { COMPANY } from "./nav";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a phone number we can reach you on.")
    .regex(/^[0-9 ()+\-.]+$/, "Please use digits only."),
  address: z.string().trim().min(5, "Please enter the property address."),
  details: z.string().trim().min(10, "Tell us a little about the project (10+ characters)."),
});

type FormValues = z.infer<typeof schema>;

const FIELD =
  "h-12 w-full border border-input bg-background px-4 text-[0.975rem] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const LABEL = "font-display text-xs uppercase tracking-[0.18em] text-foreground/70";
const ERROR = "mt-1.5 text-xs text-destructive";

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onBlur" });

  const onSubmit = async (_values: FormValues) => {
    // Portfolio demo: the request is acknowledged locally, nothing is transmitted.
    await new Promise((resolve) => setTimeout(resolve, 700));
    reset();
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad bg-card">
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-rule" />
            Free Estimate
          </p>
          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">Let's talk about your roof</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tell us what's going on and we'll get back to you within one business day with next
            steps and a time for your inspection.
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className={LABEL}>Phone</p>
                <a
                  href={COMPANY.phoneHref}
                  className="text-lg transition-colors hover:text-primary"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className={LABEL}>Email</p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-all text-lg transition-colors hover:text-primary"
                >
                  {COMPANY.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className={LABEL}>Service Area</p>
                <p className="text-[1.05rem] text-muted-foreground">
                  {COMPANY.area}
                  <br />
                  {COMPANY.address}
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className={LABEL}>Hours</p>
                <p className="text-[1.05rem] text-muted-foreground">{COMPANY.hours}</p>
              </div>
            </li>
          </ul>

          {/* Map placeholder — a real embed would go here on a live site. */}
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden border border-border bg-muted">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute left-0 top-1/2 h-3 w-full -translate-y-1/2 bg-background/80"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/3 top-0 h-full w-2 bg-background/80"
            />
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <MapPin className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-2 font-display text-sm uppercase tracking-[0.18em]">
                  Millbrook, OH
                </p>
                <p className="text-xs text-muted-foreground">Map placeholder · demo location</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="border border-border bg-background p-7 shadow-panel sm:p-10">
            {sent ? (
              <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-6 text-2xl">Request received</h3>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Thanks — your estimate request is in. A project lead will reach out within one
                  business day to schedule your inspection.
                </p>
                <p className="mt-4 max-w-sm text-xs text-muted-foreground">
                  This is a portfolio demo, so nothing was actually submitted or stored.
                </p>
                <CtaSubmit
                  type="button"
                  variant="outline"
                  className="mt-8"
                  onClick={() => setSent(false)}
                >
                  Send another request
                </CtaSubmit>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                <div>
                  <h3 className="text-2xl">Request your free estimate</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    No obligation, no pressure — just a straight answer about your roof.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className={LABEL} htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      className={`${FIELD} mt-2`}
                      placeholder="Jordan Whitfield"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      {...register("name")}
                    />
                    {errors.name && <p className={ERROR}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className={LABEL} htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`${FIELD} mt-2`}
                      placeholder="(555) 018-7420"
                      autoComplete="tel"
                      aria-invalid={!!errors.phone}
                      {...register("phone")}
                    />
                    {errors.phone && <p className={ERROR}>{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className={LABEL} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`${FIELD} mt-2`}
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && <p className={ERROR}>{errors.email.message}</p>}
                </div>

                <div>
                  <label className={LABEL} htmlFor="address">
                    Property Address
                  </label>
                  <input
                    id="address"
                    className={`${FIELD} mt-2`}
                    placeholder="112 Maple Ridge Dr, Millbrook, OH"
                    autoComplete="street-address"
                    aria-invalid={!!errors.address}
                    {...register("address")}
                  />
                  {errors.address && <p className={ERROR}>{errors.address.message}</p>}
                </div>

                <div>
                  <label className={LABEL} htmlFor="details">
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    rows={5}
                    className="mt-2 w-full border border-input bg-background px-4 py-3 text-[0.975rem] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                    placeholder="Roof age, leaks, storm damage, or anything else we should know."
                    aria-invalid={!!errors.details}
                    {...register("details")}
                  />
                  {errors.details && <p className={ERROR}>{errors.details.message}</p>}
                </div>

                <CtaSubmit type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : "Request My Free Estimate"}
                </CtaSubmit>
                <p className="text-xs text-muted-foreground">
                  Demo form for a portfolio project — submissions are not sent or stored.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
