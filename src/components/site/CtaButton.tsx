import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const cta = cva(
  "inline-flex items-center justify-center gap-2 font-display text-sm uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-panel hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0",
        dark: "bg-ink text-ink-foreground hover:bg-steel hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-ink/25 text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5",
        ghostLight:
          "border border-ink-border text-ink-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5",
      },
      size: {
        md: "h-11 px-6",
        lg: "h-14 px-8 text-[0.95rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ComponentProps<"a"> & VariantProps<typeof cta>;

export function CtaButton({ className, variant, size, ...props }: Props) {
  return <a className={cn(cta({ variant, size }), className)} {...props} />;
}

export function CtaSubmit({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof cta>) {
  return <button className={cn(cta({ variant, size }), className)} {...props} />;
}
