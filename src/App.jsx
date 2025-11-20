import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=1600&auto=format&fit=crop',
    facts: [
      'Covers roughly one-third of Earth’s surface and is predominantly oceanic crust.',
      'Bordered by numerous subduction zones forming the Ring of Fire (Aleutians, Japan, Tonga–Kermadec, Andes).',
      'Moves northwest relative to the North American Plate at centimeters per year, recorded by GPS.',
      'Hosts major transform faults like the Queen Charlotte and the San Andreas system (indirect interaction).',
      'Hotspots: Hawaiian–Emperor chain records a bend ~47 Ma indicating plate motion change.'
    ],
    events: [
      '2011 Tōhoku earthquake and tsunami (Japan).',
      '1960 Valdivia earthquake (Chile), the largest instrumentally recorded earthquake.',
      '1994 Kuril–Kamchatka and frequent megathrust events along subduction margins.'
    ]
  },
  eurasian: {
    name: 'Eurasian Plate',
    description: 'Spans Europe and much of Asia; collides with the Indian portion of the Indo‑Australian Plate forming the Himalayas.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
    facts: [
      'Hosts complex boundaries from the Atlantic to the Pacific, including collision and transform segments.',
      'Includes both continental and oceanic crust (e.g., parts of the North Atlantic seafloor).',
      'Active collision with Indian Plate uplifts the Himalayas and thickens the Tibetan Plateau.',
      'Alpine–Himalayan seismic belt stretches from the Mediterranean through the Middle East to SE Asia.',
      'Major rift systems include the Baikal Rift and back‑arc basins in the western Pacific.'
    ],
    events: [
      'Historic earthquakes in Türkiye, Iran, and the Mediterranean region.',
      'Ongoing uplift and crustal shortening across the Himalaya and Tibet.'
    ]
  },
  'north-american': {
    name: 'North American Plate',
    description: 'Extends across North America and parts of the Atlantic seafloor; interacts with the Pacific Plate along the San Andreas Fault.',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    facts: [
      'Transform boundary with the Pacific Plate (San Andreas Fault and related strands).',
      'Divergent boundary with Eurasian Plate at the Mid‑Atlantic Ridge; new oceanic crust forms.',
      'Subduction zones to the northwest (Cascadia) and interactions with microplates (Juan de Fuca).',
      'Intraplate hotspots such as Yellowstone influence volcanism and geothermal systems.',
      'Seismic zones include New Madrid and eastern Canada intraplate regions.'
    ],
    events: [
      '1906 San Francisco earthquake.',
      '1985–present Cascade subduction zone studies; episodic tremor and slip in the Pacific Northwest.',
      '2020 Puerto Rico earthquake sequence.'
    ]
  },
  african: {
    name: 'African Plate',
    description: 'Covers Africa and surrounding oceanic crust; features the East African Rift where the continent is slowly splitting.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop',
    facts: [
      'Hosts the East African Rift System (divergent) with rift valleys and active volcanoes (Nyiragongo, Erta Ale).',
      'Convergent boundaries with the Eurasian Plate forming the Mediterranean orogens and subduction.',
      'Includes hotspots such as the Canary, Réunion, and Afar plume influence.',
      'South Atlantic spreading separates Africa from South America along the Mid‑Atlantic Ridge.',
      'Complex microplate interactions in the Mediterranean (Anatolian, Aegean).'
    ],
    events: [
      'Historic Mediterranean quakes (e.g., 1908 Messina).',
      'Rifting episodes and volcanism along the East African Rift.'
    ]
  },
  'indo-australian': {
    name: 'Indo‑Australian Plate',
    description: 'A major plate comprising the Indian and Australian segments; collision with Eurasia raised the Himalayas and Tibetan Plateau.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    facts: [
      'Subduction along the Sunda Trench near Indonesia drives frequent megathrust earthquakes.',
      'Indian segment collides with Eurasia; Australian segment interacts with Pacific microplates.',
      'Northward motion at several cm/yr; GPS reveals differential motions within the plate.',
      'Back‑arc basins and complex trench‑arc systems in Indonesia and the Banda Sea.',
      'Tsunami hazards around the eastern Indian Ocean margins.'
    ],
    events: [
      '2004 Indian Ocean earthquake and tsunami.',
      '2015 Nepal earthquake (Gorkha).',
      '2018 Sulawesi events along complex strike‑slip systems.'
    ]
  },
  antarctic: {
    name: 'Antarctic Plate',
    description: 'Centered on Antarctica and surrounded by mid‑ocean ridges; one of the most stable plates, moving slowly outward from the continent.',
    image: 'https://images.unsplash.com/photo-1515900161-cb3e1d7049f4?q=80&w=1600&auto=format&fit=crop',
    facts: [
      'Encircled by spreading centers (divergent boundaries) such as the Southeast Indian Ridge.',
      'Interacts with the Scotia and South American Plates in the South Atlantic region.',
      'Cold climate limits on‑land erosion compared with other continents; ice load influences isostasy.',
      'Generally low seismicity compared to subduction‑dominated margins.',
      'Volcanic activity includes Mount Erebus and sub‑ice volcanic features.'
    ],
    events: [
      'Frequent small to moderate offshore earthquakes.',
      'Persistent activity at Mount Erebus (Ross Island).'
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
