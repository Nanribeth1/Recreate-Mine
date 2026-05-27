"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

const stats = [
  { value: "3+", label: "YEARS OF EXPERIENCE" },
  { value: "28+", label: "PROJECTS SHIPPED" },
  { value: "32+", label: "GLOBAL CLIENTS" },
  { value: "2", label: "COUNTRIES SERVED" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-wider text-muted-foreground mb-6"
        >
          01 / ABOUT
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter"
        >
          About<span className="font-serif italic font-normal text-muted-foreground">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="border-b border-border pb-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter"
                >
                  {stat.value}
                </motion.p>
                <p className="text-xs font-medium tracking-wider text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed">
              {'"I build systems that don\'t just work — they scale, stay fast, and stay clean under pressure."'}
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              3+ years of remote-first engineering for global clients — from B2C marketplaces to medical platforms to oil & gas portals. I work end-to-end: architecture, backend, front-end, deployment.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Core stack: Next.js, MongoDB, Java, PostgreSQL. Also fluent in Html/css with JavaScript ,React, AWS, Docker, and Pyhton I care about the whole system — not just the feature.
            </p>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-xs font-medium tracking-wider hover:bg-secondary transition-colors"
              >
                <Github className="w-4 h-4" />
                GITHUB
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-xs font-medium tracking-wider hover:bg-secondary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LINKEDIN
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
