const baseutil = require('../../utils/BaseUtil');
const home = require('../../pages/home/HomePage');
const signup = require('../../pages/sign-in/SignInPage');
const perso = require('../../pages/sign-in/PersonalIformationPage');
const myaccount = require('../../pages/sign-in/MyAccountPage');
const productlist = require('../../pages/product/ProductListingPage');
const prodsummary = require('../../pages/product/ProductSummaryPage')

/*Test data */
const testdata = require('../../test-resources/positive_sc/addToCartWithoutSignIn.data.json');

let randomTxt = baseutil.generateRandomAlphaNumeric(5);

describe('Navigate to the application and complete signup process', function () {

    beforeAll(async function () {
        await home.openUrl();
    });

    afterAll(async function () {
        await home.clearBrowser();
    });

    it('navigate to home page and click on Tshirt Menu', async function () {

        await home.clickOnTShirtProductDropDownMenu();
        expect(await productlist.getTextFromProductListPageTitle()).toEqual("T-shirts");
        expect(await productlist.getNoOfProductListed()).toEqual(1);
    });

    it('Add product to the cart adn continue pa', async function () {

        await productlist.clickOnAddToCartForNthProduct(1);
        expect(await productlist.getTextFromProductAddedSuccessfullyText()).toEqual(testdata.addedToCartMsg);

        await productlist.clickOnProceedToCheckOutBtn();

    });

    it('Complete order comfirmation process and payment', async function () {

        expect(await  prodsummary.getTotalPriceFromProductSummary()).toEqual(testdata.totalPrizeProdSum);
        await prodsummary.clickOnProceedToCheckOutBtn();
        
        expect(await signup.getTextFromsignUpBlockTitle()).toEqual(testdata.personalInfoTitle);
        
        await signup.enterEmailAndClickOnCreateAccountBtn(randomTxt+testdata.email);
        expect(await perso.getTextFromPersonalIformationPageTitle()).toEqual(testdata.personalInfoTitle);

        // Add profile
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

        expect(await prodsummary.getTextFromDeliveryAddressPageTitle()).toEqual(testdata.deliveryAdPageTitle);
        expect(await prodsummary.getTextFromBillingAddressPageTitle()).toEqual(testdata.billingAdPageTitle);

        await prodsummary.clickOnProceedToCheckOutBtn();

        expect(await prodsummary.getTextFromShippingPageTitle()).toEqual(testdata.shippingTitle);
        expect(await prodsummary.getTextFromDeliveryCharge()).toEqual(testdata.shippingCharge);
        await prodsummary.clickOnTermsAndServiceCheckBox();

        await prodsummary.clickOnProceedToCheckOutBtn();

        expect(await prodsummary.getTextFromTotalPaymentAmount()).toEqual(testdata.totalPrizeProdSum1);
        await prodsummary.clickOnPayViaBankWireLInk();

        expect(await prodsummary.getTextFromPaymentSuccessPageTitle()).toEqual(testdata.paymentTitle);
        await prodsummary.clickOnIconfirmMyOrderBtn();

        expect(await prodsummary.getTextFromOrderSuccessPageTitle()).toEqual(testdata.paymentSuccess);
        await browser.driver.sleep(2000);

    });

});


