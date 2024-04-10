const { expect } = require('@playwright/test');
import { PageManager } from '../../pages/PageManager';
import { test } from '../BaseTest'

test.describe('Sauce Demo Test', function() {
    test('Watching full product info', async ({ page, pageManager }) => {
        await pageManager.mainPage.Buttons.ProductTitleLink.click()
        await expect(pageManager.mainPage.productInfoBox, 'should open full product description').toBeVisible()
    })
})