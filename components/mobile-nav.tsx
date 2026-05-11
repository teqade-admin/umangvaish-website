"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type MobileNavLink = {
  href: string
  label: string
  isPrimary?: boolean
}

type MobileNavProps = {
  links: MobileNavLink[]
  variant?: "default" | "primary"
}

export function MobileNav({ links, variant = "default" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isPrimary = variant === "primary"

  const panelClass = isPrimary
    ? "border-primary-foreground/15 bg-primary text-primary-foreground"
    : "border-border bg-background text-foreground"

  const linkClass = isPrimary
    ? "text-primary-foreground hover:text-primary-foreground/70"
    : "text-foreground hover:text-muted-foreground"

  const ctaClass = isPrimary
    ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
    : "border-foreground text-foreground hover:bg-foreground hover:text-background"

  return (
    <div className="md:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className={`fixed inset-x-0 top-20 z-50 border-b ${panelClass}`}>
          <nav className="container mx-auto flex flex-col gap-1 px-6 py-6 lg:px-12">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-1 py-4 text-sm uppercase tracking-[0.2em] transition-colors ${
                  link.isPrimary ? `mt-3 border px-5 text-center ${ctaClass}` : linkClass
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
