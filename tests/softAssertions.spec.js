const { test, expect } = require('@playwright/test')

test('Soft assertions', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html')

    /*Hard assertions
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://demoblaze.com/index.html');
    await expect(page.locator('#nava')).toBeVisible();
    */

    //Soft assertions --> will not terminate the execution if any assertion fails
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
    await expect.soft(page.locator('#nava')).toBeVisible();


})