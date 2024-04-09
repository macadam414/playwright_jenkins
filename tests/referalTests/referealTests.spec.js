const { test, expect } = require('@playwright/test');
import { PageManager } from '../../pages/PageManager';
let pageManager

test.describe('Sauce Labs referal links test', function() {
    test.beforeEach(async ({ page }) => {
        pageManager = new PageManager(page);
    });
    test('linkedin referal', async ({ page }) => {
        await pageManager.loginPage.open()
        await pageManager.loginPage.LoginBox.Login.fill('standard_user')
        await pageManager.loginPage.LoginBox.Password.fill('secret_sauce')
        await pageManager.loginPage.LoginBox.LoginButton.click()
        await pageManager.mainPage.PrimaryButtons.LinkedInRefButton.click()
        const [newPage] = await Promise.all([
            page.waitForEvent('popup')
        ]);
        await expect(await newPage.title()).toContain('LinkedIn');
    })



    //WHY?????????????????????????????

    test('twitter referal', async ({ page }) => {
        await pageManager.loginPage.open()
        await pageManager.loginPage.LoginBox.Login.fill('standard_user')
        await pageManager.loginPage.LoginBox.Password.fill('secret_sauce')
        await pageManager.loginPage.LoginBox.LoginButton.click()
        await pageManager.mainPage.PrimaryButtons.TwitterRefButton.click()
        const [newPage] = await Promise.all([
            page.waitForEvent('popup')
        ]);
        await expect(await newPage.title()).toContain('X');
    })

    test('facebook referal', async ({ page }) => {
        await pageManager.loginPage.open()
        await pageManager.loginPage.LoginBox.Login.fill('standard_user')
        await pageManager.loginPage.LoginBox.Password.fill('secret_sauce')
        await pageManager.loginPage.LoginBox.LoginButton.click()
        await pageManager.mainPage.PrimaryButtons.FacebookRefButton.click()
        const [newPage] = await Promise.all([
            page.waitForEvent('popup')
        ]);
        await expect(await newPage.title()).toContain('Sauce Labs');
    })
})