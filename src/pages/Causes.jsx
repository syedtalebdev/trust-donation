import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const ALL_CAUSES = [
  {
    id: 1, title: 'Education for All', category: 'Education', icon: '📚',
    gradient: 'from-blue-500 to-indigo-600', textColor: 'text-blue-500',
    description: 'Providing quality education to 12,000+ underprivileged children in remote villages across Rajasthan and Bihar.',
    longDesc: 'Our education programme builds schools, trains teachers, provides digital learning tools, and offers scholarships so no child misses out due to poverty.',
    raised: 128500, goal: 200000, supporters: 1847, updates: 24,
    impact: ['12,400 children enrolled', '145 schools built', '380 teachers trained', '8,000 scholarships given'],
    endDate: 'Dec 2025', urgency: 'high',
  },
  {
    id: 2, title: 'Clean Water Access', category: 'Environment', icon: '💧',
    gradient: 'from-cyan-500 to-teal-600', textColor: 'text-cyan-500',
    description: 'Installing bore wells and water purification systems in 80+ drought-prone villages in Maharashtra and Madhya Pradesh.',
    longDesc: 'Access to clean water reduces waterborne diseases by 80%. We build infrastructure that lasts decades and train local communities to maintain it.',
    raised: 89200, goal: 150000, supporters: 1203, updates: 18,
    impact: ['82 villages covered', '47,000 people served', '92% disease reduction', '200 wells installed'],
    endDate: 'Mar 2025', urgency: 'medium',
  },
  {
    id: 3, title: 'Medical Relief Fund', category: 'Healthcare', icon: '🏥',
    gradient: 'from-rose-500 to-pink-600', textColor: 'text-rose-500',
    description: 'Supplying medicines, medical equipment, and funding mobile health camps for rural communities with no healthcare access.',
    longDesc: 'Our mobile health camps reach 500+ villages monthly, providing free consultations, medicines, and emergency care to those who cannot afford doctors.',
    raised: 203800, goal: 300000, supporters: 3241, updates: 36,
    impact: ['500+ villages reached', '2.1L patients treated', '12 mobile clinics', '45 doctors volunteering'],
    endDate: 'Jun 2025', urgency: 'critical',
  },
  {
    id: 4, title: 'Food Security Drive', category: 'Food', icon: '🌾',
    gradient: 'from-amber-500 to-orange-600', textColor: 'text-amber-500',
    description: 'Providing nutritious meals to malnourished children and food-insecure families in urban slums and conflict zones.',
    longDesc: 'Our daily meal programme ensures 50,000 children receive nutritious food every day. We also run skill training for parents to achieve long-term food security.',
    raised: 72400, goal: 120000, supporters: 982, updates: 12,
    impact: ['50,000 meals/day', '320 feeding centres', '8,500 families supported', '45% malnutrition reduction'],
    endDate: 'Sep 2025', urgency: 'high',
  },
  {
    id: 5, title: 'Disaster Relief Response', category: 'Emergency', icon: '🆘',
    gradient: 'from-red-500 to-rose-600', textColor: 'text-red-500',
    description: 'Emergency relief for flood, earthquake, and cyclone victims — shelter, food, medicines, and rehabilitation support.',
    longDesc: 'We deploy within 24 hours of a disaster. Our trained response teams provide immediate relief and stay for long-term rehabilitation and community rebuilding.',
    raised: 156900, goal: 250000, supporters: 4102, updates: 45,
    impact: ['8 disasters responded', '1.2L people helped', '24hr response time', '95 relief camps set up'],
    endDate: 'Ongoing', urgency: 'critical',
  },
  {
    id: 6, title: 'Women Empowerment', category: 'Social', icon: '💪',
    gradient: 'from-purple-500 to-violet-600', textColor: 'text-purple-500',
    description: 'Skill training, microfinance, and legal support for rural women — helping them achieve financial independence and dignity.',
    longDesc: 'We run vocational training centres, provide zero-interest microloans, offer legal aid for domestic abuse survivors, and support women entrepreneurs.',
    raised: 44700, goal: 80000, supporters: 623, updates: 9,
    impact: ['6,200 women trained', '1,400 businesses started', '₹2.4Cr in microloans', '89% income increase'],
    endDate: 'Nov 2025', urgency: 'medium',
  },
]

