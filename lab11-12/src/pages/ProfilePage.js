const { By, until } = require('selenium-webdriver');
const AbstractPage = require('./AbstractPage');
const WalletPage = require('./WalletPage');

class ProfilePage extends AbstractPage {
    constructor(driver) {
        super(driver);
        this.BASE_URL = 'https://playerok.com/profile/';
    }

    async openPage() {
        await this.driver.get(this.BASE_URL);

        return this;
    }

    async getWallet(){
        await this.driver.findElement(By.xpath("//a[contains(@href, '/wallet/add') and //span[contains(text(), 'Баланс')]]")).click();
        return new WalletPage(this.driver);
    }

    async getLoggedInUserName(user) {
        //нажатие на меню
        await this.driver.findElement(By.xpath("//button[contains(@class, 'MuiBox-root') and //span[contains(text(), 'Меню')]]")).click();
        //поиск блока с нашим email адрессом и возврат его содержимого
        return await this.driver.findElement(By.xpath(`//span[contains(text(), '${user.username}')]`)).getText();
    }
}

module.exports = ProfilePage;
