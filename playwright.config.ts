import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
	outputDir: './playwright-report',
	testDir: './tests',
	timeout: 60 * 1000,
	fullyParallel: true,
	workers: 4,
	reporter: process.env.CI
		? 'github'
		: [['html', { open: 'on-failure', outputFolder: 'test-report' }], ['list']],
	use: {
		actionTimeout: 30 * 1000,
		headless: true,
		locale: 'de-DE',
		baseURL: 'http://localhost:3000/PrivaterAutomarkt7/',
		viewport: { width: 600, height: 900 },
		ignoreHTTPSErrors: true,
		video: 'on',
		trace: 'on'
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		}
	],

	webServer: {
		command: 'npm run dev',
		url: 'http://localhost:3000/PrivaterAutomarkt7/',
		timeout: 30 * 1000,
		reuseExistingServer: true
	}
}

export default config
