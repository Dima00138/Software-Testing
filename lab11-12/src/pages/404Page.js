const { By } = require('selenium-webdriver');
const AbstractPage = require('./AbstractPage');
const MainPage = require('./MainPage');
const RamblerReader = require('../util/Rabmler');
const ProfilePage = require('./ProfilePage');

class LoginPage extends AbstractPage {
    constructor(driver) {
        super(driver);
        this.PAGE_URL = 'https://playerok.com/asdasdasd';
    }

    async openPage() {
        await this.driver.get(this.PAGE_URL);
        console.log('Login page opened');
        return this;
    }

    async GetError404() {
        return await this.driver.findElement(By.xpath("//span[contains(text(), 'Страница не найдена')]")).getText();
    }
}

module.exports = LoginPage;
