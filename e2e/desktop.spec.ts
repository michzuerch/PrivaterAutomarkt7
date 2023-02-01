import { test, expect } from '@playwright/test';

test.describe('Basics', () => {
  test('Page title is correct', async ({ page }) => {
    await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle('Privater Automarkt Radolfzell');
    page.close();
  });
});

test.describe('Back to home', () => {
  test('Go to location and test link to home', async ({ page }) => {
    await page.goto('http://localhost:3000/PrivaterAutomarkt7/location/');
    await page.waitForLoadState('networkidle');
    await page.getByRole('link', { name: 'Galerie' }).click();
    await page.getByRole('link', { name: 'Privater Automarkt' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL('http://localhost:3000/PrivaterAutomarkt7/');
    page.close();
  });
});

test.describe('Links from index', () => {
  test('gallery desktop', async ({ page }) => {
    await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
    await page.waitForLoadState('networkidle');
    const getGallery = page.getByRole('link', { name: 'Galerie' });
    await expect(getGallery).toHaveAttribute('href', '/PrivaterAutomarkt7/gallery/');
    await getGallery.click();
    await expect(page).toHaveURL(/.*gallery/);
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true });
    page.close();
  });

  test('location desktop', async ({ page }) => {
    await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
    await page.waitForLoadState('networkidle');
    const getLocation = page.getByRole('link', { name: 'Standort' });
    await expect(getLocation).toHaveAttribute('href', '/PrivaterAutomarkt7/location/');
    await getLocation.click();
    await expect(page).toHaveURL(/.*location/);
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot({
      animations: 'disabled',
      fullPage: true,
      timeout: 10 * 1000,
      maxDiffPixelRatio: 0.1,
    });
    page.close();
  });

  test('impressum desktop', async ({ page }) => {
    await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
    await page.waitForLoadState('networkidle');
    const getImpressum = page.getByRole('link', { name: 'Impressum' });
    await expect(getImpressum).toHaveAttribute('href', '/PrivaterAutomarkt7/impressum/');
    await getImpressum.click();
    await expect(page).toHaveURL(/.*impressum/);
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true });
    page.close();
  });
});
