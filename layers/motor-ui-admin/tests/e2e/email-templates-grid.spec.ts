import { test, expect } from '@playwright/test'

test.describe('Email Templates Grid', () => {
  test('grid loads and displays rows', async ({ page }) => {
    await page.goto('/motor-admin/email-templates', { waitUntil: 'networkidle' })

    const table = page.locator('table')
    await expect(table).toBeVisible({ timeout: 15000 })

    const rows = table.locator('tbody tr')
    await expect(rows.first()).toBeVisible({ timeout: 10000 })
    expect(await rows.count()).toBeGreaterThan(0)
  })

  test('clicking a row navigates to edit page', async ({ page }) => {
    await page.goto('/motor-admin/email-templates', { waitUntil: 'networkidle' })

    const table = page.locator('table')
    await expect(table).toBeVisible({ timeout: 15000 })

    const firstRow = table.locator('tbody tr').first()
    await expect(firstRow).toBeVisible({ timeout: 10000 })
    await firstRow.click()

    await page.waitForURL('**/motor-admin/email-templates/*/edit', { timeout: 10000 })
    expect(page.url()).toMatch(/\/motor-admin\/email-templates\/\d+\/edit/)
  })
})
