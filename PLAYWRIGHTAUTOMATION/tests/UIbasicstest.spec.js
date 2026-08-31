const {test,expect}=require('@playwright/test');
test.only('First Playwright Test',async ({browser})=>{//browser is a fixture which comes from playwright/test package(we wrap it in curly braces so they can not this is a fixture)
// playwright code
const context = await  browser.newContext();//this is usef to open a new context (in brackets we can inject cookies)
const page = await context.newPage();//this opens a new page directly in the browser
await page.goto("https://sso.teachable.com/secure/9521/identity/sign_up/otp");//here we posts the link where we want to go
//test('First Playwright Test',async ({browser,page})=>{ we can start directly from page.goto after this as other two steps are done automatically}
await page.getByRole('textbox', { name: 'Full name' }).fill("raman");
await page.getByRole('textbox', { name: 'Email' }).fill("ramandeeplohan42gmail.com");
await page.getByRole('checkbox', { name: /I agree to receive promotional and instructional emails from Rahul Shetty Academy School/i }).click();
await page.getByRole('button', { name: 'Send code' }).click();
console.log(await page.getByText('Invalid email', { exact: true }).textContent());
});
test('easy test',async ({page})=>{
// playwright code
 await page.goto("https://www.google.com/");
 console.log(await page.title());
 await expect(page).toHaveTitle("Google");
});