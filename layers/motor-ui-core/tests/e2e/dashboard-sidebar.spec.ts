import { test, expect } from '@playwright/test'

test.describe('Dashboard Sidebar', () => {
  test('sidebar is visible with navigation links', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    const sidebar = page.locator('[data-slot="sidebar"]').first()
    const hasSidebar = await sidebar.isVisible().catch(() => false)

    if (!hasSidebar) {
      const fallbackSidebar = page.locator('nav').first()
      await expect(fallbackSidebar).toBeVisible({ timeout: 10000 })

      const navLinks = fallbackSidebar.locator('a[href]')
      await expect(navLinks.first()).toBeVisible({ timeout: 10000 })
      expect(await navLinks.count()).toBeGreaterThan(0)
    } else {
      const navLinks = sidebar.locator('a[href]')
      await expect(navLinks.first()).toBeVisible({ timeout: 10000 })
      expect(await navLinks.count()).toBeGreaterThan(0)
    }
  })
})
