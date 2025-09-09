import { Page } from '@playwright/test';

export class ClientWorkPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get clientWorkHeader() {
    return this.page.locator('h1:has-text("Client Work")');
  }
}