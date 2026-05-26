"use client"

import React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

type Line = string | { label: string; value: string }

const details: {
  icon: React.ElementType
  code: string
  title: string
  lines: Line[]
  href: string
}[] = [
  {
    icon:  Phone,
    code:  "CON-01",
    title: "Phone",
    lines: [
      { label: "Admin",      value: "+254 (0) 795 992 689" },
      { label: "Flight Ops", value: "+254 (0) 719 652 632" },
      { label: "Sales",      value: "+254 (0) 741 729 926" },
    ],
    href:  "tel:+254795992689",
  },
  {
    icon:  Mail,
    code:  "CON-02",
    title: "Email",
    lines: [
      "ops@kasaskenya.com",
      "info@kasaskenya.com",
    ],
    href:  "mailto:ops@kasaskenya.com",
  },
  {
    icon:  MapPin,
    code:  "CON-03",
    title: "Location",
    lines: [
      "Wilson Airport",
      "Nairobi, Kenya",
    ],
    href:  "https://maps.google.com",
  },
]

export function ContactDetails() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }}
          className="mb-16"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#595B5C" }}
          >
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            We're Based at
            <br />
            <span className="text-muted-foreground">Wilson Airport, Nairobi</span>
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          className="h-px bg-border mb-16"
        />

        {/* Details grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {details.map((detail, i) => {
            const Icon = detail.icon
            return (
              <motion.a
                key={detail.code}
                href={detail.href}
                target={detail.code === "CON-03" ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
                className="group border border-border rounded-2xl p-8 flex flex-col gap-6 hover:bg-muted/50 transition-colors duration-300"
              >
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-border bg-muted transition-all duration-300"
                  >
                    <Icon
                      className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    />
                  </div>
                  <span className="text-muted-foreground/40 text-xs font-mono">
                    {detail.code}
                  </span>
                </div>

                {/* Title + lines */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground text-lg font-semibold">
                    {detail.title}
                  </h3>
                  {detail.lines.map((line, j) =>
                    typeof line === "string" ? (
                      <p key={j} className="text-muted-foreground text-sm font-mono">
                        {line}
                      </p>
                    ) : (
                      <p key={j} className="flex items-baseline gap-2 text-sm">
                        <span className="text-muted-foreground/50 text-xs font-semibold uppercase tracking-wide w-20 shrink-0">
                          {line.label}
                        </span>
                        <span className="text-muted-foreground font-mono">{line.value}</span>
                      </p>
                    )
                  )}
                </div>

                {/* Bottom accent */}
                <div
                  className="h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ backgroundColor: "#595B5C" }}
                />

              </motion.a>
            )
          })}
        </div>

      </div>
    </section>
  )
}