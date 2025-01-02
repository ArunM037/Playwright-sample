import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';
require('dotenv').config();
export default defineConfig<TestOptions>({
  timeout: 30000,
  //globalTimeout: 60000,
  expect: {
    timeout: 5000,
    toHaveScreenshot: { maxDiffPixels: 50 }
  },
  fullyParallel: true,
  retries: 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['json', { outputFile: 'test-results/jsonReports.json' }],
    ['junit', { outputFile: 'test-results/junitReports.xml' }],
    //['allure-playwright']
    ['html']
  ],
  use: {
    globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop/',
    baseURL: process.env.Dev == '1' ? 'http://localhost:4200/'
      : process.env.Staging == '1' ? 'http://localhost:4201/'
        : 'http://localhost:4200/',


    trace: 'on-first-retry',
    actionTimeout: 20000,
    navigationTimeout: 25000,
    video: {
      mode: 'off',
      size: {
        width: 1920,
        height: 1080
      }
    }
  },


  projects: [
    {
      name: 'dev',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/'
      },
    },
    {
      name: 'chromium',
    },

    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        video: {
          mode: 'on',
          size: { width: 1920, height: 1080 }
        }
      },
    },
    {
      name: 'mobile',
      testMatch: 'testMobile.spec.ts',
      use: {
        ...devices['iPhone 13 Pro'],
        //viewport: { width: 414, height: 896 }
      }
    }
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:4200/',
  }
});
