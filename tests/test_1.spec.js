// const { test, expect } = require('@playwright/test');


// const MainPage = require('../pages/mainPage');
// const LoginPage = require('../pages/loginPage');
// const CartPage = require('../pages/cartPage');





// test.describe('Sauce Demo Test', function() {
//     // test('loading page Swag Labs', async ({ page }) => {
//     //     await page.goto('https://www.saucedemo.com/inventory.html')
//     //     await expect(page, 'page title should be Swag Labs').toHaveTitle('Swag Labs')
//     // })

//     // test('logging in as standard user', async ({ page }) => {
//     //     const loginPage = new LoginPage(page);
//     //     const mainPage = new MainPage(page);
//     //     await loginPage.open();
//     //     await loginPage.login('standard_user', 'secret_sauce');
    
        
//     //     await expect(mainPage.productTitleLink, 'should load a page for standard user').toBeVisible()
//     // });

//     // test('adding to cart', async ({ page }) => {
//     //     const loginPage = new LoginPage(page);
//     //     const mainPage = new MainPage(page);
//     //     await loginPage.open();
//     //     await loginPage.login('standard_user', 'secret_sauce');
//     //     await mainPage.addToCart()
//     //     await expect(page.locator('#shopping_cart_container > a > span')).toBeVisible()
//     // })

//     // test('remove from cart', async ({ page }) => {
//     //     const loginPage = new LoginPage(page);
//     //     const mainPage = new MainPage(page);
//     //     await loginPage.open();
//     //     await loginPage.login('standard_user', 'secret_sauce');
//     //     await mainPage.addToCart()
//     //     await mainPage.removeFromCart()
//     //     await page.waitForSelector('#shopping_cart_container > a > span', {state: 'hidden'})
//     // })


//     // //GET BACK HERE LATER


//     // test('sorting', async ({ page }) => {
//     //     const mainPage = new MainPage(page);
//     //     const loginPage = new LoginPage(page);
//     //     await loginPage.open();
//     //     await loginPage.login('standard_user', 'secret_sauce');
//     //     await mainPage.sortProductsByName();

//     // // Получаем названия продуктов до сортировки
//     //     const productNamesBeforeSort = await mainPage.getProductNames();

//     // // Ждем некоторое время для обновления страницы
//     //     await page.waitForTimeout(1000);

//     // // Получаем названия продуктов после сортировки
//     //     const productNamesAfterSort = await mainPage.getProductNames();

//     // // Проверяем, что продукты отсортированы правильно
//     //     const sorted = productNamesBeforeSort.slice().sort();
//     //     await expect(productNamesAfterSort).toEqual(sorted);
//     // })


//     // test('side pannel', async ({ page }) => {
//     //     const mainPage = new MainPage(page)
//     //     const loginPage = new LoginPage(page);
//     //     await loginPage.open();
//     //     await loginPage.login('standard_user', 'secret_sauce');
//     //     await mainPage.openSideMenu()
//     //     await expect(mainPage.sideMenuBody).toBeVisible()
//     // })

//     // test('logout', async ({ page }) => {
//     //     const mainPage = new MainPage(page)
//     //     const loginPage = new LoginPage(page);
//     //     await loginPage.open();
//     //     await loginPage.login('standard_user', 'secret_sauce');
//     //     await mainPage.logout()
//     //     await expect(page.locator('#user-name')).toBeVisible()
//     // })

//     // test('linkedin referal', async ({ page }) => {
//     //     const mainPage = new MainPage(page)
//     //     const loginPage = new LoginPage(page);
//     //     await loginPage.open();
//     //     await loginPage.login('standard_user', 'secret_sauce');
//     //     await mainPage.withitLinkedin()
//     //     const [newPage] = await Promise.all([
//     //         page.waitForEvent('popup')
//     //     ]);
//     //     await expect(await newPage.title()).toContain('LinkedIn');
//     // })



//     // //WHY?????????????????????????????

//     // test('twitter referal', async ({ page }) => {
//     //     const mainPage = new MainPage(page)
//     //     const loginPage = new LoginPage(page);
//     //     await loginPage.open();
//     //     await loginPage.login('standard_user', 'secret_sauce');
//     //     await mainPage.withitTwitter()
//     //     const [newPage] = await Promise.all([
//     //         page.waitForEvent('popup')
//     //     ]);
//     //     await expect(await newPage.title()).toContain('X');
//     // })

//     // test('facebook referal', async ({ page }) => {
//     //     const mainPage = new MainPage(page)
//     //     const loginPage = new LoginPage(page);
//     //     await loginPage.open();
//     //     await loginPage.login('standard_user', 'secret_sauce');
//     //     await mainPage.withitFacebook()
//     //     const [newPage] = await Promise.all([
//     //         page.waitForEvent('popup')
//     //     ]);
//     //     await expect(await newPage.title()).toContain('Sauce Labs');
//     // })

//     //УРА ДАВАЙ ДА ДА ДАВАЙ ЛОМАЙ ВСЕМ МОИ ТЕСТЫ

//     // test('read about', async ({ page }) => {
//     //     const mainPage = new MainPage(page)
//     //     const loginPage = new LoginPage(page);
//     //     await loginPage.open();
//     //     await loginPage.login('standard_user', 'secret_sauce');
//     //     await mainPage.readAbout()
//     //     const title = await page.title()
//     //     await expect(title).toContain('Sauce Labs')
//     // })

//     // test('Making an order', async ({ page }) => {
//     //     const loginPage = new LoginPage(page);
//     //     const mainPage = new MainPage(page);
//     //     const cartPage = new CartPage(page)
//     //     await loginPage.open();
//     //     await loginPage.login('standard_user', 'secret_sauce');
//     //     await mainPage.addToCart()
//     //     await mainPage.goToCart()
//     //     await cartPage.checkout()
//     //     await cartPage.FormBox.FirstName.fill('Artemis')
//     //     await cartPage.FormBox.LastName.fill('Macadam')
//     //     await cartPage.FormBox.PostalCode.fill('1337')
//     //     await cartPage.continueButton.click()
//     //     await cartPage.finishButton.click()
//     //     await expect(cartPage.congratsBox).toBeVisible()
//     // })

//     test('Watching full product info', async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         const mainPage = new MainPage(page);
//         await loginPage.open();
//         await loginPage.login('standard_user', 'secret_sauce');
//         await mainPage.openProductInfo()
//         await expect(mainPage.productInfoBox).toBeVisible()
//     })
// })


