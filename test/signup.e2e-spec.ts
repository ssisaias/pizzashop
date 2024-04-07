import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/signup', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do Estabelecimento').fill('pizza shop')
  await page.getByLabel('Responsável').fill('Ze Doe')
  await page.getByLabel('Telefone').fill('123456789')
  await page.getByLabel('E-mail').fill('john.doe@example.com')

  await page.getByRole('button', { name: 'Cadastrar' }).click()

  const toast = page.getByText('Cadastrado com sucesso!')

  expect(toast).toBeVisible()

  await page.waitForTimeout(1500)
})

test('sign up with wrong credentials', async ({ page }) => {
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
})
