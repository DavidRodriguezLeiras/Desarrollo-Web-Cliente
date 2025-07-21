// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app muestra hecho random y la imagen', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const texto = await page.getByRole('paragraph')
  const imagen = await page.getByRole('img')

  const contenidoTexto = await texto.textContent()
  const contenidoImagen = await imagen.getAttribute('src')

  // Expect a title "to contain" a substring.
  await expect(contenidoTexto?.length).toBeGreaterThan(0)
  await expect(contenidoImagen?.startsWith('https://cataas.com')).toBeTruthy()
})
