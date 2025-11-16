import React from 'react'
import { Wrench, ShieldCheck, House, Building, Bolt, Cpu } from 'lucide-react'

const services = [
  {
    icon: <Bolt className="h-6 w-6" />, 
    title: 'Electrical Repairs', 
    desc: 'Troubleshooting, outlets, breakers, lighting, and code corrections.'
  },
  {
    icon: <House className="h-6 w-6" />, 
    title: 'Residential Upgrades', 
    desc: 'Panel upgrades, EV chargers, smart home wiring, and renovations.'
  },
  {
    icon: <Building className="h-6 w-6" />, 
    title: 'Commercial Projects', 
    desc: 'Tenant improvements, emergency lighting, and maintenance.'
  },
  {
    icon: <Cpu className="h-6 w-6" />, 
    title: 'Smart Systems', 
    desc: 'Wi‑Fi, surveillance, access control, and low‑voltage cabling.'
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />, 
    title: 'Safety Inspections', 
    desc: 'Pre‑purchase inspections and compliance reports.'
  },
  {
    icon: <Wrench className="h-6 w-6" />, 
    title: 'Custom Installs', 
    desc: 'Custom lighting, landscape power, generators, and more.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Professional Services</h2>
          <p className="mt-3 text-slate-600">Modern solutions powered by experience and attention to detail.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-blue-600 to-violet-600 text-white grid place-items-center">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
