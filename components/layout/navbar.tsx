"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useTheme } from "next-themes"

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "The Dornier 228", href: "/fleet" },
  { label: "Routes", href: "/routes" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const transparentRoutes = ["/", "/about", "/fleet"]
  const isHome = transparentRoutes.includes(pathname)

  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Transparent when: on home page AND hasn't scrolled yet
  const isTransparent = isHome && !scrolled

  const logoSrc =
    isTransparent || resolvedTheme === "dark"
      ? "/images/logos/kasas-limited-white-logo.png"
      : "/images/logos/kasas-limited-black-logo.png"

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-6 transition-all duration-500 md:px-12",
        isTransparent
          ? "border-transparent bg-transparent"
          : "border-b border-border bg-background/80 backdrop-blur-sm"
      )}
    >
      {/* Logo */}
      <Link href="/" className="relative h-8 w-32">
        <Image
          src={logoSrc}
          alt="Kasas Limited"
          fill
          className="object-contain object-left transition-opacity duration-500"
          priority
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => {
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm transition-colors duration-500",
                isTransparent
                  ? isActive
                    ? "font-medium text-white"
                    : "text-white/70 hover:text-white"
                  : isActive
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className={cn(
                    "absolute right-0 -bottom-1 left-0 h-px",
                    isTransparent ? "bg-white" : "bg-foreground"
                  )}
                  transition={{
                    duration: 0.3,
                    ease: [0.33, 1, 0.68, 1] as const,
                  }}
                />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Desktop CTA */}
      <Link
        href="/contact"
        className={cn(
          "hidden h-10 items-center justify-center rounded-md px-5 text-sm font-medium transition-all duration-500 md:inline-flex",
          isTransparent
            ? "bg-white text-black hover:bg-white/90"
            : "bg-primary text-primary-foreground hover:opacity-90"
        )}
      >
        Book a Flight
      </Link>

      {/* Mobile nav */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <button
            aria-label="Open menu"
            className={cn(
              "transition-colors duration-500",
              isTransparent ? "text-white" : "text-foreground"
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="flex w-72 flex-col pt-16">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {pathname === link.href && (
                    <span className="mr-2 text-primary">—</span>
                  )}
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <div className="mt-auto pb-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a Flight
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </motion.header>
  )
}
