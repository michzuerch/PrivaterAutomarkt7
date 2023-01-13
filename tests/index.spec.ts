import { test, expect, chromium } from '@playwright/test'
import { playAudit } from 'playwright-lighthouse'

test.beforeEach(async ({ page }) => {
	await page.goto('http://localhost:3000/PrivaterAutomarkt7/')
	//await page.waitForLoadState('networkidle');
})

test.describe('Basics', () => {
	test('Page title is correct', async ({ page }) => {
		await expect(page).toHaveTitle('Privater Automarkt Radolfzell')
	})
})

test.describe('Links from index', () => {
	test('Check link/navigation for impressum', async ({ page }) => {
		const getImpressum = page.getByRole('link', { name: 'Impressum' })
		await expect(getImpressum).toHaveAttribute('href', '/PrivaterAutomarkt7/impressum/')
		await getImpressum.click()
		await expect(page).toHaveURL(/.*impressum/)
	})
	test('Check link/navigation for location', async ({ page }) => {
		const getLocation = page.getByRole('link', { name: 'Standort' })
		await expect(getLocation).toHaveAttribute('href', '/PrivaterAutomarkt7/location/')
		await getLocation.click()
		await expect(page).toHaveURL(/.*location/)
		await page.screenshot({ path: 'location.png', fullPage: true })
	})
	test('Check link/navigation for gallery', async ({ page }) => {
		const getGallery = page.getByRole('link', { name: 'Galerie' })
		await expect(getGallery).toHaveAttribute('href', '/PrivaterAutomarkt7/gallery/')
		await getGallery.click()
		await expect(page).toHaveURL(/.*gallery/)
	})
})

test.describe('Lighthouse score', () => {
	//test.use(config)
	test(`Lighthouse performance test`, async () => {
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
					csv: true,
					json: true
				},
				name: `ligthouse-${new Date().toISOString()}`, //defaults to `lighthouse-${new Date().getTime()}`
				directory: `${process.cwd()}/lighthouse` //defaults to `${process.cwd()}/lighthouse`
			}
		})
		await page.close()
		await browser.close()
	})
})
