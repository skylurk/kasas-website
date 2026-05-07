"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { team, type TeamMember } from "@/lib/team"
import { TeamMemberSheet } from "@/components/sections/team/team-member-sheet"
import { ArrowUpRight } from "lucide-react"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 32 },
  show:   {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const },
  },
}

export default function TeamPage() {
  const [selected, setSelected] = useState<TeamMember | null>(null)

  return (
    <main>

      {/* Hero text section */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6"
          >
            Our People
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-none mb-10"
          >
            A Versatile
            <br />
            <span className="text-muted-foreground">Team</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
            className="h-px bg-border mb-10"
          />

          {/* Body — two columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              The Kasas team is built on expertise, passion, and trust.
              Our pilots, engineers, and staff work seamlessly to ensure
              safety, comfort, and reliability on every mission.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.33, 1, 0.68, 1] as const }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Kasas goes above and beyond to deliver remarkable air charters
              tailored to your journey — from seamless safari adventures to
              critical humanitarian flights. Our commitment is unwavering,
              with trusted expertise, dedicated crew, and reliable aircraft
              ensuring every flight exceeds expectations.
            </motion.p>
          </div>

        </div>
      </section>

      {/* Team grid */}
      <section className="pb-24 md:pb-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {team.map((member) => (
              <motion.div
                key={member.id}
                variants={cardItem}
                onClick={() => setSelected(member)}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border hover:border-[#595B5C]/40 transition-colors duration-500">

                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Arrow icon */}
                    <div className="absolute top-4 right-4 z-10">
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[#595B5C]/60"
                        style={{}}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>

                    {/* Name + title */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <motion.div
                        className="flex flex-col gap-1"
                      >
                        <p className="text-white font-semibold text-base leading-tight">
                          {member.name}
                        </p>
                        <p className="text-white/60 text-xs leading-snug">
                          {member.title}
                        </p>
                      </motion.div>

                      {/* Hover underline */}
                      <div
                        className="mt-3 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                        style={{ backgroundColor: "#595B5C" }}
                      />
                    </div>

                  </div>
                </div>

                {/* Member ID — editorial detail */}
                <p className="text-muted-foreground/30 text-xs font-mono mt-2 px-1">
                  {member.id}
                </p>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Member sheet */}
      <TeamMemberSheet
        member={selected}
        onClose={() => setSelected(null)}
      />

    </main>
  )
}