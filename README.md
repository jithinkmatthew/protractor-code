## Protractor-code

### Features

Protractor is an end-2-end testing framework for Angular Applications.

1. Keeping all the locators in page object model.
2. Test Data is fetching from JSON File.
3. Used `allure-jasmin` to generate test report.
4. Followed modular structure to keep page objects, tests and test data 


### Environment Set Up
1. You should install Node JS in your machine. [Download it from here](https://nodejs.org/en/download/)
2. Use `npm` to install Protractor globally with: `npm install -g protractor`. Try running `protractor --version` to make sure it's working.
3. Install webdriver-manager by running this command `webdriver-manager update`. It is a helper tool to easily get an instance of a Selenium Server running.
4. Now start up a server with: `webdriver-manager start`


### How to get this code?

1. Clone this repository to get a copy of this repository in your local machine, 

    `git clone https://github.com/jithinkmatthew/protractor-code.git`

2. Change the directory 

    `cd protractor-code`

3. Install all the project dependencies by running,

    `npm install`

    This will create a `node_modules` folder inside your project
4. Make sure that selenium server is running(`webdriver-manager`)

### How to run test scripts?

1. Open command prompt in `VSCODE` or any other `IDE`. Make sure that you navigate to the same project directory.


Note : If you are using `WINDOWS`, Please use `Git Bash`. Navigate to your project repository and `Righ Click -> Git Bash Here` 


2. Two test suites are available. 
    
      `suite1`: Contains `positive` scenarios,

      `suite2`: Contains `negative` scenarios.

3. To `RUN` tests, Use `start-test.sh` file.
        
      `suite1` can execute by running `sh start-test.sh suite1`.

      `suite2` can execute by running `sh start-test.sh suite2`.
      
4. After completing test execution, go to project repository open test report. (`allure-report/index.html` folder). Try to open the report in FirFox Browser.
