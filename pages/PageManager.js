import {Page} from '@playwright/test';

import {LoginPage} from './loginPage'
import {CartPage} from './cartPage'
import {MainPage} from './mainPage'


export class PageManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page)
        this.cartPage = new CartPage(page)
        this.mainPage = new MainPage(page)


        
    }

    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc/');
    }
    async removeAll() {
        while ((await this.todoItems.count()) > 0) {
          await this.todoItems.first().hover();
          await this.todoItems.getByLabel('Delete').first().click();
        }
    }


}


// export const pageManager = new PageManager(page)