const CATEGORIES = ['All', 'Education', 'Environment', 'Healthcare', 'Food', 'Emergency', 'Social']
const URGENCY_LABELS = { critical: 'Critical', high: 'High Priority', medium: 'Active' }
const URGENCY_COLORS = {
  critical: 'bg-red-500/10 text-red-400 border-red-500/30',
  high: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  medium: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
}

export default function Causes() {
  const { isDark } = useTheme()
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedId, setExpandedId] = useState(null)
  const [sortBy, setSortBy] = useState('urgency')

  const filtered = ALL_CAUSES
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

  const totalRaised = ALL_CAUSES.reduce((s, c) => s + c.raised, 0)
  const totalGoal = ALL_CAUSES.reduce((s, c) => s + c.goal, 0)

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 animate-float ${isDark ? 'bg-orange-500' : 'bg-orange-300'}`}></div>
          <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-15 animate-float-delayed ${isDark ? 'bg-rose-500' : 'bg-rose-300'}`}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${isDark ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-700'}`}>
            Active Campaigns
          </span>
          <h1 className={`text-5xl sm:text-6xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Causes That
            <span className="block bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Change the World</span>
          </h1>
          <p className={`text-xl max-w-2xl mx-auto mb-10 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Every cause here is rigorously verified. Browse, pick one that moves you, and make a direct impact today.
          </p>

          {/* Overall progress */}
          <div className={`max-w-xl mx-auto p-6 rounded-2xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
            <div className="flex justify-between text-sm mb-3">
              <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Total Raised Across All Causes</span>
              <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ₹{(totalRaised / 100000).toFixed(1)}L / ₹{(totalGoal / 100000).toFixed(1)}L
              </span>
            </div>
            <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-rose-500 transition-all duration-1000"
                style={{ width: `${Math.round((totalRaised / totalGoal) * 100)}%` }}
              ></div>
            </div>
            <div className={`mt-2 text-right text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              {Math.round((totalRaised / totalGoal) * 100)}% of total goal
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FILTERS ═══════════════ */}
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
                      ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md'
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
                className={`text-sm px-3 py-1.5 rounded-lg border focus:outline-none focus:border-orange-500 ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-700'}`}
              >
                <option value="urgency">Urgency</option>
                <option value="progress">Progress</option>
                <option value="supporters">Supporters</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CAUSES GRID ═══════════════ */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-sm mb-6 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Showing {filtered.length} cause{filtered.length !== 1 ? 's' : ''}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map(cause => {
              const pct = Math.round((cause.raised / cause.goal) * 100)
              const isExpanded = expandedId === cause.id

              return (
                <div
                  key={cause.id}
                  className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
                      : 'bg-white border-gray-100 shadow-sm hover:shadow-lg'
                  }`}
                >
                  {/* Header band */}
                  <div className={`relative h-32 bg-gradient-to-br ${cause.gradient} flex items-center px-6 overflow-hidden`}>
                    <div className="absolute right-6 text-6xl opacity-30">{cause.icon}</div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl">{cause.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{cause.title}</h3>
                          <span className="text-white/70 text-xs">{cause.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${URGENCY_COLORS[cause.urgency]}`}>
                        {URGENCY_LABELS[cause.urgency]}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {cause.description}
                    </p>

                    {/* Progress */}
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

                    {/* Stats row */}
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

                    {/* Expandable details */}
                    {isExpanded && (
                      <div className={`mb-5 p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                        <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{cause.longDesc}</p>
                        <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Impact So Far</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {cause.impact.map(item => (
                            <div key={item} className="flex items-center gap-2 text-sm">
                              <span className="text-emerald-500">✓</span>
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
                        {isExpanded ? 'Show Less ↑' : 'Learn More ↓'}
                      </button>
                      <Link
                        to="/donate"
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

      {/* ═══════════════ CTA ═══════════════ */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Can't decide? Give to our General Fund
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Our team will allocate your donation to the highest-priority cause that needs it most.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white text-lg font-bold hover:opacity-90 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300"
          >
            Donate to General Fund
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
