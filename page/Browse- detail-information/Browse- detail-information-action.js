const { test, Page } = require('@playwright/test');

export class BrowseDetailInformationAction {
    constructor(page) {
        if (!page) {
            throw new Error('Page object is undefined')
        }
        this.page = page
        // this.openInquireSampleCard = openInquireSampleCard.bind(this)
    }
    async clickPrintSampleCardButton() {
        const printLink = this.page.getByText('Print Sample Card').nth(0);
        await printLink.evaluate(node => node.removeAttribute('target'));
        await printLink.click();
    }
}
