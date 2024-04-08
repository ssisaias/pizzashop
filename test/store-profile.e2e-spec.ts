import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da Loja' }).click()

  await page.getByLabel('Nome').fill('new restaurant')
  await page.getByLabel('Descrição').fill('another description')
  await page.getByText('Salvar').click()

  page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado.')
  expect(toast).toBeVisible()

  await page.getByText('Cancelar').click()
  await page.waitForTimeout(250)

  expect(page.getByRole('button', { name: 'new restaurant' })).toBeVisible()

  await page.waitForTimeout(500)
})
