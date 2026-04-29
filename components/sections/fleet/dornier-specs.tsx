"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const specs = [
  { value: "1,300", unit: "mi",  label: "Maximum Range",        code: "PERF-01" },
  { value: "230",   unit: "mph", label: "Cruise Speed",         code: "PERF-02" },
  { value: "19",    unit: "pax", label: "Passenger Capacity",   code: "PERF-03" },
  { value: "800", unit: "m",  label: "Takeoff Distance",     code: "PERF-04" },
  { value: "6,400", unit: "kg",  label: "Max Takeoff Weight",   code: "PERF-05" },
  { value: "STOL",  unit: "",    label: "Runway Capability",    code: "PERF-06" },
]

const capabilities = [
  { label: "IFR Certified",                        code: "AV-01" },
  { label: "Digital Weather Radar",                code: "AV-02" },
  { label: "EGPWS",                                code: "AV-03" },
  { label: "TCAS II v7.1",                         code: "AV-04" },
  { label: "Dual GPS",                             code: "AV-05" },
  { label: "DFDR + CVR",                           code: "AV-06" },
  { label: "Satellite Tracking",                   code: "AV-07" },
  { label: "Satcom",                               code: "AV-08" },
]

export function DornierSpecs() {
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
              Performance Data
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Specifications
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/20 text-xs font-mono hidden md:block"
          >
            REF: KL-D228-SPECS / REV-04
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

        {/* Specs grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-6">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.code}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-black px-6 md:px-8 py-8 flex flex-col gap-2 hover:bg-white/5 transition-colors duration-300 overflow-hidden"
            >
              {/* Graph paper bg on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(220,38,38,0.4) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(220,38,38,0.4) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Code */}
              <span className="text-red-500/40 text-xs font-mono">{spec.code}</span>

              {/* Value */}
              <div className="flex items-end gap-2 mt-1">
                <span className="text-4xl md:text-5xl font-semibold text-white tracking-tighter">
                  {spec.value}
                </span>
                {spec.unit && (
                  <span className="text-red-500/70 text-sm font-mono mb-1.5">
                    {spec.unit}
                  </span>
                )}
              </div>

              {/* Label */}
              <span className="text-white/40 text-xs uppercase tracking-widest">
                {spec.label}
              </span>

              {/* Bottom red line on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-red-500/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Capabilities row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/10 rounded-xl overflow-hidden"
        >
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.code}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-black px-5 py-4 flex items-center justify-between gap-3 hover:bg-white/5 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-3">
                {/* Red dot indicator */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 + 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"
                />
                <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                  {cap.label}
                </span>
              </div>
              <span className="text-white/20 text-xs font-mono hidden md:block shrink-0">
                {cap.code}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}