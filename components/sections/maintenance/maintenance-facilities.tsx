"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const equipment = [
  {
    code:  "EQP-01",
    title: "Engine Test Cell",
    body:  "A dedicated engine test cell for post-maintenance run-up and performance verification of the TPE331 powerplant — confirming airworthiness before return to service.",
  },
  {
    code:  "EQP-02",
    title: "Avionics Test Bench",
    body:  "A fully equipped avionics test bench for the calibration, testing, and repair of navigation, communication, and flight instrument systems.",
  },
  {
    code:  "EQP-03",
    title: "Sheet Metal Workshop",
    body:  "A dedicated sheet metal fabrication and structural repair workshop equipped with specialist tooling for airframe repairs and modifications.",
  },
]

export function MaintenanceFacilities() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
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
              Our Facility
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Wilson Airport
              <br />
              <span className="text-muted-foreground">Nairobi, Kenya</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-xs font-mono hidden md:block"
          >
            5 AIRCRAFT HANGAR CAPACITY
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

        {/* Split — image left, equipment right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — hangar image + capacity card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <div className="md:sticky md:top-28 flex flex-col gap-4">

              {/* Hangar image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/images/maintenance/kasas-kenya-aircraft-maintenance.webp"
                  alt="Kasas maintenance hangar at Wilson Airport — 5 aircraft capacity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <p className="text-white/40 text-xs font-mono">
                    FIG. 01 — KASAS HANGAR / WILSON AIRPORT
                  </p>
                </div>
              </div>

              {/* Capacity stats */}
              <div className="grid grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
                {[
                  { value: "5",      label: "Aircraft capacity"   },
                  { value: "24/7",   label: "Operations"          },
                  { value: "KCAA",   label: "Approved facility"   },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-background px-5 py-5 flex flex-col gap-1 hover:bg-muted/50 transition-colors duration-300"
                  >
                    <p
                      className="text-2xl font-semibold tracking-tight"
                      style={{ color: "#595B5C" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Right — equipment list */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
            className="flex flex-col gap-6"
          >

            <p className="text-muted-foreground text-base leading-relaxed">
              Our maintenance facility at Wilson Airport is purpose-built for
              Dornier 228 operations. With a hangar capable of accommodating
              five aircraft simultaneously, our engineers have the space,
              tooling, and equipment to deliver work to the highest standard
              — on time and on budget.
            </p>

            {/* Equipment cards */}
            <div className="flex flex-col gap-4 mt-4">
              {equipment.map((item, i) => (
                <motion.div
                  key={item.code}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.33, 1, 0.68, 1] as const,
                  }}
                  className="group border border-border rounded-xl p-6 flex gap-5 hover:bg-muted/50 transition-colors duration-300"
                  style={{
                    borderLeftWidth: "3px",
                    borderLeftColor: "rgba(89,91,92,0.4)",
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-foreground text-base font-semibold">
                        {item.title}
                      </h3>
                      <span
                        className="text-xs font-mono shrink-0 ml-4"
                        style={{ color: "rgba(89,91,92,0.5)" }}
                      >
                        {item.code}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Wilson Airport note */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start gap-4 border border-border rounded-xl p-5 mt-2"
            >
              <span
                className="w-1 self-stretch rounded-full shrink-0"
                style={{ backgroundColor: "#595B5C" }}
              />
              <div className="flex flex-col gap-1">
                <p className="text-foreground text-sm font-semibold">
                  Centrally Located at Wilson Airport
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Wilson Airport is East Africa's busiest general aviation
                  airport — giving our clients easy access to maintenance
                  services without disruption to their operations.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}