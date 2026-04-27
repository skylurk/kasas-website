"use client"

import { motion } from "framer-motion"

export function SafariAircraft() {
  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-xl md:text-3xl lg:text-2xl font-medium leading-relaxed md:leading-relaxed text-white/80"
        >
          Our fleet of Dornier 228 aircraft is specially designed for safari
          flying, with STOL (short take-off and landing) capability that allows
          us to operate from remote bush strips inaccessible to many. This means
          we can take you{" "}
          <span className="text-white">deeper into the wild</span>,
          where the adventure truly begins.
        </motion.p>

      </div>
    </section>
  )
}