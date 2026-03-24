import { test, expect } from '@playwright/test'
import { TEST_USER } from '../../../../e2e/helpers'

test.use({ storageState: { cookies: [], origins: [] } })

test.describe('Login Happy Path', () => {
  test('user enters valid credentials and is redirected to dashboard', async ({ page }) => {
    await page.goto('/login', { waitUntil: 'networkidle' })

    await page.getByLabel(/e-?mail/i).fill(TEST_USER.email)
    await page.locator('input[type="password"]').fill(TEST_USER.password)

    await page.getByRole('button', { name: /sign in|anmelden/i }).click()

    await page.waitForURL('/', { timeout: 15000 })

    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
  })
})
