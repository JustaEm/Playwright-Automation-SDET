const { test, expect } = require('@playwright/test');

test('Handle inputbox', async ({ page }) => {

    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    await page.locator('#female').check()//select radio button
    //await page.check('#female);
    await expect(await page.locator('#female')).toBeChecked();
    await expect(await page.locator('#female').isChecked()).toBeTruthy();


    await expect(await page.locator('#male').isChecked()).toBeFalsy();

    //await page.waitForTimeout(5000);
})