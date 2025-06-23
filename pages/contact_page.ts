import { Page, Locator, expect } from '@playwright/test';

const SELECTORS = {
  emailInput: 'input[name="email"]',
  errorMessage: '.hs-error-msg',
};

export class ContactPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator(SELECTORS.emailInput);
    this.errorMessage = page.locator(SELECTORS.errorMessage);
  }

  /**
   * Fills the email input field and triggers validation.
   * @param email - Email string to enter
   */
  async fillEmail(email: string) {
    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill(email);
    await this.emailInput.press('Tab');
  }

  /**
   * Asserts that an invalid email error message is displayed.
   */
  async expectInvalidEmailValidation() {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(/email must be formatted correctly/i);
  }
}



// import { Page, Locator, expect } from '@playwright/test';

// export class ContactPage {
//   readonly page: Page;
//   readonly emailInput: Locator;
//   readonly errorMessage: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.emailInput = page.locator('input[name="email"]');
//     this.errorMessage = page.locator('.hs-error-msg');
//   }

//   async fillEmail(email: string) {
//     await expect(this.emailInput).toBeVisible();
//     await this.emailInput.fill(email);
//     await this.emailInput.press('Tab');
//   }

//   async expectInvalidEmailValidation() {
//     await expect(this.errorMessage).toBeVisible();
//     await expect(this.errorMessage).toHaveText(/email must be formatted correctly/i);
//   }
// }
