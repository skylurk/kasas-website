"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const views = [
  {
    src:     "/images/images/fleet/kasas-dornier-front-profile.png",
    alt:     "Dornier 228 front view technical drawing",
    label:   "Front View",
    code:    "VIEW-01",
    note:    "Twin turboprop engines with STOL wing profile",
    aspect:  "aspect-square",
  },
  {
    src:     "/images/images/fleet/kasas-dornier-side-profile.png",
    alt:     "Dornier 228 side profile technical drawing",
    label:   "Side Profile",
    code:    "VIEW-02",
    note:    "19-seat cabin / large rear cargo door",
    aspect:  "aspect-square",
  },
  {
    src:     "/images/images/fleet/kasas-dornier-top-profile.png",
    alt:     "Dornier 228 top-down technical drawing",
    label:   "Top View",
    code:    "VIEW-03",
    note:    "Low-drag TNT wing — new generation design",
    aspect:  "aspect-square",
  },
]

export function DornierThreeView() {
  return (
    <section className="bg-black border-t border-white/10 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-red-500/70 mb-3">
              Technical Reference
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Three-View Drawing
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
            className="text-white/40 text-sm max-w-xs text-right font-mono leading-relaxed hidden md:block"
          >
            DORNIER 228 / TYPE 212 <br />
            KASAS LIMITED REF: KL-D228
          </motion.p>
        </div>

        {/* Thin red rule */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          className="h-px bg-red-500/30 mb-16"
        />

        {/* Views grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {views.map((view, i) => (
            <motion.div
              key={view.code}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.33, 1, 0.68, 1] as const,
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative border border-white/10 rounded-xl overflow-hidden bg-black/60 hover:border-red-500/40 transition-colors duration-500">

                {/* Graph paper grid background */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(220,38,38,0.4) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(220,38,38,0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Sketch image */}
                <div className={cn("relative w-full p-8", view.aspect)}>
                  <motion.div
                    initial={false}
                    whileHover={{ filter: "drop-shadow(0 0 24px rgba(220,38,38,0.6))" }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={view.src}
                      alt={view.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>
                </div>

                {/* Card footer */}
                <div className="border-t border-white/10 px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-medium">{view.label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{view.note}</p>
                  </div>
                  <span className="text-red-500/60 text-xs font-mono">{view.code}</span>
                </div>

              </div>

              {/* Corner brackets — top left */}
              <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-red-500/50 rounded-tl" />
              <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-red-500/50 rounded-tr" />
              <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-red-500/50 rounded-bl" />
              <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-red-500/50 rounded-br" />

            </motion.div>
          ))}
        </div>

        {/* Bottom reference bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex items-center justify-between border-t border-white/10 pt-6"
        >
          <p className="text-white/20 text-xs font-mono">
            ALL DIMENSIONS FOR REFERENCE ONLY — KASAS LIMITED © {new Date().getFullYear()}
          </p>
          <p className="text-red-500/40 text-xs font-mono">
            IFR CERTIFIED / EGPWS / TCAS II
          </p>
        </motion.div>

      </div>
    </section>
  )
}