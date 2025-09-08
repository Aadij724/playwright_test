import { Page } from '@playwright/test';

export class ClientWorkPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isClientWorkHeadingVisible() {
    return await this.page.getByRole('heading', { name: 'Client Work', exact: false }).isVisible();
  }
}