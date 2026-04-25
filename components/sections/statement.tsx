"use client"

import { motion } from "framer-motion"

export function Statement() {
  return (
    <section className="bg-white text-black py-24 md:py-40">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-8"
        >
          The Kasas Standard
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-10"
        >
          We don't move passengers.
          <br />
          <span className="text-black/40">We move people who matter.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl"
        >
          <p className="text-black/60 text-base md:text-lg leading-relaxed">
            Kasas Limited was built on a simple belief — that the journey
            should be as exceptional as the destination. Every detail, from
            pre-flight briefing to post-flight follow-up, is handled with care.
          </p>
          <p className="text-black/60 text-base md:text-lg leading-relaxed">
            Our pilots are among East Africa's most experienced. Our aircraft
            are maintained to the highest international standards. And our
            team is available around the clock, because great trips don't
            always start at 9am.
          </p>
        </motion.div>

      </div>
    </section>
  )
}