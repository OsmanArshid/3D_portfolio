"use client"

import { Link } from "react-router-dom"
import { arrow } from "../assets/icons"
import { useState, useRef } from "react"

const HomeInfo = ({ currentStage }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const boxRef = useRef(null)

  const handleMouseMove = (e) => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setMousePosition({ x, y })
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 50, y: 50 })
  }

  if (currentStage === 1)
    return (
<div
  ref={boxRef}
  className={`relative backdrop-blur-xl border border-white/20 rounded-3xl p-8 mx-5 shadow-2xl transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 overflow-hidden cursor-pointer min-h-[135px] flex items-center justify-center ${
    isHovered 
      ? 'bg-gradient-to-br from-purple-500/20 via-violet-600/15 to-purple-700/20 shadow-purple-500/30' 
      : 'bg-white/5 shadow-gray-500/10'
  }`}
  onMouseMove={handleMouseMove}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  style={{
    boxShadow: isHovered
      ? "0 20px 60px rgba(139, 69, 255, 0.3), 0 8px 32px rgba(88, 28, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)"
      : "0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
  }}
>
  <div className="relative z-10 text-center">
    <h1 className="text-xl sm:leading-snug font-medium font-poppins text-center text-[#4b4a4a]">
      Hi, I'm
      <span
        className="font-semibold text-xl mx-2 text-[#4b4a4a] animate-pulse"
        style={{
          textShadow: "0 0 8px rgba(255, 255, 255, 1), 0 0 16px rgba(255, 255, 255, 0.8), 0 0 24px rgba(255, 255, 255, 0.6)"
        }}
      >
        Osman
      </span>
      <span className="inline-block animate-bounce">🦕</span>
      <br />
      <span className="text-lg mt-2 inline-block">A Software Engineer from Pakistan (🇵🇰)</span>
    </h1>
  </div>

  {/* Mouse tracking overlay */}
  <div
    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
    style={{
      background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.1) 0%, rgba(139, 69, 255, 0.05) 30%, transparent 70%)`,
    }}
  />

  {/* Distortion effect */}
  <div
    className="absolute -inset-1/2 pointer-events-none transition-transform duration-200 ease-out"
    style={{
      background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.03) 0%, rgba(139, 69, 255, 0.02) 40%, transparent 70%)`,
      transform: isHovered
        ? `translate(${(mousePosition.x - 50) * 0.1}px, ${(mousePosition.y - 50) * 0.1}px)`
        : "translate(0, 0)",
    }}
  />
