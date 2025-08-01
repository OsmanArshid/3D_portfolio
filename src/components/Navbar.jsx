"use client"

import { NavLink, useLocation } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [showHoverMessage, setShowHoverMessage] = useState(false)
  const location = useLocation()
  const isHomepage = location.pathname === "/"

  return (
    <header className="header relative">
      <NavLink
        to="/"
        className="w-[130px] h-[50px] rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
      >
        <p className="blue-gradient_text">Usman Arshid</p>
      </NavLink>

      <nav className={`flex gap-7 font-medium text-lg items-center ${isHomepage ? 'ml-[300px]' : 'ml-[400px]'} transition-all duration-300`}>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}>
          About
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}>
          Projects
        </NavLink>

        {/* Don't Hover Element - Only show on homepage */}
        {isHomepage && (
          <div className="relative">
            <div
              className="relative"
              onMouseEnter={() => setShowHoverMessage(true)}
              onMouseLeave={() => setShowHoverMessage(false)}
            >
              {/* Don't Hover Button */}
              <div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-400/30 rounded-full cursor-pointer transition-all duration-300 hover:bg-red-500/20 hover:border-red-400/50 hover:scale-105 backdrop-blur-sm">
                <span className="text-red-400 text-xl">🚫</span>
                <span className="text-red-900 font-medium text-sm animate-pulse">Don't Hover!</span>
                <svg
                  className={`w-4 h-4 text-red-900 transition-transform duration-300 ${showHoverMessage}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Hover Message Popup */}
              {showHoverMessage && (
                <div className="absolute left-8 mt-5 w-80 rounded-2xl p-6 border border-red-400/20 bg-red-500/5 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(239,68,68,0.2)] transition-all duration-300 z-50 animate-in slide-in-from-top-2">

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-400/5 rounded-2xl pointer-events-none blur-sm z-0" />

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-red-900 font-semibold text-lg mb-3 tracking-wide flex items-center gap-2">
                      Congratulations! You hovered!
                    </h3>
                    <p className="text-[#4b4a4a] text-sm leading-relaxed mb-4">
                      As a gift for hovering. I'll give you instructions. To move you may use only Left and Right arrow keys or your Mouse.
                      <br />
                      <br /> by Osman — a developer who designs with vibes, not
                      just code.
                    </p>
                    <p className="text-red-800 text-xs italic">
                      *Spolier* - Contact page.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar