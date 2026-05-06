"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const certifications = [
  {
    code:  "CERT-01",
    title: "KCAA Part 145",
    body:  "Full approval under Kenya Civil Aviation Authority Part 145 — authorising us to carry out maintenance, overhaul, and repair on commercial aircraft and components.",
  },
  {
    code:  "CERT-02",
    title: "EASA Part 145",
    body:  "European Union Aviation Safety Agency Part 145 approval — ensuring our maintenance standards meet the most stringent international regulatory requirements.",
  },
  {
    code:  "CERT-03",
    title: "ISO 9001:2015",
    body:  "ISO 9001:2015 certified quality management system — demonstrating our commitment to consistent, high-quality maintenance delivery across every operation.",
  },
]

const shopSpecs = [
  { value: "TPE331",  label: "Engine type"                  },
  { value: "KCAA",    label: "Newly approved"               },
  { value: "3",       label: "Core capabilities"            },
  { value: "In-house", label: "Full operational control"   },
]

export function MaintenanceEngineShop() {
  return (
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#595B5C" }}
            >
              Engine Maintenance
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              TPE331
              <br />
              <span className="text-white/30">Engine Shop</span>
            </h2>
          </motion.div>

          {/* Newly approved badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
            className="flex items-center gap-3 rounded-full px-5 py-2.5 self-start md:self-auto border"
            style={{ borderColor: "rgba(89,91,92,0.4)" }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#595B5C" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#595B5C" }}
            >
              Newly KCAA Approved — Engine Maintenance
            </span>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          className="h-px mb-16"
          style={{ backgroundColor: "rgba(89,91,92,0.3)" }}
        />

        {/* Main grid — image left, content right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — image + specs */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <div className="md:sticky md:top-28">

              {/* Main image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-4">

                {/* Graph paper overlay */}
                <div
                  className="absolute inset-0 z-10 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(89,91,92,0.6) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(89,91,92,0.6) 1px, transparent 1px)
                    `,
                    backgroundSize: "24px 24px",
                  }}
                />

                <Image
                  src="/images/images/maintenance/kasas-kenya-aircraft-maintenance.webp"
                  alt="Kasas TPE331 engine shop at Wilson Airport — overhaul and testing facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />

                {/* Corner brackets */}
                <span className="absolute top-3 left-3 z-30 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: "#595B5C" }} />
                <span className="absolute top-3 right-3 z-30 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: "#595B5C" }} />
                <span className="absolute bottom-3 left-3 z-30 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: "#595B5C" }} />
                <span className="absolute bottom-3 right-3 z-30 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: "#595B5C" }} />

                <div className="absolute bottom-4 left-5 z-30">
                  <p className="text-white/30 text-xs font-mono">
                    FIG. 01 — TPE331 ENGINE SHOP / WILSON AIRPORT
                  </p>
                </div>
              </div>

              {/* Spec strip */}
              <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {shopSpecs.map((spec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-black px-5 py-5 flex flex-col gap-1 hover:bg-white/5 transition-colors duration-300 group"
                  >
                    <p
                      className="text-xl font-semibold transition-colors duration-300"
                      style={{ color: "#595B5C" }}
                    >
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

          {/* Right — capabilities + certifications */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
            className="flex flex-col gap-10"
          >

            {/* Core capabilities */}
            <div className="flex flex-col gap-0">
              {[
                {
                  code:  "CAP-01",
                  title: "Engine Overhaul",
                  body:  "Complete teardown, inspection, repair, and reassembly of the TPE331 engine to manufacturer specifications — restoring full performance and extending service life.",
                },
                {
                  code:  "CAP-02",
                  title: "Engine Repair",
                  body:  "Component-level repair of TPE331 engine parts using approved data and tooling. Our engineers are trained and experienced on the specific requirements of this powerplant.",
                },
                {
                  code:  "CAP-03",
                  title: "Engine Testing",
                  body:  "Post-maintenance engine testing to verify performance parameters before return to service — ensuring every engine leaves our shop to the highest standard.",
                },
              ].map((cap, i) => (
                <motion.div
                  key={cap.code}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.33, 1, 0.68, 1] as const,
                  }}
                  className="group border-b border-white/10 py-6 flex gap-5 hover:bg-white/5 transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-default"
                >
                  <span
                    className="text-xs font-mono mt-1 shrink-0 w-14"
                    style={{ color: "rgba(89,91,92,0.6)" }}
                  >
                    {cap.code}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3
                      className="text-base font-semibold tracking-wide transition-colors duration-300"
                      style={{ color: "white" }}
                    >
                      {cap.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {cap.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-col gap-4 pt-4">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#595B5C" }}
              >
                Approvals & Certifications
              </p>
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.code}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.33, 1, 0.68, 1] as const,
                  }}
                  className="group border border-white/10 rounded-xl p-5 flex gap-4 hover:border-[#595B5C]/40 transition-colors duration-300"
                >
                  <span
                    className="text-xs font-mono mt-0.5 shrink-0"
                    style={{ color: "rgba(89,91,92,0.5)" }}
                  >
                    {cert.code}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-white text-sm font-semibold">
                      {cert.title}
                    </h4>
                    <p className="text-white/40 text-xs leading-relaxed">
                      {cert.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-flex items-center gap-3 h-12 pl-1.5 pr-6 rounded-full text-white text-sm font-medium transition-colors duration-500"
                style={{ backgroundColor: "#595B5C" }}
              >
                <span aria-hidden="true" className="absolute left-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-zinc-900 scale-100 group-hover:scale-[20] transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </span>
                <span className="relative z-10">Enquire About Engine Work</span>
              </Link>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}