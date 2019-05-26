const home = require('../../pages/home/HomePage');
const signup = require('../../pages/sign-in/SignInPage');

describe('Navigate to the application and complete signup process', function () {

    beforeAll(async function () {
        await home.openUrl();
    });

    afterAll(async function () {
        await home.clearBrowser();
    });

    it('navigate to home page and click on signin button', async function () {

        await home.clickOnSignInBtn();
    });

    it('enter user email and click on create an account button', async function () {

        await signup.enterEmailAndClickOnCreateAccountBtn("jithinmathew666@gmail.com");
        expect(await signup.getTextFromSignUpErrorMsg()).toEqual("An account using this email address has already been registered. Please enter a valid password or request a new one.");
    });

});