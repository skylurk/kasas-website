"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export function AboutTeamParallax() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <section
      ref={sectionRef}
      className="relative h-[85vh] overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-[-20%] z-0"
      >
        <Image
          src="/images/images/about/kasas-kenya-limited-team.webp"
          alt="Kasas Limited flight crew and ground team"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 z-10" />
    </section>
  )
}