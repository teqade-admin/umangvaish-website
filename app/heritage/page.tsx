import type { Metadata } from "next"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollScaleImage } from "@/components/scroll-scale-image"
import { withBasePath } from "@/lib/base-path"

const generations = [
  {
    era: "The Founder",
    years: "1940s",
    name: "Data Ram Vaish",
    image: withBasePath("/images/heritage-data-ram-vaish.png"),
    imageAlt: "Portrait of Data Ram Vaish",
    paragraphs: [
      "Data Ram Vaish began tailoring in the 1940s, at a time when clothes were made slowly and worn for years. Influenced by British tailoring, he built a practice around precision, proportion, and restraint.",
      "His work found its way to men who valued discretion: royalty, politicians, diplomats, and professionals who returned not for novelty, but for trust.",
    ],
  },
  {
    era: "The Continuity",
    years: "1968 onwards",
    name: "J.K. Vaish",
    image: withBasePath("/images/heritage-jk-vaish.png"),
    imageAlt: "Portrait of J.K. Vaish",
    paragraphs: [
      "In 1968, J.K. Vaish joined the business. With him came continuity. He refined the house style with clean lines, classical structure, and a disciplined approach to tailoring.",
      "The bandhgala, often referred to as the Nehru jacket, became a signature during this period. Over five decades of practice made him a reference point for men who took dressing seriously, without excess.",
    ],
  },
  {
    era: "The Present House",
    years: "1994 onwards",
    name: "Umang Vaish",
    image: withBasePath("/images/heritage-umang-vaish.png"),
    imageAlt: "Portrait of Umang Vaish",
    paragraphs: [
      "Umang Vaish joined the family business in 1994 and now leads the house forward. His focus remains on what has always mattered here: fit, fabric, and finish.",
      "Each garment is made with the belief that tailoring should support a person's presence, not overshadow it. Today, the work continues much the same way it always has through conversation, measurement, and time.",
    ],
  },
]

const portraitWidths: Record<string, string> = {
  "Data Ram Vaish": "w-[70%]",
  "J.K. Vaish": "w-[50%]",
  "Umang Vaish": "w-[70%]",
}

export const metadata: Metadata = {
  title: "Heritage | Umang Vaish Bespoke Tailoring Since 1940",
  description:
    "The story of three generations of bespoke tailoring from the house of Umang Vaish, beginning in 1940 in Connaught Place, New Delhi.",
}

export default function HeritagePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary-foreground/15 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 items-center h-20">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase">
                <a
                  href={withBasePath("/#bespoke")}
                  className="text-primary-foreground hover:text-primary-foreground/70 transition-colors"
                >
                  Bespoke
                </a>
                <a
                  href={withBasePath("/#collection")}
                  className="text-primary-foreground hover:text-primary-foreground/70 transition-colors"
                >
                  Collection
                </a>
                <a
                  href={withBasePath("/#fabrics")}
                  className="text-primary-foreground hover:text-primary-foreground/70 transition-colors"
                >
                  Fabrics
                </a>
              </nav>
            </div>

            <div className="flex justify-center">
              <a
                href={withBasePath("/")}
                className="text-3xl md:text-4xl font-light tracking-[0.3em] text-primary-foreground"
              >
                UV
              </a>
            </div>

            <div className="flex items-center justify-end">
              <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase">
                <a
                  href={withBasePath("/heritage")}
                  className="text-primary-foreground hover:text-primary-foreground/70 transition-colors"
                >
                  Heritage
                </a>
                <a href={withBasePath("/#contact")} className="text-primary-foreground hover:text-primary-foreground/70 transition-colors">
                  Contact
                </a>
                <a
                  href={withBasePath("/#contact")}
                  className="border border-primary-foreground px-4 py-2 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  Book
                </a>
              </nav>
              <div className="w-10 md:hidden" />
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-border bg-background pt-20">
        <div className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-12 lg:py-28">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-muted-foreground">Since 1940</p>
            <h1 className="max-w-4xl text-5xl font-light leading-tight md:text-7xl">
              Three generations of excellence.
            </h1>
            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                The Vaish family has been in bespoke tailoring for over eight decades. What began as a small atelier
                has grown into one of India&apos;s most respected bespoke houses.
              </p>
              <p>
                Each generation has added to the legacy while preserving the techniques and values that define the
                house of Umang Vaish.
              </p>
            </div>
          </div>

          <div className="group rounded-none border border-border bg-muted/30 p-4 lg:p-5">
            <ScrollScaleImage
              src={withBasePath("/images/heritage-regal.png")}
              alt="Historic Vaish & Sons storefront near Regal Theatre in Connaught Place"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="timeline" className="bg-background">
        <div className="container mx-auto px-6 py-20 lg:px-12 lg:py-28">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">The Timeline</p>
              <h2 className="text-4xl font-light md:text-5xl">The people behind the house</h2>
            </div>
            <p className="max-w-xl text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Precision, proportion, and restraint carried across three generations.
            </p>
          </div>

          <div className="space-y-16">
            {generations.map((generation, index) => (
              <article
                key={generation.name}
                className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.42fr_0.58fr]"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`overflow-hidden border border-border bg-muted/40 ${
                      portraitWidths[generation.name] ? `mx-auto ${portraitWidths[generation.name]}` : ""
                    }`}
                  >
                    <ScrollScaleImage
                      src={generation.image}
                      alt={generation.imageAlt}
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                </div>

                <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="mb-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    {generation.era} · {generation.years}
                  </p>
                  <h3 className="mb-6 text-3xl font-light md:text-4xl">{generation.name}</h3>
                  <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                    {generation.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-secondary py-20 text-secondary-foreground">
        <div className="container mx-auto px-6 text-center lg:px-12">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-secondary-foreground/70">Begin Your Journey</p>
          <h2 className="text-4xl font-light md:text-6xl">Visit the atelier</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">
            Experience the same measured approach that has defined the house for generations.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:info@umangvaishbespoke.com"
              className="border border-secondary-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-secondary-foreground hover:text-secondary"
            >
              Contact Us
            </a>
            <a
              href={withBasePath("/")}
              className="border border-secondary-foreground/30 px-8 py-4 text-xs uppercase tracking-[0.2em] text-secondary-foreground/80 transition-colors hover:border-secondary-foreground hover:text-secondary-foreground"
            >
              Back Home
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
