import { test as base } from '@playwright/test';
import { PageManager } from '../pages/PageManager';

export type TestOptions = { 
} 

export const test = base.extend < TestOptions & { pageManager: PageManager } > ({ 
    pageManager: async ({ page }, use ) => {
        const pageManager = new PageManager(page);
        await use(pageManager);
    },
    page: async ( { page }, use ) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        await use(page)
    }
})

