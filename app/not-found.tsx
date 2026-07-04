"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
        className="flex flex-col items-center gap-8"
      >
        <Image
          src="/images/images/404/kasas-error-404.png"
          alt="404 - page not found"
          width={1408}
          height={768}
          priority
          className="h-auto w-full max-w-70 sm:max-w-sm md:max-w-md"
        />

        <div className="flex w-full min-w-0 max-w-md flex-col items-center gap-3">
          <h1 className="min-w-0 text-2xl font-semibold tracking-tight md:text-3xl">
            We couldn&apos;t find that page
          </h1>
          <p className="min-w-0 text-base leading-relaxed text-muted-foreground md:text-lg">
            The page you&apos;re looking for may have moved or no longer exists.
          </p>
        </div>

        <Link
          href="/"
          className="group relative inline-flex h-12 shrink-0 items-center gap-3 overflow-hidden rounded-full bg-zinc-900 pl-1.5 pr-6 text-sm font-medium text-white transition-colors duration-500 hover:text-black"
        >
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-1.5 h-9 w-9 -translate-y-1/2 scale-100 rounded-full bg-white transition-transform duration-500 ease-in-out group-hover:scale-[20]"
          />
          <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
            <ArrowUpRight className="h-4 w-4 text-zinc-900" />
          </span>
          <span className="relative z-10">Go to Home</span>
        </Link>
      </motion.div>
    </main>
  )
}
