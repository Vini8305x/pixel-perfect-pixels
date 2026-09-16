import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "IronPeak Roofing | Roof Replacement & Repair Contractor";
const DESCRIPTION =
  "IronPeak Roofing installs and repairs roofs for American homes and small businesses. Licensed, insured, 5-year workmanship warranty. Get a free estimate today.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Process />
        <BeforeAfter />
        <Reviews />
        <Gallery />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
