// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  timeout: 30*1000,//to change the default timeout of 30 seconds
  expect : {//it is for assertions
    timeout: 30*1000,
  },
  reporter:'html',
  use: {
    browserName: 'chromium',
    headless: false
  }

  
});
module.exports = config;

