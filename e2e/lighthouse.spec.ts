import { test, chromium, devices } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';

test.use({ ...devices['Desktop Chrome'] });
test.describe('Lighthouse score', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
		await page.waitForLoadState('networkidle');
	});

	// test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only for lighthouse');

	test('Lighthouse score', async ({ page }) => {
		const browser = await chromium.launch({
			args: ['--remote-debugging-port=9222'],
			headless: true,
		});
		// const page = await browser.newPage();
		// await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
		await playAudit({
			page: page,
			thresholds: {
				performance: 90,
				accessibility: 90,
				'best-practices': 90,
				seo: 90,
				pwa: 1,
			},
			port: 9222,
			ignoreError: true,

			//opts: options,
			reports: {
				formats: {
					html: true,
					csv: false,
					json: false,
				},
				name: `ligthouse-${new Date().toISOString()}`, //defaults to `lighthouse-${new Date().getTime()}`
				directory: `${process.cwd()}/test-report`, //defaults to `${process.cwd()}/lighthouse`
			},
		});
		await page.close();
		await browser.close();
	});
});
