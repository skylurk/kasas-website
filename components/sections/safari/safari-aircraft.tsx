"use client"

import { motion } from "framer-motion"

export function SafariAircraft() {
  return (
    <section className="bg-black py-24 text-white md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-xl leading-relaxed font-medium text-white/80 md:text-3xl md:leading-relaxed lg:text-2xl"
        >
          Our fleet of 228 STOL (short take off an landing)aircraft allows us to
          operate from remote bush strips inaccessible to many. This means we
          can take you <span className="text-white">deeper into the wild</span>,
          where the adventure truly begins.
        </motion.p>
      </div>
    </section>
  )
}
