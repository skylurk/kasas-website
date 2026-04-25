"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBanner() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Background image moves slower than scroll — classic parallax
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y }}
        className="absolute inset-[-20%] z-0"
      >
        <Image
          src="/images/images/kasas-limited-mobile-hero.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Fixed dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Scrolling text card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
        className="relative z-20 bg-black/80 backdrop-blur-sm text-white px-10 py-12 max-w-2xl mx-6 rounded-xl border border-white/10"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">
          Our Promise
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-snug">
          Every flight is a direct flight.
          Every seat is your seat.
          Every minute is yours.
        </h2>
        <p className="text-white/60 mt-6 text-base leading-relaxed">
          No check-in queues. No middle seats. No delays that aren't yours to make.
          Private aviation isn't a luxury — it's a decision to value your time.
        </p>
      </motion.div>

    </section>
  )
}