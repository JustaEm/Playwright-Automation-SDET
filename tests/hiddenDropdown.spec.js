const { test, expect } = require('@playwright/test')

test('Hidden options dropdown', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();
    await page.locator('.oxd-main-menu-item.active').click()

    //click on dropdown
    await page.locator("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)").click()
    //wait for options
    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span")

    for (let option of options) {
        const jobTitle = await option.textContent();
        //console.log(jobTitle);
        if (jobTitle.includes('QA Engineer')) {
            await option.click()
            break;
        }
    }
    await page.waitForTimeout(3000);

})