const { test, expect } = require('@playwright/test');
import { PageManager } from '../../pages/PageManager';
let pageManager

test.describe('Sauce Demo Test', function() {
    test.beforeEach(async ({ page }) => {
        pageManager = new PageManager(page);
    });
    test('loading page Swag Labs', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/inventory.html')
        await expect(page, 'page title should be Swag Labs').toHaveTitle('Swag Labs')
    })

    test('logging in as standard user', async ({ page }) => {
        await pageManager.loginPage.open()
        await pageManager.loginPage.LoginBox.Login.fill('standard_user')
        await pageManager.loginPage.LoginBox.Password.fill('secret_sauce')
        await pageManager.loginPage.LoginBox.LoginButton.click()
        await expect(pageManager.mainPage.Buttons.ProductTitleLink, 'should load a page for standard user').toBeVisible()
    });
})