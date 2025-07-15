const { test, expect } = require('@playwright/test');

test('@SubsButton subscribe form submits correctly', async ({ page }) => {
  await page.goto('https://yummylibakery.netlify.app/2024/09/01/181/');

  
  const subscribeButton = page.locator('.wp-block-button a', { hasText: /Subscribe/i });

  await expect(subscribeButton).toBeVisible();
  await subscribeButton.click();

  await page.waitForTimeout(2000);
});
