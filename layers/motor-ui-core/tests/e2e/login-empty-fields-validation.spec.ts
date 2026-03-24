import { test, expect } from '@playwright/test'

test.use({ storageState: { cookies: [], origins: [] } })

test.describe('Login Empty Fields Validation', () => {
  test('submitting empty form shows validation errors', async ({ page }) => {
    await page.goto('/login', { waitUntil: 'networkidle' })

    await page.getByRole('button', { name: /sign in|anmelden/i }).click()

    await page.waitForTimeout(500)
    expect(page.url()).toContain('/login')

    await expect(page.getByText(/E-Mail ist erforderlich|Email is required/)).toBeVisible({ timeout: 3000 })
    await expect(page.getByText(/Passwort ist erforderlich|Password is required/)).toBeVisible({ timeout: 3000 })
  })
})
