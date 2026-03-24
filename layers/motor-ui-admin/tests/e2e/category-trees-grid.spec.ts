import { test, expect } from '@playwright/test'

test.describe('Category Trees Grid', () => {
  test('grid loads and displays rows', async ({ page }) => {
    await page.goto('/motor-admin/category-trees', { waitUntil: 'networkidle' })

    const table = page.locator('table')
    await expect(table).toBeVisible({ timeout: 15000 })

    const rows = table.locator('tbody tr')
    await expect(rows.first()).toBeVisible({ timeout: 10000 })
    expect(await rows.count()).toBeGreaterThan(0)
  })

  test('clicking a row opens the categories child grid', async ({ page }) => {
    await page.goto('/motor-admin/category-trees', { waitUntil: 'networkidle' })

    const table = page.locator('table')
    await expect(table).toBeVisible({ timeout: 15000 })

    const firstRow = table.locator('tbody tr').first()
    await expect(firstRow).toBeVisible({ timeout: 10000 })
    await firstRow.click()

    await page.waitForURL(/\/motor-admin\/category-trees\/\d+$/, { timeout: 10000 })

    const childTable = page.locator('table')
    await expect(childTable).toBeVisible({ timeout: 15000 })
    await expect(childTable.locator('tbody tr').first()).toBeVisible({ timeout: 10000 })
  })

  test('clicking a child category row navigates to edit page', async ({ page }) => {
    await page.goto('/motor-admin/category-trees', { waitUntil: 'networkidle' })

    const table = page.locator('table')
    await expect(table).toBeVisible({ timeout: 15000 })
    await table.locator('tbody tr').first().click()

    await page.waitForURL(/\/motor-admin\/category-trees\/\d+$/, { timeout: 10000 })

    await page.goto(page.url(), { waitUntil: 'networkidle' })

    const childTable = page.locator('table')
    await expect(childTable).toBeVisible({ timeout: 15000 })

    const childRowCell = childTable.locator('tbody tr').first().locator('td').first()
    await expect(childRowCell).toBeVisible({ timeout: 10000 })
    await childRowCell.click()

    await page.waitForURL(/\/motor-admin\/category-trees\/\d+\/categories\/\d+\/edit/, { timeout: 10000 })
    expect(page.url()).toMatch(/\/motor-admin\/category-trees\/\d+\/categories\/\d+\/edit/)
  })
})
