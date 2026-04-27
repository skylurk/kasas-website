"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function DornierCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-32 md:py-40">
      {/* Large sketch watermark — front view centered */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] as const }}
          className="relative h-[400px] w-[700px] opacity-5"
        >
          <Image
            src="/images/images/fleet/kasas-dornier-front-profile.png"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Red glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(220,38,38,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #ff2200 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center md:px-12">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-xs font-semibold tracking-widest text-red-500/70 uppercase"
        >
          Charter the Dornier 228
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.33, 1, 0.68, 1] as const,
          }}
          className="text-5xl leading-none font-semibold tracking-tighter text-white md:text-7xl"
        >
          Ready When
          <br />
          <span className="text-red-500">You Are.</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.33, 1, 0.68, 1] as const,
          }}
          className="h-px w-16 bg-red-500/50"
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.33, 1, 0.68, 1] as const,
          }}
          className="max-w-xl text-lg leading-relaxed text-white/50"
        >
          For a quotation or more information on the Dornier 228 or our full
          fleet, contact the Kasas operations team directly.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.33, 1, 0.68, 1] as const,
          }}
          className="flex flex-col items-center gap-4 pt-2 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-red-600 px-10 text-sm font-medium text-white transition-colors duration-300 hover:bg-red-500"
          >
            Request a Quote
          </Link>
          <Link
            href="/fleet"
            className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 px-10 text-sm font-medium text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10"
          >
            View Full Fleet
          </Link>
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex w-full flex-col items-center justify-center gap-6 border-t border-white/10 pt-4 sm:flex-row"
        >
          <a
            href="tel:+254000000000"
            className="font-mono text-xs text-white/30 transition-colors duration-300 hover:text-white/60"
          >
            TEL: +254 000 000 000
          </a>

          <span className="hidden h-4 w-px bg-white/10 sm:block" />

          <a
            href="mailto:ops@kasaslimited.com"
            className="font-mono text-xs text-white/30 transition-colors duration-300 hover:text-white/60"
          >
            OPS@KASASLIMITED.COM
          </a>

          <span className="hidden h-4 w-px bg-white/10 sm:block" />

          <span className="font-mono text-xs text-white/30">
            NAIROBI, KENYA — 24/7
          </span>
        </motion.div>
      </div>
    </section>
  )
}
