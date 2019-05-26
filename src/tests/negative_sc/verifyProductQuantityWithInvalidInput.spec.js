const baseutil = require('../../utils/BaseUtil');
const home = require('../../pages/home/HomePage');
const signup = require('../../pages/sign-in/SignInPage');
const perso = require('../../pages/sign-in/PersonalIformationPage');
const myaccount = require('../../pages/sign-in/MyAccountPage');
const productlist = require('../../pages/product/ProductListingPage');
const productdetail = require('../../pages/product/ProductDetailsPage')
const prodsummary = require('../../pages/product/ProductSummaryPage')

/*Test data */
const testdata = require('../../test-resources/positive_sc/addToCartWithoutSignIn.data.json');

let randomTxt = baseutil.generateRandomAlphaNumeric(5);

describe('Select any of the product , give 0 value in the quantity field and verify the warning message', function () {

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

        await productlist.clickOnMoreForNthProduct(1);

        await productdetail.enterQuantity(0);
        await productdetail.clickOnAddToCartBtn();
        expect(await productdetail.getTextFromErrorMsg()).toEqual("Null quantity.");

    });

});


