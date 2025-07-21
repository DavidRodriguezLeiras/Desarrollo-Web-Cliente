import { useImagenGato } from './hooks/usarImagenGato'
import { useHechoGato } from './hooks/refrescarHechosGato'

export function App () {
  const { hecho, getHechoUpdate } = useHechoGato()
  const { urlImagen } = useImagenGato({ hecho }) // Usamos nuestro custom hook, y le pasamos el objeto con el hecho como parametro
  const manejarClick = getHechoUpdate

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={manejarClick}>Dame mas gatos</button>
      {hecho && <p>{hecho}</p>}
      {urlImagen && <img src={urlImagen} />}
    </main>

  )
}
