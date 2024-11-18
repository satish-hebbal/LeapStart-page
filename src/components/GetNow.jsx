"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function GetNow() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className="px-6 py-2 text-gray-900 rounded-full font-medium text-lg overflow-hidden relative"
      style={{ 
        background: 'linear-gradient(135deg, #b8c6db, #f5f7fa, #b8c6db)', // Metallic gradient background
        border: "2px solid #4b5563",
        color: "black",
      }}
      whileHover={{
        scale: 1.02,
        skew: -5,
        background: "linear-gradient(135deg, #434343, #000000)", // Dark metallic gradient on hover
        color: "white",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{
        duration: 0.3,
        ease: [0.19, 1.0, 0.22, 1.0],
      }}
      whileTap={{ scale: 0.98 }}
    >
      Get Now!
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, x: "-100%" }}
        animate={isHovered ? { opacity: 1, x: "100%" } : { opacity: 0, x: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12" />
      </motion.div>
    </motion.button>
  )
}
