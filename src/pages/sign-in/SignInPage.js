const base = require('../../pages/base/BaseClass');

const SignInPage = function () {

    //SignUp
    const signUpemailAddressField = element(by.id("email_create"));
    const createAnAccountBtn = element(by.id("SubmitCreate"));
    const signUpBlockTitle = element(by.css("#create-account_form h3"));

    //Login
    const signInEmailAddressField = element(by.id("email"));
    const signInPasswordField = element(by.id("passwd"));
    const signInBtn = element(by.id("SubmitLogin"));

    const signInBlockTitle = element(by.css("#login_form h3"));

    const errorMsg = element(by.css("div.alert-danger ol"));
    const signUperrorMsg = element(by.css("#create_account_error ol"));

    
    

    //Signup Methods
    this.waitForSignInPageReady = async () => {
        await base.waitForElementToBeClickable(createAnAccountBtn);
    }

    this.getTextFromsignUpBlockTitle = async () => {
        return await signUpBlockTitle.getText();
    }

    this.enterSignUpEmailAddress = async (email) => {
        await signUpemailAddressField.sendKeys(email);
    }

    this.clickOnCreateAnAccountBtn = async() => {
        await base.waitForElementToBeClickable(createAnAccountBtn);
        await createAnAccountBtn.click();
    }

    this.enterEmailAndClickOnCreateAccountBtn = async (email) => {
        await this.enterSignUpEmailAddress(email);
        await this.clickOnCreateAnAccountBtn();
    }
    
    //Login Methods

    this.getTextFromsignInBlockTitle = async() => {
        return await signInBlockTitle.getText();
    }

    this.enterSignInEmailAddress = async (email) => {
        await signInEmailAddressField.clear();
        await signInEmailAddressField.sendKeys(email);
    }

    this.enterSignInPassword = async (pwd) => {
        await signInPasswordField.clear();
        await signInPasswordField.sendKeys(pwd);
    }

    this.clickOnSignInBtn = async (pwd) => {
        await signInBtn.click();
    }

    this.logIntoTheApplication = async (email, pwd) => {
        await this.enterSignInEmailAddress(email);
        await this.enterSignInPassword(pwd);
        await this.clickOnSignInBtn();
    }

    this.getTextFromErrorMsg = async () => {
        await base.waitForElementToBeClickable(errorMsg);
        return await errorMsg.getText();
    }

    this.getTextFromSignUpErrorMsg = async () => {
        await base.waitForElementToBeClickable(signUperrorMsg);
        return await signUperrorMsg.getText();
    }

}
SignInPage.prototype = Object.create(base, {});
module.exports = new SignInPage();

