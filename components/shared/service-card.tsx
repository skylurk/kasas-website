"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  href: string
  imageSrc: string
  imageAlt: string
  accentColor: string // tailwind bg class e.g. "bg-blue-500"
}

export function ServiceCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  accentColor,
}: ServiceCardProps) {
  return (
<Link
  href={href}
  className="group relative block h-[380px] overflow-hidden rounded-xl md:h-[440px]"
>
      {/* Background image with zoom on hover */}
      <motion.div className="absolute inset-0" initial={false}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Gradient overlay — bottom up */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Arrow icon — top right */}
      <div className="absolute top-5 right-5 z-20">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/60 transition-all duration-300 group-hover:border-transparent",
            accentColor // pass the full "group-hover:bg-blue-500" string from data
          )}
        >
          <ArrowUpRight className="h-4 w-4 text-white" />
        </div>
      </div>

      {/* Bottom left — title + description */}
      <div className="absolute right-0 bottom-0 left-0 z-20 flex flex-col gap-2 p-6">
        <motion.h3 className="text-2xl font-semibold tracking-tight text-white">
          {title}
        </motion.h3>
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
      </div>
    </Link>
  )
}
