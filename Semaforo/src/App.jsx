import { useState } from 'react'
import './App.css'

function App() {
  const [cor, setCor] = useState("")
  console.log(cor)
  return (
    <div className="App">
      <div className="sinalizacao">
        <div onClick={() => setCor('red')}className={`sinalizacao__luz ${cor === 'red' ? "sinalizacao__luz--ligado" : ""}`} style={{ backgroundColor: 'red' }} />
        <div onClick={() => setCor('yellow')}className={`sinalizacao__luz ${cor === 'yellow' ? "sinalizacao__luz--ligado" : ""}`} style={{ backgroundColor: 'yellow' }} />
        <div onClick={() => setCor('green')}className={`sinalizacao__luz ${cor === 'green' ? "sinalizacao__luz--ligado" : ""}`} style={{ backgroundColor: 'lime' }} />
      </div>
    </div>
  )
}

export default App
