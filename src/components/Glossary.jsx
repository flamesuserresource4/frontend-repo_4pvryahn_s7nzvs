import React from 'react'

const TERMS = [
  { term: 'Subduction', def: 'When one tectonic plate sinks beneath another into the mantle, creating deep ocean trenches and fueling volcanoes.' },
  { term: 'Rift zone', def: 'A region where plates move apart, causing the crust to thin and new crust to form, like along the Mid-Atlantic Ridge.' },
  { term: 'Transform fault', def: 'A boundary where plates slide past each other horizontally, often causing earthquakes (e.g., San Andreas Fault).' },
  { term: 'Lithosphere', def: 'The rigid outer layer of Earth, including the crust and the uppermost mantle; broken into tectonic plates.' },
  { term: 'Asthenosphere', def: 'A semi‑fluid layer in the upper mantle beneath the lithosphere, allowing plates to move.' },
  { term: 'Convergent boundary', def: 'Where plates move toward each other, causing subduction or mountain building.' },
  { term: 'Divergent boundary', def: 'Where plates move apart, forming new crust at mid‑ocean ridges.' },
  { term: 'Hotspot', def: 'A mantle plume that creates volcanic chains as a plate moves over it (e.g., Hawaiian Islands).' },
]

export default function Glossary() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Glossary</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {TERMS.map(({ term, def }) => (
          <div key={term} className="rounded-xl border border-amber-400/20 p-4 bg-slate-900/40">
            <div className="font-semibold text-amber-300">{term}</div>
            <div className="text-slate-200 text-sm mt-1">{def}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
