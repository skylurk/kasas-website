"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const configurations = [
  {
    code:     "CFG-01",
    title:    "Passenger",
    capacity: "Up to 19 seats",
    body:     "Full passenger configuration with comfortable seating for corporate transfers, NGO personnel movements, and regional scheduled services.",
    imageSrc: "/images/images/fleet/fleet-images/kasas-limited-dornier-interior.webp",
    imageAlt: "Dornier 228 full passenger cabin configuration",
  },
  {
    code:     "CFG-02",
    title:    "Cargo",
    capacity: "Up to 2,268 kg",
    body:     "All seats removed for maximum freight capacity. The rear cargo door and ground-level loading height make it ideal for bulk and oversized freight.",
    imageSrc: "/images/images/fleet/fleet-images/kasas-limited-dornier-cargo.webp",
    imageAlt: "Dornier 228 cargo configuration with freight loaded",
  },
  {
    code:     "CFG-03",
    title:    "Combined",
    capacity: "Mixed pax + cargo",
    body:     "A flexible split configuration carrying both passengers and freight simultaneously — perfect for resupply missions into remote locations.",
    imageSrc: "/images/images/fleet/fleet-images/kasas-limited-dornier-combined.webp",
    imageAlt: "Dornier 228 combined passenger and cargo configuration",
  },
]

export function DornierConfigurations() {
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
              Cabin Flexibility
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Three Configurations
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/20 text-xs font-mono hidden md:block"
          >
            REF: KL-D228-CFG / REV-01
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {configurations.map((config, i) => (
            <motion.div
              key={config.code}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.33, 1, 0.68, 1] as const,
              }}
              className="group relative border border-white/10 rounded-xl overflow-hidden hover:border-red-500/40 transition-colors duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="absolute inset-0 z-10 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(220,38,38,0.4) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(220,38,38,0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                  }}
                />
                <Image
                  src={config.imageSrc}
                  alt={config.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20" />

                {/* Corner brackets */}
                <span className="absolute top-3 left-3 z-30 w-3 h-3 border-t border-l border-red-500/50" />
                <span className="absolute top-3 right-3 z-30 w-3 h-3 border-t border-r border-red-500/50" />

                {/* Config code */}
                <span className="absolute top-4 left-1/2 -translate-x-1/2 z-30 text-red-500/40 text-xs font-mono">
                  {config.code}
                </span>
              </div>

              {/* Content */}
              <div className="bg-black px-6 py-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-lg font-semibold tracking-tight">
                    {config.title}
                  </h3>
                  <span className="text-red-500/60 text-xs font-mono border border-red-500/20 px-2 py-0.5 rounded">
                    {config.capacity}
                  </span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">
                  {config.body}
                </p>

                {/* Bottom red line on hover */}
                <div className="h-px bg-red-500/0 group-hover:bg-red-500/40 transition-colors duration-500 mt-2" />
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/20 text-xs font-mono mt-8 text-center"
        >
          CONFIGURATION CHANGES COMPLETED ON THE GROUND BY KASAS GROUND CREW — TYPICAL TURNAROUND: 45 MIN
        </motion.p>

      </div>
    </section>
  )
}