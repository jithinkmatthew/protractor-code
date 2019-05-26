const base = require('../../pages/base/BaseClass');

const ProductListingPage = function () {

    
    const productListPageTitle = element(by.css("div.cat_desc span"));
    const productList = element(by.css("ul.product_list"));
    const productAddedPopUp = element(by.css("div#layer_cart"));
    const productAddedSuccessfullyText = element(by.css("div.clearfix h2:nth-child(2)"));
    const proceedToCheckOutBtn = element(by.css("div.layer_cart_cart div.button-container a"));

    
    this.waitForProductListingPageReady = async () => {
        await base.waitForElementToBeClickable(productList);
    }

    this.getTextFromProductListPageTitle = async () => {
        await this.waitForProductListingPageReady();
        return await productListPageTitle.getText();
    }
    
    
    this.getNoOfProductListed = async() => {
        await this.waitForProductListingPageReady();
        return await element.all(by.css("ul.product_list li.ajax_block_product")).count();
    }

    this.clickOnAddToCartForNthProduct = async(nthProduct) => {
        await browser.actions().mouseMove(element(by.css('ul.product_list li img'))).perform();
        await browser.actions().mouseMove(element(by.css("div.button-container a[data-id-product="+"'"+nthProduct+"'"+"]"))).perform();
        const addToCart = element(by.css("div.button-container a[data-id-product="+"'"+nthProduct+"'"+"]"));
        await base.waitForElementToBeClickable(addToCart);
        await addToCart.click();
    }

    this.clickOnMoreForNthProduct = async(nthProduct) => {
        await browser.actions().mouseMove(element(by.css('ul.product_list li img'))).perform();
                                                        
        await browser.actions().mouseMove(element(by.xpath("(//a[@ title='View']/span)["+""+nthProduct+""+"]"))).perform();
        const moreBtn = element(by.xpath("(//a[@ title='View']/span)["+""+nthProduct+""+"]"));
        await base.waitForElementToBeClickable(moreBtn);
        await moreBtn.click();
    }

    this.getTextFromProductAddedSuccessfullyText = async() => {
        await base.waitForElementToBeClickable(productAddedSuccessfullyText);
        return await productAddedSuccessfullyText.getText();
    }

    this.clickOnProceedToCheckOutBtn = async () => {
        await proceedToCheckOutBtn.click();
        // await base.waitForInvisibilityOfByWebElement(productAddedPopUp, 9000);
    }

}
ProductListingPage.prototype = Object.create(base, {});
module.exports = new ProductListingPage();

