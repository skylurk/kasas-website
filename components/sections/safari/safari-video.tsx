"use client"

import { motion } from "framer-motion"

export function SafariVideo() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }}
          className="flex flex-col gap-3 mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            See It for Yourself
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            The Safari Charter
            <br />
            <span className="text-muted-foreground">Experience</span>
          </h2>
        </motion.div>

        {/* Video + text — side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Video — vertical aspect ratio */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
            className="w-full max-w-sm mx-auto md:mx-0"
          >
            <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/AfJSkT7IQP0?autoplay=0&rel=0&modestbranding=1&playsinline=1"
                title="Kasas Safari Charter Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
            className="flex flex-col gap-8"
          >
            {[
              {
                title: "From Nairobi to the Mara in Under an Hour",
                body:  "Skip the seven-hour road journey. Our direct safari charters get you on the ground and into the action before the morning game drive begins.",
              },
              {
                title: "Land Where Others Can't",
                body:  "Our STOL-capable Dornier 228 fleet accesses over 100 bush airstrips — including remote camps that no scheduled airline will ever reach.",
              },
              {
                title: "Your Schedule. Your Safari.",
                body:  "Flexible departure times, private aircraft, and no stopovers. Every detail of the journey is tailored entirely around you.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.33, 1, 0.68, 1] as const,
                }}
                className="flex gap-5"
              >
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  )
}