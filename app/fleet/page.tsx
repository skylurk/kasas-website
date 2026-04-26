import { DornierAvionics } from "@/components/sections/fleet/dornier-avionics"
import { DornierHero }      from "@/components/sections/fleet/dornier-hero"
import { DornierSpecs } from "@/components/sections/fleet/dornier-specs"
import { DornierThreeView } from "@/components/sections/fleet/dornier-three-view"

export const metadata = {
  title: "Dornier 228",
  description: "The Dornier 228 — East Africa's most capable short-field turboprop. Explore specs, avionics and cabin configurations.",
}

export default function Dornier228Page() {
  return (
    <main className="bg-black">
      <DornierHero />
      <DornierThreeView />
      <DornierSpecs />
      <DornierAvionics />
    </main>
  )
}