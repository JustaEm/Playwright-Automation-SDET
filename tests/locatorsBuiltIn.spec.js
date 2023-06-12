const { test, expect } = require('@playwright/test')

test('Built-in Locators', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //page.getByAltText() --> to locate an element, usually image, by its text alternative.
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();


    //page.getByPlaceholder() --> to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //page.getByRole() --> to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button', { type: 'submit' }).click();

    //page.getByText() --> to locate by text content.

    const name = await page.locator(".oxd-userdropdown-name").textContent();
    await expect(await page.getByText(name)).toBeVisible();

    /*
    page.getByLabel() --> to locate a form control by associated label's text.
    <label>Password <input type="password" /></label>
    await page.getByLabel('Password').fill('secret'); 
    page.getByTitle() to locate an element by its title attribute.
    page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
    https://playwright.dev/docs/locators#locate-by-label
    */


})