"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 via-yellow-400 to-orange-500 flex items-center justify-center">
              <span className="text-xs font-bold text-black">CS</span>
            </div>
            <span className="text-sm font-medium tracking-wide">CYBERSAGE</span>
          </Link>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} ABAKWE CARRINGTON. ALL RIGHTS RESERVED.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-xs font-medium tracking-wider hover:bg-secondary transition-colors"
          >
            BACK TO TOP
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
