'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { ALL_CAUSES } from '@/lib/data'
import {
  BookOpen, Droplets, HeartPulse, Utensils, AlertTriangle, Users,
  Flame, AlertCircle, Activity, ArrowRight, CheckCircle
} from 'lucide-react'

const ICON_MAP = { BookOpen, Droplets, HeartPulse, Utensils, AlertTriangle, Users }
const URGENCY_ICONS = { critical: Flame, high: AlertCircle, medium: Activity }

const CATEGORIES = ['All', 'Education', 'Environment', 'Healthcare', 'Food', 'Emergency', 'Social']
const URGENCY_LABELS = { critical: 'Critical', high: 'High Priority', medium: 'Active' }
const URGENCY_COLORS = {
  critical: 'bg-red-500/10 text-red-400 border-red-500/30',
  high: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  medium: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
}

export default function Causes() {
  const { isDark } = useTheme()
  const [causes, setCauses] = useState(ALL_CAUSES)
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedId, setExpandedId] = useState(null)
  const [sortBy, setSortBy] = useState('urgency')

  useEffect(() => {
    fetch('/api/causes')
      .then(r => r.json())
      .then(dbCauses => {
        setCauses(prev => prev.map(c => {
          const db = dbCauses.find(d => d.slug === c.slug)
          return db ? { ...c, raised: db.raised, supporters: db.supporters } : c
        }))
      })
      .catch(() => {})
  }, [])

  const filtered = causes
    .filter(c => activeCategory === 'All' || c.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'urgency') {
        const order = { critical: 0, high: 1, medium: 2 }
        return order[a.urgency] - order[b.urgency]
      }
      if (sortBy === 'progress') return (b.raised / b.goal) - (a.raised / a.goal)
      if (sortBy === 'supporters') return b.supporters - a.supporters
      return 0
    })

  const totalRaised = causes.reduce((s, c) => s + c.raised, 0)
  const totalGoal = causes.reduce((s, c) => s + c.goal, 0)

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      {/* HERO */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'}`}>
            Active Campaigns
          </span>
          <h1 className={`text-5xl sm:text-6xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Causes That
            <span className="block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Change the World</span>
          </h1>
          <p className={`text-xl max-w-2xl mx-auto mb-10 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Every cause here is rigorously verified. Browse, pick one that moves you, and make a direct impact today.
          </p>

          <div className={`max-w-xl mx-auto p-6 rounded-2xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
            <div className="flex justify-between text-sm mb-3">
              <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Total Raised Across All Causes</span>
              <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ₹{(totalRaised / 100000).toFixed(1)}L / ₹{(totalGoal / 100000).toFixed(1)}L
              </span>
            </div>
            <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-600 to-emerald-500 transition-all duration-1000"
                style={{ width: `${Math.round((totalRaised / totalGoal) * 100)}%` }}
              ></div>
            </div>
            <div className={`mt-2 text-right text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              {Math.round((totalRaised / totalGoal) * 100)}% of total goal
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className={`sticky top-16 z-40 py-4 border-b ${isDark ? 'bg-gray-950/95 backdrop-blur-xl border-gray-800' : 'bg-white/95 backdrop-blur-xl border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md'
                      : isDark
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Sort:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className={`text-sm px-3 py-1.5 rounded-lg border focus:outline-none focus:border-green-600 ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-700'}`}
              >
                <option value="urgency">Urgency</option>
                <option value="progress">Progress</option>
                <option value="supporters">Supporters</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* CAUSES GRID */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-sm mb-6 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Showing {filtered.length} cause{filtered.length !== 1 ? 's' : ''}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map(cause => {
              const pct = Math.round((cause.raised / cause.goal) * 100)
              const isExpanded = expandedId === cause.id
              const Icon = ICON_MAP[cause.icon] || Users
              const UrgencyIcon = URGENCY_ICONS[cause.urgency] || Activity

              return (
                <div
                  key={cause.id}
                  className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
                      : 'bg-white border-gray-100 shadow-sm hover:shadow-lg'
                  }`}
                >
                  <div className={`relative h-32 bg-gradient-to-br ${cause.gradient} flex items-center px-6 overflow-hidden`}>
                    <Icon className="absolute right-6 w-20 h-20 text-white/20" />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{cause.title}</h3>
                          <span className="text-white/70 text-xs">{cause.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${URGENCY_COLORS[cause.urgency]}`}>
                        <UrgencyIcon className="w-3 h-3" />
                        {URGENCY_LABELS[cause.urgency]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {cause.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>Progress</span>
                        <span className={`font-bold ${cause.textColor}`}>{pct}%</span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${cause.gradient}`}
                          style={{ width: `${pct}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-5">
                      {[
                        { label: 'Raised', value: `₹${(cause.raised / 100000).toFixed(1)}L` },
                        { label: 'Supporters', value: cause.supporters.toLocaleString() },
                        { label: 'Updates', value: cause.updates },
                      ].map(({ label, value }) => (
                        <div key={label} className={`text-center p-3 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                          <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{value}</div>
                          <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</div>
                        </div>
                      ))}
                    </div>

                    {isExpanded && (
                      <div className={`mb-5 p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                        <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{cause.longDesc}</p>
                        <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Impact So Far</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {cause.impact.map(item => (
                            <div key={item} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className={`mt-4 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                          Campaign ends: <span className="font-semibold">{cause.endDate}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : cause.id)}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                          isDark
                            ? 'border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {isExpanded ? 'Show Less' : 'Learn More'}
                      </button>
                      <Link
                        href="/donate"
                        className={`flex-1 py-2.5 rounded-xl text-sm font-bold text-center text-white bg-gradient-to-r ${cause.gradient} hover:opacity-90 hover:shadow-lg transition-all duration-200`}
                      >
                        Donate Now
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Can't decide? Give to our General Fund
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Our team will allocate your donation to the highest-priority cause that needs it most.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg font-bold hover:opacity-90 hover:scale-105 hover:shadow-xl hover:shadow-green-600/25 transition-all duration-300"
          >
            Donate to General Fund
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
