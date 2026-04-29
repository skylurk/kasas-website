"use client"

import { motion } from "framer-motion"
import {
  PlaneTakeoff,
  MapPin,
  Package,
  Clock,
  Shield,
  Radio,
  Wrench,
  Users,
} from "lucide-react"

const capabilities = [
  { icon: PlaneTakeoff, label: "STOL Certified Operations"         },
  { icon: MapPin,       label: "Remote Airstrip Access"            },
  { icon: Package,      label: "Passenger & Cargo Charters"        },
  { icon: Clock,        label: "Rapid Response Deployment"         },
  { icon: Shield,       label: "IFR Certified Fleet"               },
  { icon: Radio,        label: "Satellite Tracking & Satcom"       },
  { icon: Wrench,       label: "In-House Maintenance & Engineering" },
  { icon: Users,        label: "Field Operational Base Setup"      },
]

export function HumanitarianCapabilities() {
  return (
    <section className="bg-white text-black py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-3">
              Operational Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Built for the Field
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black/30 text-xs font-mono hidden md:block"
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
          className="h-px bg-black/10 mb-16"
        />

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-black/5 border border-black/5 rounded-2xl overflow-hidden">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
                className="group bg-white px-7 py-8 flex flex-col gap-4 hover:bg-sky-50 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-black/5 group-hover:bg-sky-500/10 transition-colors duration-300">
                  <Icon className="w-4 h-4 text-black/40 group-hover:text-sky-500 transition-colors duration-300" />
                </div>
                <p className="text-sm font-medium text-black/70 group-hover:text-black leading-snug transition-colors duration-300">
                  {cap.label}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}