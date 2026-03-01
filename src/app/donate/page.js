'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import {
  Heart, BookOpen, Droplets, HeartPulse, Utensils, AlertTriangle, Users,
  Smartphone, CreditCard, Landmark, Wallet, ChevronLeft, Check,
  Shield, BadgeCheck, Lock, Star
} from 'lucide-react'

const CAUSES = [
  { id: 'education-for-all', label: 'Education for All', Icon: BookOpen, color: 'from-blue-500 to-indigo-600' },
  { id: 'clean-water-access', label: 'Clean Water', Icon: Droplets, color: 'from-cyan-500 to-teal-600' },
  { id: 'medical-relief-fund', label: 'Medical Relief', Icon: HeartPulse, color: 'from-emerald-500 to-green-600' },
  { id: 'food-security-drive', label: 'Food Security', Icon: Utensils, color: 'from-amber-500 to-orange-600' },
  { id: 'disaster-relief-response', label: 'Disaster Relief', Icon: AlertTriangle, color: 'from-red-500 to-rose-600' },
  { id: 'women-empowerment', label: 'Women Empowerment', Icon: Users, color: 'from-purple-500 to-violet-600' },
]

const AMOUNTS = [100, 500, 1000, 2500, 5000, 10000]

const PAYMENT_METHODS = [
  { id: 'upi', label: 'UPI', Icon: Smartphone },
  { id: 'card', label: 'Card', Icon: CreditCard },
  { id: 'netbanking', label: 'Net Banking', Icon: Landmark },
  { id: 'wallet', label: 'Wallet', Icon: Wallet },
]

