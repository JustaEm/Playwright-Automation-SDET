const { test, expect } = require('@playwright/test')

test.skip('Alert with OK', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling alert handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();

    })

    await page.click("button[onclick='myFunctionAlert()']");
    await page.waitForTimeout(5000)

});

test.skip('Confirmation dialog-alert with OK and Cancel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
        //await dialog.dismiss();

    })

    await page.click("button[onclick='myFunctionConfirm()']");
    await expect(page.locator('#demo')).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000);

});

test('Prompt dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('John');//pass in a new value into the input box
        //await dialog.dismiss();

    })

    await page.click("button[onclick='myFunctionPrompt()']");
    await expect(page.locator('#demo')).toHaveText('Hello John! How are you today?')
    await page.waitForTimeout(5000);

});