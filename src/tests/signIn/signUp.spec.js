const baseutil = require('../../utils/BaseUtil');
const home = require('../../pages/home/HomePage');
const signup = require('../../pages/sign-in/SignInPage');
const perso = require('../../pages/sign-in/PersonalIformationPage');

const testdata = require('../../test-resources/signin/signup.data.json');

let randomTxt = baseutil.generateRandomAlphaNumeric(4);
console.log("df" +randomTxt);

describe('Navigate to the application and complete signup process', function () {

    beforeAll(async function () {
        await home.openUrl();
    });

    it('navigate to home page and click on signin button', async function () {

        await home.clickOnSignInBtn();

    });

    it('enter user email and click on create an account button', async function () {

        await signup.enterEmailAndClickOnCreateAccountBtn(randomTxt+testdata.email);
        
        await perso.clickOnNameTitleRadioBtn();
        await perso.enterFirstName(randomTxt+testdata.firstName);
        await perso.enterLastName(randomTxt+testdata.lastName);
        await perso.enterPassword(testdata.password);
        await browser.driver.sleep(3000);

    });

});