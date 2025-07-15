const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: 'html', //[['list'], ['allure-playwright']],
  use: {
    baseURL: 'https://yummylibakery.netlify.app/',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'on',
    video: 'on'
  }
});
