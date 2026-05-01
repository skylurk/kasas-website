"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export function HumanitarianParallax() {
  const sectionRef = useRef<HTMLDivElement>(null)

const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"],
})

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <div
      ref={sectionRef}
      className="relative h-[70vh] overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-[-20%] z-0"
      >
        <Image
          src="/images/images/humanitarian/dornier-for-humanitarian-charters.jpg"
          alt="Kasas aircraft operating in remote humanitarian field location"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  )
}