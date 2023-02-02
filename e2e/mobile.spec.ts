import { test, expect } from '@playwright/test';

test.describe('Basics', () => {
	test.use({ viewport: { width: 600, height: 900 } });

	test('Page title is correct', async ({ page }) => {
		await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
		await page.waitForLoadState('networkidle');
		await expect(page).toHaveTitle('Privater Automarkt Radolfzell');
		page.close();
	});
});

test.describe('Back to home', () => {
	test.use({ viewport: { width: 600, height: 900 } });

	test('Go to location and test link to home', async ({ page }) => {
		await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
		await page.waitForLoadState('networkidle');
		await page.click("//div[@class='dropdown']");
		await page.getByRole('link', { name: 'Galerie' }).click();
		await page.waitForLoadState('networkidle');
		await page.getByRole('link', { name: 'Privater Automarkt' }).click();
		await page.waitForLoadState('networkidle');
		await expect(page).toHaveURL('http://localhost:3000/PrivaterAutomarkt7/');
		page.close();
	});
});

test.describe('Links from index', () => {
	test.use({ viewport: { width: 600, height: 900 } });

	test('gallery mobile', async ({ page }) => {
		await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
		await page.waitForLoadState('networkidle');
		await page.click("//div[@class='dropdown']");
		await page.getByRole('link', { name: 'Galerie' }).click();
		await expect(page).toHaveURL(/.*gallery/);

		await page.waitForLoadState('networkidle');
		await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true });
		page.close();
	});

	test('location mobile', async ({ page }) => {
		await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
		await page.waitForLoadState('networkidle');
		await page.click("//div[@class='dropdown']");
		await page.getByRole('link', { name: 'Standort' }).click();
		await expect(page).toHaveURL(/.*location/);
		await page.waitForLoadState('networkidle');
		await expect(page).toHaveScreenshot({
			animations: 'disabled',
			fullPage: true,
			maxDiffPixelRatio: 0.1,
		});
		page.close();
	});

	test('impressum mobile', async ({ page }) => {
		await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
		await page.waitForLoadState('networkidle');
		await page.click("//div[@class='dropdown']");
		await page.getByRole('link', { name: 'Impressum' }).click();
		await expect(page).toHaveURL(/.*impressum/);

		await page.waitForLoadState('networkidle');
		await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true });
		page.close();
	});
});
