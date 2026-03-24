import { test, expect } from '@playwright/test'

test.describe('Grid Pagination (Permission Groups)', () => {
  test('grid loads and displays rows', async ({ page }) => {
    await page.goto('/motor-admin/permission-groups', { waitUntil: 'networkidle' })

    const table = page.locator('table')
    await expect(table).toBeVisible({ timeout: 15000 })

    const rows = table.locator('tbody tr')
    await expect(rows.first()).toBeVisible({ timeout: 10000 })
    expect(await rows.count()).toBeGreaterThan(0)
  })

  test('clicking a row navigates to edit page', async ({ page }) => {
    await page.goto('/motor-admin/permission-groups', { waitUntil: 'networkidle' })

    const table = page.locator('table')
    await expect(table).toBeVisible({ timeout: 15000 })

    const firstRow = table.locator('tbody tr').first()
    await expect(firstRow).toBeVisible({ timeout: 10000 })
    await firstRow.click()

    await page.waitForURL('**/motor-admin/permission-groups/*/edit', { timeout: 10000 })
    expect(page.url()).toMatch(/\/motor-admin\/permission-groups\/\d+\/edit/)
  })

  test('pagination navigates forward and back', async ({ page }) => {
    await page.goto('/motor-admin/permission-groups?per_page=5', { waitUntil: 'networkidle' })

    const table = page.locator('table')
    await expect(table).toBeVisible({ timeout: 15000 })
    await expect(table.locator('tbody tr').first()).toBeVisible({ timeout: 10000 })

    const showingRange = page.locator('span.whitespace-nowrap')
    await expect(showingRange).toHaveText(/^1-\d+/, { timeout: 5000 })

    const nextButton = page.getByRole('button', { name: 'Next Page' })
    await expect(nextButton).toBeVisible({ timeout: 5000 })
    await nextButton.click()

    await expect(showingRange).toHaveText(/^6-\d+/, { timeout: 10000 })

    const prevButton = page.getByRole('button', { name: 'Previous Page' })
    await expect(prevButton).toBeVisible({ timeout: 5000 })
    await prevButton.click()

    await expect(showingRange).toHaveText(/^1-\d+/, { timeout: 10000 })
  })

  test('per-page dropdown changes page size', async ({ page }) => {
    await page.goto('/motor-admin/permission-groups', { waitUntil: 'networkidle' })

    const table = page.locator('table')
    await expect(table).toBeVisible({ timeout: 15000 })
    await expect(table.locator('tbody tr').first()).toBeVisible({ timeout: 10000 })

    const initialRowCount = await table.locator('tbody tr').count()

    const perPageTrigger = page.getByLabel('Results per page')
    await expect(perPageTrigger).toBeVisible({ timeout: 5000 })
    await perPageTrigger.click()

    const option50 = page.locator('[data-slot="item"]', { hasText: '50' })
    await expect(option50).toBeVisible({ timeout: 5000 })
    await option50.click()

    await page.waitForURL('**/permission-groups?*per_page=50*', { timeout: 10000 })
    await expect(table.locator('tbody tr').first()).toBeVisible({ timeout: 10000 })

    const showingRange = page.locator('span.whitespace-nowrap')
    const rangeText = await showingRange.textContent()
    expect(rangeText?.trim()).toMatch(/^\d+-\d+/)

    const newRowCount = await table.locator('tbody tr').count()
    expect(newRowCount).toBeGreaterThanOrEqual(initialRowCount)
  })
})
