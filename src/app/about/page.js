'use client'

import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import {
  Eye, Percent, Users, BarChart2, Globe, Heart,
  Shield, BadgeCheck, Lock, FileText, Award, Star,
  Target, Lightbulb, ArrowRight
} from 'lucide-react'

const TEAM = [
  { name: 'Maulana Ibrahim', role: 'Founder & Chairman', initials: 'MI', bio: '20 years in social welfare and Islamic charity work. Devoted to transparent humanitarian service.', gradient: 'from-green-600 to-emerald-700' },
  { name: 'Br. Yusuf Khan', role: 'Head of Operations', initials: 'YK', bio: 'MBA. Runs field operations across 12 states in India with a focus on accountability.', gradient: 'from-blue-500 to-indigo-600' },
  { name: 'Dr. Fatima Ansari', role: 'Medical Director', initials: 'FA', bio: 'MBBS, MD. Designed mobile health programmes serving 500+ villages.', gradient: 'from-emerald-500 to-teal-600' },
  { name: 'Br. Hamza Siddiqui', role: 'Technology Lead', initials: 'HS', bio: 'Built our transparent donation tracking platform from the ground up.', gradient: 'from-purple-500 to-violet-600' },
  { name: 'Sis. Ayesha Malik', role: 'Community Outreach', initials: 'AM', bio: 'Grassroots organiser. Brought 400+ partner NGOs onto our network.', gradient: 'from-cyan-500 to-teal-600' },
  { name: 'Br. Umar Farouk', role: 'Finance & Compliance', initials: 'UF', bio: 'CA with 12 years in non-profit finance. Ensures 100% fund utilisation accountability.', gradient: 'from-amber-500 to-orange-600' },
]

const TIMELINE = [
  { year: '2015', title: 'Founded', desc: 'Started with a small team of 5 and a mission to make Islamic charity transparent and accountable.' },
  { year: '2017', title: 'First 1,000 Donors', desc: 'Reached our first milestone — ₹10 lakhs raised for education campaigns.' },
  { year: '2019', title: 'National Expansion', desc: 'Expanded to 12 states. Launched mobile health camps programme.' },
  { year: '2021', title: 'Govt. Partnership', desc: 'Partnered with NITI Aayog for disaster relief coordination.' },
  { year: '2023', title: '50,000 Donors', desc: '₹12 crore raised. Impacted over 5 lakh lives across India.' },
  { year: '2025', title: 'Global Outreach', desc: 'Welcoming international donors. FCRA approved for foreign contributions.' },
]

const VALUES = [
  { title: 'Radical Transparency', desc: 'Every rupee is tracked and reported. We publish monthly impact reports accessible to all.', Icon: Eye, color: 'from-blue-500 to-indigo-600' },
  { title: 'Zero Admin Fee', desc: '100% of donations reach the cause. Our operations are funded separately by institutional grants.', Icon: Percent, color: 'from-emerald-500 to-teal-600' },
  { title: 'Community First', desc: 'All programmes are designed with and for communities. We listen before we act.', Icon: Users, color: 'from-green-600 to-emerald-600' },
  { title: 'Verified Impact', desc: 'Third-party auditors verify every project. We share proof, not just promises.', Icon: BadgeCheck, color: 'from-purple-500 to-violet-600' },
  { title: 'Long-term Vision', desc: 'We fund sustainable solutions, not quick fixes. Our projects are designed to last decades.', Icon: Globe, color: 'from-cyan-500 to-teal-600' },
  { title: 'Inclusive Giving', desc: 'Minimum donation of ₹10. Every rupee matters. We make giving accessible to everyone.', Icon: Heart, color: 'from-green-500 to-emerald-500' },
]

const CERTS = [
  { label: 'NITI Aayog', sub: 'Government Partner', Icon: Shield },
  { label: 'GuideStar India', sub: 'Platinum Certified', Icon: Star },
  { label: 'FCRA Approved', sub: 'Foreign Contributions', Icon: Globe },
  { label: '80G & 12A', sub: 'Tax Exemption', Icon: FileText },
  { label: 'ISO 9001', sub: 'Quality Management', Icon: Award },
  { label: 'SSL Secured', sub: 'Data Protection', Icon: Lock },
]

