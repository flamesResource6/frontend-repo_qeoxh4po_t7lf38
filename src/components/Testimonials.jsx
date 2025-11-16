import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Samantha R.',
    role: 'Homeowner',
    quote: 'Fast, polite, and super clean work. Installed our EV charger the same day!',
  },
  {
    name: 'Michael T.',
    role: 'Restaurant Owner',
    quote: 'They handled our panel upgrade and emergency lighting without downtime. Highly recommend.',
  },
  {
    name: 'Priya K.',
    role: 'Property Manager',
    quote: 'Professional team. Transparent pricing and they explained everything clearly.',
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What clients say</h2>
          <p className="mt-3 text-slate-600">Real projects, real results.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <Stars />
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-slate-900">{t.name}</p>
              <p className="text-sm text-slate-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
