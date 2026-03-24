import { test, expect } from '@playwright/test'

test.describe('Clients Grid', () => {
  test('grid loads and displays rows', async ({ page }) => {
    await page.goto('/motor-admin/clients', { waitUntil: 'networkidle' })

    const table = page.locator('table')
    await expect(table).toBeVisible({ timeout: 15000 })

    const rows = table.locator('tbody tr')
    await expect(rows.first()).toBeVisible({ timeout: 10000 })
    expect(await rows.count()).toBeGreaterThan(0)
  })

  test('clicking a row navigates to edit page', async ({ page }) => {
    await page.goto('/motor-admin/clients', { waitUntil: 'networkidle' })

    const table = page.locator('table')
    await expect(table).toBeVisible({ timeout: 15000 })

    const firstRowNameCell = table.locator('tbody tr').first().locator('td').first()
    await expect(firstRowNameCell).toBeVisible({ timeout: 10000 })
    await firstRowNameCell.click()

    await page.waitForURL('**/motor-admin/clients/*/edit', { timeout: 10000 })
    expect(page.url()).toMatch(/\/motor-admin\/clients\/\d+\/edit/)
  })
})
