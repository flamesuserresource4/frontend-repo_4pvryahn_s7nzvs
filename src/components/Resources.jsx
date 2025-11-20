import React from 'react'

const links = [
  { title: 'USGS Plate Tectonics (Special thanks)', url: 'https://www.usgs.gov/educational-resources/plate-tectonics' },
  { title: 'NOAA Bathymetric Maps (Special thanks)', url: 'https://www.ncei.noaa.gov/maps/bathymetry/' },
  { title: 'UNAVCO Tectonic Motions', url: 'https://www.unavco.org' },
  { title: 'Wegener and Continental Drift', url: 'https://pubs.usgs.gov/gip/dynamic/continental.html' },
  { title: 'Hawaiian Hotspot Video', url: 'https://www.youtube.com/watch?v=1ZgKS4wMcCc' },
]

export default function Resources() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Resources</h2>
        <p className="text-slate-300">We extend our gratitude to institutions whose open resources support learning.</p>
      </div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.url}>
            <a href={l.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-lg border border-amber-400/20 p-3 bg-slate-900/40 hover:bg-white/5">
              <span className="text-slate-200 group-hover:text-amber-200">{l.title}</span>
              <span className="text-xs text-slate-400">↗</span>
            </a>
          </li>
        ))}
      </ul>

      <section className="rounded-xl border border-amber-400/20 p-4 bg-slate-900/40">
        <h3 className="font-semibold text-amber-300">Acknowledgements</h3>
        <p className="text-sm text-slate-300 mt-1">With thanks to Sayar Chit Academy and Teacher Zinminn Thein for guidance and inspiration. Special appreciation to USGS and NOAA for their exceptional public data and educational materials.</p>
      </section>
    </section>
  )
}
