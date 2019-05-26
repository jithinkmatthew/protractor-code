const baseutil = require('../../utils/BaseUtil');
const home = require('../../pages/home/HomePage');
const signup = require('../../pages/sign-in/SignInPage');
const perso = require('../../pages/sign-in/PersonalIformationPage');
const myaccount = require('../../pages/sign-in/MyAccountPage');

/*Test data */
const testdata = require('../../test-resources/positive_sc/signup.data.json');

let randomTxt = baseutil.generateRandomAlphaNumeric(5);

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

        await signup.enterEmailAndClickOnCreateAccountBtn(randomTxt+testdata.email);
        expect(await perso.getTextFromPersonalIformationPageTitle()).toEqual(testdata.personalInfoTitle);
    });

    it('enter user personal information', async function () {
        
        expect(perso.getTextFromPersonalInformationSubTitle()).toEqual(testdata.personalInfoSubTitle);
        
        await perso.clickOnNameTitleRadioBtn();
        await perso.enterFirstName(randomTxt+testdata.firstName);
        await perso.enterLastName(randomTxt+testdata.lastName);
        await perso.enterPassword(testdata.password);
        await perso.selectDateOfBirth(testdata.dobDay, testdata.dobMonth, testdata.dobYear);
        await perso.clickOnNewsLetterSignUpCheckBox();
        await perso.clickOnSpecialOffersCheckBox();

        //Verify First Name & Last Name
        expect(perso.getTextFromAddressSubTitle()).toEqual(testdata.addressSubTitle);
        expect(perso.getTextFromyourAddressFirstName()).toEqual(randomTxt+testdata.firstName);
        expect(perso.getTextFromYourAddressLastName()).toEqual(randomTxt+testdata.lastName);

        await perso.enterCompanyName(testdata.company);
        await perso.enterAddress(testdata.address);
        await perso.enterCity(testdata.city);
        await perso.selectState(testdata.state);
        await perso.enterZip(testdata.zip);
        await perso.enterAdditionalInfo(testdata.additionalInfo);
        await perso.enterPhone(testdata.phone);
        await perso.clickOnRegisterBtn();

        expect(await myaccount.getTextFromMyaccountPageTitle()).toEqual(testdata.myAccPageTitle);
        
    });

});