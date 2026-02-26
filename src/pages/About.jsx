import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const TEAM = [
  { name: 'Ananya Kapoor', role: 'Founder & CEO', initials: 'AK', bio: '15 years in social impact. Ex-UNICEF. Passionate about sustainable development.', gradient: 'from-orange-500 to-rose-500' },
  { name: 'Rohan Mehta', role: 'Head of Operations', initials: 'RM', bio: 'MBA, IIM Ahmedabad. Runs field operations across 12 states in India.', gradient: 'from-blue-500 to-indigo-600' },
  { name: 'Dr. Preethi Rao', role: 'Medical Director', initials: 'PR', bio: 'MBBS, MD. Designed mobile health programmes serving 500+ villages.', gradient: 'from-rose-500 to-pink-600' },
  { name: 'Vikram Singh', role: 'Technology Lead', initials: 'VS', bio: 'Built our transparent donation tracking platform from the ground up.', gradient: 'from-purple-500 to-violet-600' },
  { name: 'Fatima Shaikh', role: 'Community Outreach', initials: 'FS', bio: 'Grassroots organiser. Brought 400+ NGO partners onto our network.', gradient: 'from-cyan-500 to-teal-600' },
  { name: 'Arun Kumar', role: 'Finance & Compliance', initials: 'AK', bio: 'CA with 12 years in non-profit finance. Ensures 100% fund utilisation accountability.', gradient: 'from-amber-500 to-orange-600' },
]

const TIMELINE = [
  { year: '2015', title: 'Founded in Bangalore', desc: 'Started with a small team of 5 and a mission to make giving transparent.' },
  { year: '2017', title: 'First 1,000 Donors', desc: 'Reached our first milestone — ₹10 lakhs raised for education campaigns.' },
  { year: '2019', title: 'National Expansion', desc: 'Expanded to 12 states. Launched mobile health camps programme.' },
  { year: '2021', title: 'Govt. Partnership', desc: 'Partnered with NITI Aayog for disaster relief coordination.' },
  { year: '2023', title: '50,000 Donors', desc: '₹12 crore raised. Impacted over 5 lakh lives across India.' },
  { year: '2025', title: 'Global Outreach', desc: 'Welcoming international donors. FCRA approved for foreign contributions.' },
]

const VALUES = [
  { title: 'Radical Transparency', desc: 'Every rupee is tracked and reported. We publish monthly impact reports accessible to all.', icon: '🔍', color: 'from-blue-500 to-indigo-600' },
  { title: 'Zero Admin Fee', desc: '100% of donations reach the cause. Our operations are funded separately by institutional grants.', icon: '💯', color: 'from-emerald-500 to-teal-600' },
  { title: 'Community First', desc: 'All programmes are designed with and for communities. We listen before we act.', icon: '🤝', color: 'from-orange-500 to-rose-500' },
  { title: 'Verified Impact', desc: 'Third-party auditors verify every project. We share proof, not just promises.', icon: '✅', color: 'from-purple-500 to-violet-600' },
  { title: 'Long-term Vision', desc: 'We fund sustainable solutions, not quick fixes. Our projects are designed to last decades.', icon: '🌱', color: 'from-cyan-500 to-teal-600' },
  { title: 'Inclusive Giving', desc: 'Minimum donation of ₹10. Every rupee matters. We make giving accessible to everyone.', icon: '♥️', color: 'from-rose-500 to-pink-600' },
]

