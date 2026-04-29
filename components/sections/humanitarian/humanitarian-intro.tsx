"use client"

import { motion } from "framer-motion"

export function HumanitarianIntro() {
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
          What We Do
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
          className="h-px bg-black/10 mb-10"
        />

        {/* Large statement */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-2xl md:text-3xl lg:text-2xl font-medium leading-relaxed md:leading-relaxed text-black/80"
        >
          We specialize in Short Takeoff or Landing (
          <span className="text-black font-semibold">STOL</span>
          ) operations in Africa, carrying passengers and cargo into remote
          airstrips. The flexibility of the Dornier 228 payload-range envelope
          and its rugged design make it well suited to provide flights in{" "}
          <span className="text-black font-semibold">
            underdeveloped regions where infrastructure is poor.
          </span>
        </motion.p>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
          className="flex flex-wrap items-center gap-10 md:gap-16 mt-16 pt-10 border-t border-black/10"
        >
          {[
            { value: "STOL",  label: "Certified operations"      },
            { value: "13",    label: "Aircraft in fleet"         },
            { value: "100+",  label: "Remote airstrips accessed" },
            { value: "24/7",  label: "Operational support"       },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
                {stat.value}
              </p>
              <p className="text-xs text-black/40 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}