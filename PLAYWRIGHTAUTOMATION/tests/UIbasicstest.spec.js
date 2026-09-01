const {test,expect}=require('@playwright/test');
test('First Playwright Test',async ({browser})=>{//browser is a fixture which comes from playwright/test package(we wrap it in curly braces so they can not this is a fixture)
// playwright code
const context = await  browser.newContext();//this is used to open a new context (in brackets we can inject cookies)
const page = await context.newPage();//this opens a new page directly in the browser
await page.goto("https://sso.teachable.com/secure/9521/identity/login/otp");//here we posts the link where we want to go
//test('First Playwright Test',async ({browser,page})=>{ we can start directly from page.goto after this as other two steps are done automatically}
await page.locator("#email").fill("ramandeeplohan42@gmail.com");
await page.locator("#otp-login-btn").click();
console.log(await page.locator('#my-error-id'));
});
test('easy test',async ({page})=>{
// playwright code
 await page.goto("https://www.google.com/");
 console.log(await page.title());
 await expect(page).toHaveTitle("Google");
});
test.only("sign in test",async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("input[value='user']").click();
await page.locator("#okayBtn").click();
await page.locator("#name").fill("Ramandeep Lohan");
await page.locator("#email").fill("ramandeeplohan@gmail.com");
await page.locator("#password").fill("Learning@830$3mK2");
await page.locator("#terms").click();
await page.locator("#signInBtn").click();
await expect(page.locator(".card-title a").toHaveTitle("iphone X"))
})