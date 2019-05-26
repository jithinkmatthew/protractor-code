function BasePage() {
    this.title = 'Base Page';
    console.log('This is base page');
}

BasePage.prototype.openUrl = async function () {
    await browser.driver.manage().window().maximize();
    await browser.driver.get("http://automationpractice.com");
}
    
BasePage.prototype.waitForElementToBeClickable = async (webElement) => {
    let until = protractor.ExpectedConditions;
    await browser.wait(until.elementToBeClickable(webElement, 9000));

};

BasePage.prototype.waitUntilVisibilityOfByWebElement = async function (webElement, timeout) {
    let until = protractor.ExpectedConditions;
    await browser.wait(until.visibilityOf(webElement), timeout);

}

BasePage.prototype.waitForInvisibilityOfByWebElement = async (webElement, timeout) => {
    let until = protractor.ExpectedConditions;
    await browser.wait(until.not(until.presenceOf(webElement)), timeout);

};

BasePage.prototype.selectDropDownValue = async function (dropDownWebElement, value) {
    await dropDownWebElement.click();
    const dropDownValue = await element(by.cssContainingText('option', ""+value+""));
    await this.waitUntilVisibilityOfByWebElement(dropDownValue, 7000);
    await dropDownValue.click();
}

BasePage.prototype.clearBrowser = () => {
    browser.manage().deleteAllCookies();
    browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();');

};



module.exports = new BasePage();

