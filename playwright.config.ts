import type { PlaywrightTestConfig } from '@playwright/test'
//import { devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
	testDir: './tests',
	timeout: 60 * 1000,
	fullyParallel: true,
	workers: 2,
	reporter: [['html', { open: 'never' }], ['list']],
	use: {
		actionTimeout: 30 * 1000,
		headless: true,
		locale: 'de-DE',
		baseURL: 'http://localhost:3000/PrivaterAutomarkt7/',
		/* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
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

export default config