export default function About() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      {/* HERO */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'}`}>
            Our Story
          </span>
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            We Believe in
            <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 bg-clip-text text-transparent">
              Hopeful Change
            </span>
          </h1>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Dawat-e-Islam was born from a simple belief: that ordinary people, given the right tools, can create extraordinary change. Since 2015, we've been that bridge — connecting generous hearts with verified causes that need them most, for the sake of Allah.
          </p>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                tag: 'Our Mission',
                title: 'Transparent giving for everyone',
                desc: 'To democratise philanthropy by making it transparent, accessible, and impactful. We verify every cause, track every rupee, and report every outcome so donors can give with complete confidence.',
                Icon: Target,
                gradient: 'from-green-600 to-emerald-600',
              },
              {
                tag: 'Our Vision',
                title: 'A world where no one is left behind',
                desc: 'We envision a world where basic human needs — education, health, food, water — are accessible to all. We work toward a future where digital tools make giving so easy that generosity becomes universal.',
                Icon: Lightbulb,
                gradient: 'from-blue-500 to-purple-600',
              },
            ].map(({ tag, title, desc, Icon, gradient }) => (
              <div
                key={tag}
                className={`relative p-10 rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{tag}</div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>10 Years of Impact</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { value: '52K+', label: 'Donors', Icon: Heart },
              { value: '184', label: 'Projects', Icon: BarChart2 },
              { value: '₹12Cr', label: 'Raised', Icon: Target },
              { value: '5L+', label: 'Lives Changed', Icon: Users },
              { value: '12', label: 'States', Icon: Globe },
              { value: '98%', label: 'To Causes', Icon: BadgeCheck },
            ].map(({ value, label, Icon }) => (
              <div
                key={label}
                className={`text-center p-6 rounded-2xl border ${
                  isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-100'
                }`}
              >
                <Icon className="w-7 h-7 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-black text-green-600 mb-1">{value}</div>
                <div className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'}`}>
              What We Stand For
            </span>
            <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map(({ title, desc, Icon, color }) => (
              <div
                key={title}
                className={`p-8 rounded-2xl border ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${color} mb-5 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'}`}>
              Our Journey
            </span>
            <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>Milestones That Matter</h2>
          </div>

          <div className="relative">
            <div className={`absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}></div>
            <div className="space-y-10">
              {TIMELINE.map(({ year, title, desc }, i) => (
                <div key={year} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 border-4 z-10"
                    style={{ borderColor: isDark ? '#030712' : '#ffffff' }}
                  ></div>
                  <div className={`hidden sm:flex w-[calc(50%-2rem)] ${i % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'} items-center`}>
                    <span className="text-2xl font-black text-green-600">{year}</span>
                  </div>
                  <div className={`ml-16 sm:ml-0 w-full sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'}`}>
                    <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
                      <div className="sm:hidden text-green-600 font-bold text-sm mb-2">{year}</div>
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

      {/* TEAM */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'}`}>
              The People Behind Dawat-e-Islam
            </span>
            <h2 className={`text-4xl sm:text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map(({ name, role, initials, bio, gradient }) => (
              <div
                key={name}
                className={`p-8 rounded-2xl border text-center ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                }`}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xl font-bold mx-auto mb-5 shadow-lg`}>
                  {initials}
                </div>
                <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
                <div className="text-green-600 text-sm font-semibold mb-4">{role}</div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Certified & Trusted</h2>
          <p className={`text-base mb-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            We undergo rigorous third-party audits to ensure your trust is well-placed.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {CERTS.map(({ label, sub, Icon }) => (
              <div
                key={label}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl border ${
                  isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-100'
                }`}
              >
                <Icon className="w-8 h-8 text-green-600" />
                <div className="text-left">
                  <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{label}</div>
                  <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-emerald-600"></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Join the Dawat-e-Islam Family
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Whether you donate ₹50 or ₹50,000 — you're part of something beautiful. Together we are changing the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-green-700 text-lg font-bold hover:bg-green-50 transition-colors shadow-2xl"
            >
              Donate Today
            </Link>
            <Link
              href="/causes"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 border-2 border-white/30 text-white text-lg font-bold hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              View Our Causes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
