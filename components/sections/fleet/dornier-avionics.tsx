"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const systems = [
  {
    code:  "SYS-01",
    title: "IFR Operations",
    body:  "Fully certified for Instrument Flight Rules operations — enabling safe flight in low visibility, cloud, and night conditions across all East African airspace.",
  },
  {
    code:  "SYS-02",
    title: "EGPWS",
    body:  "Enhanced Ground Proximity Warning System provides real-time terrain awareness and alerting — critical for operations into mountainous and bush environments.",
  },
  {
    code:  "SYS-03",
    title: "TCAS II v7.1",
    body:  "Traffic Collision Avoidance System monitors surrounding airspace and issues resolution advisories to maintain safe separation from other aircraft.",
  },
  {
    code:  "SYS-04",
    title: "Dual GPS + DFDR",
    body:  "Redundant GPS navigation systems paired with a Digital Flight Data Recorder and Cockpit Voice Recorder for maximum reliability and accountability.",
  },
  {
    code:  "SYS-05",
    title: "Satellite Tracking",
    body:  "Real-time aircraft position tracking via satellite — giving operations teams and clients full visibility of every flight at all times.",
  },
  {
    code:  "SYS-06",
    title: "Satcom",
    body:  "Satellite communications enable reliable voice and data links even in the most remote operating environments across the continent.",
  },
]

export function DornierAvionics() {
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
              Avionics Suite
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Built for Any Condition
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/20 text-xs font-mono hidden md:block"
          >
            REF: KL-D228-AV / REV-02
          </motion.p>
        </div>

        {/* Red rule */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          className="h-px bg-red-500/30 mb-16"
        />

        {/* Split — image left, systems right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — cockpit image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
            className="relative"
          >
            {/* Sticky on desktop so image stays visible while systems scroll */}
            <div className="md:sticky md:top-28">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">

                {/* Graph paper overlay */}
                <div
                  className="absolute inset-0 z-10 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(220,38,38,0.4) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(220,38,38,0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: "24px 24px",
                  }}
                />

                <Image
                  src="/images/images/fleet/kasas-limited-dornier-cockpit.webp"
                  alt="Dornier 228 cockpit instrument panel showing avionics suite"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Red corner brackets */}
                <span className="absolute top-3 left-3 z-20 w-4 h-4 border-t-2 border-l-2 border-red-500/60" />
                <span className="absolute top-3 right-3 z-20 w-4 h-4 border-t-2 border-r-2 border-red-500/60" />
                <span className="absolute bottom-3 left-3 z-20 w-4 h-4 border-b-2 border-l-2 border-red-500/60" />
                <span className="absolute bottom-3 right-3 z-20 w-4 h-4 border-b-2 border-r-2 border-red-500/60" />
              </div>

              {/* Image caption */}
              <div className="flex items-center justify-between mt-3 px-1">
                <p className="text-white/30 text-xs font-mono">
                  FIG. 01 — COCKPIT INSTRUMENT PANEL
                </p>
                <p className="text-red-500/40 text-xs font-mono">
                  D228 / KL
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — systems list */}
          <div className="flex flex-col gap-0">
            {systems.map((sys, i) => (
              <motion.div
                key={sys.code}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
                className="group border-b border-white/10 py-6 flex gap-5 hover:bg-white/5 transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-default"
              >
                {/* Code */}
                <span className="text-red-500/40 text-xs font-mono mt-1 shrink-0 w-12">
                  {sys.code}
                </span>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white text-sm font-semibold tracking-wide group-hover:text-red-400 transition-colors duration-300">
                    {sys.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {sys.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}