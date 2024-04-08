import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/signin', { waitUntil: 'networkidle' })

  await page.getByLabel('E-mail').fill('john.doe@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Clique para ir ao dashboard')

  expect(toast).toBeVisible()

  await page.waitForTimeout(1500)
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/signin', { waitUntil: 'networkidle' })

  await page.getByLabel('E-mail').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais inválidas')

  expect(toast).toBeVisible()

  await page.waitForTimeout(1500)
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/signin', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Não tem conta? Cadastre-se' }).click()

  expect(page.url()).toContain('/signup')

  await page.waitForTimeout(1500)
})
