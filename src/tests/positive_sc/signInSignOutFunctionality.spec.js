const home = require('../../pages/home/HomePage');
const signup = require('../../pages/sign-in/SignInPage');
const myaccount = require('../../pages/sign-in/MyAccountPage');

/*Test data */
const testdata = require('../../test-resources/positive_sc/signInSignOut.data.json');

describe('Verify SignIn/SignOut Functionality for a user with Valid Credentials', function () {

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

    it('Enter valid credentials in username and password fiellds and click on sign in button', async function () {

        await signup.logIntoTheApplication(testdata.email, testdata.password);
        expect(await myaccount.getTextFromMyaccountPageTitle()).toEqual(testdata.myaccountTitle);

    });

    it('Verify the functionality of signout', async function () {

        await home.clickOnSignOutBtn();
        expect(await signup.getTextFromsignUpBlockTitle()).toEqual(testdata.signupTitle);

    });



});


