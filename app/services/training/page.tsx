import { TrainingDornierSim } from "@/components/sections/training/training-dornier-sim"
import { TrainingHero } from "@/components/sections/training/training-hero"
import { TrainingIntro } from "@/components/sections/training/training-intro"
import { TrainingSimulators } from "@/components/sections/training/training-simulators"
import { TrainingThinkAviation } from "@/components/sections/training/training-think-aviation"

export const metadata = {
  title: "Aviation Training",
  description: "KCAA approved aviation training with East Africa's most advanced full motion Dornier 228 simulator. Powered by Think Aviation.",
}

export default function TrainingPage() {
  return (
    <main className="">
      <TrainingHero />
      <TrainingIntro />
      <TrainingSimulators />
      <TrainingDornierSim />
      <TrainingThinkAviation />
    </main>
  )
}