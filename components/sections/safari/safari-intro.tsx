"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export function SafariIntro() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <>
      {/* Text section — white bg */}
      <section className="bg-white text-black py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
            className="text-xs font-semibold uppercase tracking-widest text-black/40 mb-6"
          >
            Where We Fly
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
            className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-10"
          >
            Private Safari Charters
            <br />
            <span className="text-black/30">Across Kenya</span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
            className="h-px bg-black/10 mb-10"
          />

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
            className="text-black/60 text-lg md:text-xl leading-relaxed max-w-3xl"
          >
            At Kasas, we open the skies of Kenya with private safari charters
            to more than 100 airstrips across the country. From the vast
            wilderness of Tsavo East and West, to the dramatic landscapes of
            Mount Kenya and Laikipia, we connect you to Kenya's most iconic
            safari destinations. Experience the wonder of the Great Migration
            in the Masai Mara, take in sweeping views of Kilimanjaro from
            Amboseli, or venture north to the rugged beauty of Samburu and
            Meru. We also fly into the Rift Valley and the pristine beaches
            of both the North and South Coast — bringing Kenya's most
            remarkable regions within easy reach.
          </motion.p>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.33, 1, 0.68, 1] as const }}
            className="flex items-center gap-10 md:gap-16 mt-14 pt-10 border-t border-black/10"
          >
            {[
              { value: "100+", label: "Airstrips across Kenya" },
              { value: "13",   label: "Aircraft in fleet"      },
              { value: "24/7", label: "Operations support"     },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <p className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
                  {stat.value}
                </p>
                <p className="text-xs text-black/40 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Parallax image */}
      <div
        ref={parallaxRef}
        className="relative h-[80vh] overflow-hidden"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-[-20%] z-0"
        >
          <Image
            src="/images/images/safari/kasas-kenya-private-safari-charters.jpg"
            alt="Aerial view of Kenya savannah landscape"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>
    </>
  )
}