const {test,expect} = require('@playwright/test');
test("TC_001 - Launch browser and open application",async({browser})=>{
    const context =  await browser.newContext();
    const page =  await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await expect(page).toHaveURL("https://rahulshettyacademy.com/loginpagePractise/");
    // this is opening a new browser and context and page 
})
test("printing title",async({page})=>{
    // using page fixture
    await page.goto("https://google.com");
    console.log(await page.title());
})
test("Login to Application and Retrieve Product Titles",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("ramandeeplohan@gmail.com");
    await page.locator("#userPassword").fill("Anything@78");
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle");
const allTitles =await page.locator(".card-body b").allTextContents();
        console.log(await page.locator(".card-body b").first().textContent());
        console.log(allTitles);
        expect(allTitles.length).toBeGreaterThan(0);
})
test("Validate UI controls and page elements",async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("input[value='user']").click();
await page.locator("#okayBtn").click();
await page.locator("#username").fill("rahulshettyacademy");
await page.locator("#password").fill("Learning@830$3mK2");
const dropDown =  page.locator("select.form-control");
await dropDown.selectOption("consult");//we pass the value here(html one)
await page.pause();// we pause here to see and it opens the inspect element as execution is very fast
await expect(page.locator("input[value='user']")).toBeChecked();//it is used to check if this box/task is checked or not
console.log(await (page.locator("input[value='user']").isChecked()));//it return values/prints the boolean if the assertion was checked or not
await page.locator("#terms").click();
await page.locator("#signInBtn").click();
const cardTitles = page.locator(".card-body a");
console.log( await cardTitles.nth(2).textContent());
})
