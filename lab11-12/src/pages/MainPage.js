const { By, until } = require('selenium-webdriver');
const AbstractPage = require('./AbstractPage');

class MainPage extends AbstractPage {
    constructor(driver) {
        super(driver);
        this.BASE_URL = 'https://playerok.com/';
    }

    async openPage() {
        await this.driver.get(this.BASE_URL);
        return this;
    }

}

module.exports = MainPage;
