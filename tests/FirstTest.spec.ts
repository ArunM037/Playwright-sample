import test, { Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
});

test('Locator Syntax rules' , async ({ page }) => { 
    //by tag name 
    page.locator('input')

    //by Id
    page.locator('#inputEmail')

    // By class
    page.locator('.shape-rectangle')

    //By attribute
    page.locator('[placeholder="Email"]')

    //By class full  full 
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //combine different locator
    page.locator('input[placeholder="Email"][nbinput]')

    // by xpath (NOT RECOMMENDED)
    page.locator('//input[@id="inputEmail1"]')

})