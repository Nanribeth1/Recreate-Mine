"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const technologies = [
  "Next.js", "React", "Django", "Go", "Node.js",
  "PostgreSQL", "Redis", "AWS", "Docker", "TypeScript",
  "Tailwind CSS", "GraphQL", "REST APIs", "CI/CD"
]

export function TechSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - titles */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium tracking-wider text-muted-foreground mb-6"
            >
              TECHNOLOGIES
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-tight"
            >
              <span className="flex flex-wrap">
                {"Built to".split("").map((char, i) => (
                  <span key={i} className={char === " " ? "mr-4" : ""}>
                    {char}
                  </span>
                ))}
              </span>
              <span className="flex flex-wrap">
                {"Scale.".split("").map((char, i) => (
                  <span key={i}>
                    {char}
                  </span>
                ))}
              </span>
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-serif italic text-muted-foreground tracking-tight mt-4"
            >
              Engineered.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-muted-foreground mt-8 max-w-md"
            >
              PRODUCTION-GRADE SYSTEMS BUILT WITH<br />
              A MODERN, BATTLE-TESTED STACK.
            </motion.p>

            {/* Stats */}
            <div className="flex gap-12 mt-12">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-4xl font-black"
                >
                  5+
                </motion.p>
                <p className="text-xs font-medium tracking-wider text-muted-foreground mt-1">YEARS</p>
              </div>
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-4xl font-black"
                >
                  50+
                </motion.p>
                <p className="text-xs font-medium tracking-wider text-muted-foreground mt-1">PROJECTS</p>
              </div>
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-4xl font-black"
                >
                  14+
                </motion.p>
                <p className="text-xs font-medium tracking-wider text-muted-foreground mt-1">TECHNOLOGIES</p>
              </div>
            </div>
          </div>

          {/* Right side - tech grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="px-5 py-3 bg-secondary text-sm font-medium tracking-wider rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
