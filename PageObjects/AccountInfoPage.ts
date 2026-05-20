import { Page, Locator } from "@playwright/test";

export class AccountInfoPage {
    readonly page: Page;
    readonly firstNameTextField: Locator;
    readonly lastNameTextField: Locator;
    readonly postalCodeTextField: Locator;
    readonly continueButton: Locator;

constructor(page: Page) {
        this.page = page;
        this.firstNameTextField = page.locator('#first-name');
        this.lastNameTextField = page.locator('#last-name');
        this.postalCodeTextField = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
    }

async enterCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameTextField.fill(firstName);
    await this.lastNameTextField.fill(lastName);
    await this.postalCodeTextField.fill(postalCode);
    await this.page.waitForTimeout(2000);
    await this.continueButton.click();
}
}   