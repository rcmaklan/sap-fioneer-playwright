import { Page, Locator, expect } from '@playwright/test';

const SELECTORS = {
  getInTouch: { name: 'Get in touch' },
  acceptCookiesButton: 'button[aria-label="Accept all"]',
};

export class HomePage {
  readonly page: Page;
  readonly getInTouchButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getInTouchButtons = page.getByRole('link', { name: SELECTORS.getInTouch.name });
  }

  /**
   * Navigates to the base URL defined in Playwright config.
   */
  async goto() {
    await this.page.goto('/');
  }

  /**
   * Clicks the cookie acceptance button if it is visible.
   */
  async acceptCookiesIfVisible() {
    const acceptBtn = this.page.locator(SELECTORS.acceptCookiesButton).first();

    if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
    }
  }

  /**
   * Asserts that all visible "Get in touch" buttons have the expected yellow background.
   * @param expectedColor - The expected background color.
   */
  async expectAllGetInTouchButtonsAreYellow(expectedColor: string = 'rgb(255, 212, 60)') {
    const count = await this.getInTouchButtons.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const button = this.getInTouchButtons.nth(i);
      await expect(button).toBeVisible();
      await button.scrollIntoViewIfNeeded();

      const bgColor = await button.evaluate((el) =>
        window.getComputedStyle(el).backgroundColor
      );
      expect(bgColor).toBe(expectedColor);
    }
  }

  /**
   * Clicks the first visible "Get in touch" button on the page.
   */
  async clickFirstGetInTouchButton() {
    const button = this.getInTouchButtons.first();
    await expect(button).toBeVisible();
    await button.click();
  }

  /**
   * Opens a bookmark menu (e.g. "Products", "Solutions").
   * @param name - The visible text of the bookmark menu.
   */
  async openMainMenu(name: string) {
    const menuButton = this.page.getByRole('button', { name });
    await menuButton.waitFor({ state: 'visible' });
    await menuButton.click();
  }

  /**
   * Clicks a left-side panel section in a dropdown menu.
   * @param sectionName - Visible text inside the menu section (e.g. "Finance & ESG").
   */
  async clickSubPanelSection(sectionName: string) {
    const sectionButton = this.page.locator(`button:has-text("${sectionName}")`);
    await sectionButton.waitFor({ state: 'visible' });
    await sectionButton.click();
  }

  /**
   * Clicks the final link from the right-side expanded content.
   * @param linkName - The name of the link (e.g. "ESG KPI Engine").
   */
  async clickBookmarkLink(linkName: string) {
    const link = this.page.getByRole('link', { name: linkName });
    await link.waitFor({ state: 'visible' });
    await link.click();
  }

  /**
   * Navigates to a bookmark using bookmark > left-side panel > final link.
   * @param mainMenu - Top-level menu name
   * @param section - Subpanel section name
   * @param link - Final bookmark link
   */
  async navigateToBookmark(mainMenu: string, section: string, link: string) {
    await this.openMainMenu(mainMenu);
    await this.clickSubPanelSection(section);
    await this.clickBookmarkLink(link);
  }
}
