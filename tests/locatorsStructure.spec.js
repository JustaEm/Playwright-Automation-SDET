//Locate single element:
//link/button
await page.locator('locator').click();
await page.click('locator');

//inputbox
await page.locator('locator').fill('value');
await page.locator('locator').type('value');
await page.fill('locator', 'value');
await page.type('locator', 'value');

//Locate multiple elements:
const elements = await page.$$('locator');
