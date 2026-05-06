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
import { Menu, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useTheme } from "next-themes"
import { ContactForm } from "@/components/sections/contact/contact-form"

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "The Dornier 228", href: "/fleet" },
  { label: "Safari Charters", href: "/services/safari-charters" },
  { label: "Humanitarian Flights", href: "/services/humanitarian-flights" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  const transparentRoutes = ["/", "/about", "/fleet", "/services/safari-charters", "/services/humanitarian-flights", "/services/training", "/contact", "/services/maintenance"]  // routes where navbar starts transparent and becomes solid on scroll
  const isHome = transparentRoutes.includes(pathname)

  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Transparent when: on home page AND hasn't scrolled yet
  const isTransparent = isHome && !scrolled

  // Exclude resolvedTheme until mounted — server always sees it as undefined,
  // causing a mismatch if the client already has a persisted dark theme.
  const logoSrc =
    isTransparent || (mounted && resolvedTheme === "dark")
      ? "/images/logos/kasas-limited-white-logo.png"
      : "/images/logos/kasas-limited-black-logo.png"

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed z-50 flex items-center justify-between transition-all duration-500",
        isTransparent
          ? "inset-x-3 top-3 md:inset-x-6 md:top-4 h-14 px-3 md:px-5 rounded-full bg-black/25 backdrop-blur-md border border-white/10"
          : "inset-x-0 top-0 h-20 px-6 md:px-12 border-b border-border bg-background/80 backdrop-blur-sm"
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
                "relative text-sm font-semibold transition-colors duration-500",
                isTransparent
                  ? isActive
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                  : isActive
                    ? "text-foreground"
                    : "text-foreground/70 hover:text-foreground"
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
      <button
        onClick={() => setFormOpen(true)}
        className={cn(
          "group hidden relative overflow-hidden h-10 items-center gap-3 rounded-full pl-1.5 pr-5 text-sm font-medium transition-colors duration-500 md:inline-flex",
          isTransparent
            ? "border border-white/50 text-white hover:text-black"
            : "border border-primary text-primary hover:text-primary-foreground"
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute left-1.5 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full scale-100 group-hover:scale-[15] transition-transform duration-500 ease-in-out",
            isTransparent ? "bg-white" : "bg-primary"
          )}
        />
        <span className={cn(
          "relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-500",
          isTransparent ? "bg-white" : "bg-primary"
        )}>
          <ArrowUpRight className={cn(
            "h-3.5 w-3.5",
            isTransparent ? "text-black" : "text-primary-foreground"
          )} />
        </span>
        <span className="relative z-10">Book a Flight</span>
      </button>

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
        <SheetContent side="right" className="flex w-80 flex-col px-8 pt-0 pb-10">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

          {/* Drawer header */}
          <div className="flex h-20 shrink-0 items-center border-b border-border">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Menu
            </span>
          </div>

          {/* Staggered nav links */}
          <motion.nav
            className="mt-6 flex flex-col"
            initial="closed"
            animate={open ? "open" : "closed"}
            variants={{ open: { transition: { staggerChildren: 0.07 } }, closed: {} }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <motion.div
                  key={link.href}
                  variants={{
                    open:   { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 14 },
                  }}
                  transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between border-b border-border/50 py-5 text-xl font-medium transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                    {isActive && <ArrowUpRight className="h-4 w-4 shrink-0" />}
                  </Link>
                </motion.div>
              )
            })}
          </motion.nav>

          {/* CTA */}
          <motion.div
            className="mt-auto"
            initial={{ opacity: 0, y: 14 }}
            animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.4, delay: 0.38, ease: [0.33, 1, 0.68, 1] }}
          >
            <button
              onClick={() => { setOpen(false); setFormOpen(true) }}
              className="group relative overflow-hidden inline-flex w-full items-center gap-3 h-12 pl-1.5 pr-6 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-colors duration-500"
            >
              <span aria-hidden="true" className="absolute left-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-primary-foreground/15 scale-100 group-hover:scale-[20] transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <span className="relative z-10">Book a Flight</span>
            </button>
          </motion.div>

        </SheetContent>
      </Sheet>

      <ContactForm open={formOpen} onOpenChange={setFormOpen} />
    </motion.header>
  )
}
