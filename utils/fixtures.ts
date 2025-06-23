import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home_page';
import { ContactPage } from '../pages/contact_page';

type MyFixtures = {
  homePage: HomePage;
  contactPage: ContactPage;
};
/**
 * The `homePage` fixture navigates to the Base URL and accepts cookies before tests.
 */
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.acceptCookiesIfVisible();
    await use(homePage);
  },

/**
 * The `contactPage` fixture provides access to the ContactPage object.
 */
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await use(contactPage);
  },
});

export { expect } from '@playwright/test';
