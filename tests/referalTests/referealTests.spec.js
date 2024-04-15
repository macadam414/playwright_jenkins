const { expect } = require('@playwright/test');
import { PageManager } from '../../pages/PageManager';
import { test } from '../BaseTest'

test.describe('Sauce Labs referal links test', function() {
    test('linkedin referal', async ({ page, pageManager }) => {
        await pageManager.mainPage.PrimaryButtons.LinkedInRefButton.click()
        const [newPage] = await Promise.all([
            page.waitForEvent('popup')
        ]);
        await expect(await newPage.title()).toContain('LinkedIn');
    })



    test('facebook referal', async ({ page, pageManager }) => {
        await pageManager.mainPage.PrimaryButtons.FacebookRefButton.click()
        const [newPage] = await Promise.all([
            page.waitForEvent('popup')
        ]);
        await expect(await newPage.title()).toContain('Sauce Labs');
    })
})