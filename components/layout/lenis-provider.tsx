"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { useAnimationFrame } from "framer-motion"

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

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

  useAnimationFrame((t) => {
    lenisRef.current?.raf(t)
  })

  return <>{children}</>
}