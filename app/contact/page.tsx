"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { ContactDetails } from "@/components/sections/contact/contact-details"
import { ContactForm } from "@/components/sections/contact/contact-form"

export default function ContactPage() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <main>

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/images/maintenance/kasas-kenya-aircraft-maintenance.webp"
            alt="Kasas Limited aircraft at Wilson Airport Nairobi"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 gap-8">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#595B5C" }}
          >
            Kasas Limited
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-none max-w-3xl"
          >
            Let's Get You
            <br />
            <span className="text-white/40">in the Air.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
            className="text-white/60 text-lg md:text-xl max-w-lg leading-relaxed"
          >
            Tell us where you want to go. Our team will put together
            a charter solution tailored to your needs.
          </motion.p>

          {/* CTA — opens form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.33, 1, 0.68, 1] as const }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Filled button — dark circle expands on hover */}
            <button
              onClick={() => setFormOpen(true)}
              className="group relative overflow-hidden inline-flex items-center gap-3 h-12 pl-1.5 pr-6 rounded-full text-white text-sm font-semibold transition-colors duration-500"
              style={{ backgroundColor: "#595B5C" }}
            >
              <span aria-hidden="true" className="absolute left-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-zinc-900 scale-100 group-hover:scale-[20] transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </span>
              <span className="relative z-10">Make an Enquiry</span>
            </button>

            {/* Outline button — white circle expands on hover */}
            <a
              href="tel:+254000000000"
              className="group relative overflow-hidden inline-flex items-center gap-3 h-12 pl-1.5 pr-6 rounded-full border border-white/30 text-white text-sm font-medium transition-colors duration-500 hover:text-black"
            >
              <span aria-hidden="true" className="absolute left-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white scale-100 group-hover:scale-[20] transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                <ArrowUpRight className="h-4 w-4 text-black" />
              </span>
              <span className="relative z-10">Call Us Directly</span>
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/30 tracking-widest uppercase">
              Our Details Below
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-px h-8 bg-white/20"
            />
          </motion.div>

        </div>

      </section>

      {/* Contact details */}
      <ContactDetails />

      {/* Form sheet */}
      <ContactForm open={formOpen} onOpenChange={setFormOpen} />

    </main>
  )
}