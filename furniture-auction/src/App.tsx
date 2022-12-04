import { useState } from 'react'
import { atom, useAtom } from 'jotai'
import './App.css'

function App() {
  const textAtom = atom('hello')
const textLenAtom = atom((get) => get(textAtom).length)
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase())

const Input = () => {
  const [text, setText] = useAtom(textAtom)
  return <input value={text} onChange={(e) => setText(e.target.value)} />
}

const CharCount = () => {
  const [len] = useAtom(textLenAtom)
  return <div>Length: {len}</div>
}

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom)
  return <div>Uppercase: {uppercase}</div>
}

  return (
    <div className="App">
      hello
    </div>
  )
}

export default App
