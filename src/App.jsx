import React, { useState, useCallback } from 'react'
import Envelope from './components/Envelope'
import Card from './components/Card'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [showFlash, setShowFlash] = useState(false)

  const handleEnvelopeOpen = useCallback(() => {
    setShowFlash(true)
    // Le flash dure 600ms, puis on affiche la carte
    setTimeout(() => {
      setIsOpen(true)
      // On retire le flash après que la carte commence à apparaître
      setTimeout(() => setShowFlash(false), 400)
    }, 200)
  }, [])

  return (
    <>
      {/* Fond fixe partage entre Envelope et Card */}
      <div
        className="app-background"
        style={{ backgroundImage: `url(/images/fond_carte.webp)` }}
      />

      {/* Flash lumineux entre l'enveloppe et la carte */}
      <div className={`light-flash ${showFlash ? 'active' : ''}`} />

      {!isOpen ? (
        <Envelope onOpen={handleEnvelopeOpen} />
      ) : (
        <Card />
      )}
    </>
  )
}

export default App
