import { test, chromium } from '@playwright/test'
import { playAudit } from 'playwright-lighthouse'

test.beforeEach(async ({ page }) => {
	await page.goto('http://localhost:3000/PrivaterAutomarkt7/')
	//await page.waitForLoadState('networkidle');
})

test.describe('Lighthouse score', () => {
	test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only for lighthouse')

	test('Lighthouse score', async () => {
		const browser = await chromium.launch({
			args: ['--remote-debugging-port=9222'],
			headless: true
		})
		const page = await browser.newPage()
		await page.goto('http://localhost:3000/PrivaterAutomarkt7/')
		await playAudit({
			page: page,
			thresholds: {
				performance: 80,
				accessibility: 50,
				'best-practices': 50,
				seo: 50
			},
			port: 9222,
			ignoreError: true,

			//opts: options,
			reports: {
				formats: {
					html: true,
					csv: false,
					json: false
				},
				//name: `ligthouse-${new Date().toISOString()}`, //defaults to `lighthouse-${new Date().getTime()}`
				name: `ligthouse`, //defaults to `lighthouse-${new Date().getTime()}`
				directory: `${process.cwd()}/lighthouse` //defaults to `${process.cwd()}/lighthouse`
			}
		})
		await page.close()
		await browser.close()
	})
})