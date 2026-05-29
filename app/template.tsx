"use client"

import { useLayoutEffect } from "react"
import { lenisInstance } from "@/components/layout/lenis-provider"

// template.tsx is remounted on every navigation (unlike layout.tsx which persists).
// useLayoutEffect here fires AFTER the new page content is in the DOM and BEFORE
// the browser paints — catching any browser scroll restoration that fires after
// the layout-level reset in LenisProvider.
export default function Template({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0
    lenisInstance.current?.scrollTo(0, { immediate: true })
  }, [])

  return <>{children}</>
}
