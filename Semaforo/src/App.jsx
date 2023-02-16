import { useState } from 'react'
import './App.css'

function App() {
  const [cor, setCor] = useState("")
  return (
    <div className="App">
      <div className="sinalizacao">
        <div className="sinalizacao__luz sinalizacao__luz--ligado" style={{ backgroundColor: 'red' }} />
        <div className="sinalizacao__luz" style={{ backgroundColor: 'yellow' }} />
        <div className="sinalizacao__luz" style={{ backgroundColor: 'lime' }} />
      </div>
    </div>
  )
}

export default App
