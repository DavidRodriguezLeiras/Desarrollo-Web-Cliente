const ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getGatosRandom = () => {
  return fetch(ENDPOINT_RANDOM_FACT)
    .then(respuesta => respuesta.json())
    .then(datos => {
      const { fact } = datos
      return fact
    })
}
