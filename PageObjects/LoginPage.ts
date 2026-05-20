import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly userNameTextFiled: Locator;
    readonly passwordTextFiled: Locator;
    readonly loginButton: Locator;

constructor(page: Page) {
        this.page = page;
        this.userNameTextFiled = page.locator('#user-name');
        this.passwordTextFiled = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

async openSauceDemoPage() {
    await this.page.goto('https://www.saucedemo.com/');
}

async loginToSauceDemo(userName: string, password: string) {
    await this.userNameTextFiled.fill(userName);
    await this.passwordTextFiled.fill(password);
    await this.page.waitForTimeout(2000);
    await this.loginButton.click();
}

async closeSauceDemoPage() {
    await this.page.close();
}
}