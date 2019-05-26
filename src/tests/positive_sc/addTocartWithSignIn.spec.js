const home = require('../../pages/home/HomePage');
const signup = require('../../pages/sign-in/SignInPage');
const myaccount = require('../../pages/sign-in/MyAccountPage');
const productlist = require('../../pages/product/ProductListingPage');
const prodsummary = require('../../pages/product/ProductSummaryPage')

/*Test data */
const testdata = require('../../test-resources/positive_sc/addTocartWithSignIn.data.json');

describe('Sign In with Valid Credentials, add product to the cart and place an order without any error', function () {

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

    it('Click on menu and add product to the cart', async function () {

        await home.clickOnTShirtProductDropDownMenu();
        expect(await productlist.getNoOfProductListed()).toEqual(1);

        await productlist.clickOnAddToCartForNthProduct(1);
        expect(await productlist.getTextFromProductAddedSuccessfullyText()).toEqual(testdata.addedToCartMsg);

        await productlist.clickOnProceedToCheckOutBtn();

    });

    it('Complete order comfirmation process and complete payment', async function () {

        expect(await  prodsummary.getTotalPriceFromProductSummary()).toEqual(testdata.totalPrizeProdSum);

        await prodsummary.clickOnProceedToCheckOutBtn();

        expect(await prodsummary.getTextFromDeliveryAddressPageTitle()).toEqual(testdata.deliveryAdPageTitle);
        expect(await prodsummary.getTextFromBillingAddressPageTitle()).toEqual(testdata.billingAdPageTitle);

        await prodsummary.clickOnProceedToCheckOutBtn();

        expect(await prodsummary.getTextFromShippingPageTitle()).toEqual(testdata.shippingTitle);
        expect(await prodsummary.getTextFromDeliveryCharge()).toEqual(testdata.shippingCharge);
        await prodsummary.clickOnTermsAndServiceCheckBox();

        await prodsummary.clickOnProceedToCheckOutBtn();

        expect(await prodsummary.getTextFromTotalPaymentAmount()).toEqual(testdata.totalPrizeProdSum);
        await prodsummary.clickOnPayViaBankWireLInk();

        expect(await prodsummary.getTextFromPaymentSuccessPageTitle()).toEqual(testdata.paymentTitle);
        await prodsummary.clickOnIconfirmMyOrderBtn();

        expect(await prodsummary.getTextFromOrderSuccessPageTitle()).toEqual(testdata.paymentSuccess);
        await browser.driver.sleep(2000);

    });

});