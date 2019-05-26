const home = require('../../pages/home/HomePage');
const signup = require('../../pages/sign-in/SignInPage');
const myaccount = require('../../pages/sign-in/MyAccountPage');
const productlist = require('../../pages/product/ProductListingPage');

/*Test data */
const testdata = require('../../test-resources/positive_sc/verifySearchFunctionality.data.json');

describe('Login With Valid Credentials, search product by giving name in search field and verify the details', function () {

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
    
    it('Verify the search functionality', async function () {

        await home.searchProduct(testdata.productName);
        expect(await productlist.getNoOfProductListed()).toEqual(1);

    });

});


