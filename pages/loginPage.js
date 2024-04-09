import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page)
        this.page = page;
    }

    Containers = {
        MainContainer: this.page.locator('#login_button_container')
    }

    LoginBox = {
        Login: this.Containers.MainContainer.locator('#user-name'),
        Password: this.Containers.MainContainer.locator('#password'),
        LoginButton: this.Containers.MainContainer.locator('#login-button')
    }



    async open() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }
}

