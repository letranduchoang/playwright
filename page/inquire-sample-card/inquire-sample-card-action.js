const { test, Page } = require('@playwright/test');
// require('dotenv').config()
// const authFile = './.auth/user.json';
// const SamplePo = process.env.SCD_SAMPLEPO || ''
const SamplePo = 'SO-S-TAV-0004-24'
export class InputInquireCondition {
    constructor(page) {
        if (!page) {
            throw new Error('Page object is undefined')
        }
        this.page = page
        // this.openInquireSampleCard = openInquireSampleCard.bind(this)
    }
    async searchSamplePo() {
        await this.page.locator('input[name="radiobutton3"]').nth(1).click()

        await this.page.getByRole('cell', { name: 'TAL', exact: true }).getByRole('link').click()

        // Handle iframe (assuming ID is consistent)
        const dialogFrame = await this.page.locator('#dialog-body').elementHandle()
        const frame = await dialogFrame?.contentFrame();
        await frame?.locator('input[value="Cancel"]').click(); // Click Cancel in iframe
        // Clear date fields
        await this.page.locator('input[name="DATEFROM"]').clear()

        await this.page.locator('input[name="DATETO"]').clear();

        // Enter Sample PO and submit
        await this.page.locator('#SMPPO').fill(SamplePo)
        await this.page.getByRole('button', { name: 'Search' }).click()
    }
}
