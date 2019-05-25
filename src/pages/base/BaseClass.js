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

module.exports = new BasePage();

