import React from 'react'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-slate-900 to-stone-900 text-slate-100">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
      <footer className="border-t border-amber-400/20 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center gap-3 md:gap-6 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center font-black text-slate-900">G5</div>
            <div className="text-sm text-slate-300">Fall 2025 | Earth Science Module</div>
          </div>
          <div className="text-sm text-slate-400">© Group 5 — Tectonic Plates: The 1st Edition</div>
        </div>
      </footer>
    </div>
  )
}
