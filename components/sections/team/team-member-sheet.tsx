"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { X } from "lucide-react"
import { type TeamMember } from "@/lib/team"

interface TeamMemberSheetProps {
  member:      TeamMember | null
  onClose:     () => void
}

export function TeamMemberSheet({ member, onClose }: TeamMemberSheetProps) {
  return (
    <Sheet open={!!member} onOpenChange={(o) => !o && onClose()}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-screen! max-w-none! h-screen p-0 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {member && (
            <motion.div
              key={member.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{    opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col md:flex-row"
            >

              {/* Image — left on desktop, top on mobile */}
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                animate={{ opacity: 1, x: 0  }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
                className="relative w-full md:w-[380px] lg:w-[440px] h-72 md:h-full shrink-0"
              >
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 440px"
                  priority
                />

                {/* Gradient overlay on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden" />

                {/* Name overlay on mobile */}
                <div className="absolute bottom-4 left-5 md:hidden">
                  <p className="text-white text-xl font-semibold">
                    {member.name}
                  </p>
                  <p className="text-white/60 text-sm mt-0.5">
                    {member.title}
                  </p>
                </div>

                {/* Subtle gradient on desktop — bottom fade */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              {/* Content — right on desktop, below on mobile */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0  }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.33, 1, 0.68, 1] as const }}
                className="flex flex-col flex-1 h-full overflow-y-auto"
              >

                {/* Close button */}
                <div className="flex items-center justify-end p-5 shrink-0">
                  <button
                    onClick={onClose}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-8 px-8 md:px-12 pb-12 flex-1">

                  {/* Department tag */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0  }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <span
                      className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                      style={{
                        color:       "#595B5C",
                        borderColor: "rgba(89,91,92,0.3)",
                      }}
                    >
                      {member.department}
                    </span>
                  </motion.div>

                  {/* Name + title — hidden on mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0  }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="hidden md:flex flex-col gap-2"
                  >
                    <SheetTitle className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                      {member.name}
                    </SheetTitle>
                    <p className="text-muted-foreground text-lg">
                      {member.title}
                    </p>
                  </motion.div>

                  {/* Mobile name — shown only on mobile since image has overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0  }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="flex md:hidden flex-col gap-1"
                  >
                    <SheetTitle className="text-2xl font-semibold tracking-tight">
                      {member.name}
                    </SheetTitle>
                    <p className="text-muted-foreground text-sm">
                      {member.title}
                    </p>
                  </motion.div>

                  {/* Divider */}
                  <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
                    className="h-px bg-border"
                  />

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0  }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="text-muted-foreground text-base md:text-lg leading-relaxed"
                  >
                    {member.description}
                  </motion.p>

                  {/* Extra detail rows — expandable in future */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0  }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-4 py-4 border-t border-border">
                      <span className="text-xs font-mono text-muted-foreground/40 w-24 shrink-0 uppercase tracking-widest">
                        Department
                      </span>
                      <span className="text-sm text-foreground font-medium">
                        {member.department}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 py-4 border-t border-border">
                      <span className="text-xs font-mono text-muted-foreground/40 w-24 shrink-0 uppercase tracking-widest">
                        Role
                      </span>
                      <span className="text-sm text-foreground font-medium">
                        {member.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 py-4 border-t border-border">
                      <span className="text-xs font-mono text-muted-foreground/40 w-24 shrink-0 uppercase tracking-widest">
                        Based
                      </span>
                      <span className="text-sm text-foreground font-medium">
                        Wilson Airport, Nairobi
                      </span>
                    </div>
                  </motion.div>

                  {/* ID reference — pushed to bottom */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="text-muted-foreground/30 text-xs font-mono mt-auto pt-8 border-t border-border"
                  >
                    KASAS LIMITED / TEAM MEMBER {member.id}
                  </motion.p>

                </div>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  )
}