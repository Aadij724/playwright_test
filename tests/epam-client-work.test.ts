import { test, expect } from '@playwright/test';

test('EPAM Client Work visibility test', async ({ page }) => {
  // Navigate to EPAM website
  await page.goto('https://www.epam.com/');

  // Wait for the page to load and maximize the window
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => {
    window.resizeTo(window.screen.availWidth, window.screen.availHeight);
  });

  // Click on the "Services" text in the header menu
  await page.click('text=Services');

  // Wait for the page to change
  await page.waitForNavigation();

  // Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Wait for the page to change
  await page.waitForNavigation();

  // Verify that the "Client Work" text is visible on the page
  await expect(page.locator('text=Client Work')).toBeVisible();
});