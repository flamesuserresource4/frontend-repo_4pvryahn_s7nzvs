import React from 'react'

const members = [
  { name: 'Victor', role: 'Research Lead', blurb: 'Synthesizes scientific sources and verifies facts.' },
  { name: 'Harry', role: 'Visual Designer', blurb: 'Shapes the visual language and diagrams.' },
  { name: 'Phone Pyae Thurain', role: 'Project Manager', blurb: 'Coordinates deliverables and timelines.' },
  { name: 'Paing Thiha Win', role: 'Technical Lead', blurb: 'Leads implementation and tooling.' },
  { name: 'Xeo', role: 'Content Strategist', blurb: 'Designs the information architecture and style.' },
]

export default function Team() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Team Members</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {members.map((m) => (
          <div key={m.name} className="rounded-xl border border-amber-400/20 p-4 bg-slate-900/40 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 text-slate-900 font-black flex items-center justify-center">{m.name.split(' ').map(p=>p[0]).join('').slice(0,2)}</div>
            <div className="mt-3 font-semibold">{m.name}</div>
            <div className="text-amber-300 text-sm">{m.role}</div>
            <div className="text-slate-300 text-sm mt-1">{m.blurb}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
