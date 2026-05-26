"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Input }    from "@/components/ui/input"
import { Label }    from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle, ArrowUpRight } from "lucide-react"

interface SimulatorBookingFormProps {
  open:         boolean
  onOpenChange: (open: boolean) => void
}

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.07,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  }),
}

export function SimulatorBookingForm({ open, onOpenChange }: SimulatorBookingFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const [form, setForm] = useState({
    name:          "",
    email:         "",
    phone:         "",
    trainingType:  "",
    sessionHours:  "",
    preferredDate: "",
    licenceRating: "",
    notes:         "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSubmitted(true)
    setTimeout(() => {
      onOpenChange(false)
      setTimeout(() => setSubmitted(false), 500)
    }, 3000)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="h-[92vh] md:h-[85vh] rounded-t-2xl overflow-y-auto px-0 pb-0"
      >
        <div className="max-w-2xl mx-auto px-6 md:px-8 py-8">

          <SheetTitle className="text-2xl font-semibold tracking-tight mb-1">
            Book Simulator Time
          </SheetTitle>
          <SheetDescription className="text-muted-foreground text-sm mb-8">
            Reserve time on the Dornier 228 full-motion simulator. Our team will
            confirm your slot within 24 hours.
          </SheetDescription>

          <AnimatePresence mode="wait">
            {submitted ? (

              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{    opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] as const }}
                className="flex flex-col items-center justify-center gap-6 py-20 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                >
                  <CheckCircle className="w-16 h-16" style={{ color: "#595B5C" }} />
                </motion.div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold tracking-tight">Booking Received</h3>
                  <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                    We&apos;ll confirm your simulator slot within 24 hours.
                  </p>
                </div>
                <p className="text-muted-foreground/50 text-xs font-mono">
                  This window will close automatically...
                </p>
              </motion.div>

            ) : (

              <motion.form
                key="form"
                initial="hidden"
                animate="show"
                exit="hidden"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div custom={0} variants={fieldVariants} className="flex flex-col gap-2">
                    <Label htmlFor="sim-name">Full Name</Label>
                    <Input
                      id="sim-name"
                      name="name"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div custom={1} variants={fieldVariants} className="flex flex-col gap-2">
                    <Label htmlFor="sim-email">Email Address</Label>
                    <Input
                      id="sim-email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                </div>

                {/* Phone + Licence / Rating */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div custom={2} variants={fieldVariants} className="flex flex-col gap-2">
                    <Label htmlFor="sim-phone">Phone Number</Label>
                    <Input
                      id="sim-phone"
                      name="phone"
                      type="tel"
                      placeholder="+254 700 000 000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </motion.div>

                  <motion.div custom={3} variants={fieldVariants} className="flex flex-col gap-2">
                    <Label htmlFor="sim-licence">Licence / Rating</Label>
                    <Input
                      id="sim-licence"
                      name="licenceRating"
                      placeholder="e.g. CPL, ATPL, IR"
                      value={form.licenceRating}
                      onChange={handleChange}
                    />
                  </motion.div>
                </div>

                {/* Training Type + Session Duration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div custom={4} variants={fieldVariants} className="flex flex-col gap-2">
                    <Label htmlFor="sim-training-type">Training Type</Label>
                    <Select
                      onValueChange={(val) =>
                        setForm((prev) => ({ ...prev, trainingType: val }))
                      }
                    >
                      <SelectTrigger id="sim-training-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="initial-type-rating">Initial Type Rating</SelectItem>
                        <SelectItem value="recurrent">Recurrent Training</SelectItem>
                        <SelectItem value="instrument-rating">Instrument Rating (IR)</SelectItem>
                        <SelectItem value="proficiency-check">Proficiency Check</SelectItem>
                        <SelectItem value="line-training">Line Training</SelectItem>
                        <SelectItem value="custom">Custom / Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div custom={5} variants={fieldVariants} className="flex flex-col gap-2">
                    <Label htmlFor="sim-session-hours">Simulator Hours Required</Label>
                    <Select
                      onValueChange={(val) =>
                        setForm((prev) => ({ ...prev, sessionHours: val }))
                      }
                    >
                      <SelectTrigger id="sim-session-hours">
                        <SelectValue placeholder="Select hours" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 hour</SelectItem>
                        <SelectItem value="2">2 hours</SelectItem>
                        <SelectItem value="3">3 hours</SelectItem>
                        <SelectItem value="4">4 hours</SelectItem>
                        <SelectItem value="half-day">Half day (4–5 hrs)</SelectItem>
                        <SelectItem value="full-day">Full day (8 hrs)</SelectItem>
                        <SelectItem value="multi-day">Multi-day block</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                </div>

                {/* Preferred Date */}
                <motion.div custom={6} variants={fieldVariants} className="flex flex-col gap-2">
                  <Label htmlFor="sim-date">Preferred Date</Label>
                  <Input
                    id="sim-date"
                    name="preferredDate"
                    type="date"
                    value={form.preferredDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </motion.div>

                {/* Notes */}
                <motion.div custom={7} variants={fieldVariants} className="flex flex-col gap-2">
                  <Label htmlFor="sim-notes">Additional Notes</Label>
                  <Textarea
                    id="sim-notes"
                    name="notes"
                    placeholder="Any specific scenarios, equipment requirements, or scheduling preferences..."
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    className="resize-none"
                  />
                </motion.div>

                {/* Submit */}
                <motion.div custom={8} variants={fieldVariants} className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative overflow-hidden inline-flex w-full items-center gap-3 h-12 pl-1.5 pr-6 rounded-full bg-red-600 text-white text-sm font-medium transition-colors duration-500 disabled:opacity-70 cursor-pointer"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-1.5 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/15 scale-100 group-hover:scale-[50] transition-transform duration-500 ease-in-out"
                    />
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                      {loading ? (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : (
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      )}
                    </span>
                    <span className="relative z-10">
                      {loading ? "Submitting..." : "Request Booking"}
                    </span>
                  </button>
                </motion.div>

                <motion.p
                  custom={9}
                  variants={fieldVariants}
                  className="text-muted-foreground/60 text-xs text-center pb-4"
                >
                  Your details are kept confidential and never shared with third parties.
                </motion.p>

              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </SheetContent>
    </Sheet>
  )
}
