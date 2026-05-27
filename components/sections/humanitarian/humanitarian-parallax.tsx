"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function HumanitarianParallax() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Shift which part of the image is visible — no inset, no zoom
  const objectPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["50% 30%", "50% 70%"]
  )

  return (
    <div
      ref={sectionRef}
      className="relative h-[70vh] overflow-hidden"
    >
      <motion.img
        src="/images/images/humanitarian/kasas-limited-humanitarian-charters-dornier.webp"
        alt="Kasas aircraft operating in remote humanitarian field location"
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: "cover", objectPosition }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25 z-10" />
    </div>
  )
}