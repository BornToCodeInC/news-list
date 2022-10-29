import { test, expect } from '@playwright/test';
import { HERO_CONTENT, HOST } from './utills/constants';

test.describe.parallel('Hero component is rendered correctly', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(HOST);
    });

    test(`Hero has ${HERO_CONTENT.TITLE} in title`, async ({page}) => {
        await expect.soft(page).toHaveTitle(/De uitschieters van 2018/);

        const title = page.locator(`[data-id='heroTitle']`);
        await expect.soft(title).toHaveText(HERO_CONTENT.TITLE);
    });

    test(`Hero has ${HERO_CONTENT.DESCRIPTION} in description`, async ({page}) => {
        const description = page.locator(`[data-id='heroDescription']`);
        await expect.soft(description).toContainText(HERO_CONTENT.DESCRIPTION);
    });

    test('Hero has correct src in img', async ({page}) => {
        const img = page.locator(`[data-id='heroImage']`);
        await expect.soft(img).toHaveAttribute(
            'src',
            new RegExp(`^${HERO_CONTENT.IMAGE_SOURCE}.*`)
        );
    });

    test(`Hero has ${HERO_CONTENT.LABEL} in label`, async ({page}) => {
        const description = page.locator(`[data-id='heroLabel']`);
        await expect.soft(description).toHaveText(HERO_CONTENT.LABEL);
    });
});
