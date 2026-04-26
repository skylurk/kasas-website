import { AboutGallery } from "@/components/sections/about-gallery"
import { AboutHero } from "@/components/sections/about-hero"
import { AboutStory } from "@/components/sections/about-story"
import { AboutTeamContent } from "@/components/sections/about-team-content"
import { AboutTeamParallax } from "@/components/sections/about-team-parallax"

export const metadata = {
  title: "About",
  description: "Learn about Kasas Limited — East Africa's premier private air charter company.",
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutTeamParallax />
      <AboutTeamContent />
      <AboutGallery />
    </main>
  )
}