import { test, expect } from '@playwright/test';
import { HOST, LIST_CONTENT } from './utills/constants';

test.describe.parallel('List component is rendered correctly', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(HOST);
    });

    test('List has 21 items', async ({page}) => {
        const listItems = page.locator(`[data-id='listItem']`);
        await expect.soft(listItems).toHaveCount(21);
    });

    for (let i = 0; i < LIST_CONTENT.LENGTH; i++) {
        test(`Link ${i} works correctly`, async ({page}) => {
            const listItems = page.locator(`[data-id='listItem']`);
            const listItemElement = listItems.nth(i);
            await listItemElement.click();
            await expect.soft(page).toHaveURL(new RegExp(`^${LIST_CONTENT.LINK_URL}.*`));
        });
    }

    test('List item titles are not empty',
        async ({page}) => {
            const title = page.locator(`[data-id='listItemTitle']`);
            await expect.soft(title).toHaveCount(LIST_CONTENT.LENGTH);
        }
    );

    for (let i = 0; i < LIST_CONTENT.LENGTH; i++) {
        test(`List item ${i} img has correct src`, async ({page}) => {
            const imageElement = page.locator(`[data-id='listItemImage']`).nth(i);
            await expect.soft(imageElement).toHaveAttribute(
                'src',
                new RegExp(`^${LIST_CONTENT.LINK_URL}.*`)
            );
        });
    }

    for (let i = 0; i < LIST_CONTENT.LENGTH; i++) {
        test(`List item ${i} label has ${LIST_CONTENT.LABEL} text`, async ({page}) => {
            const labelElement = page.locator(`[data-id='listItemLabel']`).nth(i);
            await expect.soft(labelElement).toHaveText(LIST_CONTENT.LABEL);
        });
    }
});
