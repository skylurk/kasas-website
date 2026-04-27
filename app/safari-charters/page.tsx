import { SafariAircraft } from "@/components/sections/safari/safari-aircraft"
import { SafariHero } from "@/components/sections/safari/safari-hero"
import { SafariIntro } from "@/components/sections/safari/safari-intro"
import { SafariSplits } from "@/components/sections/safari/safari-splits"
import { SafariVideo } from "@/components/sections/safari/safari-video"

export const metadata = {
  title: "Safari Charters",
  description: "Private safari charter flights to East Africa's most iconic destinations. Fly direct into the Mara, Amboseli, Samburu and beyond.",
}

export default function SafariChartersPage() {
  return (
    <main>
      <SafariHero />
      <SafariIntro />
      <SafariAircraft />
      <SafariSplits />
      {/* <SafariVideo videoId="https://www.youtube.com/watch?v=AfJSkT7IQP0" /> */}
      <SafariVideo videoId="https://www.youtube.com/shorts/AfJSkT7IQP0" />
    </main>
  )
}