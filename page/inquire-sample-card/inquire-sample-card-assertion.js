const { expect } = require('@playwright/test');

export const verifyTitle = async (page) => {
    await expect(page.locator('.title')).toHaveText('Please input inquire condition');
}