"use client"

import { motion } from "framer-motion"
import { Plane, Radio } from "lucide-react"

const services = [
  {
    icon:     Plane,
    code:     "SVC-01",
    title:    "ACMI Leases",
    body:     "Our core business is providing long term ACMI leases to the Humanitarian, resources and Oil and Gas Producers (OGP) sectors. Crew, maintenance and operational personnel are familiar with setting up operational bases in the field that allows us to deliver a high quality and reliable product.",
    highlights: [
      "Aircraft, Crew, Maintenance & Insurance",
      "Long-term lease structures",
      "Field operational base setup",
      "Humanitarian & OGP sectors",
    ],
  },
  {
    icon:     Radio,
    code:     "SVC-02",
    title:    "Flex Flight Solutions",
    body:     "Charter aircraft are readily available from our main operating base at Wilson Airport in Nairobi, Kenya. Our team can arrange a quotation for any local or regional charter requirements you have.",
    highlights: [
      "Based at Wilson Airport, Nairobi",
      "Local & regional coverage",
      "Passenger & cargo charters",
      "Rapid quotation turnaround",
    ],
  },
]

export function HumanitarianServices() {
  return (
    <section
      id="services"
      className="bg-black text-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400/70 mb-3">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Two Ways to Fly With Us
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/20 text-xs font-mono hidden md:block"
          >
            WILSON AIRPORT / NAIROBI, KENYA
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          className="h-px bg-sky-500/30 mb-16"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.code}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
                className="group relative border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col gap-8 hover:border-sky-500/40 transition-colors duration-500 overflow-hidden"
              >

                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/5 transition-colors duration-500 rounded-2xl" />

                {/* Top row — icon + code */}
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-sky-500/30 group-hover:bg-sky-500/10 transition-all duration-500">
                    <Icon className="w-5 h-5 text-white/60 group-hover:text-sky-400 transition-colors duration-500" />
                  </div>
                  <span className="text-white/20 text-xs font-mono">
                    {service.code}
                  </span>
                </div>

                {/* Title */}
                <div className="relative flex flex-col gap-4">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed">
                    {service.body}
                  </p>
                </div>

                {/* Highlights */}
                <div className="relative flex flex-col gap-3 pt-6 border-t border-white/10">
                  {service.highlights.map((highlight, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.12 + j * 0.07,
                        ease: [0.33, 1, 0.68, 1] as const,
                      }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60 shrink-0" />
                      <span className="text-white/50 text-sm">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom red line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-sky-500/0 group-hover:bg-sky-500/40 transition-colors duration-500" />

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}