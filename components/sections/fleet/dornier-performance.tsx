"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const highlights = [
  {
    code:  "WING-01",
    title: "New Generation Low-Drag Wing",
    body:  "A uniquely designed TNT wing combines high speed cruise with low takeoff and landing speeds — giving the Dornier 228 an unmatched performance envelope for its class.",
  },
  {
    code:  "FUSE-01",
    title: "Practical Box-Section Fuselage",
    body:  "The square fuselage cross-section maximises usable cabin volume. Every inch of available space translates directly into payload capacity and value for our clients.",
  },
  {
    code:  "STOL-01",
    title: "STOL Into Unpaved Strips",
    body:  "The highest speed in its class combined with short takeoff and landing capability makes the Dornier 228 the definitive aircraft for long-range bush operations across East Africa.",
  },
]

export function DornierPerformance() {
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
              Airframe & Performance
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Engineered for Africa
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/20 text-xs font-mono hidden md:block"
          >
            REF: KL-D228-PERF / REV-03
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

        {/* First split — text left, takeoff image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-24">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
            className="flex flex-col gap-10"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
                className="flex flex-col gap-2 border-l-2 border-red-500/30 pl-5 hover:border-red-500/70 transition-colors duration-500"
              >
                <span className="text-red-500/50 text-xs font-mono">{h.code}</span>
                <h3 className="text-white text-base font-semibold">{h.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{h.body}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Takeoff image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
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
                src="/images/images/fleet/fleet-images/kasas-limited-dornier-take-off.webp"
                alt="Dornier 228 taking off from short unpaved bush airstrip"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />

              {/* Red corner brackets */}
              <span className="absolute top-3 left-3 z-30 w-4 h-4 border-t-2 border-l-2 border-red-500/60" />
              <span className="absolute top-3 right-3 z-30 w-4 h-4 border-t-2 border-r-2 border-red-500/60" />
              <span className="absolute bottom-3 left-3 z-30 w-4 h-4 border-b-2 border-l-2 border-red-500/60" />
              <span className="absolute bottom-3 right-3 z-30 w-4 h-4 border-b-2 border-r-2 border-red-500/60" />

              {/* Caption overlay */}
              <div className="absolute bottom-4 left-5 z-30">
                <p className="text-white/30 text-xs font-mono">
                  FIG. 02 — STOL DEPARTURE / BUSH STRIP
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second split — interior image left, sketch watermark + text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Interior image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
            className="relative order-2 md:order-1"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
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
                src="/images/images/fleet/fleet-images/kasas-limited-dornier-interior.webp"
                alt="Dornier 228 cabin interior configured for passenger operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />
              <span className="absolute top-3 left-3 z-30 w-4 h-4 border-t-2 border-l-2 border-red-500/60" />
              <span className="absolute top-3 right-3 z-30 w-4 h-4 border-t-2 border-r-2 border-red-500/60" />
              <span className="absolute bottom-3 left-3 z-30 w-4 h-4 border-b-2 border-l-2 border-red-500/60" />
              <span className="absolute bottom-3 right-3 z-30 w-4 h-4 border-b-2 border-r-2 border-red-500/60" />
              <div className="absolute bottom-4 left-5 z-30">
                <p className="text-white/30 text-xs font-mono">
                  FIG. 03 — PASSENGER CABIN INTERIOR
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text — cargo door */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
            className="relative order-1 md:order-2 flex flex-col gap-6"
          >
            {/* Sketch watermark */}
            <div className="absolute -right-8 -top-8 w-64 h-64 opacity-5 pointer-events-none select-none">
              <Image
                src="/images/images/fleet/kasas-dornier-top-profile.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <span className="text-red-500/50 text-xs font-mono">CABIN-01</span>

            <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
              Quick-Change Cabin.
              <br />
              <span className="text-white/30">Any Mission, Any Load.</span>
            </h3>

            <p className="text-white/50 text-sm md:text-base leading-relaxed">
              Seat removal and installation is straightforward — allowing a rapid
              transition between passenger, cargo, or combined configurations
              with minimal ground time.
            </p>

            <p className="text-white/50 text-sm md:text-base leading-relaxed">
              The large rear cargo door, situated close to the ground, permits
              easy loading and unloading of bulky freight without specialist
              ground equipment — ideal for remote operations.
            </p>

            {/* Inline stats */}
            <div className="flex items-center gap-8 pt-2 border-t border-white/10 mt-2">
              <div>
                <p className="text-2xl font-semibold text-white">19</p>
                <p className="text-xs text-white/30 uppercase tracking-widest mt-0.5">Max seats</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-2xl font-semibold text-white">2,268<span className="text-red-500/70 text-sm font-mono ml-1">kg</span></p>
                <p className="text-xs text-white/30 uppercase tracking-widest mt-0.5">Max payload</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-2xl font-semibold text-white">3</p>
                <p className="text-xs text-white/30 uppercase tracking-widest mt-0.5">Configurations</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}