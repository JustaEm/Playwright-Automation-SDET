const { test, expect } = require('@playwright/test')
test("Handle dropdowns", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multiple ways to select a dropdown
    //await page.locator('#country').selectOption({ label: 'United Kingdom' })//label/ visible text
    //await page.locator('#country').selectOption('United Kingdom') //visible text
    //await page.locator('#country').selectOption({ value: 'uk' })//using value
    //await page.locator('#country').selectOption({ index: 1 })//using index
    await page.selectOption('#country', 'France');

    //Assertions
    /*1. Check number of options in dropdown
    const options = await page.locator('#country option')
    await expect(options).toHaveCount(10);
    */

    /*2. Check number of options in dropdown
    //const options = await page.$$('#country option')
    //console.log('Number of options:', options.length)
    //await expect(options.length).toBe(10);
    */

    /*3. Check presence of a value in the dropdown
    const content = await page.locator('#country').textContent()
    await expect(content.includes('United Kingdom')).toBeTruthy();
    await expect(content.includes('United Kingdong')).toBeFalsy();
    */

    /*4. Check the presence of the value in the dropdown
    const options = await page.$$('#country option')//captures all options into an array
    let status = false;

    for (const option of options) {
        //console.log(await option.textContent())
        let value = await option.textContent();
        if (value.includes('France')) {
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();
    */
    //5. Select option using dropdown using loops

    const options = await page.$$('#country option')//captures all options into an array

    for (const option of options) {
        //console.log(await option.textContent())
        let value = await option.textContent();
        if (value.includes('France')) {
            await page.selectOption('#country', value);
            break;
        }
    }
    await page.waitForTimeout(5000);
})