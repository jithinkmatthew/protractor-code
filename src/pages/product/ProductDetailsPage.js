const base = require('../../pages/base/BaseClass');

const ProductDetailsPage = function () {

    const productNameTitle = element(by.css("div.pb-center-column h1"));
    const quantityField = element(by.id("quantity_wanted"));
    const addToCartBtn = element(by.id("add_to_cart"));
    const errorMsg = element(by.css("p.fancybox-error"));

    
    
    this.waitForProductDetailsPageReady = async () => {
        await base.waitForElementToBeClickable(addToCartBtn);
    }

    this.getTextFromProductName = async() => {
        await this.waitForMyAccountPageReady();
        return await productNameTitle.getText();
    }

    this.enterQuantity = async(quantity) => {
        await quantityField.clear();
        await quantityField.sendKeys(quantity);
    }

    this.clickOnAddToCartBtn = async() => {
        await addToCartBtn.click();
    }

    this.getTextFromErrorMsg = async() => {
        await base.waitForElementToBeClickable(errorMsg);
        return await errorMsg.getText();
    }

}
ProductDetailsPage.prototype = Object.create(base, {});
module.exports = new ProductDetailsPage();

