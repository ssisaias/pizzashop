import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()

  await page.waitForTimeout(1500)
})

test('display monthly amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200')).toBeVisible()
  expect(page.getByText('7% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(1500)
})

test('display monthly canceled amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('5', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(1500)
})
test('display monthly revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 0,10')).toBeVisible()
  expect(page.getByText('2% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(1500)
})
