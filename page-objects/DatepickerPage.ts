import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class DatepickerPage extends HelperBase {


    constructor(page: Page) {
        super(page);
    }

    async selectCommonDatePickerFromToday(numberofDays: number) {
        const calendarInputField = this.page.getByPlaceholder('Form Picker')
        await calendarInputField.click()
        const dateToAssert = await this.selectDateInTheCalender(numberofDays)
        await expect(calendarInputField).toHaveValue(dateToAssert)
    }

    async selectDatepickerWithRangeFromToday(startDayFromToday: number, endDayFromToday: number) {
        const calendarInputField = this.page.getByPlaceholder('Range Picker')
        await calendarInputField.click()
        const dateToAssertStart = await this.selectDateInTheCalender(startDayFromToday)
        const dateToAssertEnd = await this.selectDateInTheCalender(endDayFromToday)
        const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`
        await expect(calendarInputField).toHaveValue(dateToAssert)
    }

    private async selectDateInTheCalender(numberofDays: number) {
        let date = new Date()
        date.setDate(date.getDate() + numberofDays)
        const expectedDay = date.getDate().toString()
        const expectedMonthShort = date.toLocaleString('En-US', { month: 'short' })
        const expectedMonthLong = date.toLocaleString('En-US', { month: 'long' })
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDay}, ${expectedYear}`
        let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`
        while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
            calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        }
        await this.page.locator('.day-cell.ng-star-inserted').getByText(expectedDay, { exact: true }).click()
        return dateToAssert
    }
}