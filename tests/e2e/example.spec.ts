import { test, expect } from '@playwright/test'

test.describe.parallel('Example Domain Test Suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://example.com/')
    })

    test("Simple basic test1", async ({ page }) => {
        const pageTitle = await page.locator('h1')
        await expect(pageTitle).toContainText('Example Domain')
    })

    test("Simple basic test2", async ({ page }) => {
        const pageDescription = await page.textContent('p:nth-child(2)')
        await expect(pageDescription).toContain('This domain is for use in illustrative examples in documents.')
    })
    
    test("Simple basic test3", async ({ page }) => {
        await expect(page.locator("text=More information...")).toBeVisible()
    })

})
