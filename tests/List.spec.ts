import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('localhost:3000');
});

test('List has 21 items', async ({ page }) => {
    const listItems = page.locator('ul .e2e-li');
    await expect(listItems).toHaveCount(21);
});

test('Link works correctly', async ({ page }) => {
    const listItem = page.locator('ul .e2e-li').nth(0);
    await listItem.click();
    await expect(page).toHaveURL(/.*www.rtlboulevard.nl/);
});

test('The first list element has rijntje Oosterhuis onherkenbaar veel afgevallen in title', async ({ page }) => {
    const title = page.locator('.e2e-li h2').nth(0);
    await expect(title).toContainText('Trijntje Oosterhuis onherkenbaar veel afgevallen');
});

test('The first list element has correct src in img', async ({ page }) => {
    const img = page.locator('.e2e-li img').nth(0);
    await expect(img).toHaveAttribute(
        'src',
        'https://www.rtlboulevard.nl/sites/default/files/styles/inline_small/public/content/images/2018/06/19/ANP-56919532.jpg?itok=uYTfDZPr'
    );
});

test('The first list element has De uitschieters van 2018 in label', async ({ page }) => {
    const label = page.locator('.e2e-li div div').nth(0);
    await expect(label).toHaveText('De uitschieters van 2018');
});
