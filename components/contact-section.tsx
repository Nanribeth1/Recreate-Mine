"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, Mail, Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Github, label: "GITHUB", href: "https://github.com" },
  { icon: Linkedin, label: "LINKEDIN", href: "https://linkedin.com" },
  { icon: Twitter, label: "TWITTER", href: "https://twitter.com" },
  { icon: Mail, label: "EMAIL", href: "mailto:hello@cybersage.com" },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-primary text-primary-foreground" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium tracking-wider text-primary-foreground/60 mb-6"
            >
              06 / CONTACT
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-8"
            >
              Let&apos;s <span className="font-serif italic font-normal text-primary-foreground/60">Build</span>
              <br />
              Something.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-primary-foreground/70 max-w-md mb-8"
            >
              Have a project in mind? I&apos;m currently available for freelance work and exciting opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="mailto:hello@cybersage.com"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-full text-sm font-medium tracking-wider hover:bg-primary-foreground/90 transition-colors"
              >
                START A CONVERSATION
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right side - social links */}
          <div className="flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs font-medium tracking-wider text-primary-foreground/60 mb-6"
            >
              CONNECT
            </motion.p>

            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    className="group flex items-center justify-between p-4 border border-primary-foreground/20 rounded-xl hover:bg-primary-foreground/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <link.icon className="w-5 h-5" />
                      <span className="font-medium tracking-wider">{link.label}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
