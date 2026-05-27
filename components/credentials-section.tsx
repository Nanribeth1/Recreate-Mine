"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Download } from "lucide-react"
import Link from "next/link"

const certifications = [
  {
    number: "01",
    title: "Full Stack Engineering",
    institution: "IBT LEARNING",
    year: "2025"
  },
  {
    number: "02",
    title: "Web Application Development",
    institution: "MOAT ACADEMY",
    year: "2024"
  },
  {
    number: "03",
    title: "Web Development Internship",
    institution: "ZIDIO DEVELOPMENT",
    year: "2024"
  },
]

const resumeTags = ["NEXT.JS", "GO", "DJANGO", "POSTGRESQL", "AWS", "DOCKER"]

export function CredentialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="credentials" className="py-24 px-6 md:px-12 lg:px-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-wider text-muted-foreground mb-6"
        >
          05 / CREDENTIALS
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-16"
        >
          Proof <span className="font-serif italic font-normal text-muted-foreground">of</span> Work
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Resume card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary rounded-2xl p-8"
          >
            <p className="text-[10px] font-medium tracking-wider text-muted-foreground mb-4">
              RESUME · PDF · 2025
            </p>
            
            <h3 className="text-3xl font-bold tracking-tight mb-2">Abakwe Carrington</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Full Stack Engineer — 5+ years · Remote
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {resumeTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-background text-[10px] font-medium tracking-wider rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-xs font-medium tracking-wider hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD RESUME
            </Link>
          </motion.div>

          {/* Certifications */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs font-medium tracking-wider text-muted-foreground mb-6"
            >
              CERTIFICATIONS
            </motion.p>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    href="#"
                    className="group flex items-center justify-between p-4 border border-border rounded-xl hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-muted-foreground">{cert.number}</span>
                      <div>
                        <h4 className="font-bold tracking-tight group-hover:text-muted-foreground transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {cert.institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">{cert.year}</span>
                      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-secondary rounded-2xl"
        >
          <p className="text-xs font-medium tracking-wider text-muted-foreground mb-4">
            LIVE ON GITHUB
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-bold">AC</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">ACTIVE 18H AGO</p>
                <Link href="https://github.com" target="_blank" className="font-bold hover:text-muted-foreground transition-colors">
                  @DONRINGTON
                </Link>
              </div>
            </div>
            
            <Link
              href="https://github.com"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-xs font-medium tracking-wider hover:bg-background transition-colors"
            >
              VIEW PROFILE
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
