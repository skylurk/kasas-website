"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PlaneTakeoff, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { destinations } from "./destinations-data"
import { ContactForm } from "@/components/sections/contact/contact-form"

export function DestinationsClient() {
  const [activeCountry, setActiveCountry] = useState(destinations[0].name)
  const [activeRegion, setActiveRegion]   = useState<string | null>(null)
  const [search, setSearch]               = useState("")
  const [formOpen, setFormOpen]           = useState(false)

  const country = destinations.find((d) => d.name === activeCountry)!

  const filteredAirports = useMemo(() => {
    const base = activeRegion
      ? (country.regions?.find((r) => r.name === activeRegion)?.airports ?? [])
      : country.airports
    if (!search.trim()) return base
    const q = search.toLowerCase()
    return base.filter((a) => a.toLowerCase().includes(q))
  }, [country, activeRegion, search])

  const displayedPOE = useMemo(() => {
    if (!search.trim()) return country.pointsOfEntry
    const q = search.toLowerCase()
    return country.pointsOfEntry.filter((a) => a.toLowerCase().includes(q))
  }, [country.pointsOfEntry, search])

  const nonPOE = useMemo(
    () => filteredAirports.filter((a) => !country.pointsOfEntry.includes(a)),
    [filteredAirports, country.pointsOfEntry]
  )

  function handleCountryChange(name: string) {
    setActiveCountry(name)
    setActiveRegion(null)
    setSearch("")
  }

  return (
    <>
    <section className="bg-background min-h-screen">

      {/* Hero header */}
      <div className="relative border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4"
          >
            Charter Network
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="text-5xl md:text-7xl font-semibold tracking-tight mb-6"
          >
            Destinations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="text-muted-foreground text-lg max-w-xl leading-relaxed"
          >
            We operate across {destinations.length} countries and hundreds of airstrips —
            from major international gateways to remote bush strips.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">

        {/* Country filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {destinations.map((d) => (
            <button
              key={d.name}
              onClick={() => handleCountryChange(d.name)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCountry === d.name
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              )}
            >
              <span>{d.flag}</span>
              <span>{d.name}</span>
            </button>
          ))}
        </div>

        <AnimatePresence>
          <motion.div
            key={activeCountry}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
          >

            {/* Region filter — Kenya only */}
            {country.regions && (
              <div className="flex flex-wrap gap-2 mb-8">
                <button
                  onClick={() => setActiveRegion(null)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-200",
                    activeRegion === null
                      ? "bg-foreground text-background"
                      : "border border-border text-muted-foreground hover:text-foreground"
                  )}
                >
                  All Regions
                </button>
                {country.regions.map((r) => (
                  <button
                    key={r.name}
                    onClick={() => setActiveRegion(r.name)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-200",
                      activeRegion === r.name
                        ? "bg-foreground text-background"
                        : "border border-border text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
            )}

            {/* Search */}
            <div className="relative mb-10 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder={`Search ${country.name} airports…`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 pl-9 pr-9 rounded-lg border border-border bg-muted/40 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40 transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* International Gateways */}
            {(!activeRegion || activeRegion === null) && displayedPOE.length > 0 && (
              <div className="mb-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  International Gateways
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {displayedPOE.map((airport, i) => (
                    <motion.div
                      key={airport}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex items-center gap-3 p-4 rounded-xl border border-border bg-foreground/[0.03] hover:bg-foreground/[0.06] transition-colors group"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground group-hover:bg-foreground/15 transition-colors">
                        <PlaneTakeoff className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-medium leading-snug">{airport}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Point of entry</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Other Airports */}
            {nonPOE.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  {activeRegion ? `${activeRegion} Airstrips` : "All Airstrips"}
                  <span className="ml-2 font-normal normal-case tracking-normal text-muted-foreground/60">
                    ({nonPOE.length})
                  </span>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {nonPOE.map((airport, i) => (
                    <motion.div
                      key={airport}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.3) }}
                      className="px-4 py-3 rounded-lg border border-border/60 bg-muted/20 hover:bg-muted/50 hover:border-border transition-all text-sm text-foreground/80 hover:text-foreground cursor-default"
                    >
                      {airport}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state */}
            {nonPOE.length === 0 && displayedPOE.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-muted-foreground text-sm">No airports match &ldquo;{search}&rdquo;</p>
                <button onClick={() => setSearch("")} className="mt-3 text-xs underline text-muted-foreground hover:text-foreground">
                  Clear search
                </button>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="text-sm font-medium">Don&apos;t see your destination?</p>
                <p className="text-sm text-muted-foreground mt-1">
                  We operate to many more strips on request. Get in touch and we&apos;ll make it work.
                </p>
              </div>
              <button
                onClick={() => setFormOpen(true)}
                className="group relative overflow-hidden inline-flex shrink-0 items-center gap-3 h-12 pl-1.5 pr-6 rounded-full bg-foreground text-background text-sm font-medium transition-colors duration-500 hover:text-foreground"
              >
                <span aria-hidden="true" className="absolute left-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/15 scale-100 group-hover:scale-[20] transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background/20">
                  <PlaneTakeoff className="h-4 w-4" />
                </span>
                <span className="relative z-10">Make an Enquiry</span>
              </button>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>

    <ContactForm open={formOpen} onOpenChange={setFormOpen} />
    </>
  )
}
