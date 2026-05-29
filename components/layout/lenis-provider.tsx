"use client"

import { useEffect, useLayoutEffect, useRef } from "react"
import Lenis from "lenis"
import { useAnimationFrame } from "framer-motion"
import { usePathname } from "next/navigation"

// Module-level ref so template.tsx can access the instance without context
export const lenisInstance: { current: Lenis | null } = { current: null }

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname  = usePathname()

  useEffect(() => {
    // Prevent the browser from restoring scroll positions on SPA navigation.
    // Without this, the browser restores a previous /about scroll position AFTER
    // our reset fires, causing Lenis to animate from that restored position.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })
    lenisRef.current    = lenis
    lenisInstance.current = lenis

    return () => {
      lenis.destroy()
      lenisRef.current    = null
      lenisInstance.current = null
    }
  }, [])

  // Belt-and-suspenders reset at the layout level (fires before page-level effects)
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [pathname])

  useAnimationFrame((t) => {
    lenisRef.current?.raf(t)
  })

  return <>{children}</>
}