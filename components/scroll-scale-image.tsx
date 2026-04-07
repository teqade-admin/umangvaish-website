"use client"

import { useEffect, useRef, useState } from "react"

type ScrollScaleImageProps = {
  src: string
  alt: string
  className?: string
}

export function ScrollScaleImage({ src, alt, className = "" }: ScrollScaleImageProps) {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = imageRef.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -8% 0px",
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={`${className} transition-transform duration-700 ${isInView ? "scale-105" : "scale-100"}`}
    />
  )
}
