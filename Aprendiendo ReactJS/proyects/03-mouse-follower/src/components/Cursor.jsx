import { useEffect, useState } from 'react'

export const Cursor = () => {
  const [activado, setActivado] = useState(false)
  const [posicion, setPosicion] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const manejarMovimiento = (evento) => {
      const { clientX, clientY } = evento
      setTimeout(() => {
        setPosicion({ x: clientX, y: clientY })
      }, '10')
    }
    if (activado) {
      window.addEventListener('pointermove', manejarMovimiento)
    }

    // En este componente, al nosotros pinchar en "desactivar" el evento que hemos establecido seguira ahi hasta que "limpiemos el componente",
    // para ello usamos esta funcion return, en la que indicamos lo que hacer para "reiniciar el estado inicial"
    // IMPORTANTE *esto se ejecuta cuando*
    // -> cuando se desmonta el componente
    // -> cuando cambian las dependencias antes de ejecutar el efecto
    return () => {
      window.removeEventListener('pointermove', manejarMovimiento)
    }
  }, [activado])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09F',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${posicion.x}px,${posicion.y}px)`
      }}
      />
      <button onClick={() => setActivado(!activado)}>{activado ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}
