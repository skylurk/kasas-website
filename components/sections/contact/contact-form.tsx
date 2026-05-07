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

interface ContactFormProps {
  open:          boolean
  onOpenChange:  (open: boolean) => void
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

export function ContactForm({ open, onOpenChange }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const [form, setForm] = useState({
    name:        "",
    email:       "",
    departure:   "",
    destination: "",
    adults:      "",
    children:    "",
    message:     "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — replace with your actual API call
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSubmitted(true)
    // Auto close after 3 seconds
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
            Make an Enquiry
          </SheetTitle>
          <SheetDescription className="text-muted-foreground text-sm mb-8">
            Fill in the details below and our team will get back to you
            within 24 hours.
          </SheetDescription>

          <AnimatePresence mode="wait">
            {submitted ? (

              /* Success state */
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
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.1,
                  }}
                >
                  <CheckCircle
                    className="w-16 h-16"
                    style={{ color: "#595B5C" }}
                  />
                </motion.div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Enquiry Received
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                    Thank you for reaching out. Our team will be in touch
                    within 24 hours.
                  </p>
                </div>
                <p className="text-muted-foreground/50 text-xs font-mono">
                  This window will close automatically...
                </p>
              </motion.div>

            ) : (

              /* Form */
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
                  <motion.div
                    custom={0}
                    variants={fieldVariants}
                    className="flex flex-col gap-2"
                  >
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={fieldVariants}
                    className="flex flex-col gap-2"
                  >
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                </div>

                {/* Departure + Destination */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    custom={2}
                    variants={fieldVariants}
                    className="flex flex-col gap-2"
                  >
                    <Label htmlFor="departure">Place of Departure</Label>
                    <Input
                      id="departure"
                      name="departure"
                      placeholder="Nairobi, Kenya"
                      value={form.departure}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div
                    custom={3}
                    variants={fieldVariants}
                    className="flex flex-col gap-2"
                  >
                    <Label htmlFor="destination">Destination</Label>
                    <Input
                      id="destination"
                      name="destination"
                      placeholder="Masai Mara, Kenya"
                      value={form.destination}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                </div>

                {/* Adults + Children */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    custom={4}
                    variants={fieldVariants}
                    className="flex flex-col gap-2"
                  >
                    <Label htmlFor="adults">Number of Adults</Label>
                    <Select
                      onValueChange={(val) =>
                        setForm((prev) => ({ ...prev, adults: val }))
                      }
                    >
                      <SelectTrigger id="adults">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 19 }, (_, i) => i + 1).map((n) => (
                          <SelectItem key={n} value={String(n)}>
                            {n} {n === 1 ? "Adult" : "Adults"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div
                    custom={5}
                    variants={fieldVariants}
                    className="flex flex-col gap-2"
                  >
                    <Label htmlFor="children">Number of Children</Label>
                    <Select
                      onValueChange={(val) =>
                        setForm((prev) => ({ ...prev, children: val }))
                      }
                    >
                      <SelectTrigger id="children">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No Children</SelectItem>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                          <SelectItem key={n} value={String(n)}>
                            {n} {n === 1 ? "Child" : "Children"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div
                  custom={6}
                  variants={fieldVariants}
                  className="flex flex-col gap-2"
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements — dates, special requests, cargo details..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="resize-none"
                  />
                </motion.div>

                {/* Submit */}
                <motion.div
                  custom={7}
                  variants={fieldVariants}
                  className="pt-2"
                >
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative overflow-hidden inline-flex w-full items-center gap-3 h-12 pl-1.5 pr-6 rounded-full text-white text-sm font-medium transition-colors duration-500 disabled:opacity-70 cursor-pointer"
                    style={{ backgroundColor: "#595B5C" }}
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
                      {loading ? "Sending..." : "Send Enquiry"}
                    </span>
                  </button>
                </motion.div>

                {/* Privacy note */}
                <motion.p
                  custom={8}
                  variants={fieldVariants}
                  className="text-muted-foreground/60 text-xs text-center pb-4"
                >
                  Your details are kept confidential and never shared
                  with third parties.
                </motion.p>

              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </SheetContent>
    </Sheet>
  )
}