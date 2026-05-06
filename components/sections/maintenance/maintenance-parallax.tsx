"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export function MaintenanceParallax() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-[-20%] z-0"
      >
        <Image
          src="/images/images/maintenance/kasas-kenya-aircraft-maintenance.webp"
          alt="Kasas maintenance engineers working on Dornier 228 fleet at Wilson Airport"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Centered stat */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-20 text-center md:text-left"
        >
          {[
            { value: "13+",   label: "Aircraft maintained annually"    },
            { value: "5",     label: "Aircraft hangar capacity"        },
            { value: "100%",  label: "KCAA approved facility"          },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col gap-2"
            >
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
                className="text-5xl md:text-6xl font-semibold tracking-tight text-white"
              >
                {stat.value}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.15 }}
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#595B5C" }}
              >
                {stat.label}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}