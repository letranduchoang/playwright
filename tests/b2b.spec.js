// @ts-check
const { test, expect } = require('@playwright/test');
const SamplePo = 'SO-S-TAV-0004-24'
const SamplePO2 = 'SO-S-TAV-0001-24'

import { verifyTitle } from '../page/inquire-sample-card/inquire-sample-card-assertion';
import { SampleCardAction } from '../page/sample-card/sameple-card-action';
import { InputInquireCondition } from '../page/inquire-sample-card/inquire-sample-card-action';
import { SampleCardInquireResult } from '../page/sample-card-inquire-result/sample-card-inquire-result';
import { BrowseDetailInformationAction } from '../page/Browse- detail-information/Browse- detail-information-action';
import { PrintSampleCard } from '../page/Print-sample-card/Print-sample-card-action';

test.describe('demo playwright b2b', () => {
  test.use({ storageState: './.auth/user.json' })
  test('tc 01, b2b scd', async ({ page, context }) => {
    const sampleCardAction = new SampleCardAction(page)
    const inputInquireCondition = new InputInquireCondition(page)
    const sampleCardInquireResult = new SampleCardInquireResult(page)
    const browseDetailInformationAction = new BrowseDetailInformationAction(page)
    const printSampleCard = new PrintSampleCard(page, context)
    // Open the initial page
    const baseURL = 'https://uat-iapps.talgroup.com/'

    await page.goto(`${baseURL}scd/SMP2004/index.html`); // Replace with your actual URL
    // Verify "Sample Card Function" title
    await expect(page.getByText('Welcome to use Sample Card11')).toBeVisible()
    await page.getByRole('link', { name: 'SAMPLE CARD' }).click()
    // Click "Inquire Sample Card" link

    await sampleCardAction.openInquireSampleCard()
    // Verify "Please input inquire condition" title

    await verifyTitle(page)
    // Handle iframe (assuming ID is consistent)
    // Clear date fields
    // Enter Sample PO and submit
    await inputInquireCondition.searchSamplePo()
    // Click "Detail"
    await sampleCardInquireResult.clickDetailbutton()
    await expect(page.getByText('Browse detail information')).toBeVisible()
    // Click "Print Sample Card" (handle potential target attribute)
    await browseDetailInformationAction.clickPrintSampleCardButton()
    // Click help icon 
    // Handle iframe (assuming ID is consistent)
    await printSampleCard.selectPrinterAndClickPrint()

  });
})




