import { useEffect, useState } from 'react'
import { getGatosRandom } from '../services/hechos'

export function useHechoGato () {
  const [hecho, setHecho] = useState('')
  const getHechoUpdate = () => {
    getGatosRandom().then(nuevoHecho => setHecho(nuevoHecho))
  }
  // Los fetch han de hacerse desde el useEffect(), dado que este se ejecuta cuando se renderiza el componente,
  // importante recordar poner al final en las dependencias el array vacio "[]" indicando que se hara solo una vez.
  useEffect(getHechoUpdate, [])

  return { hecho, getHechoUpdate }
}
