import { combinacionesGanador } from '../constantes'

// Funcion que comprueba si hay un ganador
export const checkGanador = (tablero) => {
  // Revisamos todas las combinaciones ganadoras para ver si gano alguien
  for (const combo of combinacionesGanador) {
    const [a, b, c] = combo
    if (
      tablero[a] && // Vemos si el primer valor tiene contenido
      tablero[a] === tablero[b] && // Comparamos si "a" es igual a "b"
      tablero[a] === tablero[c] // Comparamos que "a" es igual a "c" ,
    ) {
      // Si se cumplen las condiciones, significará que "a" "b" y "c" son iguales y ademas estan dentro de una combinacion ganadora
      // devolvemos el valor del turno asignado a "a" indicando que ese es el ganador
      return tablero[a]
    }
  }
  return null
}

export const comprobarFinJuego = (tablero) => {
  return tablero.every((cuadrado) => cuadrado !== null)
}
