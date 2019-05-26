## Protractor-code


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

5. Open command prompt in `VSCODE` or any other `IDE`. Make sure that you navigate to the same project directory.

6. Two test suites are available. 
    
      `suite1`: Contains `positive` scenarios,

      `suite2`: Contains `negative` scenarios.

7. To `RUN` tests, Use `start-test.sh` file.
        
      `suite1` an execute by running `sh start-test.sh suite1`.

      `suite2` an execute by running `sh start-test.sh suite2`.
