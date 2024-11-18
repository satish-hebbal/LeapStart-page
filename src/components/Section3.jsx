"use client";

import React, { useEffect, useState } from "react";
import GetNow from "./GetNow";
import C1 from "../assets/coin1.png";
import C2 from "../assets/coin2.png";
import C3 from "../assets/coin3.png";
import C4 from "../assets/coin4.png";

const staticGradientStyle = "bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 bg-clip-text text-transparent";

export default function Sec3() {
  const [offsetY, setOffsetY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef(null);

  const handleScroll = () => {
    if (isVisible) {
      setOffsetY(window.scrollY);
    }
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [sectionRef, isVisible]);

  return (
    <div id="pricing"
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-gray-100 to-white font-lexend py-16"
    >
      <div className="container flex flex-col gap-24 mx-auto px-4">
        {/* Tagline */}
        <h1 className="text-md text-center md:text-5xl font-semibold leading-tight tracking-wide">
          <span className={` ${staticGradientStyle}`}>
            Your AI intern <br /> smart, tireless, and budget-friendly.
          </span>
        </h1>

         {/* Pricing Card */}
         <div className="z-20 max-w-xl mx-auto bg-gradient-to-br from-purple-50 to-purple-200/50 rounded-lg shadow-md overflow-hidden backdrop-blur-md">
          <div className="text-center space-y-2 p-6">
          <h2 className="text-2xl font-normal">
            <span
                className="text-transparent  bg-clip-text"
                style={{
                backgroundImage: 'linear-gradient(104deg, #d4af37,#ddbd56, #f4e1a6, #d4af37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                }}
            >
                Lifetime
            </span>{' '}
            Access
            </h2>

            <div className="text-4xl font-semibold">₹ 6,999</div>
            <p className="text-sm text-gray-600">What you'll get (forever and ever)</p>
          </div>

          <div className="space-y-4 p-6">
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex justify-center">• Complete Market Position Analysis & Tracking</li>
              <li className="flex justify-center">• Real-time Investment Trend Insights</li>
              <li className="flex justify-center">• Unlimited Custom Survey Generation</li>
              <li className="flex justify-center">• Smart Data Sheets & Analytics Dashboard</li>
              <li className="flex justify-center">• AI-Powered Growth Recommendations</li>
              <li className="flex justify-center">• AI-Powered Growth Recommendations</li>
              <li className="flex justify-center">• Weekly Growth Challenge Emails</li>
              <li className="flex justify-center">• Industry-Specific Success Metrics</li>
              <li className="flex justify-center">• Competitor Analysis & Benchmarking</li>
              <li className="flex justify-center">• Custom Survey Landing Pages</li>
              <li className="flex justify-center">• Exportable Reports & Presentations</li>
              <li className="flex justify-center">• Interactive Growth Dashboard</li>
              <li className="flex justify-center">• Market Opportunity Alerts</li>
              <li className="flex justify-center">• Investment Readiness Scoring</li>
              <li className="flex justify-center">• Priority Feature Updates</li>
            </ul>
          </div>

          <div className="flex justify-center pb-8">
            <GetNow/>
          </div>
        </div>


        {/* Parallax Coins */}
        <img
            src={C1}
            className="lg:h-64 md:h-64 h-10 absolute z-50"
            style={{ 
                right: "2%", 
                transform: `translateY(${offsetY * 0.11}px)`,
                WebkitFilter: "blur(2px)",
                filter: "blur(5px)"
            }}
            alt="Coin 1"
            />
        <img
          src={C2}
          className="lg:h-24 md:h-24 h-10 absolute z-10 "
          style={{ left: "25%", transform: `translateY(${offsetY * 0.26}px)` }}
          alt="Coin 2"
        />
        <img
          src={C3}
          className="lg:h-28 md:h-28 h-10 absolute z-0"
          style={{ right: "23%", transform: `translateY(${offsetY * 0.23}px)` }}
          alt="Coin 3"
        />
        <img
          src={C4}
          className="lg:h-48 md:h-48 h-10 absolute z-40"
          style={{ left: "5%", transform: `translateY(${offsetY * 0.11}px)`,  WebkitFilter: "blur(1px)",
          filter: "blur(5px)" }}
          alt="Coin 4"
        />

         {/* Why Lifetime Section */}
         <div className="mt-8 text-center space-y-2">
          <p className="font-medium text-gray-800">"Why LeapStart AI for Lifetime?"</p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            "Because your startup's journey shouldn't be limited by monthly subscriptions. One payment, endless possibilities. Think of it as adopting an AI companion that grows smarter with you."
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 px-16 text-sm text-gray-600">
          <div className="space-y-2">
            <h3 className="font-semibold mb-4">Contact & Connect</h3>
            <p>• hello@leapstart.ai</p>
            <p>• support@leapstart.ai</p>
            <p>• Book a Demo Call</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold mb-4">Community</h3>
            <p>• Success Stories</p>
            <p>• Startup Resources</p>
            <p>• Blog</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <p>• About Us</p>
            <p>• Why LeapStart?</p>
            <p>• Product Features</p>
            <p>• Pricing</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold mb-4">Social</h3>
            <p>• Twitter @LeapStartAI</p>
            <p>• LinkedIn</p>
            <p>• Instagram</p>
            <p>• Discord Community</p>
          </div>
        </footer>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-8">
          © 2024 Leapstart.ai - Your AI-powered startup companion. Made with ❤️ for founders.
        </div>
      </div>
    </div>
  )
}