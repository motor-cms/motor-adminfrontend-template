import { test, expect } from '@playwright/test'

test.describe('404 Error Page', () => {
  test('navigating to unknown route shows 404 error page', async ({ page }) => {
    await page.goto('/this-route-does-not-exist-at-all', { waitUntil: 'networkidle' })

    await expect(page.getByText('404')).toBeVisible({ timeout: 10000 })
  })
})
