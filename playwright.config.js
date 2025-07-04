// @ts-check
const { tr } = require('@faker-js/faker');
const { defineConfig, devices } = require('@playwright/test');
import { defineBddConfig } from 'playwright-bdd';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: [
    'features/steps/*.js', 
    'features/support/*.js'
  ],
});

module.exports = defineConfig({
  
  testDir,
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: 
      { 
      //...devices['Desktop Chrome'],
      video: 'on-first-retry',
      browserName: "chromium", 
      headless : false,
      //trace : "on",
      trace : "retain-on-failure",
      //screenshot : "on",
      screenshot : "only-on-failure",
      deviceScaleFactor: undefined,
      viewport: null,
      launchOptions: {
        args: ['--start-maximized']
      },
    },
},

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

   //  {
   //    name: 'webkit',
   //    use: { ...devices['Desktop Safari'] },
   //  },

    /* Test against mobile viewports. */
    //  {
    //    name: 'Mobile Chrome',
    //    use: { ...devices['Pixel 5'] },
    //  },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

