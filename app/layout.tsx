import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { withBasePath } from "@/lib/base-path"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "UV | Umang Vaish Bespoke Tailoring Since 1940",
  description:
    "Three generations of bespoke excellence. Custom suits, shirts, and tuxedos crafted from the finest Italian, English, and Indian fabrics.",
  generator: "v0.app",
  icons: {
    icon: "https://raw.githubusercontent.com/teqade-admin/website-v2/refs/heads/main/logo-green.ico",
    shortcut: "https://raw.githubusercontent.com/teqade-admin/website-v2/refs/heads/main/logo-green.ico",
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
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
