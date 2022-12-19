import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
	testDir: './tests',
	/* Maximum time one test can run for. */
	timeout: 30 * 1000,
	expect: {
		/**
		 * Maximum time expect() should wait for the condition to be met.
		 * For example in `await expect(locator).toHaveText();`
		 */
		timeout: 5000,
	},
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	reporter: 'html',
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		headless: true,
		baseURL: 'http://localhost:3000/PrivaterAutomarkt7/',
		/* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
		actionTimeout: 0,
		ignoreHTTPSErrors: true,
		video: 'on',
		trace: 'on-first-retry',
	},

	webServer: {
		command: 'npm run dev',
		url: 'http://localhost:3000/PrivaterAutomarkt7/',
		timeout: 120 * 1000,
		reuseExistingServer: !process.env.CI,
	},

	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
			},
		},

		{
			name: 'firefox',
			use: {
				...devices['Desktop Firefox'],
			},
		},

		{
			name: 'webkit',
			use: {
				...devices['Desktop Safari'],
			},
		},
		/*
		{
			name: 'Mobile Chrome',
			use: {
				...devices['Pixel 5'],
			},
		},
        */
	],
};

export default config;
