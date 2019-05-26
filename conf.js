let AllureReporter = require('jasmine-allure-reporter');

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",

  /* To use async/await. */
  SELENIUM_PROMISE_MANAGER: false,

  framework: "jasmine2",

  jasmineNodeOpts: {
    includeStackTrace: true,
    defaultTimeoutInterval: 99999
  },

  specs: ["todo-spec.js"],

  suites: {
    suite3: ["./src/tests/positive_sc/**/*spec.js"],
    suite2: ["./src/tests/positive_sc/verifySearchFunctionality.spec.js"],
    suite1: ["./src/tests/negative_sc/verifyProductQuantityWithInvalidInput.spec.js"],

    
  },

  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--start-maximized"]
    }
  },

  onPrepare: function () {

    //Disable waiting for Angular globally
    browser.waitForAngularEnabled(false);

    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    // Take screen shot after each it block
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64')
          }, 'image/jpeg')();
          done();
      })
    });

  }
};
