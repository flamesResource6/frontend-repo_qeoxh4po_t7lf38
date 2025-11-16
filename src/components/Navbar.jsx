import React from 'react'
import { Menu, Phone, Zap } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-violet-500 grid place-items-center text-white shadow-md">
              <Zap size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-800 group-hover:text-slate-900">VoltPro Electric</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-slate-900 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:from-blue-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Phone size={16} /> Call Now
            </a>
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
