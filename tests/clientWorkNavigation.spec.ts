import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ClientWorkPage } from './pages/ClientWorkPage';

test.describe('EPAM Website Navigation', () => {
  test('Navigate to Client Work page and verify content', async ({ page }) => {
    // Initialize page objects
    const homePage = new HomePage(page);
    const servicesPage = new ServicesPage(page);
    const clientWorkPage = new ClientWorkPage(page);

    // Navigate to EPAM homepage
    await homePage.goto();

    // Navigate to Services page
    await homePage.navigateToServices();

    // Click on "Explore Our Client Work" link
    await servicesPage.clickExploreClientWork();

    // Verify that we're on the Client Work page
    await expect(page).toHaveURL(/.*\/services\/client-work/);

    // Verify that "Client Work" text is visible on the page
    await expect(clientWorkPage.clientWorkHeader).toBeVisible();
    await expect(clientWorkPage.clientWorkHeader).toContainText('Client Work');
  });
});