import { TrainingDornierSim } from "@/components/sections/training/training-dornier-sim"
import { TrainingHero } from "@/components/sections/training/training-hero"
import { TrainingIntro } from "@/components/sections/training/training-intro"
import { TrainingSimulators } from "@/components/sections/training/training-simulators"

export const metadata = {
  title: "Aviation Training",
  description: "KCAA approved aviation training with East Africa's most advanced full motion Dornier 228 simulator. Powered by Think Aviation.",
}

export default function TrainingPage() {
  return (
    <main className="bg-black">
      <TrainingHero />
      <TrainingIntro />
      <TrainingSimulators />
      <TrainingDornierSim />
    </main>
  )
}