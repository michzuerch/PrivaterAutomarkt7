import { test, expect } from '@playwright/test';

test.describe('Basics', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
    await page.waitForLoadState('networkidle');
  });

  test.afterEach(async ({ page }) => {
    page.close;
  });

  test('Page title is correct', async ({ page }) => {
    await expect(page).toHaveTitle('Privater Automarkt Radolfzell');
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true });
  });
});

test.describe('Back to home', () => {
  test('Go to location and test link to home', async ({ page }) => {
    await page.goto('http://localhost:3000/PrivaterAutomarkt7/location/');
    await page.waitForLoadState('networkidle');
  });
});

test.describe('Links from index', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
    await page.waitForLoadState('networkidle');
  });
  test('gallery desktop', async ({ page }) => {
    const getGallery = page.getByRole('link', { name: 'Galerie' });
    await expect(getGallery).toHaveAttribute('href', '/PrivaterAutomarkt7/gallery/');
    await getGallery.click();
    await expect(page).toHaveURL(/.*gallery/);
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true });
  });

  test('location desktop', async ({ page }) => {
    const getLocation = page.getByRole('link', { name: 'Standort' });
    await expect(getLocation).toHaveAttribute('href', '/PrivaterAutomarkt7/location/');
    await getLocation.click();
    await expect(page).toHaveURL(/.*location/);
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true, timeout: 10 * 1000 });
  });

  test('impressum desktop', async ({ page }) => {
    const getImpressum = page.getByRole('link', { name: 'Impressum' });
    await expect(getImpressum).toHaveAttribute('href', '/PrivaterAutomarkt7/impressum/');
    await getImpressum.click();
    await expect(page).toHaveURL(/.*impressum/);
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true });
  });
});
