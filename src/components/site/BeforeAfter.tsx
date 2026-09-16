import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import afterRoof from "@/assets/after-roof.jpg";
import beforeRoof from "@/assets/before-roof.jpg";
import { Reveal } from "./Reveal";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <section className="section-pad bg-background">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="eyebrow-rule" />
            Before &amp; After
          </p>
          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">See the difference a day makes</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Drag the handle to compare a storm-worn roof with the finished replacement. Demo project
            imagery, shown for portfolio purposes.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div
            ref={frameRef}
            className="relative mt-12 aspect-[3/2] w-full cursor-ew-resize select-none overflow-hidden shadow-panel"
            onPointerDown={(e) => {
              draggingRef.current = true;
              setFromClientX(e.clientX);
            }}
          >
            <img
              src={afterRoof}
              alt="Home after roof replacement with a new charcoal shingle roof"
              width={1536}
              height={1024}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img
                src={beforeRoof}
                alt="Home before roof replacement with worn and missing shingles"
                width={1536}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            <span className="absolute left-4 top-4 bg-ink/85 px-3 py-1.5 font-display text-xs uppercase tracking-[0.2em] text-ink-foreground">
              Before
            </span>
            <span className="absolute right-4 top-4 bg-primary px-3 py-1.5 font-display text-xs uppercase tracking-[0.2em] text-primary-foreground">
              After
            </span>

            <div className="absolute inset-y-0 w-[3px] bg-primary" style={{ left: `${pos}%` }}>
              <button
                type="button"
                aria-label="Comparison slider position"
                role="slider"
                aria-valuenow={Math.round(pos)}
                aria-valuemin={0}
                aria-valuemax={100}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
                  if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
                }}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  draggingRef.current = true;
                }}
                className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center bg-primary text-primary-foreground shadow-lift transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <MoveHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
