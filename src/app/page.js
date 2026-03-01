'use client'

import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import CountUp from '@/components/CountUp'
import {
  Heart, BookOpen, Droplets, HeartPulse,
  ArrowRight, Search, DollarSign, BarChart2,
  Shield, BadgeCheck, Lock, CheckCircle,
  Star
} from 'lucide-react'

const CAUSE_ICONS = { BookOpen, Droplets, HeartPulse }

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
    icon: 'BookOpen',
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
    icon: 'Droplets',
  },
  {
    id: 3,
    title: 'Medical Relief Fund',
    description: 'Supplying medicines and medical equipment to rural healthcare centres.',
    raised: 203800,
    goal: 300000,
    supporters: 3241,
    category: 'Healthcare',
    gradient: 'from-emerald-500 to-green-600',
    icon: 'HeartPulse',
  },
]

const testimonials = [
  {
    name: 'Ahmed Khan',
    role: 'Monthly Donor',
    text: 'Dawat-e-Islam has completely changed how I think about giving. I can see exactly where my money goes and the impact it creates. Truly remarkable.',
    avatar: 'AK',
    rating: 5,
  },
  {
    name: 'Fatima Sheikh',
    role: 'Corporate Sponsor',
    text: 'Our company has partnered with Dawat-e-Islam for 3 years. Their transparency and commitment to real impact is unmatched in the NGO space.',
    avatar: 'FS',
    rating: 5,
  },
  {
    name: 'Aisha Rahman',
    role: 'Volunteer & Donor',
    text: 'From donating to volunteering — Dawat-e-Islam makes it seamless to be part of something larger than yourself. Highly recommended!',
    avatar: 'AR',
    rating: 5,
  },
]

export default function Home() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border ${
            isDark ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-green-50 border-green-200 text-green-700'
          }`}>
            <span className="inline-flex rounded-full h-2 w-2 bg-green-600"></span>
            Trusted by 50,000+ donors worldwide
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
            Dawat-e-Islam
            <span className="block mt-2 bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 bg-clip-text text-transparent">
              Serving Humanity for the Sake of Allah
            </span>
          </h1>

          <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Join our community of changemakers. Every rupee donated goes directly to verified causes — education, healthcare, clean water, and more. 100% transparent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg font-bold shadow-2xl shadow-green-600/30 hover:shadow-green-600/50 transition-all duration-200"
            >
              <Heart className="w-5 h-5" fill="currentColor" />
              Donate Now
            </Link>
            <Link
              href="/causes"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-lg font-bold border-2 transition-all duration-300 hover:scale-105 ${
                isDark ? 'border-gray-700 text-gray-300 hover:border-green-600 hover:text-green-400' : 'border-gray-200 text-gray-700 hover:border-green-600 hover:text-green-700'
              }`}
            >
              Explore Causes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className={`mt-16 flex flex-wrap justify-center gap-6 sm:gap-10 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {[
              { label: 'Verified NGO', Icon: BadgeCheck },
              { label: '80G Tax Benefits', Icon: CheckCircle },
              { label: 'Secure Payments', Icon: Lock },
              { label: 'Zero Admin Fee', Icon: Shield },
            ].map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-2 text-sm">
                <Icon className="w-4 h-4 text-emerald-500" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 52400, suffix: '+', label: 'Happy Donors', color: 'text-green-600', Icon: Heart },
              { value: 184, suffix: '+', label: 'Projects Funded', color: 'text-emerald-600', Icon: BarChart2 },
              { value: 12, suffix: 'M+', label: 'Rupees Raised', color: 'text-green-500', Icon: DollarSign },
              { value: 98, suffix: '%', label: 'Funds to Causes', color: 'text-emerald-500', Icon: CheckCircle },
            ].map(({ value, suffix, label, color, Icon }) => (
              <div
                key={label}
                className={`relative text-center p-8 rounded-2xl border transition-transform hover:scale-105 ${
                  isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
                }`}
              >
                <div className={`flex justify-center mb-3 ${color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className={`text-4xl sm:text-5xl font-black mb-2 ${color}`}>
                  <CountUp end={value} suffix={suffix} />
                </div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CAUSES */}
      <section className={`py-24 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'
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
              const Icon = CAUSE_ICONS[cause.icon] || Heart
              return (
                <div
                  key={cause.id}
                  className={`group rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl ${
                    isDark ? 'bg-gray-900 border-gray-800 hover:border-green-600/30 hover:shadow-green-600/10' : 'bg-white border-gray-100 hover:shadow-gray-200'
                  }`}
                >
                  <div className={`relative h-48 bg-gradient-to-br ${cause.gradient} flex items-center justify-center overflow-hidden`}>
                    <Icon className="w-20 h-20 text-white/80" />
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
                      href="/donate"
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
              href="/causes"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold border-2 transition-all duration-300 hover:scale-105 ${
                isDark ? 'border-gray-700 text-gray-300 hover:border-green-600 hover:text-green-400' : 'border-gray-200 text-gray-700 hover:border-green-600 hover:text-green-700'
              }`}
            >
              View All Causes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'
            }`}>Simple Process</span>
            <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              How It Works
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Donating with Dawat-e-Islam is quick, secure, and completely transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className={`hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 ${isDark ? 'bg-gradient-to-r from-green-600/30 via-emerald-500/30 to-green-600/30' : 'bg-gradient-to-r from-green-200 via-emerald-200 to-green-200'}`}></div>

            {[
              { step: '01', title: 'Choose a Cause', desc: 'Browse verified campaigns and pick one that resonates with you.', Icon: Search },
              { step: '02', title: 'Set Your Amount', desc: 'Choose any amount — even ₹50 makes a real difference.', Icon: DollarSign },
              { step: '03', title: 'Donate Securely', desc: 'Pay via UPI, card, net banking, or wallets. Fully encrypted.', Icon: Lock },
              { step: '04', title: 'Track Impact', desc: 'Get real-time updates and see exactly how your gift helps.', Icon: BarChart2 },
            ].map(({ step, title, desc, Icon }) => (
              <div key={step} className="relative text-center group">
                <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 mx-auto transition-transform duration-300 group-hover:scale-110 ${
                  isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100 shadow-md'
                }`}>
                  <Icon className={`w-8 h-8 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white text-xs font-black flex items-center justify-center">
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

      {/* TESTIMONIALS */}
      <section className={`py-24 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'
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
                  isDark ? 'bg-gray-900 border-gray-800 hover:border-green-600/20' : 'bg-gray-50 border-gray-100 hover:border-green-100'
                }`}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <p className={`text-base leading-relaxed mb-6 italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white text-sm font-bold">
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

      {/* CTA BANNER */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-emerald-600"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-white/80" fill="currentColor" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Change a Life Today?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Your donation, no matter how small, creates a real impact in someone's life. Join 52,000+ donors who are making the world better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-green-700 text-lg font-bold hover:bg-green-50 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Start Donating
            </Link>
            <Link
              href="/about"
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
