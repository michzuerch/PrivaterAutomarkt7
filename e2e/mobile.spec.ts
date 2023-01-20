import { test, expect } from '@playwright/test';

test.describe('Basics', () => {
	test.use({ viewport: { width: 600, height: 900 } });

	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
		await page.waitForLoadState('networkidle');
	});

	test('Page title is correct', async ({ page }) => {
		await expect(page).toHaveTitle('Privater Automarkt Radolfzell');
	});
});

test.describe('Links from index', () => {
	test.use({ viewport: { width: 600, height: 900 } });

	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
		await page.waitForLoadState('networkidle');
	});

	test('Check link/navigation for impressum', async ({ page }) => {
		const getImpressum = page.getByRole('link', { name: 'Impressum' });
		await expect(getImpressum).toHaveAttribute('href', '/PrivaterAutomarkt7/impressum/');
		await getImpressum.click();
		await expect(page).toHaveURL(/.*impressum/);
	});
	test('Check link/navigation for location', async ({ page }) => {
		const getLocation = page.getByRole('link', { name: 'Standort' });
		await expect(getLocation).toHaveAttribute('href', '/PrivaterAutomarkt7/location/');
		await getLocation.click();
		await expect(page).toHaveURL(/.*location/);
		//await page.screenshot({ path: 'location.png', fullPage: true })
	});
	test('Check link/navigation for gallery', async ({ page }) => {
		const getGallery = page.getByRole('link', { name: 'Galerie' });
		await expect(getGallery).toHaveAttribute('href', '/PrivaterAutomarkt7/gallery/');
		await getGallery.click();
		await expect(page).toHaveURL(/.*gallery/);
	});
});
