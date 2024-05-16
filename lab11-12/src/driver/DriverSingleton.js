var webdriver = require('selenium-webdriver');

class DriverSingleton {
    constructor() {
        throw new Error('Use DriverSingleton.getInstance()');
    }

    static async getInstance(browser = 'chrome') {
        if (!this.driver) {
            this.driver = new webdriver.Builder().forBrowser(browser).build();
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