import { test, expect } from '@playwright/test';

test.describe('Basics', () => {
  test.use({ viewport: { width: 600, height: 900 } });

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
  test.use({ viewport: { width: 600, height: 900 } });

  test('Go to location and test link to home', async ({ page }) => {
    await page.goto('http://localhost:3000/PrivaterAutomarkt7/location/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true });
  });
});

test.describe('Links from index', () => {
  test.use({ viewport: { width: 600, height: 900 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/PrivaterAutomarkt7/');
    await page.waitForLoadState('networkidle');
  });
  test('gallery mobile', async ({ page }) => {
    await page.click("//div[@class='dropdown']");
    await page.getByRole('link', { name: 'Galerie' }).click();
    await expect(page).toHaveURL(/.*gallery/);
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true });
  });

  test('location mobile', async ({ page }) => {
    await page.click("//div[@class='dropdown']");
    await page.getByRole('link', { name: 'Standort' }).click();
    await expect(page).toHaveURL(/.*location/);
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true });
  });

  test('impressum mobile', async ({ page }) => {
    await page.click("//div[@class='dropdown']");
    await page.getByRole('link', { name: 'Impressum' }).click();
    await expect(page).toHaveURL(/.*impressum/);
    await expect(page).toHaveScreenshot({ animations: 'disabled', fullPage: true });
  });
});
