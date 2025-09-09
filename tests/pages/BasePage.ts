import { Page } from '@playwright/test';
import { allureStep } from '../../helpers/allureHelper';

export class BasePage {
  constructor(protected page: Page) {}

  /**
   * Navigate to a specific URL
   * @param url The URL to navigate to
   */
  @allureStep('Navigate to {url}')
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  /**
   * Wait for text to be visible on the page
   * @param text The text to wait for
   */
  @allureStep('Wait for text: {text}')
  async waitForText(text: string): Promise<void> {
    await this.page.waitForSelector(`text=${text}`, { state: 'visible' });
  }

  /**
   * Check if text is visible on the page
   * @param text The text to check for
   * @returns True if the text is visible, false otherwise
   */
  @allureStep('Check if text is visible: {text}')
  async isTextVisible(text: string): Promise<boolean> {
    const element = await this.page.$(`:text("${text}")`);
    return element !== null;
  }

  /**
   * Take a screenshot and attach it to the Allure report
   * @param name The name of the screenshot
   */
  @allureStep('Take screenshot: {name}')
  async takeScreenshot(name: string): Promise<void> {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await allureStep(`Screenshot: ${name}`, async () => {
      await allure.attachment(name, screenshot, 'image/png');
    });
  }
}