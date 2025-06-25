import { Cuadrado } from "./Cuadrado";

export function Tablero({tablero,actualizarTablero}) {
  return (
    <section className="game">
      {tablero.map((_, index) => {
        return (
          <Cuadrado
            key={index}
            indice={index}
            actualizarTablero={actualizarTablero}
          >
            {tablero[index]}
          </Cuadrado>
        );
      })}
    </section>
  );
}
