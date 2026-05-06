"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function MaintenanceCta() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">

      {/* Background image — faded */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/maintenance/maintenance-cta-bg.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(89,91,92,0.4) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(89,91,92,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-8">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#595B5C" }}
        >
          Get in Touch
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-5xl md:text-7xl font-semibold tracking-tighter leading-none"
        >
          Keep Your Fleet
          <br />
          <span className="text-muted-foreground">In the Air.</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
          className="w-16 h-px"
          style={{ backgroundColor: "#595B5C" }}
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-muted-foreground text-lg max-w-xl leading-relaxed"
        >
          Whether you need scheduled maintenance, an engine overhaul,
          or a rapid AOG response — our team at Wilson Airport is ready.
          Contact us for a quotation tailored to your requirements.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-2"
        >
          {/* Filled button — dark circle expands on hover */}
          <Link
            href="/contact"
            className="group relative overflow-hidden inline-flex items-center gap-3 h-12 pl-1.5 pr-6 rounded-full text-white text-sm font-medium transition-colors duration-500"
            style={{ backgroundColor: "#595B5C" }}
          >
            <span aria-hidden="true" className="absolute left-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-zinc-900 scale-100 group-hover:scale-[20] transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900">
              <ArrowUpRight className="h-4 w-4 text-white" />
            </span>
            <span className="relative z-10">Request a Maintenance Quote</span>
          </Link>

          {/* Outline button — dark circle expands on hover */}
          <Link
            href="/contact"
            className="group relative overflow-hidden inline-flex items-center gap-3 h-12 pl-1.5 pr-6 rounded-full border border-border text-foreground text-sm font-medium transition-colors duration-500 hover:text-white"
          >
            <span aria-hidden="true" className="absolute left-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-zinc-900 scale-100 group-hover:scale-[20] transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900">
              <ArrowUpRight className="h-4 w-4 text-white" />
            </span>
            <span className="relative z-10">Contact Operations</span>
          </Link>
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6 pt-4 border-t border-border w-full justify-center"
        >
          <a
            href="tel:+254000000000"
            className="text-muted-foreground text-xs font-mono hover:text-foreground transition-colors duration-300"
          >
            TEL: +254 000 000 000
          </a>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <a
            href="mailto:maintenance@kasaskenya.com"
            className="text-muted-foreground text-xs font-mono hover:text-foreground transition-colors duration-300"
          >
            MAINTENANCE@kasaskenya.com
          </a>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <span className="text-muted-foreground text-xs font-mono">
            WILSON AIRPORT — NAIROBI, KENYA
          </span>
        </motion.div>

      </div>

    </section>
  )
}