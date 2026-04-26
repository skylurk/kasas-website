"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function DornierHero() {
  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden px-6">

      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #ff2200 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Red radial glow behind sketch */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(220,38,38,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Top label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 text-xs font-semibold uppercase tracking-widest text-red-500/70 mb-8"
      >
        Kasas Limited Fleet
      </motion.p>

      {/* Main sketch — side profile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
        className="relative z-10 w-full max-w-4xl aspect-[2/1]"
      >
        <Image
          src="/images/images/fleet/kasas-dornier-front-profile.png"
          alt="Dornier 228 side profile technical sketch"
          fill
          priority
          className="object-contain drop-shadow-[0_0_40px_rgba(220,38,38,0.4)]"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
        className="relative z-10 text-center mt-10 flex flex-col items-center gap-4"
      >
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white">
          Dornier
          <span className="text-red-500"> 228</span>
        </h1>
        <p className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed">
          The aircraft of choice for East Africa's most demanding operations.
          Built for short fields, long ranges, and everything in between.
        </p>
      </motion.div>

      {/* Specs strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9, ease: [0.33, 1, 0.68, 1] as const }}
        className="relative z-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden w-full max-w-3xl"
      >
        {[
          { value: "1,300", label: "Range (miles)" },
          { value: "230",   label: "Cruise speed (mph)" },
          { value: "19",    label: "Passengers" },
          { value: "STOL",  label: "Capability" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-black/80 px-6 py-6 flex flex-col gap-1"
          >
            <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              {stat.value}
            </p>
            <p className="text-xs text-white/40 uppercase tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-red-500/30"
        />
      </motion.div>

    </section>
  )
}