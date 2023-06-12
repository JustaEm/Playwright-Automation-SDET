
// Ways to import modules. 

//1.
//const { test, expect } = require('@playwright/test')

//2.
import { test, expect } from '@playwright/test'
test('Locators', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');

    //click on login button - property, 2 methods:

    //1
    await page.locator('#login2').click(); //

    //2. 
    //await page.click('#login2');

    //provide user name:
    //await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginusername', 'pavanol');
    //or page.type('#loginusername', 'pavanol');

    //await page.locator('#loginpassword').fill('testa@123');
    await page.fill('#loginpassword', 'test@123');

    //click on login button:
    await page.click("button[onclick='logIn()']");

    //verify logout link is visible
    const logoutLink = await page.locator('#logout2');

    await expect(logoutLink).toBeVisible();

    await page.close(); 

})