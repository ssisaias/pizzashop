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

/* test('sign up with wrong credentials', async ({ page }) => {
  await page.goto('/signup', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do Estabelecimento').fill('invalid name')
  await page.getByLabel('Responsável').fill('Ze Doe')
  await page.getByLabel('Telefone').fill('123456789')
  await page.getByLabel('E-mail').fill('john.doe@example.com')

  await page.getByRole('button', { name: 'Cadastrar' }).click()

  const toast = page.getByText('erro ao cadastrar!')

  expect(toast).toBeVisible()

  await page.waitForTimeout(1500)
})

test('navigate back to login page', async ({ page }) => {
  await page.goto('/signup', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Já tenho conta!' }).click()

  expect(page.url()).toContain('/signin')
}) */
