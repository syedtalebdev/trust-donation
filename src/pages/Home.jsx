import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = Date.now()
          const timer = setInterval(() => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress >= 1) clearInterval(timer)
          }, 16)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function Home() {
  const { isDark } = useTheme()

  const causes = [
    {
      id: 1,
      title: 'Education for All',
      description: 'Providing quality education to underprivileged children in remote areas.',
      raised: 128500,
      goal: 200000,
      supporters: 1847,
      category: 'Education',
      gradient: 'from-blue-500 to-indigo-600',
      bg: isDark ? 'bg-blue-500/10' : 'bg-blue-50',
      icon: '📚',
    },
    {
      id: 2,
      title: 'Clean Water Project',
      description: 'Building wells and water purification systems for communities in need.',
      raised: 89200,
      goal: 150000,
      supporters: 1203,
      category: 'Environment',
      gradient: 'from-cyan-500 to-teal-600',
      bg: isDark ? 'bg-cyan-500/10' : 'bg-cyan-50',
      icon: '💧',
    },
    {
      id: 3,
      title: 'Medical Relief Fund',
      description: 'Supplying medicines and medical equipment to rural healthcare centres.',
      raised: 203800,
      goal: 300000,
      supporters: 3241,
      category: 'Healthcare',
      gradient: 'from-rose-500 to-pink-600',
      bg: isDark ? 'bg-rose-500/10' : 'bg-rose-50',
      icon: '🏥',
    },
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Monthly Donor',
      text: 'HopeForward has completely changed how I think about giving. I can see exactly where my money goes and the impact it creates. Truly remarkable.',
      avatar: 'PS',
      rating: 5,
    },
    {
      name: 'James Mitchell',
      role: 'Corporate Sponsor',
      text: 'Our company has partnered with HopeForward for 3 years. Their transparency and commitment to real impact is unmatched in the NGO space.',
      avatar: 'JM',
      rating: 5,
    },
    {
      name: 'Aisha Rahman',
      role: 'Volunteer & Donor',
      text: 'From donating to volunteering — HopeForward makes it seamless to be part of something larger than yourself. Highly recommended!',
      avatar: 'AR',
      rating: 5,
    },
  ]

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float ${isDark ? 'bg-orange-500' : 'bg-orange-300'}`}></div>
          <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float-delayed ${isDark ? 'bg-rose-500' : 'bg-rose-300'}`}></div>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 animate-float-slow ${isDark ? 'bg-amber-500' : 'bg-amber-200'}`}></div>
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border ${
            isDark ? 'bg-orange-500/10 border-orange-500/30 text-orange-400' : 'bg-orange-50 border-orange-200 text-orange-700'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Trusted by 50,000+ donors worldwide
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            Make a Difference
            <span className="block mt-2 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
              One Gift at a Time
            </span>
          </h1>

          <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Join our community of changemakers. Every rupee donated goes directly to verified causes — education, healthcare, clean water, and more. 100% transparent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white text-lg font-bold shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
              </svg>
              Donate Now
            </Link>
            <Link
              to="/causes"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-lg font-bold border-2 transition-all duration-300 hover:scale-105 ${
                isDark ? 'border-gray-700 text-gray-300 hover:border-orange-500 hover:text-orange-400' : 'border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-600'
              }`}
            >
              Explore Causes
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className={`mt-16 flex flex-wrap justify-center gap-6 sm:gap-10 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {[
              { label: 'Verified NGO', icon: '✓' },
              { label: '80G Tax Benefits', icon: '✓' },
              { label: 'Secure Payments', icon: '🔒' },
              { label: 'Zero Admin Fee', icon: '✓' },
            ].map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2 text-sm">
                <span className="text-emerald-500 font-bold">{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 52400, suffix: '+', label: 'Happy Donors', color: 'text-orange-500', icon: '❤️' },
              { value: 184, suffix: '+', label: 'Projects Funded', color: 'text-rose-500', icon: '🚀' },
              { value: 12, suffix: 'M+', label: 'Rupees Raised', color: 'text-amber-500', icon: '💰' },
              { value: 98, suffix: '%', label: 'Funds to Causes', color: 'text-emerald-500', icon: '✅' },
            ].map(({ value, suffix, label, color, icon }) => (
              <div
                key={label}
                className={`relative text-center p-8 rounded-2xl border transition-transform hover:scale-105 ${
                  isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
                }`}
              >
                <div className="text-4xl mb-3">{icon}</div>
                <div className={`text-4xl sm:text-5xl font-black mb-2 ${color}`}>
                  <CountUp end={value} suffix={suffix} />
                </div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURED CAUSES ═══════════════ */}
      <section className={`py-24 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              isDark ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-700'
            }`}>Featured Campaigns</span>
            <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Causes That Need You
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              These campaigns are actively collecting donations. Your support can change lives today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {causes.map((cause) => {
              const pct = Math.round((cause.raised / cause.goal) * 100)
              return (
                <div
                  key={cause.id}
                  className={`group rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    isDark ? 'bg-gray-900 border-gray-800 hover:border-orange-500/30 hover:shadow-orange-500/10' : 'bg-white border-gray-100 hover:shadow-gray-200'
                  }`}
                >
                  {/* Card header */}
                  <div className={`relative h-48 bg-gradient-to-br ${cause.gradient} flex items-center justify-center overflow-hidden`}>
                    <div className="text-7xl opacity-80">{cause.icon}</div>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold border border-white/30">
                      {cause.category}
                    </span>
                    <div className="absolute bottom-4 right-4 text-white text-sm font-bold bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      {pct}% funded
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{cause.title}</h3>
                    <p className={`text-sm mb-5 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{cause.description}</p>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${cause.gradient} transition-all duration-1000`}
                          style={{ width: `${pct}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-5">
                      <div>
                        <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          ₹{(cause.raised / 100000).toFixed(1)}L
                        </div>
                        <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                          of ₹{(cause.goal / 100000).toFixed(1)}L goal
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {cause.supporters.toLocaleString()}
                        </div>
                        <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>supporters</div>
                      </div>
                    </div>

                    <Link
                      to="/donate"
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-200 bg-gradient-to-r ${cause.gradient} text-white hover:opacity-90 hover:shadow-lg`}
                    >
                      Support This Cause
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/causes"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold border-2 transition-all duration-300 hover:scale-105 ${
                isDark ? 'border-gray-700 text-gray-300 hover:border-orange-500 hover:text-orange-400' : 'border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-600'
              }`}
            >
              View All Causes
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              isDark ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-700'
            }`}>Simple Process</span>
            <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              How It Works
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Donating with HopeForward is quick, secure, and completely transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className={`hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 ${isDark ? 'bg-gradient-to-r from-orange-500/30 via-rose-500/30 to-orange-500/30' : 'bg-gradient-to-r from-orange-200 via-rose-200 to-orange-200'}`}></div>

            {[
              { step: '01', title: 'Choose a Cause', desc: 'Browse verified campaigns and pick one that resonates with you.', icon: '🔍' },
              { step: '02', title: 'Set Your Amount', desc: 'Choose any amount — even ₹50 makes a real difference.', icon: '💳' },
              { step: '03', title: 'Donate Securely', desc: 'Pay via UPI, card, net banking, or wallets. Fully encrypted.', icon: '🔒' },
              { step: '04', title: 'Track Impact', desc: 'Get real-time updates and see exactly how your gift helps.', icon: '📊' },
            ].map(({ step, title, desc, icon }) => (
              <div key={step} className="relative text-center group">
                <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl text-3xl mb-6 mx-auto transition-transform duration-300 group-hover:scale-110 ${
                  isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100 shadow-md'
                }`}>
                  {icon}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-rose-500 text-white text-xs font-black flex items-center justify-center">
                    {step.slice(-1)}
                  </div>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className={`py-24 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              isDark ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-700'
            }`}>Donor Stories</span>
            <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Words from Our Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ name, role, text, avatar, rating }) => (
              <div
                key={name}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isDark ? 'bg-gray-900 border-gray-800 hover:border-orange-500/20' : 'bg-gray-50 border-gray-100 hover:border-orange-100'
                }`}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className={`text-base leading-relaxed mb-6 italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center text-white text-sm font-bold">
                    {avatar}
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</div>
                    <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-rose-600 to-pink-600"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🌟</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Change a Life Today?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Your donation, no matter how small, creates a real impact in someone's life. Join 52,000+ donors who are making the world better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-orange-600 text-lg font-bold hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Start Donating
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 border-2 border-white/30 text-white text-lg font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
