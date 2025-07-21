import { useState } from 'react'
import { Cursor } from './components/cursor'

function App () {
  // Cuando este estado esta en true, el componente Cursor estara disponible de manera condicional
  const [circulo, setCirculo] = useState(true)

  return (
    <main>
      {circulo && <Cursor />}
      <button onClick={() => setCirculo(!circulo)}>{(circulo) ? 'Desactivar' : 'Activar'} Componente </button>
    </main>
  )
}

export default App
