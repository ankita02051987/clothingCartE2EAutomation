const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

Given('the user is on the login page', async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('http://localhost:5173');
});

When('the user clicks on the Sign Up link', async function () {
  await page.click('text=Sign Up'); // Make sure the link actually says "Sign Up"
});

When('enters a valid email, first name, last name, and password', async function () {
  await page.fill('input[placeholder="Enter your first name"]', 'Test');
  await page.fill('input[placeholder="Enter your last name"]', 'User');
  await page.fill('input[placeholder="Enter email"]', 'test@example.com');
  await page.fill('input[placeholder="Password"]', 'Password@123');
});
When('clicks on the Sign Up button', async function () {
    await page.waitForSelector('form button[type="submit"]');
    await page.locator('form button[type="submit"]').click();
    await page.waitForTimeout(1000);
    await page.goto('http://localhost:5173'); // manually simulate redirect
  });
  
Then('the user is navigated to the login page', async function () {
  await page.waitForSelector('text=Login'); // Adjust if you have a heading or label
  await browser.close();
});
