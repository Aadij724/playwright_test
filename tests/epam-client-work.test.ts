import { test, expect } from '@playwright/test';

test('EPAM Client Work visibility test', async ({ page }) => {
  // Open Chrome browser and navigate to EPAM website
  await page.goto('https://www.epam.com/');

  // Wait for the page to load and maximize the window
  await page.waitForLoadState('networkidle');
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Click on the "Services" text in the header menu
  await page.click('text=Services');

  // Wait for the page to change and click the "Explore Our Client Work" link
  await page.waitForNavigation();
  await page.click('text=Explore Our Client Work');

  // Wait for the page to change and verify that the "Client Work" text is visible
  await page.waitForNavigation();
  await expect(page.locator('text=Client Work')).toBeVisible();
});