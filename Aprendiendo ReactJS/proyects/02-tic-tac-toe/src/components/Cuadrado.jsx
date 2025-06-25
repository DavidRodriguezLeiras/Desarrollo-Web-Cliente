//Componente Cuadrado lo usamos para pintar los cuadrados del tablero y para pintar los cuadrados del turno
export const Cuadrado = ({children,turnoSeleccionado,actualizarTablero,indice}) =>{
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