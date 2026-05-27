"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Full Stack Development",
    description: "End-to-end web applications.",
    details: "From architecture to deployment. Next.js, Django, Go backends. PostgreSQL, Redis. Clean code that scales."
  },
  {
    number: "02",
    title: "API & Microservices",
    description: "REST APIs designed for scale.",
    details: "High-performance APIs with proper rate limiting, caching, and error handling. Microservices architecture when complexity demands it."
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description: "AWS · Docker · CI/CD.",
    details: "Infrastructure as code. Automated deployments. Zero-downtime releases. Cost optimization and monitoring."
  },
  {
    number: "04",
    title: "Ecommerce Systems",
    description: "Payments, inventory, conversions.",
    details: "Stripe integration, inventory sync, order management. Optimized checkout flows that convert."
  },
  {
    number: "05",
    title: "Performance Audits",
    description: "Find and fix what's slow.",
    details: "Database query optimization. Frontend bundle analysis. Core Web Vitals. Load testing and bottleneck identification."
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-wider text-muted-foreground mb-6"
        >
          03 / SERVICES
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-16"
        >
          What <span className="font-serif italic font-normal text-muted-foreground">I</span> Build
        </motion.h2>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="border-t border-border"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between group"
              >
                <div className="flex items-start gap-8">
                  <span className="text-sm font-medium tracking-wider text-muted-foreground">
                    {service.number}
                  </span>
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-muted-foreground transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${expandedIndex === index ? 'bg-primary text-primary-foreground rotate-180' : 'group-hover:bg-secondary'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              {/* Expanded content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? "auto" : 0,
                  opacity: expandedIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-8 pl-16 md:pl-20">
                  <p className="text-base text-muted-foreground max-w-2xl">
                    {service.details}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
