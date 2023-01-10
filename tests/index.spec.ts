import { expect, test } from "@playwright/test";
import { Browser, chromium, Page } from "playwright";
import { playAudit } from "playwright-lighthouse";

let browser: Browser;
let page: Page;

// test.describe("Basics", () => {
//   test("Page title is correct", async ({ page }) => {
//     await page.goto("http://localhost:3000/privaterautomarkt7/");
//     await expect(page).toHaveTitle("Privater Automarkt Radolfzell");
//   });
// });

test.describe("Test lighthouse", () => {
  test("angular.io", async ({ page }) => {
    browser = await chromium.launch({
      args: ["--remote-debugging-port=9222"],
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/PrivaterAutomarkt7/");
    await playAudit({
      page: page,
      port: 9222,
      thresholds: {
        performance: 50,
        accessibility: 50,
        "best-practices": 50,
        seo: 50,
        // Todo: Fix PWA for lighthouse
        pwa: 30,
      },
      htmlReport: true,
      reportDir: `${process.cwd()}/reports`,
    });
    browser.close;
  });
});

// test.describe("Links from index", () => {
//   test("Check link/navigation for impressum", async ({ page }) => {
//     await page.goto("http://localhost:3000/privaterautomarkt7/");
//     const getImpressum = page.getByRole("link", { name: "Impressum" });
//     await expect(getImpressum).toHaveAttribute(
//       "href",
//       "/PrivaterAutomarkt7/impressum/",
//     );
//     await getImpressum.click();
//     await expect(page).toHaveURL(/.*impressum/);
//   });
//   test("Check link/navigation for location", async ({ page }) => {
//     await page.goto("http://localhost:3000/privaterautomarkt7/");
//     const getLocation = page.getByRole("link", { name: "Standort" });
//     await expect(getLocation).toHaveAttribute(
//       "href",
//       "/PrivaterAutomarkt7/location/",
//     );
//     await getLocation.click();
//     await expect(page).toHaveURL(/.*location/);
//     await page.screenshot({ path: "location.png", fullPage: true });
//   });
//   test("Check link/navigation for gallery", async ({ page }) => {
//     await page.goto("http://localhost:3000/privaterautomarkt7/");
//     const getGallery = page.getByRole("link", { name: "Galerie" });
//     await expect(getGallery).toHaveAttribute(
//       "href",
//       "/PrivaterAutomarkt7/gallery/",
//     );
//     await getGallery.click();
//     await expect(page).toHaveURL(/.*gallery/);
//   });
// });
//
// test.describe("Lighthouse", () => {
//   test("Lighthouse statistics", async ({ page }) => {
//     browser = await chromium.launch({
//       args: ["--remote-debugging-port=9222"],
//     });
//     await page.goto("http://localhost:3000/privaterautomarkt7/");
//     page = await browser.newPage();
//     await playAudit({
//       page: page,
//       port: 9222,
//       thresholds: {
//         performance: 50,
//         accessibility: 50,
//         "best-practices": 50,
//         seo: 50,
//         pwa: 50,
//       },
//     });
//     browser.close;
//   });
// });
