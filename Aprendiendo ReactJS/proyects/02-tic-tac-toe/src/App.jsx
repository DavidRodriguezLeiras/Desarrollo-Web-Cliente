import { useState } from "react"

const turnos={
  x:'x',
  o:'o'
}

//Componente Cuadrado lo usamos para pintar los cuadrados del tablero y para pintar los cuadrados del turno
const Cuadrado = ({children,turnoSeleccionado,actualizarTablero,indice}) =>{
  //Uso esta constante junto con el estado de turnoSeleccionado para asignar el classname correspondiente
  const className= `square ${turnoSeleccionado ? 'is-selected' : ''}` 

  const manejarClick= () => {
    actualizarTablero(indice)
  }

  return (
    <div onClick={manejarClick} className={className}>
      {children}
    </div>
  )
}

/*
  Determinar si hay ganador
  Podemos hacerlo de diversas formas, en este caso vamos a ver una de ellas, que sería guardando todas las posibles combinaciones para ganar
*/

const combinacionesGanador = [
  [0,1,2],[3,4,5],[6,7,8], // Horizontales
  [0,3,6],[1,4,7],[2,5,8], // Verticales
  [0,4,8],[2,4,6]          //Diagonales
]

function App() {
  //Estado del tablero, que define la posicion de las casillas
  const [tablero,setTablero]=useState(Array(9).fill(null)) //Estado del tablero

  //Estado del turno, que indica el turno en el que nos encontramos
  const [turno,setTurno]=useState(turnos.x) //Estado del turno, en funcion del estado 

  // Definimos un estado para comprobar si alguien gano el juego. null sera que no hay ganador, false empate y "x" o "o" sera el turno que ha ganado
  const [ganador,setGanador]=useState(null) 

  //Funcion que comprueba si hay un ganador
  const checkGanador = (tablero) => {
    //Revisamos todas las combinaciones ganadoras para ver si gano alguien 
    for (const combo of combinacionesGanador) {
      const [a,b,c] = combo
      if( 
        tablero[a] && // Vemos si el primer valor tiene contenido
        tablero[a] === tablero[b] && //Comparamos si "a" es igual a "b"
        tablero[a] === tablero[c] //Comparamos que "a" es igual a "c" , 
      ){
        //Si se cumplen las condiciones, significará que "a" "b" y "c" son iguales y ademas estan dentro de una combinacion ganadora
        //devolvemos el valor del turno asignado a "a" indicando que ese es el ganador 
        return tablero[a]
      } 
    }
    return null
  }

  const comprobarFinJuego=(tablero)=>{
    return tablero.every((cuadrado)=> cuadrado !== null);
  }

  const resetJuego= ()=>{
    setGanador(null)
    setTurno(turnos.x)
    setTablero(Array(9).fill(null))
  }

  //Funcion que actualiza el tablero cuando se realiza una accion
  const actualizarTablero= (indice)=>{
    //Impedimos que se sobreescriban los Cuadrados que tienen un valor
    if(tablero[indice] || ganador) return;

    //Hacemos copia superficial del tablero para actualizarlo posteriormente
    const nuevoTablero = [...tablero]
    //Añado el turno actual al Cuadrado de indice coincidente.
    nuevoTablero[indice]=turno
    //Actualizo el estado del tablero.
    setTablero(nuevoTablero)    
    const nuevoTurno = turno === turnos.x ? turnos.o : turnos.x //Asignamos a nuevo turno el valor contrario al estado actual
    setTurno(nuevoTurno); // Actualizamos a traves de la funcion de actualizar el estado el nuevo turno

    //Comprobamos si hay un ganador
    const jugadorGanador = checkGanador(nuevoTablero)
    if(jugadorGanador){ 
      //Si hay un ganador lo ponemos en el estado ganador
      setGanador(jugadorGanador);
    } else if(comprobarFinJuego(nuevoTablero)){
      setGanador(false);
    }
  } 

  return (
    <main className='board'>
        <h1>Tic tac toe</h1>
        <button onClick={resetJuego}>Reset</button>
        <section className='game'>
          {
            tablero.map((_, index)=>{
              return (
                <Cuadrado
                  key={index}
                  indice={index}
                  actualizarTablero={actualizarTablero}
                  >{tablero[index]}</Cuadrado>
              )
            })
          }
        </section>

        <section className="turn">
          {/* Sabemos cuando es el turno en funcion del estado, comparando el valor del estado actual con el objeto turnos */}
          <Cuadrado turnoSeleccionado={turno===turnos.x}>{turnos.x}</Cuadrado>
          <Cuadrado turnoSeleccionado={turno===turnos.o}>{turnos.o}</Cuadrado>
        </section>

        {
          ganador !== null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {
                    ganador===false ? 'Empate': 'Gano '+ganador
                  }
                </h2>
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
    </main>
  )
}

export default App
