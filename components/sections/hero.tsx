"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { HeroVideo } from "./hero-video"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y:  0, transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] as const } },
}

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

    <HeroVideo />

      {/* Content */}
      {/* <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-4xl"
      >
        <motion.span
          variants={item}
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Private Air Charter
        </motion.span>

        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight"
        >
          The Sky, On
          <br />
          Your Schedule
        </motion.h1>

        <motion.p
          variants={item}
          className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed"
        >
          Fly direct, fly private. Reach any destination across East Africa
          with zero compromise on time or comfort.
        </motion.p>

        <motion.div
          variants={item}
          className="flex items-center gap-4 pt-2"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book a Charter
          </Link>
          <Link
            href="/fleet"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors"
          >
            View Fleet
          </Link>
        </motion.div>
      </motion.div> */}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-muted-foreground/40"
        />
      </motion.div>

    </section>
  )
}