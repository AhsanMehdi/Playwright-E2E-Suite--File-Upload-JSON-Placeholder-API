# take-home-assessment
home assessment to test the UI and APIs

1 - for playwright it is required to install the node js so, first install that 
    -   Go to https://nodejs.org and download the LTS version.
    
2 - now install the playwright using following command 
    -   npm init playwright@latest
    -   after that select language, test folder, allow to install browsers

3 - go to the test folder and ->Sample Data Files and then rename the file having 255 chars total length to "Random.txt"

4 - to run please execute the command inside the root directory
    - npx playwright test
    note: as 2 retries are implemented so, it will retry the tests with chromium, firefox, and webkit and the html 
    report will be opened into your default browser automatically once the execution done
Optional:
5 - for UI mode you can use the below command
    -   npx playwright test --ui
    note:   but here you have to run tests manually by clicking on the button of run
6 - for UI mode if you want to see the report in browser use the command below:
    -   npx playwright show-report
        
