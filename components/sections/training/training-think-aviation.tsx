"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const credentials = [
  {
    code:  "CRED-01",
    title: "KCAA Approved",
    body:  "Think Aviation holds full approval from the Kenya Civil Aviation Authority — ensuring all training meets the highest regulatory standards.",
  },
  {
    code:  "CRED-02",
    title: "ATO Certified",
    body:  "As a certified Aviation Training Organization, Think Aviation delivers structured, accredited training programs recognized across the region.",
  },
  {
    code:  "CRED-03",
    title: "Pilot Training",
    body:  "Type rating and recurrent training for Dornier 228 pilots — from first officers to captains — conducted in the full motion simulator.",
  },
  {
    code:  "CRED-04",
    title: "Operations & Maintenance",
    body:  "Comprehensive training programs for operations and maintenance staff — keeping every member of the Kasas team at the highest standard.",
  },
]

export function TrainingThinkAviation() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Our Training Partner
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Powered by
              <br />
              <span className="text-muted-foreground">Think Aviation</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-xs font-mono hidden md:block"
          >
            KCAA APPROVED / ATO CERTIFIED
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          className="h-px bg-border mb-16"
        />

        {/* Split — image left, credentials right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <div className="md:sticky md:top-28">

              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border mb-4">
                <Image
                  src="/images/images/training/kasas-cessna-training.jpg"
                  alt="Think Aviation training facility at Wilson Airport Nairobi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <p className="text-white/50 text-xs font-mono">
                    THINK AVIATION / WILSON AIRPORT
                  </p>
                </div>
              </div>

              {/* Think Aviation info card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border border-border rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold">
                    Think Aviation
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-0.5 rounded">
                    PARTNER
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Kenya's premier aviation training organization — delivering
                  world-class flight training from Wilson Airport, Nairobi.
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
                    KCAA Approved Aviation Training Organization
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right — credentials */}
          <div className="flex flex-col gap-0">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.code}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
                className="group border-b border-border py-7 flex gap-5 hover:bg-muted/50 transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-default"
              >
                {/* Code */}
                <span className="text-muted-foreground/50 text-xs font-mono mt-1 shrink-0 w-14">
                  {cred.code}
                </span>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-foreground text-sm font-semibold tracking-wide group-hover:text-sky-500 transition-colors duration-300">
                    {cred.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cred.body}
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