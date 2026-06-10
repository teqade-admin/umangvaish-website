import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { withBasePath } from "@/lib/base-path"
import "./globals.css"

const cormorantGaramond = localFont({
  src: [
    { path: "../public/fonts/cormorant-garamond/cormorant-garamond-300.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/cormorant-garamond/cormorant-garamond-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/cormorant-garamond/cormorant-garamond-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/cormorant-garamond/cormorant-garamond-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/cormorant-garamond/cormorant-garamond-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-cormorant-garamond",
  display: "swap",
})

const neueHaasGrotesk = localFont({
  src: [
    { path: "../public/fonts/neue-haas-grotesk/NeueHaasGrotText-55Roman-Trial.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/neue-haas-grotesk/NeueHaasGrotText-56Italic-Trial.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/neue-haas-grotesk/NeueHaasGrotText-65Medium-Trial.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/neue-haas-grotesk/NeueHaasGrotText-66MediumItalic-Trial.otf", weight: "500", style: "italic" },
    { path: "../public/fonts/neue-haas-grotesk/NeueHaasGrotText-75Bold-Trial.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/neue-haas-grotesk/NeueHaasGrotText-76BoldItalic-Trial.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-neue-haas-grotesk",
  display: "swap",
})

const suisseInternational = localFont({
  src: [
    { path: "../public/fonts/suisse-international/SuisseIntlTrial-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/suisse-international/SuisseIntlTrial-LightIt.otf", weight: "300", style: "italic" },
    { path: "../public/fonts/suisse-international/SuisseIntlTrial-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/suisse-international/SuisseIntlTrial-RegularIt.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/suisse-international/SuisseIntlTrial-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/suisse-international/SuisseIntlTrial-MediumIt.otf", weight: "500", style: "italic" },
    { path: "../public/fonts/suisse-international/SuisseIntlTrial-Semibold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/suisse-international/SuisseIntlTrial-SemiboldIt.otf", weight: "600", style: "italic" },
    { path: "../public/fonts/suisse-international/SuisseIntlTrial-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/suisse-international/SuisseIntlTrial-BoldIt.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-suisse-international",
  display: "swap",
})

export const metadata: Metadata = {
  title: "UV | Umang Vaish Bespoke Tailoring Since 1940",
  description:
    "Three generations of bespoke excellence. Custom suits, shirts, and tuxedos crafted from the finest Italian, English, and Indian fabrics.",
  generator: "v0.app",
  icons: {
    icon: withBasePath("/images/uv-logo-white-32.png"),
    shortcut: withBasePath("/images/uv-logo-white-32.png"),
    apple: withBasePath("/apple-icon.png"),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} ${neueHaasGrotesk.variable} ${suisseInternational.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
