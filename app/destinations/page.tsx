import { DestinationsClient } from "@/components/sections/destinations/destinations-client"

export const metadata = {
  title: "Destinations",
  description: "Kasas Limited operates across 12 countries and hundreds of airstrips — from major international gateways to remote bush strips across Africa.",
}

export default function DestinationsPage() {
  return (
    <main>
      <DestinationsClient />
    </main>
  )
}
