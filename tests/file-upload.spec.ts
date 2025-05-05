// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

/**
 Import the playwright modules
  1- playwright
  2- path for file name 
 */
import { test , expect }  from '@playwright/test'
import Path from 'path'

let website

// before every test open the website url
test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  website = await context.newPage();
  await website.goto('https://the-internet.herokuapp.com/upload')

});

/*
  - TC001 
*/
test ('user should be able to upload a pdf file with 19kb size' , async () => {
  await expect (website.locator("//h3[contains(text(),'File Uploader')]")).toHaveText('File Uploader');

  

})


