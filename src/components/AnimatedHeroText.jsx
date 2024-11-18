'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnimatedHeroText() {
  const phrases = [
    { text: "Find Your Edge", gradient: "bg-gradient-to-r from-gray-900 via-indigo-900 to-[#4E4687]" },
    { text: "Set The Pace", gradient: "bg-gradient-to-br from-[#4E4687] via-indigo-900 to-gray-900" },
    { text: "Lead the Market", gradient: "bg-gradient-to-tr from-gray-900 via-[#4E4687] to-indigo-900" }
  ]
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const staticGradientStyle = "bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 bg-clip-text text-transparent"

  return (
    <h1 className="text-2xl md:text-5xl font-semibold leading-tight tracking-wider">
      <span className={`block ${staticGradientStyle}`}>
        Skip the Guesswork!
      </span>
      <div className="h-[1.2em] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentPhrase}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`absolute inset-0 flex items-center justify-center ${phrases[currentPhrase].gradient} bg-clip-text text-transparent`}
          >
            {phrases[currentPhrase].text}
          </motion.span>
        </AnimatePresence>
      </div>
    </h1>
  )
}