const { By, until, Key} = require('selenium-webdriver');
const AbstractPage = require('./AbstractPage');

class WalletPage extends AbstractPage {
    constructor(driver) {
        super(driver);
        this.BASE_URL = 'https://playerok.com/wallet/withdraw';
    }

    async openPage() {
        await this.driver.get(this.BASE_URL);

        return this;
    }

    async getPayout(number) {
        await this.driver.findElement(By.name('value')).sendKeys(Number(number));
        await this.driver.findElement(By.xpath("//button[contains(text(), 'Создать выплату')]")).click();
        await this.driver.findElement(By.name('account')).sendKeys(number);
        await this.driver.findElement(By.xpath("//button[contains(text(), 'Выплатить')]")).click();
        return this;
    }

    async openHistoryData(){
        await this.driver.findElement(By.xpath("//button[contains(., 'Дата')]")).click();
        return this;
    }

    async openDeposit(){
        await this.driver.findElement(By.xpath("//span[contains(text(), 'Пополнение')]")).click();
        await this.driver.sleep(1000);
        return this;
    }

    async setDeposite(number){
        let inputElement = await this.driver.findElement(By.name('value'));
        await inputElement.sendKeys(Number(number));
        await inputElement.sendKeys(Key.TAB);
        await this.driver.sleep(1000);
        return this;
    }

    async doDeposite(){
        await this.driver.findElement(By.xpath("//button[contains(text(), 'Пополнить баланс')]")).click();
        return this;
    }

    async gerErrorIncorrectDeposite(){
        return await this.driver.findElement(By.xpath("//p[contains(text(), 'Введите сумму от 25 ₽ до 100 000 ₽')]")).getText();
    }

    async getErrorMessageBox(){
        return await this.driver.findElement(By.xpath("//div[contains(text(), 'Недостаточно средств к выплате')]")).getText();
    }

    async doDeposite(user) {

    }
}

module.exports = WalletPage;
