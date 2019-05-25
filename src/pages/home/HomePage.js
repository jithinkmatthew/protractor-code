
/* I am not importing base class here. Getting base class functions from `HeaderPage` itself.

`HeaderPage` -----inherited from ---->  BaseClass

Main advantage is that, It will load methods from Header page as well when I call this page.
*/
const header = require('../../pages/header/HeaderPage');

const HomePage = function () {


    const offerSaleCard1 = element(by.css("#htmlcontent_top li:nth-child(1)"));
    const offerSaleCard2 = element(by.css("#htmlcontent_top li:nth-child(2)"));

    this.clickOnOfferSaleCard1 = async () => {
        await offerSaleCard1.click();
    }

    this.clickOnOfferSaleCard1 = async () => {
        await offerSaleCard2.click();
    }

}
HomePage.prototype = Object.create(header, {});
module.exports = new HomePage();



