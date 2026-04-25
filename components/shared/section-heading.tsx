"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  label?:     string       // small eyebrow text e.g. "Our Fleet"
  heading:    string       // main h2
  subheading?: string      // optional paragraph below
  align?:     "left" | "center" | "right"
  className?: string
}

export function SectionHeading({
  label,
  heading,
  subheading,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left:   "items-start text-left",
    center: "items-center text-center",
    right:  "items-end text-right",
  }[align]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className={cn("flex flex-col gap-3 max-w-2xl", alignClass, className)}
    >
      {label && (
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
        {heading}
      </h2>
      {subheading && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          {subheading}
        </p>
      )}
    </motion.div>
  )
}