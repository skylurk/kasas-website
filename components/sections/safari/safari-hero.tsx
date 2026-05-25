"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { ContactForm } from "@/components/sections/contact/contact-form"

const slides = [
  {
    src:      "/images/images/safari/kasas-kenya-safari-charters-boating.jpg",
    alt:      "Private charter aircraft on bush airstrip at golden hour",
    title:    "Fly Into the Wild",
    subtitle: "Direct access to East Africa's most iconic safari destinations.",
  },
  {
    src:      "/images/images/safari/kasas-limited-the-mara-way.webp",
    alt:      "Aerial view of Masai Mara savannah from private charter",
    title:    "The Mara, Your Way",
    subtitle: "Land directly in the reserve. No roads. No delays. Just wilderness.",
  },
  {
    src:      "/images/images/safari/kasas-kenya-safari-charters-lion.jpg",
    alt:      "Elephant herd viewed from low-flying charter aircraft",
    title:    "A Different Perspective",
    subtitle: "See Africa the way few ever will — from above and up close.",
  },
  {
    src:      "/images/images/safari/kasas-limited-where-the-road-ends.webp",
    alt:      "Kasas charter aircraft parked at remote bush airstrip",
    title:    "Where Roads End",
    subtitle: "We land where others can't. Unpaved strips, remote camps, no problem.",
  },
  {
    src:      "/images/images/safari/kasas-kenya-safari-charters-zebra.jpg",
    alt:      "Sunset over savannah seen from private charter window",
    title:    "On Your Schedule",
    subtitle: "Depart when you choose. Stay as long as you like.",
  },
]

const SLIDE_DURATION = 5000

export function SafariHero() {
  const [current, setCurrent]   = useState(0)
  const [progress, setProgress] = useState(0)
  const [formOpen, setFormOpen] = useState(false)
  const intervalRef             = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef             = useRef<ReturnType<typeof setInterval> | null>(null)

  const goToSlide = useCallback((index: number) => {
    setCurrent(index)
    setProgress(0)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [])

  const startProgress = useCallback(() => {
    if (progressRef.current) clearInterval(progressRef.current)
    setProgress(0)
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + (50 / SLIDE_DURATION) * 100
      })
    }, 50)
  }, [])

  useEffect(() => {
    startProgress()
    intervalRef.current = setInterval(nextSlide, SLIDE_DURATION)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [current, nextSlide, startProgress])

  const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])

  return (
    <>
    <section className="relative h-screen w-full overflow-hidden">

      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 0.8, ease: "linear" }}
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              priority={current === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Warm gradient overlay — heavier at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 z-10" />

      {/* Warm amber tint — very subtle */}
      <div className="absolute inset-0 bg-amber-950/10 z-10 pointer-events-none" />

      {/* Text content — bottom left */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-16 pb-28 md:pb-36 max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{  opacity: 0, y: -16  }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
            className="flex flex-col gap-4"
          >
            {/* Eyebrow */}
            <motion.p className="text-amber-400/80 text-xs font-semibold uppercase tracking-widest">
              Safari Charters
            </motion.p>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-none">
              {slides[current].title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/60 text-lg md:text-xl max-w-lg leading-relaxed">
              {slides[current].subtitle}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 pt-2">
              {/* Filled amber button — dark circle expands on hover */}
              <button
                onClick={() => setFormOpen(true)}
                className="group relative overflow-hidden inline-flex items-center gap-3 h-12 pl-1.5 pr-6 rounded-full bg-amber-500 text-black text-sm font-medium transition-colors duration-500 hover:text-white"
              >
                <span aria-hidden="true" className="absolute left-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-zinc-900 scale-100 group-hover:scale-[20] transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </span>
                <span className="relative z-10">Plan Your Charter</span>
              </button>

              {/* Outline button — white circle expands on hover */}
              <Link
                href="#destinations"
                className="group relative overflow-hidden inline-flex items-center gap-3 h-12 pl-1.5 pr-6 rounded-full border border-white/30 text-white text-sm font-medium transition-colors duration-500 hover:text-black"
              >
                <span aria-hidden="true" className="absolute left-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white scale-100 group-hover:scale-[20] transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                  <ArrowUpRight className="h-4 w-4 text-black" />
                </span>
                <span className="relative z-10">View Destinations</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots — bottom right on desktop, bottom center on mobile */}
      <div className="absolute bottom-10 right-6 md:right-16 z-30 flex items-center gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative flex items-center justify-center w-6 h-6"
          >
            {/* Static dot */}
            <span
              className={cn(
                "block rounded-full transition-all duration-300",
                i === current
                  ? "w-2 h-2 bg-amber-400"
                  : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
              )}
            />

            {/* Animated progress ring — amber on active */}
            {i === current && (
              <svg
                className="absolute inset-0 w-6 h-6 -rotate-90"
                viewBox="0 0 24 24"
              >
                {/* Track */}
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="rgb(251 191 36 / 0.2)"
                  strokeWidth="1.5"
                />
                {/* Progress */}
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="rgb(251 191 36)"
                  strokeWidth="1.5"
                  strokeDasharray={`${2 * Math.PI * 9}`}
                  strokeDashoffset={`${2 * Math.PI * 9 * (1 - progress / 100)}`}
                  strokeLinecap="round"
                  className="transition-none"
                />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Slide counter — top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute top-24 right-6 md:right-16 z-30 flex items-center gap-2"
      >
        <span className="text-amber-400/80 text-sm font-mono">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="text-white/20 text-xs font-mono">/</span>
        <span className="text-white/30 text-xs font-mono">
          {String(slides.length).padStart(2, "0")}
        </span>
      </motion.div>

    </section>

    <ContactForm open={formOpen} onOpenChange={setFormOpen} />
    </>
  )
}