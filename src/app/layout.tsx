import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VISCONTI - 优雅生活，始于设计",
  description: "VISCONTI家具，将意大利的设计美学与东方的生活哲学完美融合",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
