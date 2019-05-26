
/* I am not importing base class here. Getting base class functions from `HeaderPage` itself.

`HeaderPage` -----inherited from ---->  BaseClass

Main advantage is that, It will load methods from Header page as well when I call this page.
*/
const header = require('../../pages/header/HeaderPage');

const HomePage = function () {

    
    const productSearchField = element(by.css("#search_query_top"));
    const searchBtn = element(by.css("button[name='submit_search']"));
    

    //drop down menu
    const tShirtProductDropDownMenu = element(by.xpath("(//a[contains(text(),'T-shirts')])[2]"));


    
    const offerSaleCard1 = element(by.css("#htmlcontent_top li:nth-child(1)"));
    const offerSaleCard2 = element(by.css("#htmlcontent_top li:nth-child(2)"));

    this.searchProduct = async (prodName) => {
        await productSearchField.sendKeys(prodName);
        await searchBtn.click();
    }

    this.clickOnTShirtProductDropDownMenu = async() => {
        await tShirtProductDropDownMenu.click();
    }
    
    
    
    this.clickOnOfferSaleCard1 = async () => {
        await offerSaleCard1.click();
    }

    this.clickOnOfferSaleCard1 = async () => {
        await offerSaleCard2.click();
    }

}
HomePage.prototype = Object.create(header, {});
module.exports = new HomePage();



