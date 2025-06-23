import { test, expect } from '../utils/fixtures';

test('Navigates to ESG KPI Engine page from Finance & ESG menu', async ({ page, homePage }) => {
  await homePage.navigateToBookmark('Products', 'Finance & ESG', 'ESG KPI Engine');

  const expectedPath = '/finance-esg/esg-kpi-engine/';
  await expect(page).toHaveURL(new RegExp(expectedPath));
});
