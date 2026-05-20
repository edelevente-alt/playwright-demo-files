import { test } from '@playwright/test'
import { PageManager } from '../PageObjects/PageManager';

test ('SauceDemo E2E scenario 2', async ({page}) => {
    const pageManager = new PageManager(page);

    pageManager.instanceLoginPage().openSauceDemoPage();
    pageManager.instanceLoginPage().closeSauceDemoPage();
})