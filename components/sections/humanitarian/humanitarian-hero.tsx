"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const slides = [
  {
    src:      "/images/images/humanitarian/acmi-leases.jpg",
    alt:      "Kasas Dornier 228 landing on remote humanitarian airstrip",
    title:    "Where the Road Runs Out.",
    subtitle: "Delivering people and cargo to the most remote and underserved regions of Africa.",
  },
  {
    src:      "/images/images/humanitarian/air-charters-to-remote-destinations.jpg",
    alt:      "Relief cargo being loaded onto Kasas aircraft",
    title:    "Built for the Field.",
    subtitle: "STOL operations into undeveloped regions where infrastructure is limited or non-existent.",
  },
  {
    src:      "/images/images/humanitarian/humanitarian-charters-dornier-228.jpg",
    alt:      "Kasas aircraft at operational base in remote East Africa",
    title:    "Reliable. Every Time.",
    subtitle: "Long-term ACMI leases and flexible charter solutions for humanitarian organisations worldwide.",
  },
]

const SLIDE_DURATION = 5000

export function HumanitarianHero() {
  const [current, setCurrent]   = useState(0)
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted]   = useState(false)
  const intervalRef             = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef             = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 z-10" />

      {/* Subtle sky tint */}
      <div className="absolute inset-0 bg-sky-950/10 z-10 pointer-events-none" />

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
            <p className="text-sky-400/80 text-xs font-semibold uppercase tracking-widest">
              Humanitarian Flights
            </p>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              {slides[current].title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
              {slides[current].subtitle}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-sky-500 text-white text-sm font-medium hover:bg-sky-400 transition-colors duration-300"
              >
                Request a Quote
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-300"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots — bottom left */}
      <div className="absolute bottom-12 left-6 md:left-16 z-30 flex items-center gap-4">
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
                  ? "w-2 h-2 bg-sky-400"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
              )}
            />

            {/* Animated progress ring */}
            {mounted && i === current && (
              <svg
                className="absolute inset-0 w-6 h-6 -rotate-90"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="rgb(56 189 248 / 0.3)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="rgb(56 189 248)"
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

      {/* Slide counter — top right, client only */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute top-24 right-6 md:right-16 z-30 flex items-center gap-2"
        >
          <span className="text-sky-400/80 text-sm font-mono">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="text-white/20 text-xs font-mono">/</span>
          <span className="text-white/30 text-xs font-mono">
            {String(slides.length).padStart(2, "0")}
          </span>
        </motion.div>
      )}

    </section>
  )
}