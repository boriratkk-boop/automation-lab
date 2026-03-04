import { test, expect } from '@playwright/test'

test('create user', async ({ page }) => {

  const name = 'tester' + Date.now()

  await page.goto('http://localhost:3000')

  await page.fill('#name', name)
  await page.fill('#email', `${name}@test.com`)

  await page.click('text=create')

  await expect(page.getByText(name)).toBeVisible()

})