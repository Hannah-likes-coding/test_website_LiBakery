const { test, expect } = require('@playwright/test');

test('@Home homepage loads and has expected content', async ({ page }) => {
  await page.goto('https://yummylibakery.netlify.app/');
  await expect(page).toHaveTitle(/Li's Bakery/i);
  //await expect(page.locator('text=Product')).toBeVisible();
});
