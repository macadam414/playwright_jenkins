const { test, expect } = require('@playwright/test');
import { PageManager } from '../../pages/PageManager';
let pageManager

test.describe('Sauce Labs side pannel test', function() {
    test.beforeEach(async ({ page }) => {
        pageManager = new PageManager(page);
    });
    test('side pannel', async ({ page }) => {
        await pageManager.loginPage.open()
        await pageManager.loginPage.LoginBox.Login.fill('standard_user')
        await pageManager.loginPage.LoginBox.Password.fill('secret_sauce')
        await pageManager.loginPage.LoginBox.LoginButton.click()
        await pageManager.mainPage.PrimaryButtons.SideMenuButton.click()
        await expect(pageManager.mainPage.BodyContainers.SideMenuBody, 'side pannel should appear').toBeVisible()
    })

    test('logout', async ({ page }) => {
        await pageManager.loginPage.open()
        await pageManager.loginPage.LoginBox.Login.fill('standard_user')
        await pageManager.loginPage.LoginBox.Password.fill('secret_sauce')
        await pageManager.loginPage.LoginBox.LoginButton.click()
        await pageManager.mainPage.PrimaryButtons.SideMenuButton.click()
        await pageManager.mainPage.Buttons.LogoutButton.click()
        await expect(page.locator('#user-name'), 'should head to the login page').toBeVisible()
    })

    test('read about', async ({ page }) => {
        await pageManager.loginPage.open()
        await pageManager.loginPage.LoginBox.Login.fill('standard_user')
        await pageManager.loginPage.LoginBox.Password.fill('secret_sauce')
        await pageManager.loginPage.LoginBox.LoginButton.click()
        await pageManager.mainPage.PrimaryButtons.SideMenuButton.click()
        await pageManager.mainPage.Buttons.ReadAboutButton.click()
        const title = await page.title()
        await expect(title, 'should head to the info page').toContain('Sauce Labs')
    })
})