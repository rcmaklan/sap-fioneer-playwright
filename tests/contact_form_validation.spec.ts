import { test } from '../utils/fixtures';

test('Shows error when invalid email is submitted in contact form', async ({ page, homePage, contactPage }) => {
    await homePage.clickFirstGetInTouchButton();
    await page.waitForURL(/contact-sales/);

    await contactPage.fillEmail('342323');
    await contactPage.expectInvalidEmailValidation();
});