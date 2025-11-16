import React from 'react'
import { Phone, MessageSquare } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Need an electrician you can trust?</h2>
            <p className="mt-4 text-slate-300">Share a few details and we’ll respond fast with a fair quote and availability.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition">
                <Phone size={18} /> Call 123-456-7890
              </a>
              <a href="mailto:hello@voltpro.example" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                <MessageSquare size={18} /> Email Us
              </a>
            </div>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input type="text" className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Phone</label>
                <input type="tel" className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(555) 123-4567" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Service Needed</label>
                <input type="text" className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Panel upgrade, EV charger, lighting..." />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Details</label>
                <textarea rows="4" className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us more about your project" />
              </div>
            </div>
            <button type="button" className="mt-6 w-full rounded-md bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold shadow-lg hover:from-blue-700 hover:to-violet-700 transition">Request a quote</button>
            <p className="mt-2 text-xs text-slate-400">By clicking, you agree to be contacted about your request.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
