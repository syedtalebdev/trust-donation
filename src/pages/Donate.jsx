import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

const CAUSES = [
  { id: 'education', label: 'Education for All', icon: '📚', color: 'from-blue-500 to-indigo-600' },
  { id: 'water', label: 'Clean Water', icon: '💧', color: 'from-cyan-500 to-teal-600' },
  { id: 'medical', label: 'Medical Relief', icon: '🏥', color: 'from-rose-500 to-pink-600' },
  { id: 'food', label: 'Food Security', icon: '🌾', color: 'from-amber-500 to-orange-600' },
  { id: 'disaster', label: 'Disaster Relief', icon: '🆘', color: 'from-red-500 to-rose-600' },
  { id: 'women', label: 'Women Empowerment', icon: '💪', color: 'from-purple-500 to-violet-600' },
]

const AMOUNTS = [100, 500, 1000, 2500, 5000, 10000]

const PAYMENT_METHODS = [
  { id: 'upi', label: 'UPI', icon: '📱' },
  { id: 'card', label: 'Card', icon: '💳' },
  { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
  { id: 'wallet', label: 'Wallet', icon: '👛' },
]

export default function Donate() {
  const { isDark } = useTheme()
  const [step, setStep] = useState(1)
  const [cause, setCause] = useState('education')
  const [amount, setAmount] = useState(1000)
  const [customAmount, setCustomAmount] = useState('')
  const [isMonthly, setIsMonthly] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('upi')
  const [donorInfo, setDonorInfo] = useState({ name: '', email: '', phone: '', pan: '' })
  const [submitted, setSubmitted] = useState(false)

  const finalAmount = customAmount ? parseInt(customAmount) || 0 : amount
  const selectedCause = CAUSES.find(c => c.id === cause)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`min-h-screen pt-24 pb-16 flex items-center justify-center ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className={`max-w-md w-full mx-4 p-10 rounded-3xl border text-center ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100 shadow-xl'}`}>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h2 className={`text-3xl font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Thank You! 🎉</h2>
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
                ['Reference', `HF${Date.now().toString().slice(-8)}`],
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
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold hover:opacity-90 transition-opacity"
            >
              Donate Again
            </button>
            <Link to="/causes" className={`w-full py-3 rounded-xl text-center font-semibold border transition-colors ${isDark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
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
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${isDark ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-700'}`}>
            Make a Difference
          </span>
          <h1 className={`text-4xl sm:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Donate with
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent"> Purpose</span>
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
                        ? 'bg-gradient-to-br from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-500/30'
                        : isDark
                        ? 'bg-gray-800 text-gray-500'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {step > s ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                      </svg>
                    ) : s}
                  </div>
                  <div className={`text-xs mt-1.5 font-medium hidden sm:block ${step === s ? (isDark ? 'text-orange-400' : 'text-orange-600') : (isDark ? 'text-gray-500' : 'text-gray-400')}`}>
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

          {/* Step 1 — Choose Cause */}
          {step === 1 && (
            <div className="p-8 sm:p-10">
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Choose a Cause</h2>
              <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Select the cause closest to your heart.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {CAUSES.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setCause(c.id)}
                    className={`relative p-5 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-105 ${
                      cause === c.id
                        ? 'border-orange-500 bg-orange-500/5'
                        : isDark
                        ? 'border-gray-700 hover:border-gray-600'
                        : 'border-gray-100 hover:border-gray-200 bg-gray-50'
                    }`}
                  >
                    {cause === c.id && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    )}
                    <div className="text-3xl mb-3">{c.icon}</div>
                    <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{c.label}</div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-lg hover:opacity-90 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
              >
                Continue →
              </button>
            </div>
          )}

          {/* Step 2 — Select Amount */}
          {step === 2 && (
            <div className="p-8 sm:p-10">
              <button onClick={() => setStep(1)} className={`flex items-center gap-2 text-sm mb-6 hover:text-orange-500 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
                Back
              </button>
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Select Amount</h2>
              <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Donating to: <span className={`font-semibold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>{selectedCause?.icon} {selectedCause?.label}</span>
              </p>

              {/* Frequency toggle */}
              <div className={`inline-flex p-1.5 rounded-xl mb-6 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                {[{ label: 'One-time', value: false }, { label: 'Monthly', value: true }].map(({ label, value }) => (
                  <button
                    key={label}
                    onClick={() => setIsMonthly(value)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isMonthly === value
                        ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md'
                        : isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
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
                    className={`py-3.5 rounded-xl text-sm font-bold border-2 transition-all duration-200 hover:scale-105 ${
                      amount === a && !customAmount
                        ? 'border-orange-500 bg-orange-500/10 text-orange-500'
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
                  className={`w-full pl-9 pr-4 py-4 rounded-xl border-2 text-lg font-bold transition-colors focus:outline-none focus:border-orange-500 ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-600'
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-300'
                  } ${customAmount ? 'border-orange-500' : ''}`}
                />
              </div>

              {/* Payment Methods */}
              <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Payment Method</h3>
              <div className="grid grid-cols-4 gap-3 mb-8">
                {PAYMENT_METHODS.map(pm => (
                  <button
                    key={pm.id}
                    onClick={() => setPaymentMethod(pm.id)}
                    className={`py-3 rounded-xl border-2 flex flex-col items-center gap-1.5 text-xs font-semibold transition-all duration-200 ${
                      paymentMethod === pm.id
                        ? 'border-orange-500 bg-orange-500/10 text-orange-500'
                        : isDark
                        ? 'border-gray-700 text-gray-400 hover:border-gray-600'
                        : 'border-gray-100 text-gray-500 bg-gray-50 hover:border-gray-200'
                    }`}
                  >
                    <span className="text-xl">{pm.icon}</span>
                    {pm.label}
                  </button>
                ))}
              </div>

              <div className={`flex items-center justify-between p-4 rounded-xl mb-6 ${isDark ? 'bg-gray-800' : 'bg-orange-50'}`}>
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total donation</span>
                <span className={`text-2xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  ₹{finalAmount.toLocaleString()}{isMonthly ? '/mo' : ''}
                </span>
              </div>

              <button
                onClick={() => setStep(3)}
                disabled={finalAmount < 10}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-lg hover:opacity-90 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue →
              </button>
            </div>
          )}

          {/* Step 3 — Donor Details */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="p-8 sm:p-10">
              <button onClick={() => setStep(2)} type="button" className={`flex items-center gap-2 text-sm mb-6 hover:text-orange-500 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
                Back
              </button>
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Your Details</h2>
              <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Your information is encrypted and secure.</p>

              <div className="space-y-5">
                {[
                  { key: 'name', label: 'Full Name', placeholder: 'Rahul Sharma', type: 'text', required: true },
                  { key: 'email', label: 'Email Address', placeholder: 'rahul@email.com', type: 'email', required: true },
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
                      className={`w-full px-4 py-3.5 rounded-xl border-2 transition-colors focus:outline-none focus:border-orange-500 ${
                        isDark
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-600'
                          : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className={`mt-8 p-5 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Donation Summary</div>
                <div className="space-y-2.5">
                  {[
                    ['Cause', `${selectedCause?.icon} ${selectedCause?.label}`],
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
                    <span className="text-orange-500">₹{finalAmount.toLocaleString()}{isMonthly ? '/mo' : ''}</span>
                  </div>
                </div>
              </div>

              <p className={`mt-4 text-xs text-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                🔒 Secured by 256-bit SSL encryption. Your payment details are never stored.
              </p>

              <button
                type="submit"
                className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-lg hover:opacity-90 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
                </svg>
                Complete Donation — ₹{finalAmount.toLocaleString()}
              </button>
            </form>
          )}
        </div>

        {/* Trust badges row */}
        <div className={`mt-8 flex flex-wrap justify-center gap-6 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          {['🔒 SSL Secured', '✅ 80G Certified', '🏛️ FCRA Approved', '⭐ GuideStar Verified'].map(b => (
            <span key={b} className="text-sm">{b}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
