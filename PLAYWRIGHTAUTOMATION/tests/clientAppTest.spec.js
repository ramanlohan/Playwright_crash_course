const {test,expect}=require('@playwright/test');
test("client login test",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("ramandeeplohan@gmail.com");
    await page.locator("#userPassword").fill("Anything@78");
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle");// ir is a bit flaky and sometimes may not work there is a workaround it
    // await page.("card-body b").first().waitFor(); now this will wait for first element to return it's just a workaround
const allTitles =await page.locator(".card-body b").allTextContents();
        console.log(await page.locator(".card-body b").first().textContent());
        console.log(allTitles);
});
// there are two types of dropdown 
// one is where elements are already there they are called select dropdowns
test("ui controls",async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("input[value='user']").click();
await page.locator("#okayBtn").click();
await page.locator("#username").fill("rahulshettyacademy");
 await page.locator("#password").fill("Learning@830$3mK2");
const dropDown = await page.locator("select.form-control");
await dropDown.selectOption("consult");//we pass the value here
await page.pause();// we pause here to see and it opens the inspect element as execution is very fast
await expect(page.locator("input[value='user']")).toBeChecked();//it is used to check if this box/task is checked or not
console.log(await (page.locator("input[value='user']").isChecked()));//it return values/prints the boolean if the assertion was checked or not
await page.locator("#terms").click();//if it is already checked we can uncheck it using .uncheck() but we do not have a assertion for it to verify
// there is another workaround for unchecked we can use the assertion like this
// await page.locator("#terms").uncheck();
//  expect(await page.locator("#terms").isChecked()).toBeFalsy(); //if this is false it will continue otherwise it will not
await page.locator("#signInBtn").click();
const cardTitles = page.locator(".card-body a");
    console.log( await cardTitles.nth(2).textContent());
    // we can also check if the class is blinking or not 
    const documentLink = page.locator('[href="https://techsmarthire.com/"]');
    await expect(documentLink).toHaveAttribute("class","blinkingText");
})

test("child windows handling",async({browser})=>{
    const context = await browser.newContext;
    const page= await context.newPage();
    page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator('[href="https://techsmarthire.com/"]');
    const page2 = await context.waitForEvent('page');
    await documentLink.click();
})