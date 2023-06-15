const { test, expect } = require('@playwright/test')

test('Handle dropwowns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    /*Select multiple options from multi select dropdown
    await page.selectOption('#colors', ['Blue', 'Green', 'Yellow'])
    */

    /*Check number of options in the dropdown
    const options = await page.locator('#colors option')
    await expect(options).toHaveCount(5)
    */

    /*Check number of options in dropdown using JavaScript array
    const options = await page.$$('#colors option')
    await expect(options).toHaveCount(5)
    console.log('Number of options are: ', options.length)
    await expect(options.length).toBe(5)
    */

    //Check presence of value in the dropdown
    const content = await page.locator('#colors').textContent()
    //await expect(content).toContain('Blue')
    await expect(content.includes('Blue')).toBeTruthy();
    //await expect(content.includes('Black')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();






    await page.waitForTimeout(5000);
})