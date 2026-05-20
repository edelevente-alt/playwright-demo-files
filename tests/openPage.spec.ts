import { test } from '@playwright/test'
import { LoginPage } from '../PageObjects/LoginPage';
import { HomePage } from '../PageObjects/HomePage';
import { YourCartPage } from '../PageObjects/YourCartPage';
import { AccountInfoPage } from '../PageObjects/AccountInfoPage';
import { OverviewPage } from '../PageObjects/OverviewPage';
import { OrderConfirmationPage } from '../PageObjects/OrderConfirmationPage';

test ('SauceDemo E2E scenario', async ({page}) => {
    // Open SauceDemo page and login with valid credentials
    const loginPage = new LoginPage(page);
    await loginPage.openSauceDemoPage();
    await page.waitForTimeout(2000);
    await loginPage.loginToSauceDemo('standard_user', 'secret_sauce');
    await page.waitForTimeout(2000);
    
    // Add product to cart
    const homePage = new HomePage(page);
    await homePage.addProductToCart();
    await page.waitForTimeout(2000);
    
    // Proceed to checkout
    const yourCartPage = new YourCartPage(page);
    await yourCartPage.proceedToCheckout();
    await page.waitForTimeout(2000);
    
    //Enter checkout information and complete the order
    const accountInfoPage = new AccountInfoPage(page);
    await accountInfoPage.enterCheckoutInformation('John', 'Doe', '12345');
    await page.waitForTimeout(2000);
    
    // Complete the checkout
    const overviewPage = new OverviewPage(page);
    await overviewPage.completeCheckout();

    //validate order confirmation message and navigate back to home page
    const orderConfirmationPage = new OrderConfirmationPage(page);
    await orderConfirmationPage.orderConfirmationMessage.waitFor();
    await orderConfirmationPage.backToHomePageButton.click();
    await page.waitForTimeout(2000);

    // Logout from SauceDemo and close the page
    await homePage.logoutFromSauceDemo();

    // Close the page
    await loginPage.closeSauceDemoPage();
})