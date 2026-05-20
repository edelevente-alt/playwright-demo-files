import { Page, Locator } from "@playwright/test";

export class OverviewPage {
    readonly page: Page;
    readonly finishButton: Locator;

constructor(page: Page) {
        this.page = page;
        this.finishButton = page.locator('#finish');
    }

async completeCheckout() {
    await this.finishButton.click();
    await this.page.waitForTimeout(2000);
}
}   