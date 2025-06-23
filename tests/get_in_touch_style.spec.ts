import { test } from '../utils/fixtures';

test('Get in touch buttons have yellow background', async ({ homePage }) => {
  await homePage.expectAllGetInTouchButtonsAreYellow();
});
