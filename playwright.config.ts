import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './src/test',
	timeout: 30 * 1000,
	expect: {
		timeout: 5000,
	},
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: 0,
	workers: 8,
	reporter: 'html',
	use: {
		headless: true,
		baseURL: 'http://localhost:3000/PrivaterAutomarkt7/',
		actionTimeout: 0,
		ignoreHTTPSErrors: true,
		video: 'on',
		trace: 'on-first-retry',
	},
	webServer: {
		command: 'npm run dev',
		url: 'http://localhost:3000/PrivaterAutomarkt7/',
		timeout: 120 * 1000,
		reuseExistingServer: true,
	},
};

export default config;
