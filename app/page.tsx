"use client"

import { Button } from "@/components/ui/button"
import { Menu, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { EmailModal } from "@/components/email-modal"
import { withBasePath } from "@/lib/base-path"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <EmailModal />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 items-center h-20">
            {/* Left Nav */}
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase">
                <a href="#bespoke" className="text-foreground hover:text-muted-foreground transition-colors">
                  Bespoke
                </a>
                <a href="#collection" className="text-foreground hover:text-muted-foreground transition-colors">
                  Collection
                </a>
                <a href="#fabrics" className="text-foreground hover:text-muted-foreground transition-colors">
                  Fabrics
                </a>
              </nav>
            </div>

            {/* Center Logo */}
            <div className="flex justify-center">
              <a href={withBasePath("/")} className="text-3xl md:text-4xl font-light tracking-[0.3em] text-foreground">
                UV
              </a>
            </div>

            {/* Right Nav */}
            <div className="flex items-center justify-end">
              <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase">
                <a href="#heritage" className="text-foreground hover:text-muted-foreground transition-colors">
                  Heritage
                </a>
                <a href="#contact" className="text-foreground hover:text-muted-foreground transition-colors">
                  Contact
                </a>
                <a 
                  href="#contact" 
                  className="text-foreground border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
                >
                  Book
                </a>
              </nav>
              <div className="w-10 md:hidden" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Slider Section */}
      <section className="pt-20">
        <div className="relative h-[90vh] overflow-hidden">
          {/* Hero Slides */}
          <div className="flex h-full transition-transform duration-700">
            <div className="min-w-full h-full relative">
              <div className="absolute inset-0 bg-primary/90">
                <img
                  src={withBasePath("/images/hero-showroom.jpg")}
                  alt="Umang Vaish Bespoke Tailors"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground text-center px-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] mb-4">UMANG VAISH</h1>
                <p className="text-xl md:text-2xl font-light tracking-[0.2em] mb-6">Bespoke Tailors</p>
                <p className="text-sm md:text-base tracking-[0.15em] uppercase text-primary-foreground/80">From the House of D. Vaish & Sons</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Bottom Links */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-center gap-8 text-primary-foreground">
                <a href="#locations" className="text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">
                  Our Locations
                </a>
                <span className="text-primary-foreground/40">|</span>
                <a href="#bespoke" className="text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">
                  Discover Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections - Horizontal Scroll */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Collections</p>
              <h2 className="text-4xl md:text-5xl font-light text-foreground">Featured</h2>
            </div>
            <a href="#collection" className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors hidden md:block">
              View All
            </a>
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-6 lg:px-12 pb-4">
            {[
              { title: "Suits", image: withBasePath("/images/collection-suits.jpg") },
              { title: "Jackets", image: withBasePath("/images/collection-jackets.jpg") },
              { title: "Outerwear", image: withBasePath("/images/collection-outerwear.jpg") },
              { title: "Shirts", image: withBasePath("/images/collection-shirts.jpg") },
              { title: "Accessories", image: withBasePath("/images/collection-accessories.jpg") },
            ].map((item, i) => (
              <a
                key={i}
                href={`#${item.title.toLowerCase()}`}
                className="flex-shrink-0 w-[300px] md:w-[400px] group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-muted overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm tracking-[0.2em] uppercase text-foreground group-hover:text-muted-foreground transition-colors">
                  {item.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Portrait Videos Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Behind The Scenes</p>
              <h2 className="text-4xl md:text-5xl font-light text-foreground">The Craft</h2>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-6 lg:px-12 pb-4">
            {[
              { title: "Pattern Making", subtitle: "The Foundation", image: withBasePath("/images/craft-pattern.jpg") },
              { title: "Hand Stitching", subtitle: "Traditional Craft", image: withBasePath("/images/craft-stitching.jpg") },
              { title: "Canvas Work", subtitle: "The Structure", image: withBasePath("/images/craft-canvas.jpg") },
              { title: "Fitting Session", subtitle: "Perfection", image: withBasePath("/images/craft-fitting.jpg") },
              { title: "Final Details", subtitle: "The Finish", image: withBasePath("/images/craft-details.jpg") },
              { title: "Quality Check", subtitle: "Excellence", image: withBasePath("/images/craft-quality.jpg") },
            ].map((video, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[220px] md:w-[280px] group cursor-pointer"
              >
                <div className="aspect-[9/16] bg-primary/10 overflow-hidden relative">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center">
                      <Play className="w-5 h-5 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                    <p className="text-xs tracking-[0.2em] uppercase text-background/80 mb-1">{video.subtitle}</p>
                    <p className="text-sm tracking-wide text-background font-medium">{video.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Section */}
      <section id="bespoke" className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">The Art of Bespoke</p>
              <h2 className="text-4xl md:text-6xl font-light leading-tight text-foreground mb-8">
                Crafted exclusively for you
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every garment begins with a conversation. Understanding your lifestyle, preferences, and aspirations 
                allows us to create pieces that are truly yours. From the first measurement to the final stitch, 
                each detail is considered.
              </p>
              <a 
                href="#contact" 
                className="inline-block text-xs tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
              >
                Book a Consultation
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] bg-muted">
                <img
                  src={withBasePath("/images/bespoke-consultation.jpg")}
                  alt="Bespoke Consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabrics Section */}
      <section id="fabrics" className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/70 mb-6">Materials</p>
            <h2 className="text-4xl md:text-6xl font-light mb-8">The Finest Fabrics</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              We source exclusively from the world's most prestigious mills. 
              Each fabric is selected for its quality, character, and longevity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/20">
            {[
              { mill: "Loro Piana", origin: "Italy", specialty: "Cashmere & Wool" },
              { mill: "Holland & Sherry", origin: "England", specialty: "Worsted Wool" },
              { mill: "Dormeuil", origin: "France", specialty: "Luxury Suiting" },
            ].map((fabric, i) => (
              <div key={i} className="bg-primary p-12 text-center">
                <p className="text-2xl font-light mb-2">{fabric.mill}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">{fabric.origin}</p>
                <p className="text-sm text-primary-foreground/80">{fabric.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section id="heritage" className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="aspect-[4/5] bg-muted">
                <img
                  src={withBasePath("/images/heritage.jpg")}
                  alt="Heritage"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Since 1940</p>
              <h2 className="text-4xl md:text-6xl font-light leading-tight text-foreground mb-8">
                Three Generations of Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                What began as a small atelier has grown into one of India's most respected bespoke houses. 
                Our commitment to craftsmanship remains unchanged.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Each generation has added to our legacy while preserving the techniques and values 
                that define the house of Umang Vaish.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                {[
                  { number: "1940", label: "Founded" },
                  { number: "3rd", label: "Generation" },
                  { number: "10K+", label: "Garments" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl md:text-4xl font-light text-foreground mb-1">{stat.number}</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Journal</p>
              <h2 className="text-4xl md:text-5xl font-light text-foreground">Latest Stories</h2>
            </div>
            <a href="#journal" className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors hidden md:block">
              More Articles
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The Perfect Fit: Understanding Bespoke", category: "Craft", image: withBasePath("/images/journal-fitting.jpg") },
              { title: "Fabric Guide: Summer Linens", category: "Materials", image: withBasePath("/images/journal-linen.jpg") },
              { title: "Style Notes: The Navy Blazer", category: "Style", image: withBasePath("/images/journal-blazer.jpg") },
            ].map((article, i) => (
              <a key={i} href="#" className="group">
                <div className="aspect-[4/3] bg-muted overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{article.category}</p>
                <h3 className="text-lg font-light text-foreground group-hover:text-muted-foreground transition-colors">
                  {article.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-secondary-foreground/70 mb-6">Begin Your Journey</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8">Book an Appointment</h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Visit our atelier and experience the art of bespoke tailoring. 
            Our team will guide you through every step of creating your perfect garment.
          </p>
          <a 
            href="mailto:info@umangvaishbespoke.com" 
            className="inline-block text-xs tracking-[0.2em] uppercase text-secondary-foreground border border-secondary-foreground px-8 py-4 hover:bg-secondary-foreground hover:text-secondary transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <p className="text-3xl font-light tracking-[0.3em] mb-6">UV</p>
              <p className="text-sm text-background/60 leading-relaxed">
                Premium Bespoke Tailors<br />Since 1940
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-6">Navigation</p>
              <nav className="flex flex-col gap-3 text-sm text-background/70">
                <a href="#bespoke" className="hover:text-background transition-colors">Bespoke</a>
                <a href="#collection" className="hover:text-background transition-colors">Collection</a>
                <a href="#fabrics" className="hover:text-background transition-colors">Fabrics</a>
                <a href="#heritage" className="hover:text-background transition-colors">Heritage</a>
              </nav>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-6">Visit</p>
              <p className="text-sm text-background/70 leading-relaxed">
                Connaught Place<br />
                New Delhi, India<br />
                <br />
                By Appointment Only
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-6">Contact</p>
              <p className="text-sm text-background/70 leading-relaxed">
                +91 XXX XXX XXXX<br />
                info@umangvaishbespoke.com
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-background/50">
              © {new Date().getFullYear()} Umang Vaish. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-background/50">
              <a href="#" className="hover:text-background transition-colors">Privacy</a>
              <a href="#" className="hover:text-background transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
