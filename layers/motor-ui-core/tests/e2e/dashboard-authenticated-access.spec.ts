import { test, expect } from '@playwright/test'

test.describe('Dashboard Authenticated Access', () => {
  test('authenticated user sees dashboard with welcome message', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 10000 })

    await expect(page.getByText('Willkommen zurück!')).toBeVisible()
  })
})
