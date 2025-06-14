import { test as base, createBdd } from 'playwright-bdd';
const { PageManager } = require('../../pageobjects/PageManager');


export const methods = base.extend({
    pageManager: async ({ page }, use) => {
        const pageManager = new PageManager(page);
        await use(pageManager);
    },
});

export const { Given, Then, When, Before } = createBdd(methods);



