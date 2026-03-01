import React, { useState, useCallback } from 'react'
import Envelope from './components/Envelope'
import Card from './components/Card'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleEnvelopeOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      {/* Fond fixe partage entre Envelope et Card */}
      <div
        className="app-background"
        style={{ backgroundImage: `url(/images/fond_carte.webp)` }}
      />

      {!isOpen ? (
        <Envelope onOpen={handleEnvelopeOpen} />
      ) : (
        <Card />
      )}
    </>
  )
}

export default App
