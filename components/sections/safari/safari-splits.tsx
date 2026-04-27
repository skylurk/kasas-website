"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const splits = [
  {
    label:    "Our Crew",
    heading:  "120,000 Hours of Experience Above Africa",
    body:     "We proudly maintain and operate our own fleet of 13 aircraft, supported by a highly experienced team of pilots. Each flight is crewed by two professional pilots, collectively bringing over 120,000 hours of flying experience to ensure the highest standards of safety, reliability, and comfort.",
    imageSrc: "/images/images/safari/kasas-limited-flying-to-mara.jpg",
    imageAlt: "Two Kasas pilots conducting pre-flight checks on the tarmac",
    reverse:  false,
    highlight: "120,000 hours",
  },
  {
    label:    "The Journey",
    heading:  "Step Off the Plane. Step Into the Wild.",
    body:     "With Kasas, your adventure begins the moment you take off. Instead of long road journeys, you'll arrive swiftly and refreshed, ready to step straight into the wild — without any added stops that occur on scheduled flights.",
    imageSrc: "/images/images/safari/kasas-aircraft-at-the-mara-strip.jpg",
    imageAlt: "Passengers boarding a Kasas charter aircraft at a bush airstrip",
    reverse:  true,
    highlight: "the moment you take off",
  },
  {
    label:    "The Arrival",
    heading:  "Where the Safari Begins Before You Land.",
    body:     "As the plane descends onto one of the Masai Mara's bush airstrips, anticipation heightens — your eyes scanning the horizon until you spot your first giraffe stretching above the trees, or a herd of zebra and elephant grazing casually beside the runway. The aircraft taxis to a halt, and just beyond your window, safari vehicles await to carry you deeper into this untamed landscape. It feels like a dream unfolding — an invitation to experience the cradle of mankind in its purest.",
    imageSrc: "/images/images/safari/kasas-aircraft-at-the-mara-strip.jpg",
    imageAlt: "Safari vehicle waiting beside bush airstrip as Kasas aircraft arrives",
    reverse:  false,
    highlight: "a dream unfolding",
  },
]

export function SafariSplits() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-32 md:gap-40">
        {splits.map((split, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${
              split.reverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
            }`}
          >

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: split.reverse ? 32 : -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
              className="flex flex-col gap-6"
            >
              {/* Label */}
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {split.label}
              </p>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-snug">
                {split.heading}
              </h2>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
                className="h-px bg-border w-12"
              />

              {/* Body — highlight key phrase */}
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {split.body.split(split.highlight).map((part, j, arr) => (
                  <span key={j}>
                    {part}
                    {j < arr.length - 1 && (
                      <span className="text-foreground font-medium">
                        {split.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>

              {/* Index number — editorial detail */}
              <p className="text-4xl font-semibold text-border mt-2 font-mono">
                {String(i + 1).padStart(2, "0")}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: split.reverse ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={split.imageSrc}
                  alt={split.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Offset caption box */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
                className={`absolute -bottom-5 ${
                  split.reverse ? "left-6" : "right-6"
                } bg-background border border-border rounded-xl px-5 py-3 shadow-lg`}
              >
                <p className="text-xs text-muted-foreground font-medium">
                  {split.imageAlt}
                </p>
              </motion.div>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  )
}