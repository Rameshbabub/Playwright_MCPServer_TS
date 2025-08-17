import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config({ path: 'e2e/env/.env.example' });

export default defineConfig({
  testDir: './e2e/tests',
  retries: 1,
  use: {
    baseURL: 'https://www.ups.com',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]]
});
