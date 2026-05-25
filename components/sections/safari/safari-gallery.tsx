"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const images = [
  { src: "/images/images/safari/safari-gallery/kasas-limited-safari-charter-masai-mara-aerial.webp",     alt: "Aerial view of Masai Mara on a Kasas safari charter",          span: "col-span-2 row-span-2" },
  { src: "/images/images/safari/safari-gallery/kasas-limited-safari-flight-kenya-savannah.webp",          alt: "Kasas charter flight over Kenya's savannah plains",             span: "col-span-1 row-span-1" },
  { src: "/images/images/safari/safari-gallery/kasas-limited-dornier-228-safari-landing-strip.webp",     alt: "Dornier 228 touching down on a bush landing strip",             span: "col-span-1 row-span-1" },
  { src: "/images/images/safari/safari-gallery/kasas-limited-safari-charter-wildlife-aerial.webp",       alt: "Wildlife seen from a Kasas safari charter aircraft",            span: "col-span-1 row-span-2" },
  { src: "/images/images/safari/safari-gallery/kasas-limited-east-africa-safari-bush-flight.webp",       alt: "Bush flight over East Africa's wilderness",                     span: "col-span-2 row-span-1" },
  { src: "/images/images/safari/safari-gallery/kasas-limited-safari-charter-amboseli-kilimanjaro.webp",  alt: "Safari charter approaching Amboseli with Kilimanjaro backdrop",  span: "col-span-1 row-span-1" },
  { src: "/images/images/safari/safari-gallery/kasas-limited-masai-mara-safari-charter-flight.webp",     alt: "Kasas charter flight into the Masai Mara reserve",              span: "col-span-1 row-span-1" },
  { src: "/images/images/safari/safari-gallery/kasas-limited-safari-aircraft-kenya-wilderness.webp",     alt: "Kasas aircraft flying over Kenya's wilderness",                  span: "col-span-2 row-span-1" },
  { src: "/images/images/safari/safari-gallery/kasas-limited-private-safari-charter-east-africa.webp",  alt: "Private safari charter in East Africa",                         span: "col-span-2 row-span-1" },
  { src: "/images/images/safari/safari-gallery/kasas-limited-safari-charter-samburu-aerial.webp",        alt: "Aerial safari charter over Samburu National Reserve",           span: "col-span-2 row-span-1" },
]

const marqueeItems = [
  "Masai Mara",
  "Amboseli",
  "Samburu",
  "Tsavo",
  "Lake Nakuru",
  "Lewa Downs",
  "Ol Pejeta",
  "Laikipia Plateau",
]

export function SafariGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [loaded,   setLoaded]   = useState<Record<number, boolean>>({})

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setLightbox((p) => p !== null ? (p + 1) % images.length : null)
      if (e.key === "ArrowLeft")  setLightbox((p) => p !== null ? (p - 1 + images.length) % images.length : null)
      if (e.key === "Escape")     setLightbox(null)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightbox])

  return (
    <section className="bg-background py-24 md:py-32 overflow-hidden border-t border-border">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4"
        >
          Life in the Wild
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-4xl md:text-5xl font-semibold tracking-tight"
        >
          Safari From Above
        </motion.h2>
      </div>

      {/* Masonry-style grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[repeat(4,180px)] md:grid-rows-[repeat(3,220px)] gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.33, 1, 0.68, 1] as const,
              }}
              onClick={() => setLightbox(i)}
              className={cn(
                "group relative overflow-hidden rounded-xl cursor-pointer",
                "col-span-1 row-span-1",
                `md:${img.span}`
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                onLoad={() => setLoaded((p) => ({ ...p, [i]: true }))}
                className={cn(
                  "object-cover transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]",
                  "group-hover:scale-105",
                  loaded[i] ? "opacity-100" : "opacity-0"
                )}
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 z-10" />

              <motion.div className="absolute bottom-0 left-0 right-0 z-20 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]">
                <p className="text-white text-xs font-medium leading-snug drop-shadow-lg">
                  {img.alt}
                </p>
              </motion.div>

              <span className="absolute top-3 left-3 z-20 text-white/40 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-16 border-y border-border py-4 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap w-max"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-12"
            >
              {item}
              <span className="inline-block w-1 h-1 rounded-full bg-muted-foreground/40" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              exit={{    scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] as const }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-4/3 rounded-xl overflow-hidden"
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                fill
                className="object-cover"
                sizes="90vw"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/80 to-transparent p-6">
                <p className="text-white/80 text-sm">{images[lightbox].alt}</p>
                <p className="text-white/30 text-xs font-mono mt-1">
                  {String(lightbox + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </p>
              </div>
            </motion.div>

            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((p) => p !== null ? (p - 1 + images.length) % images.length : null)
              }}
              className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((p) => p !== null ? (p + 1) % images.length : null)
              }}
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
