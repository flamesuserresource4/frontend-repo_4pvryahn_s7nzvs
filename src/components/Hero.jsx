import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative rounded-2xl overflow-hidden border border-amber-400/20 bg-slate-900/40">
      <div className="grid md:grid-cols-2">
        <div className="p-6 md:p-10 flex flex-col justify-center gap-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
            Tectonic Plates: The 1st Edition
          </h1>
          <p className="text-amber-300 font-medium">Geological Journeys Through Earth’s Crust.</p>
          <p className="text-slate-300 max-w-prose">
            An interactive, student‑friendly encyclopedia dedicated to Earth’s moving plates. Explore major plates, discover key terms, and test your knowledge with a quiz.
          </p>
        </div>
        <div className="h-[320px] md:h-[420px] lg:h-[520px]">
          <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-yellow-500/0 via-amber-300/10 to-transparent" />
    </section>
  )
}
