import { test, expect } from '@playwright/test'
import { TEST_USER } from '../../../../e2e/helpers'

test.use({ storageState: { cookies: [], origins: [] } })

test.describe('Login Invalid Credentials', () => {
  test('user enters wrong password and error alert is displayed', async ({ page }) => {
    await page.goto('/login', { waitUntil: 'networkidle' })

    await page.getByLabel(/e-?mail/i).fill(TEST_USER.email)
    await page.locator('input[type="password"]').fill('wrong-password')

    await page.getByRole('button', { name: /sign in|anmelden/i }).click()

    await expect(page.locator('[data-slot="root"].bg-error')).toBeVisible({ timeout: 5000 })
  })
})
