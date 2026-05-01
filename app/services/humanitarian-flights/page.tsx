import { HumanitarianCapabilities } from "@/components/sections/humanitarian/humanitarian-capabilities"
import { HumanitarianHero } from "@/components/sections/humanitarian/humanitarian-hero"
import { HumanitarianIntro } from "@/components/sections/humanitarian/humanitarian-intro"
import { HumanitarianServices } from "@/components/sections/humanitarian/humanitarian-services"
import { HumanitarianParallax } from "@/components/sections/humanitarian/humanitarian-parallax"

export const metadata = {
  title: "Humanitarian Flights",
  description: "Kasas Limited specialises in STOL humanitarian charter operations across remote Africa.",
}

export default function HumanitarianFlightsPage() {
  return (
    <main>
      <HumanitarianHero />
      <HumanitarianIntro />
      <HumanitarianParallax />
      <HumanitarianServices />
      <HumanitarianCapabilities />
    </main>
  )
}