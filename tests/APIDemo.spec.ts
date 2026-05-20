import { test, expect } from '@playwright/test';

test('Get request example', async ({ playwright }) => {
  const request = await playwright.request.newContext({
    ignoreHTTPSErrors: true,
  });

  const response = await request.get('https://api.restful-api.dev/objects');
  console.log(await response.json());
  console.log(response.status());

  expect(response.status()).toBe(200);

  await request.dispose();
});