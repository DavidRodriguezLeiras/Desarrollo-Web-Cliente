import { useEffect, useState } from 'react'

// Custom hook que devuelve un objeto con la url de la imagen del gato
export function useImagenGato ({ hecho }) {
  const [urlImagen, setUrlImagen] = useState()
  // Efecto para recuperar la imagen
  useEffect(() => {
    if (!hecho) return
    const primeraPalabra = hecho.split(' ', 3).slice(0, 3).join(' ')

    fetch(`https://cataas.com/cat/gif/says/${primeraPalabra}?filter=mono&fontColor=orange&fontSize=20&type=square`)
      .then(respuesta => {
        const { url } = respuesta
        setUrlImagen(url)
      })
  }, [hecho])

  return { urlImagen }
}
