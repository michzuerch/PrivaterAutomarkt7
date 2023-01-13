import type { PlaywrightTestConfig } from '@playwright/test'
//import { devices } from '@playwright/test'

const lighthouseConfig: PlaywrightTestConfig = {
	testDir: './tests',
	timeout: 60 * 1000,
	fullyParallel: true,
	workers: 4,
	reporter: [['html', { open: 'never' }], ['list']],
	use: {
		actionTimeout: 30 * 1000,
		headless: true,
		locale: 'de-DE',
		channel: 'chrome',
		baseURL: 'http://localhost:3000/PrivaterAutomarkt7/',
		viewport: { width: 600, height: 900 },
		ignoreHTTPSErrors: true,
		video: 'on',
		trace: 'on'
	},

	webServer: {
		command: 'npm run dev',
		url: 'http://localhost:3000/PrivaterAutomarkt7/',
		timeout: 30 * 1000,
		reuseExistingServer: true
	}
}

export default lighthouseConfig
