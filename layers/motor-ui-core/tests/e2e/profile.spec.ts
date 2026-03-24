import { test, expect } from '@playwright/test'

test.describe('Profile Page', () => {
  test('profile page loads with user info in form fields', async ({ page }) => {
    await page.goto('/profile', { waitUntil: 'networkidle' })

    const emailInput = page.locator('input[type="email"]')
    await expect(emailInput).toBeVisible({ timeout: 10000 })
    await expect(emailInput).not.toHaveValue('')

    const nameInput = page.locator('input[type="text"]').first()
    await expect(nameInput).toBeVisible()
    await expect(nameInput).not.toHaveValue('')
  })
})
