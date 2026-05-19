"use client"

import { Sun, Moon } from "lucide-react"
import { FleetThemeProvider, useFleetTheme } from "./fleet-theme-context"
import { DornierHero }          from "./dornier-hero"
import { DornierThreeView }     from "./dornier-three-view"
import { DornierSpecs }         from "./dornier-specs"
import { DornierAvionics }      from "./dornier-avionics"
import { DornierPerformance }   from "./dornier-performance"
import { DornierConfigurations } from "./dornier-configuration"

function FleetToggle() {
  const { dark, toggle } = useFleetTheme()
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 h-10 pl-1.5 pr-4 rounded-full text-xs font-medium cursor-pointer transition-all duration-500 border backdrop-blur-sm"
      style={
        dark
          ? { backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.65)" }
          : { backgroundColor: "rgba(0,0,0,0.06)",       borderColor: "rgba(0,0,0,0.12)",       color: "rgba(0,0,0,0.55)" }
      }
    >
      <span
        className="flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-500"
        style={dark ? { backgroundColor: "rgba(255,255,255,0.12)" } : { backgroundColor: "rgba(0,0,0,0.08)" }}
      >
        {dark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
      </span>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  )
}

function FleetPageContent() {
  const { dark } = useFleetTheme()
  return (
    <main className={dark ? "bg-black" : "bg-white"} style={{ transition: "background-color 0.4s ease" }}>
      <FleetToggle />
      <DornierHero />
      <DornierThreeView />
      <DornierSpecs />
      <DornierAvionics />
      <DornierPerformance />
      <DornierConfigurations />
    </main>
  )
}

export function FleetPage() {
  return (
    <FleetThemeProvider>
      <FleetPageContent />
    </FleetThemeProvider>
  )
}