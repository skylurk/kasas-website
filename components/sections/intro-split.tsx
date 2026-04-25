"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"

export function IntroSplit() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Image drifts 40px to the right as user scrolls down
  const x = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }}
          className="flex flex-col gap-6"
        >
          <SectionHeading
            label="Who We Are"
            heading="Private Aviation, Redefined."
            subheading="We connect East Africa's most discerning travellers with a fleet of meticulously maintained aircraft and a crew that puts your time first."
            align="left"
          />

          <p className="text-white/60 text-base leading-relaxed">
            Whether it's a same-day executive transfer or a multi-leg safari
            circuit, Kasas Limited delivers a seamless private aviation
            experience from wheels-up to touchdown.
          </p>

          <div className="flex items-center gap-10 pt-4">
            <div>
              <p className="text-3xl font-semibold">12+</p>
              <p className="text-sm text-white/50 mt-1">Aircraft in fleet</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-3xl font-semibold">50+</p>
              <p className="text-sm text-white/50 mt-1">Destinations</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-3xl font-semibold">8+</p>
              <p className="text-sm text-white/50 mt-1">Years flying</p>
            </div>
          </div>
        </motion.div>

        {/* Right — Image with scroll drift */}
        <motion.div
          style={{ x }}
          className="relative h-[400px] md:h-[560px] rounded-xl overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
            className="h-full w-full"
          >
            <Image
              src="/images/images/aircraft-dashboard.jpg"
            //   src="/images/images/kasas-limited-premium-safari-and-air-charters-optimized.webp"
              alt="Kasas Limited private jet on runway at dusk"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}