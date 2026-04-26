"use client"

import { motion } from "framer-motion"

const bodyParagraph = `Founded in 2006, Kasas operates a fleet of 13 Dornier 228s. Our diverse client base reflects on our ability to provide fixed wing contract and air charter services to non-governmental organizations, the oil, gas and mining resource sector, regional governments, and multi-national companies. We also offer corporate services, tourism and medical evacuation flights.`

export function AboutStory() {
  return (
    <section className="bg-white text-black py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-6"
        >
          Our Story
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-10"
        >
          Behind the Journey
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
          className="h-px bg-black/10 mb-10"
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-black/60 text-lg md:text-xl leading-relaxed "
        >
          {bodyParagraph}
        </motion.p>

      </div>
    </section>
  )
}