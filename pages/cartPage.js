import { BasePage } from "./basePage";

export class CartPage extends BasePage {
    constructor(page) {
        super(page);
    }


    Containers = {
        CheckoutContainer: this.page.locator('#checkout_info_container > div > form > div.checkout_info')
    }

    FormBox = {
        FirstName: this.Containers.CheckoutContainer.locator('#first-name'),
        LastName: this.Containers.CheckoutContainer.locator('#last-name'),
        PostalCode: this.Containers.CheckoutContainer.locator('#postal-code')
    }

    Buttons = {
        checkoutButton: this.page.locator('#checkout'),
        continueButton: this.page.locator('#continue'),
        finishButton: this.page.locator('#finish')
    }

    Boxes = {
        congratsBox: this.page.locator('#checkout_complete_container')
    }



    // get checkoutButton() {
    //     return this.page.locator('#checkout')
    // }

    // get firstNameField() {
    //     return this.page.locator('#first-name')
    // }

    // get lastNameField() {
    //     return this.page.locator('#last-name')
    // }

    // get postalCodeFieled() {
    //     return this.page.locator('#postal-code')
    // }

    // get continueButton() {
    //     return this.page.locator('#continue')
    // }

    // get finishButton() {
    //     return this.page.locator('#finish')
    // }

    // get congratsBox() {
    //     return this.page.locator('#checkout_complete_container')
    // }

    // async checkout() {
    //     await this.checkoutButton.click()
    // }

    // async fillTheCheckoutForm() {
    //     await this.firstNameField.fill('Artemis')
    //     await this.lastNameField.fill('Macadam')
    //     await this.postalCodeFieled.fill('1337')
    //     await this.continueButton.click()
    //     await this.finishButton.click()
    // }

}

