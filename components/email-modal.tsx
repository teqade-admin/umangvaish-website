"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

export function EmailModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log("[v0] Email submitted:", email)
    setIsOpen(false)
    setEmail("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

      {/* Modal */}
      <div className="relative bg-background border border-border shadow-2xl max-w-md w-full p-8 md:p-10">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Newsletter</p>
          <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4 text-balance">Join Our Mailing List</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Stay up to date with our new arrivals, collection launches and all of the news from Umang Vaish Bespoke.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-12 text-base"
          />
          <Button type="submit" className="w-full h-12 bg-foreground hover:bg-foreground/90 text-background text-xs tracking-[0.2em] uppercase">
            Subscribe
          </Button>
        </form>

        {/* Privacy Note */}
        <p className="text-xs text-muted-foreground text-center mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}
