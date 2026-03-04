import { test, expect } from '@playwright/test'

test('create user', async ({ page, request }) => {

  const name = 'tester' + Date.now()

  await page.goto('http://localhost:3000')

  await page.getByPlaceholder('name').fill(name)
  await page.getByPlaceholder('email').fill(`${name}@test.com`)

  await page.click('text=create')

  await expect(page.getByText(name)).toBeVisible()

  await request.delete('/test/reset')

})