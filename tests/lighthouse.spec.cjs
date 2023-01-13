const { playAudit } = require('playwright-lighthouse');
const { test, chromium } = require('@playwright/test');
const lighthouseDesktopConfig = require('lighthouse/lighthouse-core/config/lr-desktop-config');
const { thresholds } = require('../data/thresholdData');
const { URLs } = require("../resources/urls.json");

const options = {
	loglevel: "info",
}

URLs.forEach(url => {
	test(`Ligthouse performance test for ${url}`, async () => {
		const browser = await chromium.launch({
			args: ['--remote-debugging-port=9222'],
			headless: true
		});
		const page = await browser.newPage();
		await page.goto(url);
		await playAudit({
			page: page,
			config: lighthouseDesktopConfig,
			thresholds: thresholds,
			port: 9222,
			opts: options,
			reports: {
				formats: {
					html: true, //defaults to false
				},
				name: `ligthouse-${new Date().toISOString()}`, //defaults to `lighthouse-${new Date().getTime()}`
				directory: `${process.cwd()}/lighthouse`, //defaults to `${process.cwd()}/lighthouse`
			},
		});
		await page.close();
		await browser.close();
	})
});
