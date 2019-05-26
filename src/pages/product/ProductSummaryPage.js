const base = require('../../pages/base/BaseClass');

const ProductSummaryPage = function () {

    const productSummaryPageTitle = element(by.css("#cart_title"));
    const totalPrice = element(by.css("#total_price"));
    // const productAddedPopUp = element(by.css("div#layer_cart"));
    
    const proceedToCheckOutBtn = element(by.css("p.cart_navigation span"));
    const IconfirmMyOrderBtn = element(by.css("#cart_navigation button"));
    

    //address
    const deliveryAddressPageTitle = element(by.css("#address_delivery h3"));
    const billingAddressPageTitle = element(by.css("#address_invoice h3"));

    //shipping
    const shippingPageTitle = element(by.css("#carrier_area h1"));
    const termsAndServiceCheckBox = element(by.css("#cgv"));
    const deliveryCharge = element(by.css("div.delivery_option_price"));

    //payment
    const totalPaymentAmount = element(by.css("#total_price_container span"));
    const payViaBankWireLInk = element(by.css("a.bankwire"));

    //payment success
    const paymentSuccessPageTitle = element(by.css("div.cheque-box h3"));

    //order complete
    const orderSuccessPageTitle = element(by.css("p.cheque-indent"));
    


    


    

    
    


    

    
    

    
    this.waitForProductSummaryPageReady = async () => {
        await base.waitForElementToBeClickable(proceedToCheckOutBtn);
    }

    this.getTextFromProductSummaryPageTitle = async() => {
        await this.waitForProductSummaryPageReady();
        return await productSummaryPageTitle.getText();
    }

    // Summary Step
    this.getTotalPriceFromProductSummary = async() => {
        await this.waitForProductSummaryPageReady();
        return await totalPrice.getText();
    }

    this.clickOnProceedToCheckOutBtn = async () => {
        await proceedToCheckOutBtn.click();
    }

    this.clickOnIconfirmMyOrderBtn = async () => {
        await IconfirmMyOrderBtn.click();
    }

    //address
    this.getTextFromDeliveryAddressPageTitle = async() => {
        await this.waitForProductSummaryPageReady();
        return await deliveryAddressPageTitle.getText();
    }

    this.getTextFromBillingAddressPageTitle = async() => {
        await this.waitForProductSummaryPageReady();
        return await billingAddressPageTitle.getText();
    }


    //shipping
    this.getTextFromShippingPageTitle = async() => {
        await this.waitForProductSummaryPageReady();
        return await shippingPageTitle.getText();
    }

    this.clickOnTermsAndServiceCheckBox = async() => {
        await termsAndServiceCheckBox.click();   
    }

    this.getTextFromDeliveryCharge = async() => {
        await this.waitForProductSummaryPageReady();
        return await deliveryCharge.getText();
    }

    //Payment
    this.getTextFromTotalPaymentAmount = async() => {
        await base.waitForElementToBeClickable(payViaBankWireLInk);
        return await totalPaymentAmount.getText();
    }

    this.clickOnPayViaBankWireLInk = async() => {
        await payViaBankWireLInk.click();   
    }

    //paymentSuccess
    this.getTextFromPaymentSuccessPageTitle = async() => {
        await base.waitForElementToBeClickable(IconfirmMyOrderBtn);
        return await paymentSuccessPageTitle.getText();
    }

    //order complete

    this.getTextFromOrderSuccessPageTitle = async() => {
        await base.waitForElementToBeClickable(orderSuccessPageTitle);
        return await orderSuccessPageTitle.getText();
    }




    





    
    


    
    





}
ProductSummaryPage.prototype = Object.create(base, {});
module.exports = new ProductSummaryPage();

