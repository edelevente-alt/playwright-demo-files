import { Page, Locator } from "@playwright/test";

export class OrderConfirmationPage {
    readonly page: Page;
    readonly backToHomePageButton: Locator;
    readonly orderConfirmationMessage: Locator;

constructor(page: Page) {
        this.page = page;
        this.backToHomePageButton = page.locator('#back-to-products');
        this.orderConfirmationMessage = page.locator('.complete-header');
    }

async completeCheckout() {
    await this.orderConfirmationMessage.waitFor();
    await this.backToHomePageButton.click();
    await this.page.waitForTimeout(2000);
}
}   