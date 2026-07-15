import { test, expect } from '@playwright/test'

test.describe('Media Files', () => {
  test('gallery view loads by default', async ({ page }) => {
    await page.goto('/motor-media/files', { waitUntil: 'networkidle' })

    expect(page.url()).toContain('/motor-media/files')

    // Masonry grid once thumbnails are measured, `.columns-2` while the skeleton shows
    const galleryGrid = page.locator('[data-testid="media-gallery-masonry"], .columns-2')
    const emptyState = page.locator('text=/no records|keine/i')

    const hasGallery = await galleryGrid.first().isVisible().catch(() => false)
    const hasEmpty = await emptyState.first().isVisible().catch(() => false)

    expect(hasGallery || hasEmpty).toBe(true)
  })
})
