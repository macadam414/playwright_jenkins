const { expect } = require('@playwright/test');
import { PageManager } from '../../pages/PageManager';
import { test } from '../BaseTest'


test.describe('Search tests @SearchTab', async () => {
    test('adding to cart', async ({ page, pageManager }) => {
        // await pageManager.loginPage.open()
        // await pageManager.loginPage.LoginBox.Login.fill('standard_user')
        // await pageManager.loginPage.LoginBox.Password.fill('secret_sauce')
        // await pageManager.loginPage.LoginBox.LoginButton.click()
        await pageManager.mainPage.Buttons.AddToCartButton.click()
        await expect(page.locator('#shopping_cart_container > a > span'), 'a badge with number of items in the cart should appear').toBeVisible()
    })

    test('remove from cart', async ({ page, pageManager }) => {
        // await pageManager.loginPage.open()
        // await pageManager.loginPage.LoginBox.Login.fill('standard_user')
        // await pageManager.loginPage.LoginBox.Password.fill('secret_sauce')
        // await pageManager.loginPage.LoginBox.LoginButton.click()
        await pageManager.mainPage.Buttons.AddToCartButton.click()
        await pageManager.mainPage.Buttons.RemoveFromCartButton.click()
        await page.waitForSelector('#shopping_cart_container > a > span', {state: 'hidden'}, 'a badge should not be visible')
    })

    test('Making an order', async ({ page, pageManager }) => {
        // await pageManager.loginPage.open()
        // await pageManager.loginPage.LoginBox.Login.fill('standard_user')
        // await pageManager.loginPage.LoginBox.Password.fill('secret_sauce')
        // await pageManager.loginPage.LoginBox.LoginButton.click()
        await pageManager.mainPage.Buttons.AddToCartButton.click()
        await pageManager.mainPage.PrimaryButtons.CartButton.click()
        await pageManager.cartPage.Buttons.checkoutButton.click()
        await pageManager.cartPage.FormBox.FirstName.fill('Artemis')
        await pageManager.cartPage.FormBox.LastName.fill('Macadam')
        await pageManager.cartPage.FormBox.PostalCode.fill('1337')
        await pageManager.cartPage.Buttons.continueButton.click()
        await pageManager.cartPage.Buttons.finishButton.click()
        await expect(pageManager.cartPage.Boxes.congratsBox, 'order should be placed succesfully').toBeVisible()
    })
})