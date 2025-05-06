/*
-- import required dependencies
*/
import { test, expect } from '@playwright/test';
import path from 'path';
import * as fs from 'fs/promises';
/*
-- import the custome utility function to generate the random string
*/
import {random_string_gen} from '../utils/dynamic_data_gen'
// website variable to call the 
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
  // designing the file path
  const file_path = path.join(current_dir, 'tests', 'Sample Data Files', 'PDF File Size-19KB.pdf');
  // upload  file
  await website.locator('#file-upload').setInputFiles(file_path);
  // Click  upload button
  await website.locator("//input[@value='Upload']").click();
  // Add the assertion
  await expect(website.locator('#uploaded-files')).toHaveText('PDF File Size-19KB.pdf');
});


/*
TC002
*/
test('user should be able to upload a word file with 14kb size', async () => {
  // Verify the expected page has loaded
  await expect(website.locator("//h3[contains(text(),'File Uploader')]")).toHaveText('File Uploader');
  // Find the current directory and design the file path
  const current_dir = process.cwd();
  // Tests folder contains the sample data files folder
  const file_path = path.join(current_dir, 'tests', 'Sample Data Files', 'Word File Size-14KB.docx');
  // Step 3: Upload the file
  await website.locator('#file-upload').setInputFiles(file_path);
  // Step 4: Click the upload button
  await website.locator("//input[@value='Upload']").click();
  // Add assertion
  await expect(website.locator('#uploaded-files')).toHaveText('Word File Size-14KB.docx');

});

/*
 TC03
*/
test ('user should be able to upload a jpg file of size 0.98MB', async () => {
  // user should be on the website url
  await expect(website.locator("//h3[contains(text(),'File Uploader')]")).toHaveText('File Uploader');
  // current directory and the path
  const current_dir = process.cwd();
  // designing the file path
  const file_path = path.join(current_dir, 'tests', 'Sample Data Files', 'Image file _.098 MB.jpg');
  // upload  file
  await website.locator('#file-upload').setInputFiles(file_path);
  // Click  upload button
  await website.locator("//input[@value='Upload']").click();
  // Add the assertion
  await expect(website.locator('#uploaded-files')).toHaveText('Image file _.098 MB.jpg');
});


/*
 TC04
*/
test ('user should be able to upload a MP4 file of size 13 MB', async () => {
  // user should be on the website url
  await expect(website.locator("//h3[contains(text(),'File Uploader')]")).toHaveText('File Uploader');
  // current directory and the path
  const current_dir = process.cwd();
  // designing the file path
  const file_path = path.join(current_dir, 'tests', 'Sample Data Files', 'MP4 file Size-13MB.mp4');
  // upload  file
  await website.locator('#file-upload').setInputFiles(file_path);
  // Click  upload button
  await website.locator("//input[@value='Upload']").click();
  // Add the assertion
  await expect(website.locator('#uploaded-files')).toHaveText('MP4 file Size-13MB.mp4');
});

/*
 TC05
*/
test ('user should be able to upload an excel file of size 10 KB', async () => {
  // user should be on the website url
  await expect(website.locator("//h3[contains(text(),'File Uploader')]")).toHaveText('File Uploader');
  // current directory and the path
  const current_dir = process.cwd();
  // designing the file path
  const file_path = path.join(current_dir, 'tests', 'Sample Data Files', 'Excel.xlsx');
  // upload  file
  await website.locator('#file-upload').setInputFiles(file_path);
  // Click  upload button
  await website.locator("//input[@value='Upload']").click();
  // Add the assertion
  await expect(website.locator('#uploaded-files')).toHaveText('Excel.xlsx');
});


/*
 TC06
*/
test ('user should be able to upload a TXT file of size 1 KB', async () => {
  // user should be on the website url
  await expect(website.locator("//h3[contains(text(),'File Uploader')]")).toHaveText('File Uploader');
  // current directory and the path
  const current_dir = process.cwd();
  // designing the file path
  const file_path = path.join(current_dir, 'tests', 'Sample Data Files', 'TXT File.txt');
  // upload  file
  await website.locator('#file-upload').setInputFiles(file_path);
  // Click  upload button
  await website.locator("//input[@value='Upload']").click();
  // Add the assertion
  await expect(website.locator('#uploaded-files')).toHaveText('TXT File.txt');
});


