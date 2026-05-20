import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly cartLogo: Locator;
    readonly sidebarMenuButton: Locator;
    readonly logoutButton: Locator;

constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartLogo = page.locator('.shopping_cart_link');
        this.sidebarMenuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('#logout_sidebar_link');
    }

async addProductToCart() {
    await this.addToCartButton.click();
    await this.page.waitForTimeout(2000);
    await this.cartLogo.click();
}

async logoutFromSauceDemo() {
    await this.sidebarMenuButton.click();
    await this.page.waitForTimeout(2000);
    await this.logoutButton.click();
    await this.page.waitForTimeout(2000);
}
}