import { Page } from '@playwright/test';

export class ClientWorkPage {
  constructor(private page: Page) {}

  async isClientWorkHeadingVisible() {
    return this.page.getByRole('heading', { name: /Client Work/i }).isVisible();
  }
}