import './App.css'
import { Sinalizacao } from './Sinalizacao'

function App() {
  return (
    <div className="App">
        <Sinalizacao cores={[
          { id: '1', cor: 'red', nome: 'Vermelho' },
          { id: '2', cor: 'yellow', nome: 'Amarelo' },
          { id: '3', cor: 'green', nome: 'Verde' },
        ]}></Sinalizacao>
    </div>
  )
}

export default App;