import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { withBasePath } from "@/lib/base-path"
import "./globals.css"

const fontUrl = (path: string) => `url("${withBasePath(path)}")`

const fontFaceCss = `
@font-face {
  font-family: "Cormorant Garamond";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: ${fontUrl("/fonts/cormorant-garamond/cormorant-garamond-300.ttf")} format("truetype");
}

@font-face {
  font-family: "Cormorant Garamond";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: ${fontUrl("/fonts/cormorant-garamond/cormorant-garamond-400.ttf")} format("truetype");
}

@font-face {
  font-family: "Cormorant Garamond";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: ${fontUrl("/fonts/cormorant-garamond/cormorant-garamond-500.ttf")} format("truetype");
}

@font-face {
  font-family: "Cormorant Garamond";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: ${fontUrl("/fonts/cormorant-garamond/cormorant-garamond-600.ttf")} format("truetype");
}

@font-face {
  font-family: "Cormorant Garamond";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: ${fontUrl("/fonts/cormorant-garamond/cormorant-garamond-700.ttf")} format("truetype");
}

@font-face {
  font-family: "Neue Haas Grotesk";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: ${fontUrl("/fonts/neue-haas-grotesk/NeueHaasGrotText-55Roman-Trial.otf")} format("opentype");
}

@font-face {
  font-family: "Neue Haas Grotesk";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: ${fontUrl("/fonts/neue-haas-grotesk/NeueHaasGrotText-56Italic-Trial.otf")} format("opentype");
}

@font-face {
  font-family: "Neue Haas Grotesk";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: ${fontUrl("/fonts/neue-haas-grotesk/NeueHaasGrotText-65Medium-Trial.otf")} format("opentype");
}

@font-face {
  font-family: "Neue Haas Grotesk";
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: ${fontUrl("/fonts/neue-haas-grotesk/NeueHaasGrotText-66MediumItalic-Trial.otf")} format("opentype");
}

@font-face {
  font-family: "Neue Haas Grotesk";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: ${fontUrl("/fonts/neue-haas-grotesk/NeueHaasGrotText-75Bold-Trial.otf")} format("opentype");
}

@font-face {
  font-family: "Neue Haas Grotesk";
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: ${fontUrl("/fonts/neue-haas-grotesk/NeueHaasGrotText-76BoldItalic-Trial.otf")} format("opentype");
}

@font-face {
  font-family: "Suisse International";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: ${fontUrl("/fonts/suisse-international/SuisseIntlTrial-Light.otf")} format("opentype");
}

@font-face {
  font-family: "Suisse International";
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: ${fontUrl("/fonts/suisse-international/SuisseIntlTrial-LightIt.otf")} format("opentype");
}

@font-face {
  font-family: "Suisse International";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: ${fontUrl("/fonts/suisse-international/SuisseIntlTrial-Regular.otf")} format("opentype");
}

@font-face {
  font-family: "Suisse International";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: ${fontUrl("/fonts/suisse-international/SuisseIntlTrial-RegularIt.otf")} format("opentype");
}

@font-face {
  font-family: "Suisse International";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: ${fontUrl("/fonts/suisse-international/SuisseIntlTrial-Medium.otf")} format("opentype");
}

@font-face {
  font-family: "Suisse International";
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: ${fontUrl("/fonts/suisse-international/SuisseIntlTrial-MediumIt.otf")} format("opentype");
}

@font-face {
  font-family: "Suisse International";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: ${fontUrl("/fonts/suisse-international/SuisseIntlTrial-Semibold.otf")} format("opentype");
}

@font-face {
  font-family: "Suisse International";
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: ${fontUrl("/fonts/suisse-international/SuisseIntlTrial-SemiboldIt.otf")} format("opentype");
}

@font-face {
  font-family: "Suisse International";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: ${fontUrl("/fonts/suisse-international/SuisseIntlTrial-Bold.otf")} format("opentype");
}

@font-face {
  font-family: "Suisse International";
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: ${fontUrl("/fonts/suisse-international/SuisseIntlTrial-BoldIt.otf")} format("opentype");
}
`

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
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontFaceCss }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
