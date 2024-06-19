import { test as setup, expect } from '@playwright/test';
require('dotenv').config()

const authFile = './.auth/user.json';
const username = process.env.SCD_AUTH_USERNAME || ''
const password = process.env.SCD_AUTH_PASSWORD || ''

setup('authenticateB2b', async ({ page }) => {
    const baseURL = 'https://uat-iapps.talgroup.com/'

    // Perform authentication steps. Replace these actions with your own.
    await page.goto(`${baseURL}/scd/SMP2004/login.html`)
    await page.locator('input[name="userName"]').fill(username)
    await page.locator('input[name="password"]').fill(password)
    await page.locator('input[type="submit"]').click()

    // await page.waitForURL(`${baseURL}/scd/SMP2004/index.html`);
    // Alternatively, you can wait until the page reaches a state where all cookies are set.
    await expect(page.getByText('Sample Card System', { exact: true })).toBeVisible()

    // End of authentication steps.
    await page.context().storageState({ path: authFile });
});