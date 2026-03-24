import { test, expect } from '@playwright/test'

test.use({ storageState: { cookies: [], origins: [] } })

test.describe('Auth Redirect for Unauthenticated Users', () => {
  test('unauthenticated user visiting / ends up on /login', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    expect(page.url()).toContain('/login')
    await expect(page.locator('input[type="email"]')).toBeVisible()
  })

  test('unauthenticated user visiting a protected route ends up on /login', async ({ page }) => {
    await page.goto('/motor-admin/users', { waitUntil: 'networkidle' })

    expect(page.url()).toContain('/login')
  })
})
