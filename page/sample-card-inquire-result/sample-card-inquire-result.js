const { test, Page } = require('@playwright/test');

export class SampleCardInquireResult {
    constructor(page) {
        if (!page) {
            throw new Error('Page object is undefined')
        }
        this.page = page
        // this.openInquireSampleCard = openInquireSampleCard.bind(this)
    }
    async clickDetailbutton() {
        await this.page.getByRole('link', { name: 'Detail' }).click();
    }
}
