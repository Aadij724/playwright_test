import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.epam.com/');
  }

  async navigateToServices() {
    // Since direct click didn't work, we'll navigate to the Services page URL
    await this.page.goto('https://www.epam.com/services');
  }
}