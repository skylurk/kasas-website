import { Hero } from "@/components/sections/hero";
import { IntroSplit } from "@/components/sections/intro-split";
import { ParallaxBanner } from "@/components/sections/parallax-banner";
import { Statement } from "@/components/sections/statement";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <IntroSplit />
      <ParallaxBanner />
      <Statement />
    </main>
  )
}