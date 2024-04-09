const { test, expect } = require('@playwright/test');
import { PageManager } from '../../pages/PageManager';
let pageManager

test.describe('Sauce Demo Test', function() {
    test.beforeEach(async ({ page }) => {
        pageManager = new PageManager(page);
    });
    test('Watching full product info', async ({ page }) => {
        await pageManager.loginPage.open()
        await pageManager.loginPage.LoginBox.Login.fill('standard_user')
        await pageManager.loginPage.LoginBox.Password.fill('secret_sauce')
        await pageManager.loginPage.LoginBox.LoginButton.click()
        await pageManager.mainPage.Buttons.ProductTitleLink.click()
        await expect(pageManager.mainPage.productInfoBox, 'should open full product description').toBeVisible()
    })
})