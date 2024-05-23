const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

class DriverSingleton {
    constructor() {
        throw new Error('Use DriverSingleton.getInstance()');
    }

    static async getInstance(browser = Browser.CHROME) {
        if (!this.driver) {
            this.driver = new Builder().forBrowser(browser).build();
            this.driver.manage().setTimeouts({implicit: (1000000)});
        }
        return this.driver;
    }

    static async closeDriver() {
        if (this.driver) {
            await this.driver.quit();
            this.driver = null;
        }
    }
}

module.exports = DriverSingleton;