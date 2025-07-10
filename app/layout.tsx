import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Damar Tri Khalandra - Pengembang Web Full-Stack",
  description:
    "Pengembang web full-stack profesional yang spesialisasi dalam teknologi web modern. Membangun aplikasi yang scalable dengan kode yang bersih dan efisien.",
  keywords: ["pengembang web", "full-stack", "react", "next.js", "javascript", "typescript", "indonesia"],
  authors: [{ name: "Damar Tri Khalandra" }],
  creator: "Damar Tri Khalandra",
  openGraph: {
    title: "Damar Tri Khalandra - Pengembang Web Full-Stack",
    description: "Pengembang web full-stack profesional yang spesialisasi dalam teknologi web modern.",
    url: "https://damar-khalandra.vercel.app",
    siteName: "Portofolio Damar Tri Khalandra",
    images: [
      {
        url: "/images/damar-profile.jpg",
        width: 800,
        height: 600,
        alt: "Damar Tri Khalandra",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damar Tri Khalandra - Pengembang Web Full-Stack",
    description: "Pengembang web full-stack profesional yang spesialisasi dalam teknologi web modern.",
    images: ["/images/damar-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
