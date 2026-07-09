"use client"

import { motion } from "framer-motion"
import { useInViewOnce } from "@/hooks/use-in-view-once"
import { revealUp } from "@/lib/animations"
import { Tag } from "@/components/tag"

const experiences = [
  {
    number: "01",
    type: "CONTRACT · REMOTE",
    year: "2026",
    role: "Full Stack Developer",
    company: "NBE Investment",
    achievements: [
      "HIPAA-compliant patient portals with JWT rotation and encrypted data flows — zero compliance violations.",
      "Role-based access across patient, clinician, and admin layers, cutting unauthorized access surface by 60%.",
      "Automated workflows reduced manual admin overhead by 40%. Deployed on AWS with zero-downtime releases."
    ],
    tags: ["NEXT.JS", "DJANGO", "POSTGRESQL"]
  },
  {
    number: "02",
    type: "CONTRACT · REMOTE",
    year: "2025",
    role: "Full Stack Developer",
    company: "ANOC.NG",
    achievements: [
      "Compliance platform for Chartered Accountants — client intake, documents, and audits in one encrypted system.",
      "Multi-tenant architecture with strict data isolation supporting 50+ concurrent client cases.",
      "Automated approval chains cut manual processing time by 50% and eliminated missed compliance deadlines."
    ],
    tags: ["NEXT.JS", "NODE.JS", "POSTGRESQL"]
  },
  {
    number: "03",
    type: "CONTRACT · REMOTE",
    year: "2025",
    role: "Software Engineer",
    company: "EdgeLine Tech",
    achievements: [
      "Scalable Django backend on cloud infrastructure — 30% performance gain through architecture optimisation.",
      "CI/CD pipelines and automated provisioning cut deployment time by 45%.",
      "Zero-trust security and VPN infrastructure reduced vulnerabilities by 20%, downtime by 35%."
    ],
    tags: ["NEXT.JS", "GO", "AWS"]
  },
  {
    number: "04",
    type: "FULL-TIME · REMOTE",
    year: "2025",
    role: "Sr. Full Stack Developer",
    company: "MOTORBOIS",
    achievements: [
      "Scaled a dual-sided automotive marketplace with real-time inventory and Go microservices backend.",
      "Redis caching + connection pool tuning delivered 30% faster DB responses under peak load.",
      "Rate-limiting and circuit-breaker layers eliminated cascading failures across payment APIs."
    ],
    tags: ["REACT", "GO", "POSTGRESQL", "REDIS"]
  },
  
]

export function ExperienceSection() {
  const { ref, isInView } = useInViewOnce()

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-20 bg-primary text-primary-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          {...revealUp(isInView)}
          className="text-xs font-medium tracking-wider text-primary-foreground/60 mb-6"
        >
          04 / EXPERIENCE
        </motion.p>

        {/* Title */}
        <motion.h2
          {...revealUp(isInView, { y: 40, duration: 0.6, delay: 0.1 })}
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-16"
        >
          Where <span className="font-serif italic font-normal text-primary-foreground/60">I&apos;ve</span> Worked
        </motion.h2>

        {/* Experience cards - horizontal scroll on mobile */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.number}
                {...revealUp(isInView, { y: 40, duration: 0.6, delay: 0.2 + index * 0.1 })}
                className="flex-shrink-0 w-[340px] md:w-[400px] bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10 snap-start"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{exp.number}</span>
                    <span className="text-primary-foreground/40">·</span>
                    <span className="text-[10px] font-medium tracking-wider text-primary-foreground/60">{exp.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{exp.number}</span>
                    <span className="text-primary-foreground/40">/</span>
                    <span className="text-sm text-primary-foreground/60">14</span>
                  </div>
                </div>

                {/* Year */}
                <p className="text-4xl font-black tracking-tighter mb-4">{exp.year}</p>

                {/* Role & Company */}
                <h3 className="text-xl font-bold tracking-tight mb-1">{exp.role}</h3>
                <p className="text-xs font-medium tracking-wider text-primary-foreground/60 mb-6">{exp.company}</p>

                {/* Achievements */}
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-primary-foreground/70 leading-relaxed">
                      {achievement}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Tag key={tag} className="px-2.5 py-1 bg-primary-foreground/10 text-[10px]">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <p className="text-xs font-medium tracking-wider text-primary-foreground/40">
              SCROLL TO EXPLORE →
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
