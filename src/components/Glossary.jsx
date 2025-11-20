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
  { term: 'Benioff zone', def: 'A dipping zone of earthquake foci tracing a subducting plate into the mantle.' },
  { term: 'Accretionary prism', def: 'Sediments scraped off at a subduction trench and piled onto the overriding plate.' },
  { term: 'Back‑arc basin', def: 'A sea or basin that forms behind a volcanic arc due to extension above a subduction zone.' },
  { term: 'Orogeny', def: 'A mountain‑building event, commonly at convergent plate boundaries (e.g., Himalaya).' },
  { term: 'Isostasy', def: 'Gravitational equilibrium of Earth’s crust floating on the mantle; explains uplift and subsidence.' },
  { term: 'Paleomagnetism', def: 'Record of Earth’s magnetic field in rocks; key evidence for seafloor spreading.' },
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
