import { test, expect } from '@playwright/test'
import { PageManager } from '../page-objects/PageManager'
import { faker } from '@faker-js/faker'

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('navigate to form page @smoke', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formsLayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
})


test('parameterized methods @smoke', async ({ page }) => {
    const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`


    await pm.navigateTo().formsLayoutsPage()
    await pm.onFormLayoutPage().submitusingthegridformwithCredentialsandselectoption(process.env.USERNAME, process.env.PASSWORD, 'Option 2')
    await page.screenshot({ path: 'screenshot/formsLayoutsPage.png' })
    const buffer = await page.screenshot()
    console.log(buffer.toString('base64'))
    await pm.onFormLayoutPage().submitInlineFormwithCredentials(randomFullName, randomEmail, false)
    await page.locator('nb-card', { hasText: 'Inline form' }).screenshot({ path: 'screenshot/inlineFormPage.png' })
    await pm.navigateTo().datepickerPage()
    await pm.onDatepickerPage().selectCommonDatePickerFromToday(10)
    await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(10, 20)
})