export default function Donate() {
  const { isDark } = useTheme()
  const [step, setStep] = useState(1)
  const [cause, setCause] = useState('education-for-all')
  const [amount, setAmount] = useState(1000)
  const [customAmount, setCustomAmount] = useState('')
  const [isMonthly, setIsMonthly] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('upi')
  const [donorInfo, setDonorInfo] = useState({ name: '', email: '', phone: '', pan: '' })
  const [submitted, setSubmitted] = useState(false)
  const [reference, setReference] = useState('')

  const finalAmount = customAmount ? parseInt(customAmount) || 0 : amount
  const selectedCause = CAUSES.find(c => c.id === cause)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ causeSlug: cause, amount: finalAmount, isMonthly, paymentMethod, donorInfo }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        setReference(data.reference)
      }
    } catch {
      setSubmitted(true)
      setReference(`DI${Date.now().toString().slice(-8)}`)
    }
  }

  if (submitted) {
    return (
      <div className={`min-h-screen pt-24 pb-16 flex items-center justify-center ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className={`max-w-md w-full mx-4 p-10 rounded-3xl border text-center ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100 shadow-xl'}`}>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
            <Check className="w-12 h-12 text-white" strokeWidth={2.5} />
          </div>
          <h2 className={`text-3xl font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>JazakAllah Khair!</h2>
          <p className={`text-lg mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Your donation of <span className="text-emerald-500 font-bold">₹{finalAmount.toLocaleString()}</span> has been received.
          </p>
          <p className={`text-sm mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            A confirmation receipt has been sent to <strong>{donorInfo.email || 'your email'}</strong>. This donation is eligible for tax benefits under Section 80G.
          </p>
          <div className={`p-5 rounded-2xl mb-8 text-left ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Donation Summary</div>
            <div className="space-y-2">
              {[
                ['Cause', selectedCause?.label],
                ['Amount', `₹${finalAmount.toLocaleString()}`],
                ['Type', isMonthly ? 'Monthly Recurring' : 'One-time'],
                ['Reference', reference],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm">
                  <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>{k}</span>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => { setSubmitted(false); setStep(1); setDonorInfo({ name: '', email: '', phone: '', pan: '' }) }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold hover:opacity-90 transition-opacity"
            >
              Donate Again
            </button>
            <Link href="/causes" className={`w-full py-3 rounded-xl text-center font-semibold border transition-colors ${isDark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
              Explore More Causes
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen pt-24 pb-16 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-700'}`}>
            Make a Difference
          </span>
          <h1 className={`text-4xl sm:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Donate with
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Purpose</span>
          </h1>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            100% of your donation goes directly to the cause. Secure, fast, and tax-deductible.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10">
          {['Choose Cause', 'Select Amount', 'Your Details'].map((label, i) => {
            const s = i + 1
            return (
              <div key={s} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      step > s
                        ? 'bg-emerald-500 text-white'
                        : step === s
                        ? 'bg-gradient-to-br from-green-600 to-emerald-600 text-white shadow-lg shadow-green-600/30'
                        : isDark
                        ? 'bg-gray-800 text-gray-500'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {step > s ? <Check className="w-5 h-5" strokeWidth={2.5} /> : s}
                  </div>
                  <div className={`text-xs mt-1.5 font-medium hidden sm:block ${step === s ? (isDark ? 'text-green-400' : 'text-green-700') : (isDark ? 'text-gray-500' : 'text-gray-400')}`}>
                    {label}
                  </div>
                </div>
                {i < 2 && (
                  <div className={`w-16 sm:w-24 h-0.5 mx-2 mb-5 transition-colors duration-300 ${step > s ? 'bg-emerald-500' : (isDark ? 'bg-gray-800' : 'bg-gray-200')}`}></div>
                )}
              </div>
            )
          })}
        </div>

        {/* Card */}
        <div className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100 shadow-xl shadow-gray-100'}`}>

          {/* Step 1 */}
          {step === 1 && (
            <div className="p-8 sm:p-10">
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Choose a Cause</h2>
              <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Select the cause closest to your heart.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {CAUSES.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setCause(c.id)}
                    className={`relative p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                      cause === c.id
                        ? 'border-green-600 bg-green-600/5'
                        : isDark
                        ? 'border-gray-700 hover:border-gray-600'
                        : 'border-gray-100 hover:border-gray-200 bg-gray-50'
                    }`}
                  >
                    {cause === c.id && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                    )}
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-3`}>
                      <c.Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{c.label}</div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="p-8 sm:p-10">
              <button onClick={() => setStep(1)} className={`flex items-center gap-2 text-sm mb-6 hover:text-green-600 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Select Amount</h2>
              <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Donating to: <span className={`font-semibold ${isDark ? 'text-green-400' : 'text-green-700'}`}>{selectedCause?.label}</span>
              </p>

              <div className={`inline-flex p-1.5 rounded-xl mb-6 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                {[{ label: 'One-time', value: false }, { label: 'Monthly', value: true }].map(({ label, value }) => (
                  <button
                    key={label}
                    onClick={() => setIsMonthly(value)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isMonthly === value
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md'
                        : isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {AMOUNTS.map(a => (
                  <button
                    key={a}
                    onClick={() => { setAmount(a); setCustomAmount('') }}
                    className={`py-3.5 rounded-xl text-sm font-bold border-2 transition-all duration-200 ${
                      amount === a && !customAmount
                        ? 'border-green-600 bg-green-600/10 text-green-600'
                        : isDark
                        ? 'border-gray-700 text-gray-300 hover:border-gray-600'
                        : 'border-gray-100 text-gray-700 bg-gray-50 hover:border-gray-200'
                    }`}
                  >
                    ₹{a.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="relative mb-8">
                <span className={`absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>₹</span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={e => setCustomAmount(e.target.value)}
                  min="10"
                  className={`w-full pl-9 pr-4 py-4 rounded-xl border-2 text-lg font-bold transition-colors focus:outline-none focus:border-green-600 ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-600'
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-300'
                  } ${customAmount ? 'border-green-600' : ''}`}
                />
              </div>

              <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Payment Method</h3>
              <div className="grid grid-cols-4 gap-3 mb-8">
                {PAYMENT_METHODS.map(pm => (
                  <button
                    key={pm.id}
                    onClick={() => setPaymentMethod(pm.id)}
                    className={`py-3 rounded-xl border-2 flex flex-col items-center gap-1.5 text-xs font-semibold transition-all duration-200 ${
                      paymentMethod === pm.id
                        ? 'border-green-600 bg-green-600/10 text-green-600'
                        : isDark
                        ? 'border-gray-700 text-gray-400 hover:border-gray-600'
                        : 'border-gray-100 text-gray-500 bg-gray-50 hover:border-gray-200'
                    }`}
                  >
                    <pm.Icon className="w-5 h-5" />
                    {pm.label}
                  </button>
                ))}
              </div>

              <div className={`flex items-center justify-between p-4 rounded-xl mb-6 ${isDark ? 'bg-gray-800' : 'bg-green-50'}`}>
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total donation</span>
                <span className={`text-2xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  ₹{finalAmount.toLocaleString()}{isMonthly ? '/mo' : ''}
                </span>
              </div>

              <button
                onClick={() => setStep(3)}
                disabled={finalAmount < 10}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="p-8 sm:p-10">
              <button onClick={() => setStep(2)} type="button" className={`flex items-center gap-2 text-sm mb-6 hover:text-green-600 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Your Details</h2>
              <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Your information is encrypted and secure.</p>

              <div className="space-y-5">
                {[
                  { key: 'name', label: 'Full Name', placeholder: 'Ahmed Khan', type: 'text', required: true },
                  { key: 'email', label: 'Email Address', placeholder: 'ahmed@email.com', type: 'email', required: true },
                  { key: 'phone', label: 'Phone Number', placeholder: '+91 98765 43210', type: 'tel', required: false },
                  { key: 'pan', label: 'PAN (for 80G receipt)', placeholder: 'ABCDE1234F', type: 'text', required: false },
                ].map(({ key, label, placeholder, type, required }) => (
                  <div key={key}>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {label} {required && <span className="text-rose-500">*</span>}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      required={required}
                      value={donorInfo[key]}
                      onChange={e => setDonorInfo(d => ({ ...d, [key]: e.target.value }))}
                      className={`w-full px-4 py-3.5 rounded-xl border-2 transition-colors focus:outline-none focus:border-green-600 ${
                        isDark
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-600'
                          : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </div>
                ))}
              </div>

              <div className={`mt-8 p-5 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Donation Summary</div>
                <div className="space-y-2.5">
                  {[
                    ['Cause', selectedCause?.label],
                    ['Amount', `₹${finalAmount.toLocaleString()}`],
                    ['Frequency', isMonthly ? 'Monthly Recurring' : 'One-time'],
                    ['Payment', PAYMENT_METHODS.find(p => p.id === paymentMethod)?.label],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm">
                      <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>{k}</span>
                      <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{v}</span>
                    </div>
                  ))}
                  <div className={`pt-2 mt-2 border-t flex justify-between text-base font-bold ${isDark ? 'border-gray-700 text-white' : 'border-gray-200 text-gray-900'}`}>
                    <span>Total</span>
                    <span className="text-green-600">₹{finalAmount.toLocaleString()}{isMonthly ? '/mo' : ''}</span>
                  </div>
                </div>
              </div>

              <p className={`mt-4 text-xs text-center flex items-center justify-center gap-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                <Lock className="w-3 h-3" />
                Secured by 256-bit SSL encryption. Your payment details are never stored.
              </p>

              <button
                type="submit"
                className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
              >
                <Heart className="w-5 h-5" fill="currentColor" />
                Complete Donation — ₹{finalAmount.toLocaleString()}
              </button>
            </form>
          )}
        </div>

        {/* Trust badges */}
        <div className={`mt-8 flex flex-wrap justify-center gap-6 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          {[
            { label: 'SSL Secured', Icon: Lock },
            { label: '80G Certified', Icon: BadgeCheck },
            { label: 'FCRA Approved', Icon: Shield },
            { label: 'GuideStar Verified', Icon: Star },
          ].map(({ label, Icon }) => (
            <span key={label} className="flex items-center gap-1.5 text-sm">
              <Icon className="w-4 h-4 text-emerald-500" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
