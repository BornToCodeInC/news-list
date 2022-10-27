import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:3000');
});

test('Hero has De uitschieters van 2018 in title', async ({ page }) => {
  await expect(page).toHaveTitle(/De uitschieters van 2018/);

  const title = page.locator('h1');
  await expect(title).toHaveText('De uitschieters van 2018');
});

test('Hero has Waar hadden we het dit jaar allemaal over? in description', async ({ page }) => {
  const description = page.locator('.e2e-hero p');
  await expect(description).toContainText('Waar hadden we het dit jaar allemaal over?');
});

test('Hero has correct src in img', async ({ page }) => {
  const img = page.locator('.e2e-hero img').nth(0);
  await expect(img).toHaveAttribute(
      'src',
      'https://www.rtlboulevard.nl/sites/default/files/content/images/2018/12/27/thumbnail_Jaaroverzicht%20Banner.jpg'
  );
});

test('Hero has best gelezen in label', async ({ page }) => {
  const description = page.locator('.e2e-hero div').nth(0);
  await expect(description).toHaveText('best gelezen');
});
