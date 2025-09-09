import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async dismissCookiePopup() {
    const cookiePopup = this.page.locator('[data-cookie-popup]');
    if (await cookiePopup.isVisible()) {
      await this.page.click('[data-cookie-accept-all]');
    }
  }

  async clickHeaderLink(linkText: string) {
    await this.page.locator('.top-navigation__item-link', { hasText: linkText }).click();
  }

  async waitForNewTab() {
    return this.page.waitForEvent('popup');
  }
}