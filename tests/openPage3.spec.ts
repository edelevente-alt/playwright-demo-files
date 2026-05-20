import { test } from '@playwright/test'
import { PageManager } from '../PageObjects/PageManager';

test ('SauceDemo E2E scenario', async ({page}) => {
    const pm = new PageManager(page);

    // Open SauceDemo page and login with valid credentials
    await pm.instanceLoginPage().openSauceDemoPage();
    await page.waitForTimeout(2000);
    await pm.instanceHomePage().loginToSauceDemo('standard_user', 'secret_sauce');
    await page.waitForTimeout(2000);
    
    // Add product to cart
    await pm.instanceHomePage().addProductToCart();
    await page.waitForTimeout(2000);
    
    // Proceed to checkout
    await pm.instanceYourCartPage().proceedToCheckout();
    await page.waitForTimeout(2000);
    
    //Enter checkout information and complete the order
    await pm.instanceAccountInfoPage().enterCheckoutInformation('John', 'Doe', '12345');
    await page.waitForTimeout(2000);
    
    // Complete the checkout
    await pm.instanceAccountInfoPage().completeCheckout();

    //validate order confirmation message and navigate back to home page
    await pm.instanceOrderConfirmationPage().orderConfirmationMessage.waitFor();
    await pm.instanceOrderConfirmationPage().backToHomePageButton.click();
    await page.waitForTimeout(2000);

    // Logout from SauceDemo and close the page
    await pm.instanceHomePage().logoutFromSauceDemo();

    // Close the page
    await pm.instanceLoginPage().closeSauceDemoPage();
})