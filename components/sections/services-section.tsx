"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "@/components/shared/service-card"
import { SectionHeading } from "@/components/shared/section-heading"

const services = [
  {
    title:       "Humanitarian Flights",
    description: "Delivering vital humanitarian flights with reliability, safety, and trusted expertise",
    href:        "/services/humanitarian-flights",
    imageSrc:    "/images/images/kasas-premium-humanitarian-flights.webp",
    imageAlt:    "Humanitarian flight landing on remote airstrip in East Africa",
   accentColor: "group-hover:bg-[#68CBDD]",
  },
  {
    title:       "Training",
    description: "Shaping skilled aviators through hands-on training and simulator excellence.",
    href:        "/services/training",
    imageSrc:    "/images/images/kasas-limited-aviation-training.webp",
    imageAlt:    "Pilot in cockpit during training flight over Nairobi",
    accentColor: "group-hover:bg-[#0C7DC0]",
  },
  {
    title:       "Aircraft Maintenance",
    description: "Where precision engineering meets trust: keeping every flight mission-ready.",
    href:        "/services/maintenance",
    imageSrc:    "/images/images/kasas-limited-aircraft-maintenance.webp",
    imageAlt:    "Aircraft maintenance engineer inspecting jet engine",
    accentColor: "group-hover:bg-[#595B5C]",
  },
  {
    title:       "Safari Charters",
    description: "Seamless safari flights that connect you to nature’s most breathtaking destinations.",
    href:        "/services/safari-charters",
    imageSrc:    "/images/images/kasas-limited-premium-safari-charters.webp",
    imageAlt:    "Private charter plane on bush airstrip with savannah in background",
    accentColor: "group-hover:bg-[#EA7627]",
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  show:   {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] as const },
  },
}

export function ServicesSection() {
  return (
    <section className="bg-background py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-14">
          <SectionHeading
            label="What We Do"
            heading="Services Built for Africa's Skies"
            subheading="From emergency relief to bucket-list safaris, every flight we operate is a commitment to excellence."
            align="left"
          />
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={cardItem}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}