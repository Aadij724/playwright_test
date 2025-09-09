import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { allureStep } from '../../helpers/allureHelper';

export class HomePage extends BasePage {
  private readonly servicesMenuSelector = '[data-test-id="header-services-menu"]';
  private readonly mobileMenuToggleSelector = '[data-test-id="mobile-menu-toggle"]';

  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to the EPAM homepage
   */
  @allureStep('Navigate to EPAM homepage')
  async navigateToHomepage(): Promise<void> {
    await this.navigateTo('https://www.epam.com/');
  }

  /**
   * Select "Services" from the header menu
   */
  @allureStep('Select Services from header menu')
  async selectServicesFromMenu(): Promise<void> {
    await this.page.click(this.servicesMenuSelector);
  }

  /**
   * Open the mobile menu
   */
  @allureStep('Open mobile menu')
  async openMobileMenu(): Promise<void> {
    await this.page.click(this.mobileMenuToggleSelector);
  }

  /**
   * Select "Services" from the mobile menu
   */
  @allureStep('Select Services from mobile menu')
  async selectServicesFromMobileMenu(): Promise<void> {
    await this.openMobileMenu();
    await this.page.click('[data-test-id="mobile-services-menu"]');
  }
}