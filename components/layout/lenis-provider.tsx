"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { useAnimationFrame } from "framer-motion"
import { usePathname } from "next/navigation"

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname  = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })
    lenisRef.current = lenis

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // On every route change, jump instantly to top before Lenis can animate
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [pathname])

  useAnimationFrame((t) => {
    lenisRef.current?.raf(t)
  })

  return <>{children}</>
}