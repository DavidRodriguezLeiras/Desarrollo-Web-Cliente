import { Cuadrado } from './Cuadrado'

export function ModalGanador ({ ganador, resetJuego }) {
  if (ganador === null) return null
  const textoGanador = ganador === false ? 'Empate' : 'Ganó '
  return (
    <section className="winner">
      <div className="text">
        <h2>{textoGanador}</h2>
        <header className="win">
          {ganador && <Cuadrado>{ganador}</Cuadrado>}
        </header>

        <footer className="">
          <button onClick={resetJuego}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
