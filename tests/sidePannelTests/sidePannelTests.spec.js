const { expect } = require('@playwright/test');
import { PageManager } from '../../pages/PageManager';
import { test } from '../BaseTest'

test.describe('Sauce Labs side pannel test', function() {
    test('side pannel', async ({ page, pageManager }) => {
        await pageManager.mainPage.PrimaryButtons.SideMenuButton.click()
        await expect(pageManager.mainPage.BodyContainers.SideMenuBody, 'side pannel should appear').toBeVisible()
    })

    test('logout', async ({ page, pageManager }) => {
        await pageManager.mainPage.PrimaryButtons.SideMenuButton.click()
        await pageManager.mainPage.Buttons.LogoutButton.click()
        await expect(page.locator('#user-name'), 'should head to the login page').toBeVisible()
    })

    test('read about', async ({ page, pageManager }) => {
        await pageManager.mainPage.PrimaryButtons.SideMenuButton.click()
        await pageManager.mainPage.Buttons.ReadAboutButton.click()
        const title = await page.title()
        await expect(title, 'should head to the info page').toContain('Sauce Labs')
    })
})