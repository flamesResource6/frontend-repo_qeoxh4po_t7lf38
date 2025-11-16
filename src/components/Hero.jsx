import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.35),rgba(139,92,246,0.25)_40%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300 drop-shadow-xl"
        >
          Reliable, modern electrical solutions for homes and businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-200/90"
        >
          Licensed electricians delivering clean work, fast service, and safety-first installations. 24/7 emergency support across your city.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
          <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Get a free quote
          </a>
          <a href="#services" className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
            Explore services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left"
        >
          {[
            ['24/7 Emergency', 'Rapid on-site support'],
            ['Licensed & Insured', 'Fully certified team'],
            ['Upfront Pricing', 'No hidden costs'],
            ['5-Star Rated', 'Trusted by neighbors'],
          ].map(([title, subtitle]) => (
            <div key={title} className="rounded-xl bg-white/5 p-4 backdrop-blur border border-white/10">
              <p className="text-sm text-slate-300">{subtitle}</p>
              <p className="mt-1 font-semibold">{title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
