import React, { useState } from 'react'

const QUESTIONS = [
  {
    q: 'Which plate is the largest on Earth?',
    choices: ['Pacific Plate', 'African Plate', 'Eurasian Plate', 'Antarctic Plate'],
    answer: 0,
    exp: 'The Pacific Plate is the largest tectonic plate, covering much of the Pacific Ocean basin.'
  },
  {
    q: 'A boundary where plates move apart is called a…',
    choices: ['convergent boundary', 'divergent boundary', 'transform boundary', 'subduction zone'],
    answer: 1,
    exp: 'Divergent boundaries create new crust as magma rises between separating plates.'
  },
  {
    q: 'The San Andreas Fault is an example of a…',
    choices: ['subduction zone', 'rift valley', 'transform fault', 'hotspot'],
    answer: 2,
    exp: 'It is a transform fault between the Pacific Plate and North American Plate.'
  },
]

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const question = QUESTIONS[current]

  function submit() {
    if (selected == null) return
    const correct = selected === question.answer
    if (correct) setScore(s => s + 1)
    if (current + 1 === QUESTIONS.length) {
      setFinished(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
    }
  }

  function restart() {
    setCurrent(0); setSelected(null); setScore(0); setFinished(false)
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-extrabold" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Quiz</h2>

      {!finished ? (
        <div className="rounded-xl border border-amber-400/20 p-4 bg-slate-900/40">
          <div className="text-sm text-slate-300">Question {current + 1} of {QUESTIONS.length}</div>
          <div className="font-semibold mt-2">{question.q}</div>
          <div className="mt-3 grid gap-2">
            {question.choices.map((c, i) => (
              <button key={i} onClick={() => setSelected(i)} className={`text-left px-3 py-2 rounded border ${selected === i ? 'border-amber-400 bg-amber-500/10' : 'border-amber-400/20 hover:bg-white/5'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button onClick={submit} className="px-4 py-2 rounded bg-gradient-to-br from-amber-400 to-yellow-600 text-slate-900 font-semibold">Submit</button>
            {selected != null && (
              <div className="text-sm text-slate-300">
                {selected === question.answer ? 'Correct!' : 'Not quite — correct answer: ' + question.choices[question.answer]}
                <div className="text-xs text-slate-400">{question.exp}</div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-amber-400/20 p-4 bg-slate-900/40 text-center">
          <div className="text-amber-300 font-semibold">You scored {score} / {QUESTIONS.length}</div>
          <button onClick={restart} className="mt-3 px-4 py-2 rounded border border-amber-400/40 hover:bg-white/5">Try Again</button>
        </div>
      )}
    </section>
  )
}
