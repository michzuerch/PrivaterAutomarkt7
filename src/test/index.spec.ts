import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
});

test('meta is correct', async ({ page }) => {
	await expect(page).toHaveTitle('Privater Automarkt Radolfzell');
});
