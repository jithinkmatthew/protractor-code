var using = require('jasmine-data-provider');

const home = require('../../pages/home/HomePage');
const signup = require('../../pages/sign-in/SignInPage');

/*Test data */
const testdata = require('../../test-resources/negative_sc/loginWithInvalidCredentials.data.json');
const login = testdata.loginInputs;

describe('Navigate to the application and complete signup process', function () {

    beforeAll(async function () {
        await home.openUrl();
    });

    afterAll(async function () {
        await home.clearBrowser();
    });

    it('navigate to home page and click on signin button', async function () {

        await home.clickOnSignInBtn();
        expect(await signup.getTextFromsignInBlockTitle()).toEqual(testdata.signinTitle);
    });

    using(login, async function(data){
        it('Verify the functionality with Invalid Input', async function() {

            await signup.logIntoTheApplication(data.email, data.password);
            expect(await signup.getTextFromErrorMsg()).toEqual(data.validationMsg);

        });

    });


});