/*
 TC07
*/
test ('user should be able to upload a TXT file of size 0 KB', async () => {
  // user should be on the website url
  await expect(website.locator("//h3[contains(text(),'File Uploader')]")).toHaveText('File Uploader');
  // current directory and the path
  const current_dir = process.cwd();
  // designing the file path
  const file_path = path.join(current_dir, 'tests', 'Sample Data Files', 'Empty File.txt');
  // upload  file
  await website.locator('#file-upload').setInputFiles(file_path);
  // Click  upload button
  await website.locator("//input[@value='Upload']").click();
  // Add the assertion
  await expect(website.locator('#uploaded-files')).toHaveText('Empty File.txt');
});


/*
 TC08
*/
test ('user should be able to upload a dot exe file', async () => {
  // user should be on the website url
  await expect(website.locator("//h3[contains(text(),'File Uploader')]")).toHaveText('File Uploader');
  // current directory and the path
  const current_dir = process.cwd();
  // designing the file path
  const file_path = path.join(current_dir, 'tests', 'Sample Data Files', 'Dot EXE.exe');
  // upload  file
  await website.locator('#file-upload').setInputFiles(file_path);
  // Click  upload button
  await website.locator("//input[@value='Upload']").click();
  // Add the assertion
  await expect(website.locator('#uploaded-files')).toHaveText('Dot EXE.exe');
});



/*
 TC09
*/
test ('user should be able to upload a large file of size 70MB', async () => {
  // user should be on the website url
  await expect(website.locator("//h3[contains(text(),'File Uploader')]")).toHaveText('File Uploader');
  // current directory and the path
  const current_dir = process.cwd();
  // designing the file path
  const file_path = path.join(current_dir, 'tests', 'Sample Data Files', 'Large File 70MB.mp4');
  // upload  file
  await website.locator('#file-upload').setInputFiles(file_path);
  // Click  upload button
  await website.locator("//input[@value='Upload']").click();
  // Add the assertion
  await expect(website.locator('#uploaded-files')).toHaveText('Large File 70MB.mp4');
});



/*
 TC10
*/
test ('user should be able to upload a Zip file', async () => {
  // user should be on the website url
  await expect(website.locator("//h3[contains(text(),'File Uploader')]")).toHaveText('File Uploader');
  // current directory and the path
  const current_dir = process.cwd();
  // designing the file path
  const file_path = path.join(current_dir, 'tests', 'Sample Data Files', 'ZIP FILE.zip');
  // upload  file
  await website.locator('#file-upload').setInputFiles(file_path);
  // Click  upload button
  await website.locator("//input[@value='Upload']").click();
  // Add the assertion
  await expect(website.locator('#uploaded-files')).toHaveText('ZIP FILE.zip');
});


/*
 TC11
*/
test ('user should be able to upload a file having 255 chars in file name including the extension', async () => {
  // user should be on the website url
  await expect(website.locator("//h3[contains(text(),'File Uploader')]")).toHaveText('File Uploader');
  // current directory and the path
  const current_dir = process.cwd();
  // designing the file path
  const file_path = path.join(current_dir, 'tests', 'Sample Data Files');
  // generate a random string
  const long_string = random_string_gen(251);
  // now make the file name
  const new_filename = `${long_string}.txt`;
  // add the path with already existing file
  const old_file = path.join(file_path, 'Random.txt');
  // now desing the new file name
  const new_file = path.join(file_path, new_filename);
  // Rename the file
  await fs.rename(old_file, new_file);
  console.log(`Renamed file to: ${new_file}`);
  // upload  file
  await website.locator('#file-upload').setInputFiles(new_file);
  // Click  upload button
  await website.locator("//input[@value='Upload']").click();
  // Add the assertion
  await expect(website.locator('#uploaded-files')).toHaveText(new_filename);
});


/*
 TC12
*/
test ('user should be able to upload a file having special characters in file name', async () => {
  // user should be on the website url
  await expect(website.locator("//h3[contains(text(),'File Uploader')]")).toHaveText('File Uploader');
  // current directory and the path
  const current_dir = process.cwd();
  // designing the file path
  const file_path = path.join(current_dir, 'tests', 'Sample Data Files', 'Special chars vr@#$%;.txt');
  // upload  file
  await website.locator('#file-upload').setInputFiles(file_path);
  // Click  upload button
  await website.locator("//input[@value='Upload']").click();
  // Add the assertion
  await expect(website.locator('#uploaded-files')).toHaveText('Special chars vr@#$%;.txt');
});