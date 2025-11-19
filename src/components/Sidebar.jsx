import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, BookOpen, Home, Globe2, BookMarked, HelpCircle, Users, Link as LinkIcon } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/plates/pacific', label: 'Pacific Plate', icon: Globe2 },
  { to: '/plates/eurasian', label: 'Eurasian Plate', icon: Globe2 },
  { to: '/plates/north-american', label: 'North American Plate', icon: Globe2 },
  { to: '/plates/african', label: 'African Plate', icon: Globe2 },
  { to: '/plates/indo-australian', label: 'Indo‑Australian Plate', icon: Globe2 },
  { to: '/plates/antarctic', label: 'Antarctic Plate', icon: Globe2 },
  { to: '/glossary', label: 'Glossary', icon: BookOpen },
  { to: '/quiz', label: 'Quiz', icon: HelpCircle },
  { to: '/team', label: 'Team', icon: Users },
  { to: '/resources', label: 'Resources', icon: LinkIcon },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <aside className="bg-slate-900/90 text-slate-100 border-r border-amber-400/20 md:w-72 w-full md:h-screen md:sticky md:top-0 z-40">
      <div className="flex items-center justify-between px-4 py-4 border-b border-amber-400/20 md:py-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center font-black text-slate-900 shadow-lg">G5</div>
          <div className="leading-tight">
            <div className="text-sm uppercase tracking-widest text-amber-300 font-semibold">The 1st Edition</div>
            <div className="font-bold text-lg" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Tectonic Plates</div>
          </div>
        </Link>
        <button className="md:hidden p-2 rounded hover:bg-white/5" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <nav className={`md:block ${open ? 'block' : 'hidden'} md:pt-4`}>
        <ul className="px-2 py-2 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = location.pathname === item.to
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${active ? 'bg-amber-500/20 text-amber-300' : 'hover:bg-white/5 text-slate-200'}`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="hidden md:block mt-auto p-4 text-xs text-slate-400">
        <div className="rounded-lg bg-white/5 p-3">
          <div>Fall 2025 | Earth Science Module</div>
        </div>
      </div>
    </aside>
  )
}
