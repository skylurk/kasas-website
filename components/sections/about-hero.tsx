"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

const slides = [
  {
    src:      "/images/images/about/kasas-limited-air-charter-and-maintenance.webp",
    alt:      "Kasas Limited aircraft on runway at sunrise",
    title:    "A Legacy Built in the Skies",
    subtitle: "Over a decade of safe, reliable aviation across East Africa.",
  },
  {
    src:      "/images/images/about/kasas-limited-aviation-avionics-team.webp",
    alt:      "Pilot conducting pre-flight checks",
    title:    "Flown by the Best",
    subtitle: "Our pilots bring thousands of hours of East African experience.",
  },
  {
    src:      "/images/images/about/kasas-limited-aviation-engineering.webp",
    alt:      "Aerial view of savannah at golden hour",
    title:    "Every Route, Every Terrain",
    subtitle: "From bush strips to international airports — we know the way.",
  },
  {
    src:      "/images/images/about/kasas-limited-aviation-maintenance-services.webp",
    alt:      "Aircraft maintenance team at work",
    title:    "Safety Is Not Negotiable",
    subtitle: "Rigorous maintenance standards on every aircraft, every flight.",
  },
  {
    src:      "/images/images/about/kasas-limited-aviation-maintenance-team.webp",
    alt:      "Passengers boarding private charter flight",
    title:    "Your Journey, Your Terms",
    subtitle: "Flexible scheduling built around you, not an airline timetable.",
  },
  {
    src:      "/images/images/about/kasas-limited-aviation-maintenance.webp",
    alt:      "Kasas team on the tarmac",
    title:    "The People Behind the Flights",
    subtitle: "A passionate team united by a love for aviation and service.",
  },
]

const SLIDE_DURATION = 5000 // 5 seconds

export function AboutHero() {
  const [current, setCurrent]     = useState(0)
  const [progress, setProgress]   = useState(0)
  const intervalRef               = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef               = useRef<ReturnType<typeof setInterval> | null>(null)

  const goToSlide = useCallback((index: number) => {
    setCurrent(index)
    setProgress(0)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [])

  // Progress ticker — updates every 50ms for smooth circle animation
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

  // Auto advance
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
          {/* Image with slow zoom */}
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
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay — bottom up */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

      {/* Text content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-16 pb-32 md:pb-40 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{  opacity: 0, y: -16  }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              {slides[current].title}
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed">
              {slides[current].subtitle}
            </p>
            <div className="flex items-center gap-4 pt-2">
              {/* Filled button — dark circle expands on hover */}
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-flex items-center gap-3 h-12 pl-1.5 pr-6 rounded-full bg-white text-black text-sm font-medium transition-colors duration-500 hover:text-white"
              >
                <span aria-hidden="true" className="absolute left-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-zinc-900 scale-100 group-hover:scale-[12] transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </span>
                <span className="relative z-10">Get in Touch</span>
              </Link>

              {/* Outline button — white circle expands on hover */}
              <Link
                href="/fleet"
                className="group relative overflow-hidden inline-flex items-center gap-3 h-12 pl-1.5 pr-6 rounded-full border border-white/40 text-white text-sm font-medium transition-colors duration-500 hover:text-black"
              >
                <span aria-hidden="true" className="absolute left-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white scale-100 group-hover:scale-[12] transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                  <ArrowUpRight className="h-4 w-4 text-black" />
                </span>
                <span className="relative z-10">Our Fleet</span>
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
                  ? "w-2 h-2 bg-white"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
              )}
            />

            {/* Animated progress ring — only on active dot */}
            {i === current && (
              <svg
                className="absolute inset-0 w-6 h-6 -rotate-90"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeOpacity="0.3"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="white"
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

    </section>
  )
}