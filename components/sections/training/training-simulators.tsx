"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const simulators = [
  { 
    code:    "SIM-01",
    title:   "Cessna 172",
    short:   "C172",
    body:    "Simulator of the world's leading trainer aircraft, used to practice core flying skills, instrument procedures, take-offs, and landings safely.",
    images:  [
      { src: "/images/images/training/kasas-cessna-training.jpg", alt: "Cessna 172 simulator cockpit overview" },
      { src: "/images/images/training/kasas-cessna-training.jpg", alt: "C172 simulator instrument panel closeup" },
      { src: "/images/images/training/kasas-cessna-training.jpg", alt: "Pilot training in Cessna 172 simulator" },
    ],
  },
  {
    code:    "SIM-02",
    title:   "Dornier 228-212",
    short:   "Do228",
    body:    "Simulator of a rugged twin-turboprop, ideal for training in multi-engine operations, advanced procedures, and regional flight missions.",
    images:  [
      { src: "/images/images/training/kasas-kenya-208-caravan.jpg", alt: "Dornier 228 simulator cockpit overview" },
      { src: "/images/images/training/kasas-kenya-208-caravan.jpg", alt: "Do228 simulator instrument panel" },
      { src: "/images/images/training/kasas-kenya-208-caravan.jpg", alt: "Instructor and trainee in Do228 simulator" },
    ],
  },
  {
    code:    "SIM-03",
    title:   "Cessna 208 Caravan",
    short:   "C208",
    body:    "Simulator of a versatile turboprop, allowing pilots to train for passenger, cargo, and bush operations under real-world conditions.",
    images:  [
      { src: "/images/images/training/kasas-kenya-dornier-228.jpg", alt: "Cessna 208 Caravan simulator cockpit" },
      { src: "/images/images/training/kasas-kenya-dornier-228.jpg", alt: "C208 simulator instrument panel closeup" },
      { src: "/images/images/training/kasas-kenya-dornier-228.jpg", alt: "Pilot training in Cessna 208 simulator" },
    ],
  },
]

export function TrainingSimulators() {
  const [activeSim,    setActiveSim]    = useState<number | null>(null)
  const [activeImage,  setActiveImage]  = useState<number>(0)

  const openLightbox = (simIndex: number, imageIndex: number) => {
    setActiveSim(simIndex)
    setActiveImage(imageIndex)
  }

  const closeLightbox = () => {
    setActiveSim(null)
    setActiveImage(0)
  }

  const prevImage = () => {
    if (activeSim === null) return
    setActiveImage((p) =>
      (p - 1 + simulators[activeSim].images.length) % simulators[activeSim].images.length
    )
  }

  const nextImage = () => {
    if (activeSim === null) return
    setActiveImage((p) => (p + 1) % simulators[activeSim].images.length)
  }

  return (
    <section
      id="simulators"
      className="bg-black text-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] as const }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400/70 mb-3">
              Our Simulators
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Train in the Sim.
              <br />
              <span className="text-white/30">Fly in the Real.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/20 text-xs font-mono hidden md:block"
          >
            CLICK ANY IMAGE TO OPEN GALLERY
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
          className="h-px bg-sky-500/30 mb-16"
        />

        {/* Simulator cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {simulators.map((sim, i) => (
            <motion.div
              key={sim.code}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.33, 1, 0.68, 1] as const,
              }}
              className="group border border-white/10 rounded-2xl overflow-hidden hover:border-sky-500/40 transition-colors duration-500"
            >
              {/* Main image — click to open lightbox */}
              <div
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => openLightbox(i, 0)}
              >
                <Image
                  src={sim.images[0].src}
                  alt={sim.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 z-10" />

                {/* Image count badge */}
                <div className="absolute bottom-3 right-3 z-20 bg-black/60 backdrop-blur-sm text-white/70 text-xs font-mono px-2.5 py-1 rounded-full">
                  {sim.images.length} photos
                </div>

                {/* Code */}
                <div className="absolute top-3 left-3 z-20 text-white/40 text-xs font-mono">
                  {sim.code}
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-1 p-1 bg-black/40">
                {sim.images.map((img, j) => (
                  <div
                    key={j}
                    onClick={() => openLightbox(i, j)}
                    className="relative flex-1 aspect-[4/3] overflow-hidden rounded cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="10vw"
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 bg-black">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {sim.title}
                  </h3>
                  <span className="text-sky-400/60 text-xs font-mono border border-sky-500/20 px-2 py-0.5 rounded">
                    {sim.short}
                  </span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">
                  {sim.body}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeSim !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4"
            onClick={closeLightbox}
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              exit={{    scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] as const }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src={simulators[activeSim].images[activeImage].src}
                alt={simulators[activeSim].images[activeImage].alt}
                fill
                className="object-cover"
                sizes="90vw"
                priority
              />

              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white/80 text-sm">
                  {simulators[activeSim].images[activeImage].alt}
                </p>
                <p className="text-white/30 text-xs font-mono mt-1">
                  {simulators[activeSim].title} —{" "}
                  {String(activeImage + 1).padStart(2, "0")} /{" "}
                  {String(simulators[activeSim].images.length).padStart(2, "0")}
                </p>
              </div>
            </motion.div>

            {/* Thumbnail strip */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2"
            >
              {simulators[activeSim].images.map((img, j) => (
                <button
                  key={j}
                  onClick={() => setActiveImage(j)}
                  className={cn(
                    "relative w-14 h-10 rounded overflow-hidden border-2 transition-all duration-300",
                    j === activeImage
                      ? "border-sky-400 opacity-100"
                      : "border-white/20 opacity-50 hover:opacity-80"
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="60px"
                  />
                </button>
              ))}
            </div>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}