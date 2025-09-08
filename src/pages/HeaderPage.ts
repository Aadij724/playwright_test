import { Page } from '@playwright/test';

export class HeaderPage {
  constructor(private page: Page) {}

  async selectServices() {
    await this.page.getByRole('link', { name: 'Services' }).click();
  }

  async clickExploreOurClientWork() {
    await this.page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  }

  async dismissCookieConsent() {
    const consentButton = this.page.getByRole('button', { name: 'Accept All' });
    if (await consentButton.isVisible()) {
      await consentButton.click();
    }
  }
}