import { test, expect } from '@playwright/test';

test('open Bing and verify page title', async ({ page }) => {
  await page.goto('https://www.bing.com');
  await expect(page).toHaveTitle('Search - Microsoft Bing');
  await page.close();
});
