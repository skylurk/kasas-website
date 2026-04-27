"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const slides = [
  {
    src:      "/images/images/safari/kasas-kenya-safari-charters-boating.jpg",
    alt:      "Private charter aircraft on bush airstrip at golden hour",
    title:    "Fly Into the Wild",
    subtitle: "Direct access to East Africa's most iconic safari destinations.",
  },
  {
    src:      "/images/images/safari/kasas-kenya-safari-charters-elephant.jpg",
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
    src:      "/images/images/safari/kasas-kenya-safari-charters-tour.jpg",
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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-amber-500 text-black text-sm font-medium hover:bg-amber-400 transition-colors duration-300"
              >
                Plan Your Charter
              </Link>
              <Link
                href="#destinations"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-300"
              >
                View Destinations
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
  )
}