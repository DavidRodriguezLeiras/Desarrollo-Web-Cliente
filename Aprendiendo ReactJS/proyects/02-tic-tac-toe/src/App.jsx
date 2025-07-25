import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { Cuadrado } from './components/Cuadrado'
import { turnos } from './constantes'
import { checkGanador, comprobarFinJuego } from './logica/tablero'
import { ModalGanador } from './components/ModalGanador'
import { Tablero } from './components/Tablero'
import { Cursor } from './components/Cursor'

function App () {
  // Estado del tablero, que define la posicion de las casillas
  const [tablero, setTablero] = useState(() => {
    const tableroDeLS = window.localStorage.getItem('tablero')
    return tableroDeLS ? JSON.parse(tableroDeLS) : Array(9).fill(null)
  }) // Estado del tablero

  // Estado del turno, que indica el turno en el que nos encontramos
  const [turno, setTurno] = useState(() => {
    const turnoDeLS = window.localStorage.getItem('turno')
    if (turnoDeLS) return turnoDeLS
    return turnos.x
  })

  // Definimos un estado para comprobar si alguien gano el juego. null sera que no hay ganador, false empate y "x" o "o" sera el turno que ha ganado
  const [ganador, setGanador] = useState(null)

  const resetJuego = () => {
    setGanador(null)
    setTurno(turnos.x)
    setTablero(Array(9).fill(null))
    window.localStorage.removeItem('tablero')
    window.localStorage.removeItem('turno')
  }

  // Funcion que actualiza el tablero cuando se realiza una accion
  const actualizarTablero = (indice) => {
    // Impedimos que se sobreescriban los Cuadrados que tienen un valor
    if (tablero[indice] || ganador) return

    // Hacemos copia superficial del tablero para actualizarlo posteriormente
    const nuevoTablero = [...tablero]
    // Añado el turno actual al Cuadrado de indice coincidente.
    nuevoTablero[indice] = turno
    // Actualizo el estado del tablero.
    setTablero(nuevoTablero)

    const nuevoTurno = turno === turnos.x ? turnos.o : turnos.x // Asignamos a nuevo turno el valor contrario al estado actual
    setTurno(nuevoTurno) // Actualizamos a traves de la funcion de actualizar el estado el nuevo turno

    window.localStorage.setItem('tablero', JSON.stringify(nuevoTablero))
    window.localStorage.setItem('turno', nuevoTurno)

    // Comprobamos si hay un ganador
    const jugadorGanador = checkGanador(nuevoTablero)
    if (jugadorGanador) {
      confetti()
      // Si hay un ganador lo ponemos en el estado ganador
      setGanador(jugadorGanador)
    } else if (comprobarFinJuego(nuevoTablero)) {
      setGanador(false)
    }
  }

  /*
    Esto es useEffect, se usa para ejecutar codigo al renderizarse un componente, este va en el cuerpo del componente.
    useEffect puede recibir un array de parametros o no recibirlo, los casos que se pueden dar son los siguientes:
    -Sin parametros: este salta cada vez que se renderiza el componente
    -Array vacio: salta useEffect la primera vez que se inicia el componente
    -array con parámetros(funciones o variables): salta useEffect cada vez que hay cambios sobre los
  */
  useEffect(() => {}, [turno, tablero])

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetJuego}>Reset</button>
      <Tablero tablero={tablero} actualizarTablero={actualizarTablero} />
      <section className='turn'>
        {/* Sabemos cuando es el turno en funcion del estado, comparando el valor del estado actual con el objeto turnos */}
        <Cuadrado turnoSeleccionado={turno === turnos.x}>{turnos.x}</Cuadrado>
        <Cuadrado turnoSeleccionado={turno === turnos.o}>{turnos.o}</Cuadrado>
      </section>
      <Cursor />

      <ModalGanador ganador={ganador} resetJuego={resetJuego} />
    </main>
  )
}

export default App
