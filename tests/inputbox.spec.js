const { test, expect } = require('@playwright/test');

test('Handle inputbox', async ({ page }) => {

    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    await expect(await page.locator('#name')).toBeVisible()
    await expect(await page.locator('#name')).toBeEmpty()
    await expect(await page.locator('#name')).toBeEditable()
    await expect(await page.locator('#name')).toBeEnabled()

    await page.locator('#name').fill('John')
    //page.fill('#name', 'John');

    await page.waitForTimeout(5000); //pausing script
})

