import { test, expect } from '@playwright/test';

test('EPAM Client Work visibility test', async ({ page }) => {
  // Navigate to EPAM website
  await page.goto('https://www.epam.com/');

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Maximize the window
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Click on "Services" in the header menu
  await page.click('text=Services');

  // Wait for the page to change
  await page.waitForNavigation();

  // Click on "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Wait for the page to change
  await page.waitForNavigation();

  // Verify that "Client Work" text is visible on the page
  await expect(page.locator('text=Client Work')).toBeVisible();
});