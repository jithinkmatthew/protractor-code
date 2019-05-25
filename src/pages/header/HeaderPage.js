const base = require('../../pages/base/BaseClass');

const HeaderPage = function () {

    const contactUsBtn = element(by.id("contact-link"));
    const signInBtn = element(by.css("div.header_user_info a"));


    this.getTextFromActionsPageTitle = async () => {
        return await actionsPageTitle.getText();
    }

    this.clickOnContactUsBtn = async () => {
        await contactUsBtn.click();
    }

    this.clickOnSignInBtn = async () => {
        await signInBtn.click();
    }

}
HeaderPage.prototype = Object.create(base, {});
module.exports = new HeaderPage();



