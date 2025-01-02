import { test } from '../test-options';
import { faker } from '@faker-js/faker';

//test.beforeEach(async ({ page }) => {
//    await page.goto('/')
//})

test('parameterized methods', async ({ pageManager }) => {
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`
    //await pm.navigateTo().formsLayoutsPage()
    await pageManager.onFormLayoutPage().submitusingthegridformwithCredentialsandselectoption(process.env.USERNAME, process.env.PASSWORD, 'Option 2')
    await pageManager.onFormLayoutPage().submitInlineFormwithCredentials(randomFullName, randomEmail, false)
})