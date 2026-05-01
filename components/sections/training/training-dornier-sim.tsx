"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const specs = [
  { value: "6DOF",   label: "Degrees of Freedom"          },
  { value: "8177",   label: "Serial number — original D228" },
  { value: "1990s",  label: "First Do228 in Kenya"         },
  { value: "Only 1", label: "Of its kind in General Aviation" },
]

export function TrainingDornierSim() {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">

      {/* Large sketch watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative w-[900px] h-[500px] opacity-[0.03]"
        >
          <Image
            src="/images/images/fleet/kasas-dornier-side-profile.png"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Red glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 60% 50%, rgba(220,38,38,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ff2200 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-red-500/70 mb-3">
              The Centrepiece
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              The Dornier 228
              <br />
              <span className="text-white/30">Simulator</span>
            </h2>
          </motion.div>

          {/* Only one of its kind badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
            className="flex items-center gap-3 border border-red-500/30 rounded-full px-5 py-2.5 self-start md:self-auto"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-xs font-semibold uppercase tracking-widest">
              Only One of Its Kind in General Aviation
            </span>
          </motion.div>
        </div>

        {/* Red rule */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          className="h-px bg-red-500/30 mb-16"
        />

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
            className="relative"
          >
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
                  src="/images/images/training/dornier-229-hydraulics.jpg"
                  alt="Dornier 228 full motion simulator cockpit — serial number 8177"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Red corner brackets */}
                <span className="absolute top-3 left-3 z-20 w-4 h-4 border-t-2 border-l-2 border-red-500/60" />
                <span className="absolute top-3 right-3 z-20 w-4 h-4 border-t-2 border-r-2 border-red-500/60" />
                <span className="absolute bottom-3 left-3 z-20 w-4 h-4 border-b-2 border-l-2 border-red-500/60" />
                <span className="absolute bottom-3 right-3 z-20 w-4 h-4 border-b-2 border-r-2 border-red-500/60" />

                {/* Serial number overlay */}
                <div className="absolute bottom-4 left-5 z-20">
                  <p className="text-white/30 text-xs font-mono">
                    FIG. 01 — DO228 SN:8177 / FULL MOTION SIM
                  </p>
                </div>
              </div>

              {/* Specs strip below image */}
              <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-xl overflow-hidden mt-4">
                {specs.map((spec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-black px-5 py-5 flex flex-col gap-1 hover:bg-white/5 transition-colors duration-300 group"
                  >
                    <p className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                      {spec.value}
                    </p>
                    <p className="text-xs text-white/30 uppercase tracking-widest leading-snug">
                      {spec.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — story */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
            className="flex flex-col gap-10"
          >

            {/* Story sections */}
            {[
              {
                code:  "HIST-01",
                title: "A Cockpit With a History",
                body:  "The heart of our Dornier 228 simulator carries a real story. The cockpit was sourced from a dismantled Do228, serial number 8177 — the first of its kind to operate in Kenya during the 1990s. What once flew the skies of East Africa now trains the pilots who will define its future.",
              },
              {
                code:  "TECH-01",
                title: "Advanced Hydraulic Platform",
                body:  "Mounted on an advanced hydraulic platform with 6 Degrees of Freedom, the simulator provides a highly realistic training environment that replicates the motion, feel, and response of the actual aircraft in real-world conditions.",
              },
              {
                code:  "OPS-01",
                title: "Used by Every Kasas Pilot",
                body:  "The simulator is used extensively by all of our pilots and some engineers for the most authentic hands-on training possible. From initial type rating to recurrent checks, every Kasas crew member trains in this simulator.",
              },
              {
                code:  "UNIQ-01",
                title: "Unmatched in General Aviation",
                body:  "Notably, this is the only simulator of its kind in the General Aviation sector in East Africa — offering a level of capability unmatched elsewhere. No other GA operator can offer this standard of Dornier 228 simulator training.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
                className="group flex gap-5 border-b border-white/10 pb-8 last:border-0 hover:border-red-500/20 transition-colors duration-500"
              >
                <span className="text-red-500/40 text-xs font-mono mt-1 shrink-0 w-14">
                  {item.code}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-base font-semibold tracking-wide group-hover:text-red-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.33, 1, 0.68, 1] as const }}
              className="flex items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-500 transition-colors duration-300"
              >
                Book Simulator Time
              </Link>
              <Link
                href="/fleet/dornier-228"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-300"
              >
                About the Do228
              </Link>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}