'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/context/ThemeContext'
import { Heart, Sun, Moon, Menu, X } from 'lucide-react'

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/causes', label: 'Causes' },
    { href: '/donate', label: 'Donate' },
    { href: '/about', label: 'About' },
  ]

  const isActive = (path) => pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-gray-800'
            : 'bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-200/60 border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center shadow-lg group-hover:shadow-green-600/40 transition-shadow duration-300">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
            </div>
            <div>
              <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Dawat-e-<span className="text-green-600">Islam</span>
              </span>
              <div className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Serving Humanity for the Sake of Allah</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                  isActive(href)
                    ? 'text-green-600'
                    : isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-green-600 rounded-full"></span>
                )}
                <span className={`absolute inset-0 rounded-lg transition-colors duration-200 ${
                  isDark ? 'group-hover:bg-white/5' : 'group-hover:bg-gray-100'
                } ${isActive(href) ? (isDark ? 'bg-green-500/10' : 'bg-green-50') : ''}`}></span>
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 ${
                isDark ? 'bg-green-600 focus:ring-offset-gray-900' : 'bg-gray-200 focus:ring-offset-white'
              }`}
              aria-label="Toggle theme"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${
                  isDark ? 'translate-x-6' : 'translate-x-0'
                }`}
              >
                {isDark ? (
                  <Moon className="w-3 h-3 text-green-600" />
                ) : (
                  <Sun className="w-3 h-3 text-yellow-500" />
                )}
              </span>
            </button>

            {/* CTA Button */}
            <Link
              href="/donate"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold shadow-lg shadow-green-600/25 hover:shadow-green-600/40 hover:scale-105 transition-all duration-200"
            >
              <Heart className="w-4 h-4" fill="currentColor" />
              Donate Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${isDark ? 'bg-gray-900/98 border-t border-gray-800' : 'bg-white/98 border-t border-gray-100'}`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive(href)
                  ? 'bg-green-500/10 text-green-600'
                  : isDark
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold text-center"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
