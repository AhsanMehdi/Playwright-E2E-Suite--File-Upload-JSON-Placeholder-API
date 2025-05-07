# take-home-assessment
home assessment to test the UI and APIs

--installation

1 - for playwright it is required to install the node js so, first install that 

    -   Go to https://nodejs.org and download the LTS version.

    -   after download install the node js

    
2 - now install the playwright using following command 

    -   npm init playwright@latest

    -   after that select language, test folder, allow to install browsers

 *******************            Part 1: UI Tests             ************************

----    headless mode
1 - go to the test folder and ->Sample Data Files and then rename the file having 255 chars total length to "Random.txt"

2 - to run please execute the command inside the root directory

    - npx playwright test tests/file-upload.spec.ts

        note: as 2 retries are implemented so, it will retry the tests with chromium, firefox, and webkit and the html 
        report will be opened into your default browser automatically once the execution done

----    UI mode
1 - for UI mode you can use the below command
    -   npx playwright test tests/file-upload.spec.ts --ui

    note:   but here you have to run tests manually by clicking on the button of run

2 - for UI mode if you want to see the report in browser use the command below:
    -   npx playwright show-report


        
 *******************            Part 2: API Tests             ************************
->  to run all api tests you can execute the below command:

    ->  npx playwright tests api_tests  

->  to run each api individually you have to execute below commands

    Get ->    npx playwright test tests/api_tests/get-posts.spec.ts 

    Post ->     npx playwright test tests/api_tests/post-posts.spec.ts 

    Put/Patch ->      npx playwright test tests/api_tests/put-patch-posts.spec.ts 

    Delete ->       npx playwright test tests/api_tests/delete-posts-id.spec.ts 

->      Report    -for report execute the below command:

         npx playwright show-report


************************           All in one RUN        ******************
IF you want to run all tests then run the command below:

   headless mode ->      npx playwright test
   headless mode ->      npx playwright test --ui




   API notes:

   Delete: 
            please note that for delete posts by id I have used the 404 for expected response as I am considering as actual api behavior

            but for json as fake it returns 200 in every case (in delete suite) 