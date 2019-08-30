var assert = require('assert')

describe('Tab Bar',() => {
    it('should tap each element for tab bar', function () {
        var catalog = $('//XCUIElementTypeButton[@name="Catalog"]');
        var findYourPerfectFit = $("//XCUIElementTypeStaticText[@name='Find Your Perfect Fit']");
        var myAccount = $('//XCUIElementTypeButton[@name="My Account"]');
        var MyAccountTitle = $("//XCUIElementTypeNavigationBar[@name='My Account']")
        var myCart = $('//XCUIElementTypeButton[@name="My Cart"]');
        var MyCartTitle = $("//XCUIElementTypeNavigationBar[@name='My Cart']");

        catalog.touchAction('tap');
        browser.pause(500);
        if (findYourPerfectFit.isDisplayed()){
            console.log("Catalog is displayed");
        }
        myAccount.touchAction('tap');
        browser.pause(500);
        assert.equal(MyAccountTitle.isDisplayed(),true);
        myCart.touchAction('tap');
        browser.pause(500);
        assert.equal(MyCartTitle.isDisplayed(),true);
    });
});