//Constantes, tenemos la constante que representa los turnos y la que representa las combinaciones de indices ganadores
export const turnos={
  x:'✖️',
  o:'⭕'
}
/*
  Determinar si hay ganador
  Podemos hacerlo de diversas formas, en este caso vamos a ver una de ellas, que sería guardando todas las posibles combinaciones para ganar
*/
export const combinacionesGanador = [
  [0,1,2],[3,4,5],[6,7,8], // Horizontales
  [0,3,6],[1,4,7],[2,5,8], // Verticales
  [0,4,8],[2,4,6]          //Diagonales
]