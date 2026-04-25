"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const variants = {
  hidden:  { opacity: 0, y: 20 },
  enter:   { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -20 },
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        className="flex flex-col min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}