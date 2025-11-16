import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [canRenderSpline, setCanRenderSpline] = useState(false)
  const [splineError, setSplineError] = useState(null)
  const [SplineComp, setSplineComp] = useState(null)

  // Detect client + WebGL support and allow query param override (?no3d=1)
  useEffect(() => {
    try {
      const hasWindow = typeof window !== 'undefined'
      const params = hasWindow ? new URLSearchParams(window.location.search) : null
      const disable3D = params?.get('no3d') === '1'

      const hasWebGL = (() => {
        if (!hasWindow || disable3D) return false
        try {
          const canvas = document.createElement('canvas')
          return !!(
            canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
          )
        } catch (e) {
          return false
        }
      })()
      setCanRenderSpline(hasWindow && hasWebGL && !disable3D)
    } catch (e) {
      setCanRenderSpline(false)
    }
  }, [])

  // Lazy-load Spline only if it's safe to render
  useEffect(() => {
    let cancelled = false
    async function loadSpline() {
      if (!canRenderSpline) return
      try {
        const mod = await import('@splinetool/react-spline')
        if (!cancelled) {
          setSplineComp(() => mod.default)
        }
      } catch (err) {
        if (!cancelled) setSplineError(err?.message || 'Failed to load 3D component')
      }
    }
    loadSpline()
    return () => {
      cancelled = true
    }
  }, [canRenderSpline])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      {/* Visible debug ribbon so we know the page rendered */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/90 border border-white/20">
        {canRenderSpline ? 'Mode: 3D' : 'Mode: Fallback'}
      </div>

      {/* 3D Background (guarded + lazy-loaded) */}
      {canRenderSpline && SplineComp && !splineError ? (
        <div className="absolute inset-0">
          <SplineComp
            scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onError={(e) => setSplineError(e?.message || 'Failed to load 3D scene')}
          />
        </div>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.35),rgba(139,92,246,0.25)_40%,transparent_70%)]"
        />
      )}

      {/* Additional glow overlay */}
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

        {splineError && (
          <p className="mt-4 text-sm text-red-300/90">
            3D background couldn’t load: {splineError}. The site will still work.
          </p>
        )}

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
