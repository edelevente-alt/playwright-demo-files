import { Page, Locator } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { OrderConfirmationPage } from "./OrderConfirmationPage";
import { OverviewPage } from "./OverviewPage";
import { AccountInfoPage } from "./AccountInfoPage";
import { YourCartPage } from "./YourCartPage";

export class PageManager {
    readonly page: Page;
    readonly loginPageInstance: LoginPage;
    readonly homePageInstance: HomePage;
    readonly yourCartPageInstance: YourCartPage;
    readonly accountInfoPageInstance: AccountInfoPage;
    readonly overviewPageInstance: OverviewPage;
    readonly orderConfirmationPageInstance: OrderConfirmationPage;

constructor(page: Page) {
        this.page = page;
        this.loginPageInstance = new LoginPage(this.page);
        this.homePageInstance = new HomePage(this.page);
        this.yourCartPageInstance = new YourCartPage(this.page);
        this.accountInfoPageInstance = new AccountInfoPage(this.page);
        this.overviewPageInstance = new OverviewPage(this.page);
        this.orderConfirmationPageInstance = new OrderConfirmationPage(this.page);
    }

instanceLoginPage() {
    return this.loginPageInstance;
}

instanceHomePage() {
    return this.homePageInstance;
}   

instanceYourCartPage() {
    return this.yourCartPageInstance;
}

instanceAccountInfoPage() {
    return this.accountInfoPageInstance;
}

instanceOverviewPage() {
    return this.overviewPageInstance;
}

instanceOrderConfirmationPage() {
    return this.orderConfirmationPageInstance;
}   

}