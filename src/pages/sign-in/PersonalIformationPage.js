const base = require('../../pages/base/BaseClass');

const PersonalIformationPage = function () {

    const personalIformationPageTitle = element(by.css("#noSlide h1"));
    const personalInformationSubTitle = element(by.css("div.account_creation:nth-child(1) h3"));
    const addressSubTitle = element(by.css("div.account_creation:nth-child(2) h3"));
    
    //SignUp
    const nameTitleRadioBtn = element(by.id("id_gender1"));
    const firstNameField = element(by.id("customer_firstname"));
    const lastNameField = element(by.id("customer_lastname"));
    const passwordField = element(by.id("passwd"));

    const DOBdayDropDown = element(by.id("days"));
    const DOBmonthDropDown = element(by.id("months"));
    const DOByearDropDown = element(by.id("years"));
    
    const newsLetterSignUpCheckBox = element(by.id("uniform-newsletter"));
    const specialOffersCheckBox = element(by.id("uniform-optin"));

    //Your address
    const yourAddressFirstName = element(by.css("input#firstname"));
    const yourAddressLastName = element(by.css("input#lastname"));
    const companyNameField = element(by.id("company"));
    const AddressField = element(by.id("address1"));
    const cityField = element(by.id("city"));
    const stateField = element(by.id("id_state"));
    const zipField = element(by.id("postcode"));
    const additionalInfoField = element(by.id("other"));
    const phoneField = element(by.id("phone_mobile"));

    const registerBtn = element(by.id("submitAccount"));


    

    // const passwordField = element(by.id("passwd"));


    this.waitForPersonalIformationPageReady = async () => {
        await base.waitForElementToBeClickable(registerBtn);
    }

    this.getTextFromPersonalIformationPageTitle = async () => {
        // wait until page loads
        await this.waitForPersonalIformationPageReady();
        return await personalIformationPageTitle.getText();
    }

    this.getTextFromPersonalInformationSubTitle = () => {
        return personalInformationSubTitle.getText();
    }

    this.getTextFromAddressSubTitle = () => {
        return addressSubTitle.getText();
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

    /* Atomic methods are useful when writing functional test cases */

    this.selectDay = async(date) => {
        await base.selectDropDownValue(DOBdayDropDown, date);
    }

    this.selectMonth = async(month) => {
        await base.selectDropDownValue(DOBmonthDropDown, month);
    }

    this.selectYear = async(year) => {
        await base.selectDropDownValue(DOByearDropDown, year);
    }

    this.selectDateOfBirth = async(day, month, year) => {
        await this.selectDay(day);
        await this.selectMonth(month);
        await this.selectYear(year);
        
    }

    this.clickOnNewsLetterSignUpCheckBox = async() => {
        await newsLetterSignUpCheckBox.click();
    }

    this.clickOnSpecialOffersCheckBox = async() => {
        await specialOffersCheckBox.click();
    }

    this.getTextFromyourAddressFirstName = () => {
        return yourAddressFirstName.getAttribute('value');
    }
    
    this.getTextFromYourAddressLastName = () => {
        return yourAddressLastName.getAttribute('value');
    }

    this.enterCompanyName = async(compName) => {
        await companyNameField.sendKeys(compName);
    }

    this.enterAddress = async(address) => {
        await AddressField.sendKeys(address);
    }

    this.enterCity = async(city) => {
        await cityField.sendKeys(city);
    }

    this.selectState = async(state) => {
        await base.selectDropDownValue(stateField, state);
    }

    this.enterZip = async(address) => {
        await zipField.sendKeys(address);
    }

    this.enterAdditionalInfo = async(addInfo) => {
        await additionalInfoField.sendKeys(addInfo);
    }
    
    this.enterPhone = async(phone) => {
        await phoneField.sendKeys(phone);
    }

    this.clickOnRegisterBtn = async() => {
        await registerBtn.click();
    }


    


    





    

    
    
    

    

    

}
PersonalIformationPage.prototype = Object.create(base, {});
module.exports = new PersonalIformationPage();

