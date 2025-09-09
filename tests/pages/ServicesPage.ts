import { Page } from '@playwright/test';

export class ServicesPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickExploreClientWork() {
    await this.page.click('text=Explore Our Client Work');
  }
}