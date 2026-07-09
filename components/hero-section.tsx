"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { revealUp, revealScale } from "@/lib/animations"
import { Tag } from "@/components/tag"

const techStack = ["React", "MongoDB", "Java", "POSTGRESQL", "AWS", "DOCKER"]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Status badges */}
        <motion.div
          {...revealUp(true, { duration: 0.6 })}
          className="flex flex-wrap items-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium tracking-wider">AVAILABLE FOR WORK</span>
          </div>
          <span className="text-xs font-medium tracking-wider text-muted-foreground">
            REMOTE · WORLDWIDE
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              {...revealUp(true, { y: 40, duration: 0.8, delay: 0.2 })}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]"
            >
              Dabit
              <br />
              Nanribeth
            </motion.h1>

            <motion.p
              {...revealUp(true, { duration: 0.6, delay: 0.4 })}
              className="text-xl md:text-2xl lg:text-3xl font-serif italic text-muted-foreground mt-8 max-w-xl"
            >
              Full Stack Engineer — building systems that hold up under pressure.
            </motion.p>

            {/* Tech stack tags */}
            <motion.div
              {...revealUp(true, { duration: 0.6, delay: 0.5 })}
              className="flex flex-wrap gap-2 mt-8"
            >
              {techStack.map((tech) => (
                <Tag key={tech} className="px-3 py-1.5 bg-secondary text-xs">
                  {tech}
                </Tag>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              {...revealUp(true, { duration: 0.6, delay: 0.6 })}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link
                href="#work"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium tracking-wider hover:bg-primary/90 transition-colors"
              >
                VIEW WORK
                <ArrowDown className="w-4 h-4" />
              </Link>
              <button className="flex items-center gap-2 border border-border px-6 py-3 rounded-full text-sm font-medium tracking-wider hover:bg-secondary transition-colors">
                CONTACT
              </button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 flex items-center gap-2"
            >
              {/* opacity-only fade — not a slide/scale reveal */}
              <div className="w-px h-12 bg-border" />
              <span className="text-xs font-medium tracking-wider text-muted-foreground rotate-90 origin-left translate-x-3">
                SCROLL
              </span>
            </motion.div>
          </div>

          {/* Hero image placeholder */}
          <motion.div
            {...revealScale(true, { duration: 0.8, delay: 0.3 })}
            className="hidden lg:flex justify-end items-center"
          >
            <div className="relative w-[400px] h-[500px] bg-gradient-to-b from-secondary to-muted rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholder-person.jpg')] bg-cover bg-center grayscale opacity-80" />
              <div className="absolute bottom-0 right-0 p-4">
                <span className="text-[10px] font-medium tracking-wider text-muted-foreground writing-vertical-rl">
                  FULL STACK · 3+ YEARS · REMOTE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
