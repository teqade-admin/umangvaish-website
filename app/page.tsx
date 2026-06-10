"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Instagram, Mail, MapPin, MessageCircle, Phone, Plus } from "lucide-react"
import { EmailModal } from "@/components/email-modal"
import { MobileNav } from "@/components/mobile-nav"
import { withBasePath } from "@/lib/base-path"

export default function Home() {
  const clientReviewsRef = useRef<HTMLDivElement>(null)
  const clientGalleryRef = useRef<HTMLDivElement>(null)
  const isClientReviewsPausedRef = useRef(false)
  const isClientGalleryPausedRef = useRef(false)

  const fabricGallery = [
    { name: "Loro Piana", country: "Italy", image: withBasePath("/images/fabrics/Fabric1.png") },
    { name: "Reda", country: "Italy", image: withBasePath("/images/fabrics/Fabric2.png") },
    { name: "Marzoni", country: "Italy", image: withBasePath("/images/fabrics/Fabric3.png") },
    { name: "Raymond", country: "India", image: withBasePath("/images/fabrics/Fabric4.png") },
    { name: "Tessitura Monti", country: "Italy", image: withBasePath("/images/fabrics/Fabric5.png") },
    { name: "Soktas", country: "Turkey", image: withBasePath("/images/fabrics/Fabric6.png") },
    { name: "Vitale Barberis Canonico", country: "Italy", image: withBasePath("/images/fabrics/Fabric7.png") },
    { name: "Ariston Napoli", country: "Italy", image: withBasePath("/images/fabrics/Fabric8.png") },
    { name: "Porter & Harding", country: "Scotland", image: withBasePath("/images/fabrics/Fabric9.png") },
    { name: "W. Bill", country: "England", image: withBasePath("/images/fabrics/Fabric10.png") },
  ]

  const clientReviews = [
    {
      name: "Aarav Mehra",
      occasion: "Wedding Suit",
      review:
        "The fit was immaculate from the first trial. Every detail felt considered, from the shoulder line to the final hand finish.",
    },
    {
      name: "Rohan Malhotra",
      occasion: "Business Wardrobe",
      review:
        "Umang Vaish understood exactly how I wanted to dress for work: sharp, comfortable, and understated. The suits have become my daily standard.",
    },
    {
      name: "Kabir Sethi",
      occasion: "Bespoke Blazer",
      review:
        "The team guided me through fabric, proportion, and styling with real patience. The finished blazer feels personal without being loud.",
    },
    {
      name: "Vikram Khanna",
      occasion: "Black Tie",
      review:
        "My tuxedo had the kind of balance that is difficult to describe until you wear it. Clean, elegant, and perfectly proportioned.",
    },
    {
      name: "Nikhil Batra",
      occasion: "Linen Suit",
      review:
        "The linen suit was light, structured, and beautifully finished. It handled a long summer event without ever feeling careless.",
    },
    {
      name: "Arjun Kapur",
      occasion: "Bandhgala",
      review:
        "The bandhgala felt rooted in tradition but completely current. The tailoring gave it presence without making it feel heavy.",
    },
  ]

  const clientGallery = [
    withBasePath("/images/clients/uv-testimonial-01.png"),
    withBasePath("/images/clients/uv-testimonial-02.png"),
    withBasePath("/images/clients/uv-testimonial-03.png"),
    withBasePath("/images/clients/uv-testimonial-04.png"),
    withBasePath("/images/clients/uv-testimonial-05.png"),
    withBasePath("/images/clients/uv-testimonial-06.png"),
    withBasePath("/images/clients/uv-testimonial-07.png"),
    withBasePath("/images/clients/uv-testimonial-08.png"),
    withBasePath("/images/clients/uv-testimonial-09.png"),
    withBasePath("/images/clients/uv-testimonial-10.png"),
    withBasePath("/images/clients/uv-testimonial-11.png"),
    withBasePath("/images/clients/uv-testimonial-12.png"),
  ]

  useEffect(() => {
    const reviews = clientReviewsRef.current
    const gallery = clientGalleryRef.current

    if ((!reviews && !gallery) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    let frameId = 0
    let previousTime = performance.now()
    const reviewScrollSpeed = 28
    const galleryScrollSpeed = 36

    const scrollArea = (element: HTMLDivElement | null, isPaused: boolean, speed: number, elapsedSeconds: number) => {
      if (!element || isPaused) {
        return
      }

      const maxScrollLeft = element.scrollWidth - element.clientWidth

      if (element.scrollLeft >= maxScrollLeft - 1) {
        element.scrollLeft = 0
      } else {
        element.scrollLeft += speed * elapsedSeconds
      }
    }

    const animateScrollers = (currentTime: number) => {
      const elapsedSeconds = (currentTime - previousTime) / 1000
      previousTime = currentTime

      scrollArea(reviews, isClientReviewsPausedRef.current, reviewScrollSpeed, elapsedSeconds)
      scrollArea(gallery, isClientGalleryPausedRef.current, galleryScrollSpeed, elapsedSeconds)

      frameId = requestAnimationFrame(animateScrollers)
    }

    frameId = requestAnimationFrame(animateScrollers)

    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <EmailModal />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 items-center h-20">
            {/* Left Nav */}
            <div className="flex items-center">
              <MobileNav
                links={[
                  { href: "#bespoke", label: "Bespoke" },
                  { href: "#collection", label: "Collection" },
                  { href: "#fabrics", label: "Fabrics" },
                  { href: withBasePath("/heritage"), label: "Heritage" },
                  { href: "#contact", label: "Book", isPrimary: true },
                ]}
              />
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
              <a href={withBasePath("/")} className="block" aria-label="Umang Vaish home">
                <img
                  src={withBasePath("/images/logo/uv-black.png")}
                  alt="Umang Vaish"
                  className="h-12 w-12 object-contain md:h-14 md:w-14"
                />
              </a>
            </div>

            {/* Right Nav */}
            <div className="flex items-center justify-end">
              <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase">
                <a href={withBasePath("/heritage")} className="text-foreground hover:text-muted-foreground transition-colors">
                  Heritage
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
              <div className="absolute inset-0">
                <picture className="block h-full w-full">
                  <source media="(max-width: 767px)" srcSet={withBasePath("/images/hero/hero-mobile.png")} />
                  <img
                    src={withBasePath("/images/hero/hero-desktop.png")}
                    alt="Umang Vaish Bespoke Tailors"
                    className="h-full w-full object-cover"
                  />
                </picture>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground text-center px-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] mb-4">UMANG VAISH</h1>
                <p className="text-xl md:text-2xl font-light tracking-[0.2em] mb-6">BESPOKE TAILORING HOUSE</p>
                <p className="text-sm md:text-base tracking-[0.15em] uppercase text-primary-foreground/80">From the House of D. Vaish & Sons</p>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-center gap-8 text-primary-foreground">
                <a
                  href="https://maps.app.goo.gl/EixMBhk92xL4g16Z6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
                >
                  Our Locations
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections - Horizontal Scroll */}
      <section id="collection" className="scroll-mt-20 py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Expertise</p>
              <h2 className="text-4xl md:text-5xl font-light text-foreground">What We Tailor</h2>
            </div>
            <a href="#collection" className="text-xs tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors hidden md:block">
              View All
            </a>
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-6 lg:px-12 pb-4">
            {[
              { title: "Suits", image: withBasePath("/images/collections/suits.png") },
              { title: "Nehru Jacket", image: withBasePath("/images/collections/nehru-jacket.png") },
              { title: "Bandhgala", image: withBasePath("/images/collections/bandhgala.png") },
              { title: "Outerwear", image: withBasePath("/images/collections/outwears.png") },
              { title: "Shirts", image: withBasePath("/images/collections/shirts.png") },
              { title: "Accessories", image: withBasePath("/images/collections/accessories.png") },
            ].map((item, i) => (
              <a
                key={i}
                href={`#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex-shrink-0 w-[300px] md:w-[400px] group cursor-pointer"
              >
                <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-primary/5" />
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
      <section id="client-experiences" className="py-24 bg-muted/30">
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
              { title: "Pattern Making", subtitle: "The Foundation", image: withBasePath("/images/crafts/Pattern Making .png") },
              { title: "Hand Stitching", subtitle: "Traditional Craft", image: withBasePath("/images/crafts/Hand stitching .png") },
              { title: "Canvas Work", subtitle: "The Structure", image: withBasePath("/images/crafts/Canvas work .png") },
              { title: "Fitting Session", subtitle: "Perfection", image: withBasePath("/images/crafts/Fitting session .png") },
              { title: "Final Details", subtitle: "The Finish", image: withBasePath("/images/crafts/Final Details.png") },
              { title: "Quality Check", subtitle: "Excellence", image: withBasePath("/images/crafts/Quality Check.png") },
            ].map((video, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[220px] md:w-[280px] group cursor-pointer"
              >
                <div className="bg-primary/10 overflow-hidden relative">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                  />
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
                <video
                  src={withBasePath("/videos/bespoke.mp4")}
                  autoPlay
                  muted
                  playsInline
                  onLoadedMetadata={(event) => {
                    event.currentTarget.currentTime = 2
                  }}
                  onEnded={(event) => {
                    event.currentTarget.currentTime = 2
                    void event.currentTarget.play()
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabrics Section */}
      <section id="fabrics" className="relative overflow-hidden py-32 bg-primary text-primary-foreground">
        <img
          src={withBasePath("/images/fabrics/15.jpg")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-primary/62" />
        <div className="container relative mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/70 mb-6">Materials</p>
            <h2 className="text-4xl md:text-6xl font-light mb-8">The Finest Fabrics</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Every garment begins with exceptional cloth. Chosen for drape, character and longevity, our fabrics
              come from some of the world’s most respected mills.
            </p>
          </div>

        </div>
      </section>

      {/* Fabric Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Fabric Gallery</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground">Fabric Collection</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
            {fabricGallery.map((fabric, i) => (
              <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-md bg-muted">
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                  <p className="max-w-[calc(100%-1rem)] text-[10px] font-medium leading-tight text-primary-foreground md:max-w-none md:text-sm">
                    {fabric.name}
                  </p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-primary-foreground/70 md:text-[10px]">
                    {fabric.country}
                  </p>
                </div>
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
                  src={withBasePath("/images/heritage/Three generations.png")}
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
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <a
                  href={withBasePath("/heritage")}
                  className="inline-block text-xs tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
                >
                  Explore the Full Story
                </a>
              </div>
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

      {/* Client Reviews Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-12 max-w-3xl">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">In Their Words</p>
              <h2 className="text-4xl md:text-5xl font-light text-foreground">Client Experiences</h2>
            </div>
          </div>
        </div>

        <div
          ref={clientReviewsRef}
          onMouseEnter={() => {
            isClientReviewsPausedRef.current = true
          }}
          onMouseLeave={() => {
            isClientReviewsPausedRef.current = false
          }}
          onTouchStart={() => {
            isClientReviewsPausedRef.current = true
          }}
          onTouchEnd={() => {
            isClientReviewsPausedRef.current = false
          }}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex w-max gap-6 px-6 pb-4 lg:px-12">
            {clientReviews.map((review) => (
              <article
                key={review.name}
                className="flex min-h-[320px] w-[300px] flex-shrink-0 flex-col justify-between border border-border bg-background p-8 md:w-[420px]"
              >
                <div>
                  <p className="text-9xl font-light leading-none text-muted-foreground/40">&ldquo;</p>
                  <p className="text-lg font-light leading-relaxed text-foreground">&ldquo;{review.review}&rdquo;</p>
                </div>
                <div className="mt-10 border-t border-border pt-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {review.occasion}
                  </p>
                  <p className="text-sm uppercase tracking-[0.15em] text-foreground">{review.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Client Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Tailored For Them</p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground">Client Gallery</h2>
          </div>
        </div>

        <div
          ref={clientGalleryRef}
          onMouseEnter={() => {
            isClientGalleryPausedRef.current = true
          }}
          onMouseLeave={() => {
            isClientGalleryPausedRef.current = false
          }}
          onTouchStart={() => {
            isClientGalleryPausedRef.current = true
          }}
          onTouchEnd={() => {
            isClientGalleryPausedRef.current = false
          }}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex w-max gap-6 px-6 pb-4 lg:px-12">
            {clientGallery.map((image, i) => (
              <article key={image} className="w-[260px] flex-shrink-0 group md:w-[340px]">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={image}
                    alt={`Client testimonial ${i + 1}`}
                    className="h-full w-full scale-[1.04] object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-[1.08]"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative overflow-hidden py-32 text-secondary-foreground">
        <img
          src={withBasePath("/images/appointment/appointment.jpg")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/92" />
        <div className="container relative mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-secondary-foreground/70 mb-6">Begin Your Journey</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8">Book an Appointment</h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Visit our atelier and experience the art of bespoke tailoring. 
            Our team will guide you through every step of creating your perfect garment.
          </p>
          <a 
            href="mailto:info@umangvaishbespoke.com" 
            className="inline-block border border-secondary-foreground bg-secondary-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] text-secondary transition-colors hover:bg-transparent hover:text-secondary-foreground"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-background/20 bg-foreground text-background">
        <div className="hidden md:block">
          <div className="container mx-auto grid grid-cols-[1.1fr_1fr_1.35fr_1.35fr] px-6 py-16 lg:px-12">
            <div className="pr-12">
              <img
                src={withBasePath("/images/logo/uv-white.png")}
                alt="Umang Vaish"
                className="mb-8 h-20 w-20 object-contain"
              />
              <p className="max-w-[220px] text-base font-medium leading-8 text-background/75">
                Bespoke tailoring that celebrates individuality, craftsmanship and timeless style.
              </p>
              <div className="mt-8 flex items-center gap-5">
                <a href="#" aria-label="Instagram" className="text-background/80 transition-colors hover:text-background">
                  <Instagram className="h-7 w-7" />
                </a>
                <a href="#" aria-label="WhatsApp" className="text-background/80 transition-colors hover:text-background">
                  <MessageCircle className="h-7 w-7" />
                </a>
              </div>
            </div>

            <div className="border-l border-background/20 px-12">
              <p className="mb-9 text-sm font-semibold uppercase tracking-[0.28em]">Quick Links</p>
              <nav className="flex flex-col gap-5 text-base font-medium text-background/75">
                <a href="#bespoke" className="transition-colors hover:text-background">Bespoke</a>
                <a href="#collection" className="transition-colors hover:text-background">The Process</a>
                <a href={withBasePath("/heritage")} className="transition-colors hover:text-background">About</a>
                <a href="#client-experiences" className="transition-colors hover:text-background">Testimonials</a>
                <a href="#contact" className="transition-colors hover:text-background">Atelier</a>
              </nav>
            </div>

            <div className="border-l border-background/20 px-12">
              <p className="mb-9 text-sm font-semibold uppercase tracking-[0.28em]">Contact</p>
              <div className="space-y-7 text-base font-medium text-background/75">
                <p className="flex items-center gap-6">
                  <Phone className="h-7 w-7 flex-shrink-0 text-background" />
                  <span>+91 XXX XXX XXXX</span>
                </p>
                <p className="flex items-center gap-6">
                  <Mail className="h-7 w-7 flex-shrink-0 text-background" />
                  <span>info@umangvaishbespoke.com</span>
                </p>
                <p className="flex items-center gap-6">
                  <MapPin className="h-7 w-7 flex-shrink-0 text-background" />
                  <span>By Appointment Only</span>
                </p>
              </div>
            </div>

            <div className="border-l border-background/20 pl-12">
              <p className="mb-9 text-sm font-semibold uppercase tracking-[0.28em]">Stay Connected</p>
              <p className="mb-10 max-w-[280px] text-base font-medium leading-8 text-background/75">
                Subscribe for updates and exclusive invites.
              </p>
              <form className="flex max-w-[360px]" action="#">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-16 min-w-0 flex-1 border border-background/35 bg-transparent px-6 text-base text-background placeholder:text-background/60 outline-none focus:border-background"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="flex h-16 w-20 items-center justify-center bg-background text-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-7 w-7" />
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-background/20">
            <div className="container mx-auto flex items-center justify-between px-6 py-8 text-sm font-medium text-background/75 lg:px-12">
              <p>© {new Date().getFullYear()} Umang Vaish Bespoke. All Rights Reserved.</p>
              <div className="flex items-center gap-8">
                <a href="#" className="transition-colors hover:text-background">Privacy Policy</a>
                <span className="text-background/40">|</span>
                <a href="#" className="transition-colors hover:text-background">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex items-start justify-between gap-6 border-b border-background/20 px-6 py-8">
            <div className="flex gap-6">
              <img
                src={withBasePath("/images/logo/uv-white.png")}
                alt="Umang Vaish"
                className="h-14 w-14 flex-shrink-0 object-contain"
              />
              <p className="max-w-[170px] text-sm font-medium leading-6 text-background/75">
                Bespoke tailoring that celebrates individuality, craftsmanship and timeless style.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-1">
              <a href="#" aria-label="Instagram" className="text-background/80">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="WhatsApp" className="text-background/80">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          <details className="group border-b border-background/20">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-sm font-semibold uppercase tracking-[0.28em]">
              Quick Links
              <Plus className="h-5 w-5 transition-transform group-open:rotate-45" />
            </summary>
            <nav className="flex flex-col gap-4 px-6 pb-6 text-sm font-medium text-background/75">
              <a href="#bespoke">Bespoke</a>
              <a href="#collection">The Process</a>
              <a href={withBasePath("/heritage")}>About</a>
              <a href="#client-experiences">Testimonials</a>
              <a href="#contact">Atelier</a>
            </nav>
          </details>

          <details className="group border-b border-background/20">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-sm font-semibold uppercase tracking-[0.28em]">
              Contact
              <Plus className="h-5 w-5 transition-transform group-open:rotate-45" />
            </summary>
            <div className="space-y-5 px-6 pb-6 text-sm font-medium text-background/75">
              <p className="flex items-center gap-4"><Phone className="h-5 w-5 text-background" /> +91 XXX XXX XXXX</p>
              <p className="flex items-center gap-4"><Mail className="h-5 w-5 text-background" /> info@umangvaishbespoke.com</p>
              <p className="flex items-center gap-4"><MapPin className="h-5 w-5 text-background" /> By Appointment Only</p>
            </div>
          </details>

          <details className="group border-b border-background/20">
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-sm font-semibold uppercase tracking-[0.28em]">
              Stay Connected
              <Plus className="h-5 w-5 transition-transform group-open:rotate-45" />
            </summary>
            <div className="px-6 pb-6">
              <p className="mb-5 text-sm font-medium leading-6 text-background/75">
                Subscribe for updates and exclusive invites.
              </p>
              <form className="flex" action="#">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="h-12 min-w-0 flex-1 border border-background/35 bg-transparent px-4 text-sm text-background placeholder:text-background/60 outline-none focus:border-background"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="flex h-12 w-14 items-center justify-center bg-background text-foreground"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </details>

          <div className="px-6 py-6 text-center text-sm font-medium text-background/75">
            <p>© {new Date().getFullYear()} Umang Vaish Bespoke.</p>
            <p>All Rights Reserved.</p>
            <div className="mt-7 flex items-center justify-center gap-5">
              <a href="#">Privacy Policy</a>
              <span className="text-background/40">|</span>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
