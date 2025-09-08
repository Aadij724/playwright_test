import { Page } from '@playwright/test';

export class HeaderPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectServices() {
    await this.page.getByRole('link', { name: 'Services' }).hover();
  }

  async clickExploreOurClientWork() {
    await this.page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  }
}