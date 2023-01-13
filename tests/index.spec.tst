import { chromium } from 'playwright'
// import type { Browser } from 'playwright'
import { playAudit } from 'playwright-lighthouse'
import { test } from '@playwright/test'
// import getPort from 'get-port'
//import lighthouseDesktopConfig from 'lighthouse/lighthouse-core/config/lr-desktop-config'
const lighthouseDesktopConfig = import('lighthouse/lighthouse-core/config/lr-desktop-config');

test(`Ligthouse performance test`, async () => {
	const browser = await chromium.launch({
		args: ['--remote-debugging-port=9222'],
		headless: true
	});
	const page = await browser.newPage();
	await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
	await playAudit({
		page: page,
		config: lighthouseDesktopConfig,
		thresholds: {
			performance: 80,
			accessibility: 50,
			'best-practices': 50,
			seo: 50,
		},
		port: 9222,
		ignoreError: true,

		//opts: options,
		reports: {
			formats: {
				html: true,
				csv: true,
				json: true,
			},
			name: `ligthouse-${new Date().toISOString()}`, //defaults to `lighthouse-${new Date().getTime()}`
			directory: `${process.cwd()}/lighthouse`, //defaults to `${process.cwd()}/lighthouse`
		},
	});
	await page.close();
	await browser.close();
})


