import { Locator, Page } from "@playwright/test";
import { HelperBase } from "../page-objects/helperBase";
export class NavigationPage extends HelperBase {


    constructor(page: Page) {
        super(page);
    }

    async formsLayoutsPage() {
        await this.selectGroupMenuitem('Forms')
        await this.page.getByText('Form Layouts').click()
        await this.waitForNumberOfSeconds(2)
    }

    async datepickerPage() {
        await this.selectGroupMenuitem('Forms')
        await this.page.getByText('Datepicker').click()
    }

    async smartTablePage() {
        this.selectGroupMenuitem('Tables & Data')
        await this.page.getByText('Smart Table').click()
    }

    async toastrPage() {
        await this.selectGroupMenuitem('Modal & Overlays')
        await this.page.getByText('Toastr').click()
    }

    async tooltipPage() {
        await this.selectGroupMenuitem('Modal & Overlays')
        await this.page.getByText('Tooltip').click()
    }

    private async selectGroupMenuitem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if (expandedState == "false") {
            await groupMenuItem.click()
        }
    }
}