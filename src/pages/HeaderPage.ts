import { Page } from '@playwright/test';

export class HeaderPage {
  constructor(private page: Page) {}

  async selectServices() {
    await this.page.getByRole('link', { name: 'Services' }).hover();
  }

  async clickExploreOurClientWork() {
    await this.page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  }

  async dismissCookieConsent() {
    const consentButton = this.page.getByRole('button', { name: 'Accept All' });
    if (await consentButton.isVisible({ timeout: 5000 })) {
      await consentButton.click();
    }
  }
}