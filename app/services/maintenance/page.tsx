import { MaintenanceClients } from "@/components/sections/maintenance/maintenance-clients"
import { MaintenanceCta } from "@/components/sections/maintenance/maintenance-cta"
import { MaintenanceEngineShop } from "@/components/sections/maintenance/maintenance-engine-shop"
import { MaintenanceFacilities } from "@/components/sections/maintenance/maintenance-facilities"
import { MaintenanceHero } from "@/components/sections/maintenance/maintenance-hero"
import { MaintenanceIntro } from "@/components/sections/maintenance/maintenance-intro"
import { MaintenanceParallax } from "@/components/sections/maintenance/maintenance-parallax"
import { MaintenanceServices } from "@/components/sections/maintenance/maintenance-services"

export const metadata = {
  title: "Aircraft Maintenance",
  description: "KCAA approved aircraft maintenance at Wilson Airport Nairobi. Scheduled, unscheduled, and line maintenance for the Dornier 228 fleet and third party operators.",
}

export default function MaintenancePage() {
  return (
    <main>
      <MaintenanceHero />
      <MaintenanceIntro />
      <MaintenanceServices />
      <MaintenanceParallax />
      <MaintenanceEngineShop />
      <MaintenanceFacilities />
      <MaintenanceClients />
      <MaintenanceCta />
    </main>
  )
}