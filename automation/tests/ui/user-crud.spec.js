const { test, expect } = require('@playwright/test')

test('create user', async ({ page }) => {

 await page.goto('/')

 await page.fill('input[placeholder="name"]','tester' + Date.now())
 await page.fill('input[placeholder="email"]','tester@test.com')

 await page.click('text=create')

 await expect(page.locator('text=tester')).toBeVisible()

})