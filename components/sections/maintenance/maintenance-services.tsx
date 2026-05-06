"use client"

import { motion } from "framer-motion"
import {
  Wrench,
  Calendar,
  Zap,
  Shield,
  Layers,
  PaintBucket,
  Radio,
  MapPin,
} from "lucide-react"

const services = [
  {
    icon:  Calendar,
    code:  "MX-01",
    title: "Scheduled Maintenance",
    body:  "Routine inspections and maintenance carried out at manufacturer-defined intervals to keep your aircraft airworthy and compliant.",
  },
  {
    icon:  Wrench,
    code:  "MX-02",
    title: "Unscheduled Maintenance",
    body:  "Rapid response to unexpected technical issues — minimising aircraft on ground time and getting you back in the air quickly.",
  },
  {
    icon:  Shield,
    code:  "MX-03",
    title: "Annual Inspections",
    body:  "Comprehensive annual airworthiness inspections conducted by our KCAA approved engineers to the highest regulatory standards.",
  },
  {
    icon:  Radio,
    code:  "MX-04",
    title: "Avionics Installation & Repair",
    body:  "Installation, calibration, and repair of avionics systems — from navigation and communication equipment to modern glass cockpit upgrades.",
  },
  {
    icon:  Layers,
    code:  "MX-05",
    title: "Sheet Metal & Structural Repairs",
    body:  "In-house structural repair capability covering airframe damage, corrosion treatment, and sheet metal fabrication.",
  },
  {
    icon:  Zap,
    code:  "MX-06",
    title: "Modifications & Upgrades",
    body:  "Approved modifications and performance upgrades tailored to your operational requirements and local operating environment.",
  },
  {
    icon:  PaintBucket,
    code:  "MX-07",
    title: "Interior & Exterior Refurbishment",
    body:  "Full cabin refurbishment and exterior paint — restoring your aircraft to a standard that reflects the professionalism of your operation.",
  },
  {
    icon:  MapPin,
    code:  "MX-08",
    title: "Line Maintenance — Nairobi",
    body:  "Line maintenance services at our Wilson Airport base — turn-around checks, pre-flight inspections, and transit servicing.",
  },
]

export function MaintenanceServices() {
  return (
    <section
      id="services"
      className="bg-background py-24 md:py-32"
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
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#595B5C" }}
            >
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Maintenance Services
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-xs font-mono hidden md:block"
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
          className="h-px bg-border mb-16"
        />

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
                className="group relative bg-background px-6 py-8 flex flex-col gap-4 hover:bg-muted/50 transition-colors duration-300 overflow-hidden cursor-default"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at top left, rgba(89,91,92,0.08) 0%, transparent 70%)",
                  }}
                />

                {/* Icon */}
                <div
                  className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-border transition-all duration-300 bg-muted"
                >
                  <Icon
                    className="w-4 h-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                  />
                </div>

                {/* Code */}
                <span className="text-muted-foreground/60 text-xs font-mono">
                  {service.code}
                </span>

                {/* Title */}
                <h3 className="text-foreground text-base font-semibold leading-snug">
                  {service.title}
                </h3>

                {/* Body */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.body}
                </p>

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