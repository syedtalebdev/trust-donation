'use client'

import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { Heart, Twitter, Facebook, Instagram } from 'lucide-react'

const SOCIAL_LINKS = [
  { name: 'Twitter', Icon: Twitter },
  { name: 'Facebook', Icon: Facebook },
  { name: 'Instagram', Icon: Instagram },
]

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer className={`${isDark ? 'bg-gray-950 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}`}>
      <div className={`h-1 bg-gradient-to-r from-green-600 via-emerald-500 to-green-400`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Dawat-e-<span className="text-green-600">Islam</span>
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Serving Humanity for the Sake of Allah</div>
              </div>
            </Link>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              A registered charitable trust dedicated to transparent, compassionate giving rooted in Islamic values. Every donation counts.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ name, Icon }) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                    isDark
                      ? 'bg-gray-800 text-gray-400 hover:bg-green-500/20 hover:text-green-400'
                      : 'bg-gray-200 text-gray-500 hover:bg-green-100 hover:text-green-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/causes', label: 'Our Causes' },
                { href: '/donate', label: 'Donate Now' },
                { href: '/about', label: 'About Us' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm flex items-center gap-2 group transition-colors duration-200 ${
                      isDark ? 'text-gray-400 hover:text-green-400' : 'text-gray-500 hover:text-green-700'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Causes */}
          <div>
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Causes</h3>
            <ul className="space-y-2.5">
              {['Education for All', 'Clean Water Access', 'Medical Aid', 'Disaster Relief', 'Food Security', 'Women Empowerment'].map(cause => (
                <li key={cause}>
                  <Link
                    href="/causes"
                    className={`text-sm flex items-center gap-2 group transition-colors duration-200 ${
                      isDark ? 'text-gray-400 hover:text-green-400' : 'text-gray-500 hover:text-green-700'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {cause}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Stay Connected</h3>
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Get updates on our campaigns and impact stories.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className={`px-4 py-2.5 rounded-xl text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                }`}
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-green-600/25 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6 flex gap-3">
              {['100% Secure', 'Tax Exempt', 'Verified NGO'].map(badge => (
                <div
                  key={badge}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${
                    isDark
                      ? 'border-gray-700 text-gray-400 bg-gray-800/50'
                      : 'border-gray-200 text-gray-500 bg-gray-50'
                  }`}
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} Dawat-e-Islam Trust. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map(item => (
              <a
                key={item}
                href="#"
                className={`text-xs transition-colors ${
                  isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
