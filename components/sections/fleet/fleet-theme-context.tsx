"use client"

import { createContext, useContext, useState } from "react"

interface FleetTheme {
  dark:   boolean
  toggle: () => void
}

const FleetThemeContext = createContext<FleetTheme>({ dark: true, toggle: () => {} })

export function FleetThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(true)
  return (
    <FleetThemeContext.Provider value={{ dark, toggle: () => setDark((d) => !d) }}>
      {children}
    </FleetThemeContext.Provider>
  )
}

export function useFleetTheme() {
  return useContext(FleetThemeContext)
}
