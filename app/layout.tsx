import "./globals.css"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import StructuredData from "./components/StructuredData"
import WhatsAppWidget from "./components/WhatsAppWidget"
import type React from "react" // Added import for React
import { Suspense } from "react"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: {
    default: "Madame Chu - Modern Vietnamese Cuisine",
    template: "%s | Madame Chu",
  },
  description:
    "Experience the vibrant flavors of Vietnam in the heart of Singapore. Madame Chu offers a sophisticated twist on beloved Vietnamese and Chinese cuisine.",
  keywords: ["Vietnamese cuisine", "Chinese cuisine", "Singapore restaurant", "Madame Chu"],
  authors: [{ name: "Madame Chu" }],
  creator: "Madame Chu",
  metadataBase: new URL("https://madamechu.com"),
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://madamechu.com",
    siteName: "Madame Chu",
    images: [
      {
        url: "https://madamechu.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Madame Chu - Modern Vietnamese Cuisine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@madamechu",
    creator: "@madamechu",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StructuredData />
        <Suspense fallback={null}>{children}</Suspense>
        <WhatsAppWidget phoneNumber="6582054725" />
        <Analytics />
      </body>
    </html>
  )
}
