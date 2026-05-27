"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const navLinks = [
  { href: "#work", label: "WORK" },
  { href: "#services", label: "SERVICES" },
  { href: "#about", label: "ABOUT" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#credentials", label: "CREDENTIALS" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? "top-2" : "top-4"
          }`}
      >
        <nav className="flex items-center gap-2 bg-primary/95 backdrop-blur-sm text-primary-foreground px-2 py-2 rounded-full">
          <Link href="/" className="flex items-center gap-2 px-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 via-yellow-400 to-orange-500 flex items-center justify-center">
              <span className="text-xs font-bold text-black">DJN</span>
            </div>
            <span className="text-sm font-medium tracking-wide hidden sm:block">DJ NANRIBETH</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-xs font-medium tracking-wider hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button className="flex items-center gap-2 bg-primary-foreground text-primary px-5 py-2.5 rounded-full text-xs font-medium tracking-wider hover:bg-white/90 transition-colors ml-2">
            HIRE ME
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </nav>
      </motion.header>
    </AnimatePresence>
  )
}
