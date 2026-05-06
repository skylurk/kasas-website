"use client"

import { motion } from "framer-motion"

export function MaintenanceIntro() {
  return (
    <section className="py-24 md:py-32 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6"
        >
          Who We Are
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
          className="h-px bg-border mb-10"
        />

        {/* Large statement */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-2xl md:text-3xl lg:text-xl font-medium leading-relaxed md:leading-relaxed text-foreground/80 mb-16"
        >
          With one of the{" "}
          <span className="text-foreground font-semibold">
            largest Dornier 228 fleets worldwide
          </span>
          , we provide third party maintenance work including scheduled and
          unscheduled maintenance, modifications, upgrades, and interior and
          exterior refurbishment. Our{" "}
          <span className="text-foreground font-semibold">
            in-house TPE331 engine shop
          </span>{" "}
          gives us increased control over{" "}
          <span style={{ color: "#595B5C" }} className="font-semibold">
            reliability, cost and downtime.
          </span>
        </motion.p>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden"
        >
          {[
            { value: "13",    label: "Aircraft maintained"          },
            { value: "5",     label: "Hangar capacity"              },
            { value: "3rd",   label: "Party maintenance provider"   },
            { value: "KCAA",  label: "Approved facility"            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background px-6 py-7 flex flex-col gap-1 hover:bg-muted/50 transition-colors duration-300 group"
            >
              <p
                className="text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300"
                style={{ color: "#595B5C" }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}