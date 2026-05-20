import { Page, Locator } from '@playwright/test';

export class YourCartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;

constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('#checkout');
    }

async proceedToCheckout() {
    await this.checkoutButton.click();
    await this.page.waitForTimeout(2000);
}
}