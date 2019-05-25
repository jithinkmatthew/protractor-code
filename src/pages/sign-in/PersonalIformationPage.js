const base = require('../../pages/base/BaseClass');

const PersonalIformationPage = function () {

    //SignUp
    const nameTitleRadioBtn = element(by.id("id_gender1"));
    const firstNameField = element(by.id("customer_firstname"));
    const lastNameField = element(by.id("customer_lastname"));
    const passwordField = element(by.id("passwd"));

    const registerBtn = element(by.id("submitAccount"));


    

    // const passwordField = element(by.id("passwd"));


    this.waitForPersonalIformationPageReady = async () => {
        await base.waitForElementToBeClickable(registerBtn);
    }

    this.clickOnNameTitleRadioBtn = async () => {
        await this.waitForPersonalIformationPageReady();
        await nameTitleRadioBtn.click();
    }

    this.enterFirstName = async (fname) => {
        await firstNameField.sendKeys(fname);
    }

    this.enterLastName = async (lname) => {
        await lastNameField.sendKeys(lname);
    }

    this.enterPassword = async (lname) => {
        await passwordField.sendKeys(lname);
    }
}
PersonalIformationPage.prototype = Object.create(base, {});
module.exports = new PersonalIformationPage();

