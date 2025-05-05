import { test, expect } from '@playwright/test';
import path from 'path';

let website;

// before every test open the website URL
test.beforeEach(async ({ browser }) => {
  const context = await browser.newContext();
  website = await context.newPage();
  await website.goto('https://the-internet.herokuapp.com/upload');
});

/*
TC001
*/
test('user should be able to upload a pdf file with 19kb size', async () => {
  // user should be on the website url
  await expect(website.locator("//h3[contains(text(),'File Uploader')]")).toHaveText('File Uploader');

  // current directory and the path
  const current_dir = process.cwd();
  console.log('Current Directory:', current_dir);

  // designing the file path
  const filePath = path.join(current_dir, 'tests', 'Sample Data Files', 'PDF File Size-19KB.pdf');
  console.log('File Path:', filePath);

  // upload  file
  await website.locator('#file-upload').setInputFiles(filePath);

  // Click  upload button
  await website.locator("//input[@value='Upload']").click();

  // Add the assertion
  await expect(website.locator('#uploaded-files')).toHaveText('PDF File Size-19KB.pdf');
});



