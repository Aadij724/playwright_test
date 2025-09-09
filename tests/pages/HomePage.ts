import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.navigateTo('https://www.epam.com/');
    await this.dismissCookiePopup();
  }

  async clickExploreOurClientWork() {
    await this.page.locator('text=Explore Our Client Work').click();
  }
}