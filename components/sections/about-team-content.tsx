"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function AboutTeamContent() {
  return (
    <motion.section
      initial={{ y: 0 }}
      whileInView={{ y: 0 }}
      className="relative z-10 bg-black text-white py-24 md:py-32 -mt-24"
      style={{ borderRadius: "24px 24px 0 0" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6"
        >
          Behind the Journey
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-10"
        >
          The Team Behind
          <br />
          <span className="text-white/40">Every Flight</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
          className="h-px bg-white/10 mb-10"
        />

        {/* Body — two columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
            className="text-white/60 text-base md:text-lg leading-relaxed"
          >
            Key management personnel are highly experienced in their respective
            fields and our aircraft captains are carefully chosen to ensure they
            are capable of handling the unique challenges of flying in Africa. We
            pride ourselves in our ability to operate safely under difficult
            conditions, with the majority of our fleet capable of taking off and
            landing on short, unpaved runways.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.33, 1, 0.68, 1] as const }}
            className="text-white/60 text-base md:text-lg leading-relaxed"
          >
            Kasas offers various fixed wing air support solutions including long
            term Aircraft, Crew, Maintenance and Insurance (ACMI) leases, "Wet"
            leases, "Dry" lease and ad-hoc charter for passengers or cargo. We
            operate a transparent pricing structure with all charges tailored to
            your individual requirements. For a quotation or more information on
            the company or our aircraft, kindly email or call us.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.33, 1, 0.68, 1] as const }}
          className="mt-14 flex items-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-white text-black text-sm font-medium hover:bg-white/90 transition-opacity"
          >
            Request a Quote
          </Link>
          <Link
            href="/team"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Meet the Team
          </Link>
        </motion.div>

      </div>
    </motion.section>
  )
}