const { test, Page } = require('@playwright/test');

export class SampleCardAction {
    constructor(page) {
        if (!page) {
            throw new Error('Page object is undefined')
        }
        this.page = page
        // this.openInquireSampleCard = openInquireSampleCard.bind(this)
    }
    async openInquireSampleCard() {
        await this.page.getByRole('link', { name: 'Inquire Sample Card' }).click();
    }
}
