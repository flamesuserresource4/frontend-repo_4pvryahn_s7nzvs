import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import PlatePage from './components/PlatePage'
import Glossary from './components/Glossary'
import Quiz from './components/Quiz'
import Team from './components/Team'
import Resources from './components/Resources'

const plateData = {
  pacific: {
    name: 'Pacific Plate',
    description: 'Earth’s largest plate, underlying the Pacific Ocean. It features the Ring of Fire with intense volcanic and earthquake activity along its margins.',
    image: 'https://images.unsplash.com/photo-1722286031687-bf1aac49eb6b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbmRvJUUyJTgwJTkxQXVzdHJhbGlhbiUyMFBsYXRlfGVufDB8MHx8fDE3NjM1NjkyOTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    facts: [
      'Covers roughly one-third of Earth’s surface.',
      'Bordered by numerous subduction zones forming the Ring of Fire.',
      'Moves northwest relative to the North American Plate.'
    ],
    events: [
      '2011 Tōhoku earthquake and tsunami (Japan).',
      '1960 Valdivia earthquake (Chile), the largest instrumentally recorded earthquake.'
    ]
  },
  eurasian: {
    name: 'Eurasian Plate',
    description: 'Spans Europe and much of Asia; collides with the Indian portion of the Indo‑Australian Plate forming the Himalayas.',
    image: 'https://images.unsplash.com/photo-1722286031687-bf1aac49eb6b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbmRvJUUyJTgwJTkxQXVzdHJhbGlhbiUyMFBsYXRlfGVufDB8MHx8fDE3NjM1NjkyOTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    facts: [
      'Hosts complex boundaries from the Atlantic to the Pacific.',
      'Includes both continental and oceanic crust segments.',
      'Active collision with Indian Plate uplifts the Himalayas.'
    ],
    events: [
      'Historic earthquakes in Turkey and Iran along the Alpine–Himalayan belt.',
      'Ongoing uplift of the Tibetan Plateau.'
    ]
  },
  'north-american': {
    name: 'North American Plate',
    description: 'Extends across North America and parts of the Atlantic seafloor; interacts with the Pacific Plate along the San Andreas Fault.',
    image: 'https://images.unsplash.com/photo-1722286031687-bf1aac49eb6b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbmRvJUUyJTgwJTkxQXVzdHJhbGlhbiUyMFBsYXRlfGVufDB8MHx8fDE3NjM1NjkyOTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    facts: [
      'Transform boundary with the Pacific Plate (San Andreas Fault).',
      'Divergent boundary with Eurasian Plate at the Mid‑Atlantic Ridge.',
      'Includes the Caribbean and Juan de Fuca interactions along its margins.'
    ],
    events: [
      '1906 San Francisco earthquake.',
      '2020 Puerto Rico earthquake sequence.'
    ]
  },
  african: {
    name: 'African Plate',
    description: 'Covers Africa and surrounding oceanic crust; features the East African Rift where the continent is slowly splitting.',
    image: 'https://images.unsplash.com/photo-1722286031687-bf1aac49eb6b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbmRvJUUyJTgwJTkxQXVzdHJhbGlhbiUyMFBsYXRlfGVufDB8MHx8fDE3NjM1NjkyOTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    facts: [
      'Hosts the East African Rift System (divergent).',
      'Convergent boundaries with Eurasian Plate forming the Mediterranean orogens.',
      'Includes hotspots such as the Canary and Réunion.'
    ],
    events: [
      'Historic Mediterranean quakes (e.g., 1908 Messina).',
      'Volcanism along the East African Rift (Nyiragongo, Erta Ale).'
    ]
  },
  'indo-australian': {
    name: 'Indo‑Australian Plate',
    description: 'A major plate comprising the Indian and Australian segments; collision with Eurasia raised the Himalayas and Tibetan Plateau.',
    image: 'https://images.unsplash.com/photo-1722286031687-bf1aac49eb6b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbmRvJUUyJTgwJTkxQXVzdHJhbGlhbiUyMFBsYXRlfGVufDB8MHx8fDE3NjM1NjkyOTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    facts: [
      'Subduction along the Sunda Trench near Indonesia.',
      'Hosts powerful megathrust earthquakes.',
      'Moves generally northward relative to Eurasia.'
    ],
    events: [
      '2004 Indian Ocean earthquake and tsunami.',
      '2015 Nepal earthquake (Gorkha).'
    ]
  },
  antarctic: {
    name: 'Antarctic Plate',
    description: 'Centered on Antarctica and surrounded by mid‑ocean ridges; one of the most stable plates, moving slowly outward from the continent.',
    image: 'https://images.unsplash.com/photo-1722286031687-bf1aac49eb6b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbmRvJUUyJTgwJTkxQXVzdHJhbGlhbiUyMFBsYXRlfGVufDB8MHx8fDE3NjM1NjkyOTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    facts: [
      'Encircled by spreading centers (divergent boundaries).',
      'Interacts with the Scotia and South American Plates in the south Atlantic.',
      'Cold climate limits on‑land erosion compared with other continents.'
    ],
    events: [
      'Frequent small to moderate offshore earthquakes.',
      'Volcanic activity at Mount Erebus (Ross Island).'
    ]
  }
}

function HomePage() {
  return (
    <Layout>
      <div className="space-y-8">
        <Hero />
        <section className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-amber-400/20 p-4 bg-slate-900/40">
            <h3 className="font-semibold text-amber-300">What are tectonic plates?</h3>
            <p className="text-sm text-slate-300 mt-1">Earth’s lithosphere is broken into moving slabs called tectonic plates. Driven by heat within the planet, these plates interact at boundaries to build mountains, open oceans, and trigger earthquakes and volcanoes.</p>
          </div>
          <div className="rounded-xl border border-amber-400/20 p-4 bg-slate-900/40">
            <h3 className="font-semibold text-amber-300">Why they matter</h3>
            <p className="text-sm text-slate-300 mt-1">Plate tectonics explains the distribution of continents, ocean basins, and many natural hazards. Understanding plates helps us prepare for risks and appreciate Earth’s dynamic nature.</p>
          </div>
          <div className="rounded-xl border border-amber-400/20 p-4 bg-slate-900/40">
            <h3 className="font-semibold text-amber-300">Explore the site</h3>
            <p className="text-sm text-slate-300 mt-1">Browse major plates, open the glossary for quick definitions, test yourself with the quiz, and meet the team behind this edition.</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

function PlateRoute({ id }) {
  const data = plateData[id]
  return (
    <Layout>
      <PlatePage {...data} />
    </Layout>
  )
}

function GlossaryPage() {
  return (
    <Layout>
      <Glossary />
    </Layout>
  )
}

function QuizPage() {
  return (
    <Layout>
      <Quiz />
    </Layout>
  )
}

function TeamPage() {
  return (
    <Layout>
      <Team />
    </Layout>
  )
}

function ResourcesPage() {
  return (
    <Layout>
      <Resources />
    </Layout>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plates/pacific" element={<PlateRoute id="pacific" />} />
      <Route path="/plates/eurasian" element={<PlateRoute id="eurasian" />} />
      <Route path="/plates/north-american" element={<PlateRoute id="north-american" />} />
      <Route path="/plates/african" element={<PlateRoute id="african" />} />
      <Route path="/plates/indo-australian" element={<PlateRoute id="indo-australian" />} />
      <Route path="/plates/antarctic" element={<PlateRoute id="antarctic" />} />
      <Route path="/glossary" element={<GlossaryPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
    </Routes>
  )
}
