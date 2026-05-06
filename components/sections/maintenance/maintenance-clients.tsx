"use client"

import { motion } from "framer-motion"
import { Plane, User, Heart, Building } from "lucide-react"

const clients = [
  {
    icon:  Plane,
    code:  "CLT-01",
    title: "Airlines & Operators",
    body:  "Third party maintenance for commercial airlines and charter operators running Dornier 228 and TPE331-powered aircraft across Africa. We understand operational pressures and deliver work that keeps fleets flying.",
    tags:  ["Scheduled MX", "Line Maintenance", "AOG Support"],
  },
  {
    icon:  User,
    code:  "CLT-02",
    title: "Private Owners",
    body:  "Comprehensive maintenance, inspection, and refurbishment services for private aircraft owners. We treat every aircraft with the same level of care regardless of fleet size.",
    tags:  ["Annual Inspections", "Refurbishment", "Modifications"],
  },
  {
    icon:  Heart,
    code:  "CLT-03",
    title: "NGOs & Humanitarian Operators",
    body:  "We understand the unique demands of humanitarian aviation. Our engineers are experienced in maintaining aircraft operated in remote and challenging environments across East and Central Africa.",
    tags:  ["Field Support", "Rapid Turnaround", "Remote Ops"],
  },
  {
    icon:  Building,
    code:  "CLT-04",
    title: "Government & Institutions",
    body:  "Maintenance and engineering support for government agencies, regional institutions, and multinational organisations operating aircraft for official and development purposes.",
    tags:  ["Contract MX", "ACMI Support", "Full Documentation"],
  },
]

export function MaintenanceClients() {
  return (
    <section className="bg-black text-white py-24 md:py-32">
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
              Who We Serve
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Built for Every
              <br />
              <span className="text-white/30">Type of Operator</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/20 text-xs font-mono hidden md:block"
          >
            THIRD PARTY MAINTENANCE / WILSON AIRPORT
          </motion.p>
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

        {/* Client cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client, i) => {
            const Icon = client.icon
            return (
              <motion.div
                key={client.code}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
                className="group relative border border-white/10 rounded-2xl p-8 flex flex-col gap-6 hover:border-[#595B5C]/40 transition-colors duration-500 overflow-hidden cursor-default"
              >

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: "radial-gradient(ellipse at top left, rgba(89,91,92,0.08) 0%, transparent 70%)",
                  }}
                />

                {/* Top row */}
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(89,91,92,0.1)",
                      borderColor: "rgba(89,91,92,0.2)",
                    }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-300"
                      style={{ color: "#595B5C" }}
                    />
                  </div>
                  <span className="text-white/20 text-xs font-mono">
                    {client.code}
                  </span>
                </div>

                {/* Title + body */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {client.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {client.body}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
                  {client.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs font-mono px-3 py-1 rounded-full border"
                      style={{
                        borderColor: "rgba(89,91,92,0.3)",
                        color: "#595B5C",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                  style={{ backgroundColor: "#595B5C" }}
                />

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}