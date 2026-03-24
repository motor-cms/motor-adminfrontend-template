import { test, expect } from '@playwright/test'

test.describe('Login Redirects Authenticated User', () => {
  test('already authenticated user visiting /login ends up on dashboard', async ({ page }) => {
    await page.goto('/login')

    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 15000 })
    expect(page.url()).not.toContain('/login')
  })
})