export default function About() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 animate-float ${isDark ? 'bg-orange-500' : 'bg-orange-300'}`}></div>
          <div className={`absolute bottom-0 -left-20 w-96 h-96 rounded-full blur-3xl opacity-10 animate-float-delayed ${isDark ? 'bg-rose-500' : 'bg-rose-300'}`}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${isDark ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-700'}`}>
            Our Story
          </span>
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            We Believe in
            <span className="block bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
              Hopeful Change
            </span>
          </h1>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            HopeForward was born from a simple belief: that ordinary people, given the right tools, can create extraordinary change. Since 2015, we've been that bridge — connecting generous hearts with verified causes that need them most.
          </p>
        </div>
      </section>

      {/* ═══════════════ MISSION + VISION ═══════════════ */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                tag: 'Our Mission',
                title: 'Transparent giving for everyone',
                desc: 'To democratise philanthropy by making it transparent, accessible, and impactful. We verify every cause, track every rupee, and report every outcome so donors can give with complete confidence.',
                icon: '🎯',
                gradient: 'from-orange-500 to-rose-500',
              },
              {
                tag: 'Our Vision',
                title: 'A world where no one is left behind',
                desc: 'We envision a world where basic human needs — education, health, food, water — are accessible to all. We work toward a future where digital tools make giving so easy that generosity becomes universal.',
                icon: '🌍',
                gradient: 'from-blue-500 to-purple-600',
              },
            ].map(({ tag, title, desc, icon, gradient }) => (
              <div
                key={tag}
                className={`relative p-10 rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`}
              >
                <div className={`absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br ${gradient} opacity-5 -translate-y-10 translate-x-10`}></div>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} text-3xl mb-6 shadow-lg`}>
                  {icon}
                </div>
                <div className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{tag}</div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ IMPACT NUMBERS ═══════════════ */}
      <section className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>10 Years of Impact</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { value: '52K+', label: 'Donors', icon: '❤️' },
              { value: '184', label: 'Projects', icon: '🚀' },
              { value: '₹12Cr', label: 'Raised', icon: '💰' },
              { value: '5L+', label: 'Lives Changed', icon: '🌟' },
              { value: '12', label: 'States', icon: '🗺️' },
              { value: '98%', label: 'To Causes', icon: '✅' },
            ].map(({ value, label, icon }) => (
              <div
                key={label}
                className={`text-center p-6 rounded-2xl border hover:scale-105 transition-transform duration-300 ${
                  isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-100'
                }`}
              >
                <div className="text-3xl mb-3">{icon}</div>
                <div className={`text-2xl font-black text-orange-500 mb-1`}>{value}</div>
                <div className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ VALUES ═══════════════ */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${isDark ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-700'}`}>
              What We Stand For
            </span>
            <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map(({ title, desc, icon, color }) => (
              <div
                key={title}
                className={`group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isDark ? 'bg-gray-800 border-gray-700 hover:border-orange-500/20' : 'bg-white border-gray-100'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${color} text-2xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {icon}
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TIMELINE ═══════════════ */}
      <section className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${isDark ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-700'}`}>
              Our Journey
            </span>
            <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>Milestones That Matter</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}></div>

            <div className="space-y-10">
              {TIMELINE.map(({ year, title, desc }, i) => (
                <div key={year} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-rose-500 border-4 border-current shadow-md z-10"
                    style={{ borderColor: isDark ? '#030712' : '#ffffff' }}
                  ></div>

                  {/* Year */}
                  <div className={`hidden sm:flex w-[calc(50%-2rem)] ${i % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'} items-center`}>
                    <span className="text-2xl font-black text-orange-500">{year}</span>
                  </div>

                  {/* Card */}
                  <div className={`ml-16 sm:ml-0 w-full sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'}`}>
                    <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
                      <div className="sm:hidden text-orange-500 font-bold text-sm mb-2">{year}</div>
                      <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TEAM ═══════════════ */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${isDark ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-700'}`}>
              The People Behind HopeForward
            </span>
            <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map(({ name, role, initials, bio, gradient }) => (
              <div
                key={name}
                className={`group p-8 rounded-2xl border text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800 border-gray-700 hover:border-orange-500/20' : 'bg-white border-gray-100'
                }`}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xl font-bold mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {initials}
                </div>
                <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
                <div className="text-orange-500 text-sm font-semibold mb-4">{role}</div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PARTNERS & CERTIFICATIONS ═══════════════ */}
      <section className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Certified & Trusted</h2>
          <p className={`text-base mb-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            We undergo rigorous third-party audits to ensure your trust is well-placed.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'NITI Aayog', sub: 'Government Partner', icon: '🏛️' },
              { label: 'GuideStar India', sub: 'Platinum Certified', icon: '⭐' },
              { label: 'FCRA Approved', sub: 'Foreign Contributions', icon: '🌐' },
              { label: '80G & 12A', sub: 'Tax Exemption', icon: '📋' },
              { label: 'ISO 9001', sub: 'Quality Management', icon: '🎖️' },
              { label: 'SSL Secured', sub: 'Data Protection', icon: '🔒' },
            ].map(({ label, sub, icon }) => (
              <div
                key={label}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl border ${
                  isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-100'
                }`}
              >
                <span className="text-3xl">{icon}</span>
                <div className="text-left">
                  <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{label}</div>
                  <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-rose-600 to-pink-600"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Join the HopeForward Family
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Whether you donate ₹50 or ₹50,000 — you're part of something beautiful. Together we are changing the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-orange-600 text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Donate Today
            </Link>
            <Link
              to="/causes"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 border-2 border-white/30 text-white text-lg font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Causes
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