</div>    )

  if (currentStage === 2) {
    return (
      <div
        ref={boxRef}
        className="relative bg-gradient-to-br from-purple-500/15 via-violet-600/10 to-purple-700/15 backdrop-blur-xl border border-white/20 rounded-3xl p-8 mx-5 shadow-2xl shadow-purple-500/20 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-purple-500/30 overflow-hidden cursor-pointer h-[180px] flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          boxShadow: isHovered
            ? "0 20px 60px rgba(139, 69, 255, 0.3), 0 8px 32px rgba(88, 28, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)"
            : "0 8px 32px rgba(139, 69, 255, 0.2), 0 4px 16px rgba(88, 28, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
        }}
      >
        <div className="relative z-10 text-center w-full">
          <p className="font-medium sm:text-xl text-center text-[#4b4a4a] font-poppins mb-6">
            I may be a fresh grad, <br /> but I didn’t wait to start working
          </p>

          <Link
            to="/about"
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden group"
          >
            <span className="relative z-10">Learn more</span>
            <img
              src={arrow || "/placeholder.svg"}
              alt="arrow"
              className="w-4 h-4 object-contain brightness-0 invert transition-transform duration-300 group-hover:translate-x-1 relative z-10"
            />

            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </Link>
        </div>

        {/* Mouse tracking overlay */}
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.1) 0%, rgba(139, 69, 255, 0.05) 30%, transparent 70%)`,
          }}
        />

        {/* Distortion effect */}
        <div
          className="absolute -inset-1/2 pointer-events-none transition-transform duration-200 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.03) 0%, rgba(139, 69, 255, 0.02) 40%, transparent 70%)`,
            transform: isHovered
              ? `translate(${(mousePosition.x - 50) * 0.15}px, ${(mousePosition.y - 50) * 0.15}px)`
              : "translate(0, 0)",
          }}
        />
      </div>
    )
  }

  if (currentStage === 3) {
    return (
      <div
        ref={boxRef}
        className="relative bg-gradient-to-br from-purple-500/15 via-violet-600/10 to-purple-700/15 backdrop-blur-xl border border-white/20 rounded-3xl px-16 py-7 mx-5 shadow-2xl shadow-purple-500/20 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-purple-500/30 overflow-hidden cursor-pointer min-h-[150px] flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          boxShadow: isHovered
            ? "0 20px 60px rgba(139, 69, 255, 0.3), 0 8px 32px rgba(88, 28, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)"
            : "0 8px 32px rgba(139, 69, 255, 0.2), 0 4px 16px rgba(88, 28, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
        }}
      >
        <div className="relative z-10 text-center w-full">
          <p className="font-medium font-poppins text-center sm:text-xl text-[#4b4a4a] mb-6">
            I love to learn and turn < br/> ideas into reality
          </p>

          <Link
            to="/projects"
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden group"
          >
            <span className="relative z-10">Visit my portfolio</span>
            <img
              src={arrow || "/placeholder.svg"}
              alt="arrow"
              className="w-4 h-4 object-contain brightness-0 invert transition-transform duration-300 group-hover:translate-x-1 relative z-10"
            />

            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </Link>
        </div>

        {/* Mouse tracking overlay */}
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.1) 0%, rgba(139, 69, 255, 0.05) 30%, transparent 70%)`,
          }}
        />

        {/* Distortion effect */}
        <div
          className="absolute -inset-1/2 pointer-events-none transition-transform duration-200 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.03) 0%, rgba(139, 69, 255, 0.02) 40%, transparent 70%)`,
            transform: isHovered
              ? `translate(${(mousePosition.x - 50) * 0.15}px, ${(mousePosition.y - 50) * 0.15}px)`
              : "translate(0, 0)",
          }}
        />
      </div>
    )
  }

  if (currentStage === 4) {
    return (
      <div
        ref={boxRef}
        className="relative bg-gradient-to-br from-purple-500/15 via-violet-600/10 to-purple-700/15 backdrop-blur-xl border border-white/20 rounded-3xl p-8 mx-5 shadow-2xl shadow-purple-500/20 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-purple-500/30 overflow-hidden cursor-pointer h-[180px] flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          boxShadow: isHovered
            ? "0 20px 60px rgba(139, 69, 255, 0.3), 0 8px 32px rgba(88, 28, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)"
            : "0 8px 32px rgba(139, 69, 255, 0.2), 0 4px 16px rgba(88, 28, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
        }}
      >
        <div className="relative z-10 text-center w-full">
          <p className="font-medium font-poppins sm:text-xl text-center text-[#4b4a4a] mb-6">
            Problems, Stars, Startups, Coffee, or Code? <br /> I'm in.
          </p>

          <Link
            to="/contact"
            className="relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden group"
          >
            <span className="relative z-10">Let's talk</span>
            <img
              src={arrow || "/placeholder.svg"}
              alt="arrow"
              className="w-4 h-4 object-contain brightness-0 invert transition-transform duration-300 group-hover:translate-x-1 relative z-10"
            />

            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </Link>
        </div>

        {/* Mouse tracking overlay */}
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.1) 0%, rgba(139, 69, 255, 0.05) 30%, transparent 70%)`,
          }}
        />

        {/* Distortion effect */}
        <div
          className="absolute -inset-1/2 pointer-events-none transition-transform duration-200 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.03) 0%, rgba(139, 69, 255, 0.02) 40%, transparent 70%)`,
            transform: isHovered
              ? `translate(${(mousePosition.x - 50) * 0.15}px, ${(mousePosition.y - 50) * 0.15}px)`
              : "translate(0, 0)",
          }}
        />
      </div>
    )
  }

  return null
}

export default HomeInfo
