import { test, expect } from '@playwright/test'

test.describe('Global Search', () => {
  test('clicking search button opens search modal', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    const searchButton = page.locator('[data-slot="dashboard-search-button"], button:has-text("Search"), button:has-text("Suchen")')
    await expect(searchButton.first()).toBeVisible({ timeout: 10000 })
    await searchButton.first().click()

    await expect(page.locator('[role="dialog"]')).toBeVisible({ timeout: 5000 })
  })
})
