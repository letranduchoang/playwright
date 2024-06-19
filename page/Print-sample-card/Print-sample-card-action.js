const { test, Page, expect } = require('@playwright/test');

export class PrintSampleCard {
    constructor(page, context) {
        this.page = page
        this.context = context
        if (!page) {
            throw new Error('Page object is undefined')
        }
    }
    async selectPrinterAndClickPrint() {
        // Click help icon 
        await this.page.locator('a[tabindex="-1"]').locator('img[onpresskey="showHelp"]').nth(1).click({ timeout: 2000 });
        const printDialogFrame = await this.page.locator('#dialog-body').elementHandle()
        const printFrame = await printDialogFrame?.contentFrame();
        // Handle iframe (assuming ID is consistent)
        await printFrame?.waitForSelector('[name="selectedSYSGRP"]')
        await printFrame?.locator('[name="selectedSYSGRP"]').selectOption({ label: 'Preview' })
        await printFrame?.locator('input[value="Select"]').click();

        //Click print button 

        const [newPage] = await Promise.all([
            this.context.waitForEvent('page'),
            await this.page.locator('input[value="Print"]').nth(0).click()
        ])
        await newPage.waitForLoadState();
        // await expect(newPage.getByText('Sample Card Successfully Printed.')).toBeVisible();
    }
}
