const base = require('../../pages/base/BaseClass');

const MyAccountPage = function () {

    const myAccountPageTitle = element(by.css("div.center_column h1"));
    const orderHistoryAndDetailsBtn = element(by.css("a[title='Orders']"));
    
    this.waitForMyAccountPageReady = async () => {
        await base.waitForElementToBeClickable(orderHistoryAndDetailsBtn);
    }

    this.getTextFromMyaccountPageTitle = async() => {
        await this.waitForMyAccountPageReady();
        return await myAccountPageTitle.getText();
    }

}
MyAccountPage.prototype = Object.create(base, {});
module.exports = new MyAccountPage();

