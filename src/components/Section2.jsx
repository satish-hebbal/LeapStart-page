'use client'

import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import LSvid from '../assets/LSvid.mp4'
import LSp from '../assets/LSp.png'
import LSb from '../assets/LSbanner1.png'

export default function Sec2() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRefs = useRef([])

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  const features = [
    { title: 'Market Position Analysis', size: 'lg' },
    { title: 'Company metrics', size: 'lg' },
    { title: 'Investment Insights', size: 'sm' },
    { title: 'Competitive Analysis', size: 'lg' },
    { title: 'Path to MVP', size: 'sm' },
  ]

  const staticGradientStyle = "bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 bg-clip-text text-transparent"

  return (
    <div className="w-full bg-gray-100 mt-4 font-lexend">
      {/* Video Section */}
      <section id="why-leapstart" className="container flex flex-col items-center gap-32 mx-auto px-6 md:px-10 py-16">
      <h1 className="text-2xl text-center md:text-5xl font-semibold leading-tight tracking-wider">
      <span className={` ${staticGradientStyle}`}>
      Need smart moves for your startup?
      </span> </h1>
        
        <div className="flex flex-col justify-center lg:mx-40 lg:flex-row gap-8 items-center">
          {/* Video Container */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-md overflow-hidden shadow-sm">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto rounded-md"
              >
                <source src={LSvid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 mix-blend-overlay" />
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-1/2">
            <div className="text-gray-600 space-y-4 text-justify">
              <p>
                Our AI analyzes your startup from every angle - from market position to growth metrics. Get clear insights, improvement paths, and actionable strategies tailored to your industry. We turn complex business data into your roadmap for success.
              </p>
              <p>
                Every aspect of your business gets illuminated: revenue patterns, market opportunities, competitive landscape, and growth barriers. Our intelligent system doesn't just show you the numbers - it reveals the story behind them, helping you make informed decisions at every turn. Whether you're fine-tuning your MVP or scaling operations, we provide the clarity you need to move forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="product" className="container flex flex-col justify-center items-center gap-28  mx-auto px-4 py-16">
      <h1 className="text-2xl md:text-5xl text-center font-semibold leading-tight tracking-wider">
      <span className={` ${staticGradientStyle}`}>
      Here's how our LeapStart AI <br /> supercharges your startup
       </span> </h1>
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              className="relative flex items-center justify-center overflow-hidden rounded-xl bg-white p-6 shadow-sm
                transition-all duration-300 hover:shadow-lg w-full sm:w-[calc(50%-12px)] 
                lg:w-[calc(33.333%-16px)] flex-grow"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)`
                }}
              />
              <h3 className="text-xl font-medium text-gray-900 mb-2">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
        <div className='flex flex-row gap-4 items-center'>
            <img src={LSp} className='h-10' alt="" />
            <div>
                <p className='font-bold'>LeapStart AI</p>
                <p className='font-light text-sm'>A fine tuned model for Startup Analysis.</p>
            </div>
        </div>
        <div className=" text-gray-600 max-w-3xl mx-auto text-justify">
          <p>
            From tracking where investors are placing their bets to understanding your market position, our AI does the heavy lifting. Generate custom surveys, access smart datasheets, and follow AI-crafted task lists that know your priorities. Plus, stay energized with regular growth challenges in your inbox.
          </p>
          <p className="mt-4">
            Think of it as your startup's command center - analyzing opportunities, tracking investments, and pushing your next big moves. All powered by AI that gets smarter with every insight.
          </p>
        </div>
      </section>
     
    </div>
  )
}