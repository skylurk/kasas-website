"use client"

import { motion } from "framer-motion"

export function TrainingIntro() {
  return (
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
          Our Training Partner
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] as const }}
          className="h-px bg-black/10 mb-10"
        />

        {/* Large statement */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
          className="text-2xl md:text-3xl lg:text-2xl font-medium leading-relaxed md:leading-relaxed text-black/80 mb-16"
        >
          Training is the key to keeping standards high. Our partner organization{" "}
          <span className="text-black font-semibold">Think Aviation</span> is a{" "}
          <span className="text-black font-semibold">
            Kenya Civil Aviation Authority (KCAA) approved Aviation Training
            Organization (ATO)
          </span>{" "}
          and provides Dornier 228 pilots, operations and maintenance staff
          training. A{" "}
          <span className="text-black font-semibold">
            full motion Dornier 228 flight simulator
          </span>{" "}
          allows us to train pilots to the highest standards.
        </motion.p>

        {/* Credentials strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5 border border-black/5 rounded-2xl overflow-hidden"
        >
          {[
            { value: "KCAA",      label: "Approved organization"      },
            { value: "ATO",       label: "Certified training org"     },
            { value: "6DOF",      label: "Full motion simulator"      },
            { value: "3",         label: "Simulator types available"  },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white px-6 py-7 flex flex-col gap-1 hover:bg-sky-50 transition-colors duration-300 group"
            >
              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-black group-hover:text-sky-600 transition-colors duration-300">
                {stat.value}
              </p>
              <p className="text-xs text-black/40 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}