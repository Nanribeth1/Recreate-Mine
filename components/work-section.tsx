"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useInViewOnce } from "@/hooks/use-in-view-once"
import { revealUp } from "@/lib/animations"
import { Tag } from "@/components/tag"

const projects = [
  {
    title: "RecoverDerm",
    category: "PARAMEDICAL PLATFORM",
    year: "2026",
    description: "Full stack for a paramedical clinic. Secure patient portals, treatment tracking, headless CMS. JWT + refresh token rotation, HIPAA-compliant.",
    tags: ["NEXT.JS", "DJANGO", "POSTGRESQL"],
    image: "/projects/recoverderm.jpg"
  },
  {
    title: "Autoboy Express",
    category: "AUTOMOTIVE MARKETPLACE",
    year: "2025",
    description: "Dual-sided automotive marketplace with real-time inventory and Go microservices backend. Redis caching + connection pool tuning.",
    tags: ["REACT", "GO", "POSTGRESQL", "REDIS"],
    image: "/projects/autoboy.jpg"
  },
  {
    title: "Anoc.ng",
    category: "COMPLIANCE PLATFORM",
    year: "2025",
    description: "Compliance platform for Chartered Accountants — client intake, documents, and audits in one encrypted system.",
    tags: ["NEXT.JS", "NODE.JS", "POSTGRESQL"],
    image: "/projects/anoc.jpg"
  },
]

export function WorkSection() {
  const { ref, isInView } = useInViewOnce()

  return (
    <section id="work" className="py-24 bg-primary text-primary-foreground" ref={ref}>
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-20 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <motion.p
              {...revealUp(isInView)}
              className="text-xs font-medium tracking-wider text-primary-foreground/60"
            >
              02 / WORK <span className="ml-4">17 PROJECTS</span>
            </motion.p>
            <motion.p
              {...revealUp(isInView, { delay: 0.1 })}
              className="text-xs font-medium tracking-wider text-primary-foreground/60"
            >
              000% <span className="ml-2">OVERVIEW</span>
            </motion.p>
          </div>

          <div className="text-center py-20">
            <motion.p
              {...revealUp(isInView, { delay: 0.2 })}
              className="text-xs font-medium tracking-wider text-primary-foreground/60 mb-4"
            >
              SELECTED WORK · 17 PROJECTS
            </motion.p>
            <motion.h2
              {...revealUp(isInView, { y: 40, duration: 0.6, delay: 0.3 })}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter"
            >
              Selected<span className="font-serif italic font-normal text-primary-foreground/60">Work</span>
            </motion.h2>
            <motion.p
              {...revealUp(isInView, { delay: 0.4 })}
              className="text-xs font-medium tracking-wider text-primary-foreground/60 mt-8"
            >
              SCROLL TO EXPLORE
            </motion.p>
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                {...revealUp(isInView, { y: 40, duration: 0.6, delay: 0.5 + index * 0.1 })}
                className="group relative bg-primary-foreground/5 rounded-2xl overflow-hidden border border-primary-foreground/10 hover:border-primary-foreground/30 transition-all duration-300"
              >
                {/* Project image */}
                <div className="aspect-[4/3] bg-primary-foreground/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/5 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-black opacity-10">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-[10px] font-medium tracking-wider text-primary-foreground/50 mb-1">
                        {project.category} · {project.year}
                      </p>
                      <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                    </div>
                    <button className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-sm text-primary-foreground/70 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag} className="px-2.5 py-1 bg-primary-foreground/10 text-[10px]">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling logos */}
      <div className="mt-24 overflow-hidden">
        <div className="flex animate-scroll">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-8 px-4">
              {["RecoverDerm", "Autoboy", "NextGen", "Axflo", "Rokeyla", "Cybersage", "TQL"].map((name) => (
                <div key={`${setIndex}-${name}`} className="flex items-center gap-4">
                  <span className="text-lg font-bold tracking-tight whitespace-nowrap opacity-40">{name}</span>
                  <span className="text-primary-foreground/30">·</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
