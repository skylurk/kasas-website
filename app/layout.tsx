import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LenisProvider } from "@/components/layout/lenis-provider"
import { geist, fontMono } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { PageTransition } from "@/components/layout/page-transition"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: {
    default: "Kasas Limited Air Charter",
    template: "%s | Kasas Limited Air Charter",
  },
  description: "Private air charter services across East Africa.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(geist.variable, fontMono.variable, "font-sans antialiased")}
    >
      <body>
        <ThemeProvider>
          <LenisProvider>
            <PageTransition>
              <Navbar />
              {children}
              <Footer />
            </PageTransition>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
