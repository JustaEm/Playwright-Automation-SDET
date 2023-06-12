const { test, expect } = require('@playwright/test');

test('Assertion test', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const logoElement = await page.locator("img[alt='nopCommerce demo store']")

    await expect(logoElement).toBeVisible();

    const searchBox = await page.locator('#small-searchterms')

    //await expect(searchBox).toBeEnabled();

    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    //Checkbox
    const newsletterCheckbox = await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked()

    //Attribute
    const registerButton = await page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type', 'submit')

    //to.HaveText --> element matches text
    await expect(await page.locator("div[class='page-title'] h1")).toHaveText('Register')

    //to.ContainText --> element contains text (partial too) 
    await expect(await page.locator("div[class='page-title'] h1")).toContainText('Regis')

    //toHaveValue
    const emailInput = await page.locator('#Email')
    emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    //toHaveCount --> to count items in e.g. dropdown menu
    const options = await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(options).toHaveCount(13)

})