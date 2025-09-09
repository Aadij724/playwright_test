import { test, expect } from '@playwright/test';

test('EPAM Client Work visibility test', async ({ page }) => {
  // Navigate to EPAM website
  await page.goto('https://www.epam.com/');

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Maximize the window
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Click on the "Services" text in the header menu
  await page.evaluate(() => {
    const servicesLink = document.querySelector('a[href="/services"]');
    if (servicesLink) {
      servicesLink.click();
    }
  });

  // Wait for the page to change
  await page.waitForNavigation();

  // Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Wait for the page to change
  await page.waitForNavigation();

  // Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.evaluate(() => {
    return document.evaluate("//*[contains(text(), 'Client Work')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null;
  });
  
  expect(clientWorkText).toBe(true);
});