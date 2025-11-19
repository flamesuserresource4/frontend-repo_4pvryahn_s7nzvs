import React from 'react'

export default function PlatePage({ name, description, facts, events, image }) {
  return (
    <article className="space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>{name}</h2>
          <p className="text-slate-300 max-w-3xl">{description}</p>
        </div>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <img src={image} alt={`${name} map`} className="w-full rounded-xl border border-amber-400/20" />
        </div>
        <div className="space-y-4">
          <section className="rounded-xl border border-amber-400/20 p-4 bg-slate-900/40">
            <h3 className="font-semibold text-amber-300">Key Facts</h3>
            <ul className="list-disc list-inside text-slate-200 text-sm mt-2 space-y-1">
              {facts.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </section>
          <section className="rounded-xl border border-amber-400/20 p-4 bg-slate-900/40">
            <h3 className="font-semibold text-amber-300">Notable Events</h3>
            <ul className="list-disc list-inside text-slate-200 text-sm mt-2 space-y-1">
              {events.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </section>
        </div>
      </div>
    </article>
  )
}
