import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const PROJECTS = [
  { src: g1, title: "Architectural shingle replacement", place: "Colonial · Millbrook, OH", wide: true },
  { src: g2, title: "Standing seam metal roof", place: "Ridge detail · Cedar Hollow, OH" },
  { src: g3, title: "Seamless gutter installation", place: "Craftsman · Ashford Township, OH" },
  { src: g5, title: "Storm damage response", place: "Emergency tarp · Millbrook, OH" },
  { src: g6, title: "20-point roof inspection", place: "Chimney flashing · Cedar Hollow, OH" },
  { src: g4, title: "Commercial membrane roof", place: "Retail center · Millbrook, OH", wide: true },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-background">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="eyebrow-rule" />
            Project Gallery
          </p>
          <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">Recent work around the valley</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A sample of residential and commercial projects. Demo imagery shown for portfolio
            purposes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 90}
              className={cn(project.wide && "sm:col-span-2 lg:col-span-1")}
            >
              <figure className="group relative h-full overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="font-display text-lg text-ink-foreground">{project.title}</p>
                  <p className="mt-1 text-sm text-ink-muted">{project.place}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
