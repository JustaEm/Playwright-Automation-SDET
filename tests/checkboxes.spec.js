const { test, expect } = require('@playwright/test');

test('Handle checkboxes', async ({ page }) => {

    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    await page.locator('#monday').check()
    //await page.check('#monday');
    expect(await page.locator('#monday')).toBeChecked()
    expect(await page.locator('#monday').isChecked()).toBeTruthy()
    expect(await page.locator('#sunday').isChecked()).toBeFalsy()

    //Multiple checkboxes
    const checkboxLocators = [
        '#monday',
        '#wednesday',
        '#friday',
        '#sunday',
    ];

    for (const chbox of checkboxLocators) { //select multiple checkboxes
        await page.locator(chbox).check();
    }

    await page.waitForTimeout(3000);

    for (const chbox of checkboxLocators) { //unselect multiple checkboxes
        if (await page.locator(chbox).isChecked()) {
            await page.locator(chbox).uncheck();
        }
    }
})
