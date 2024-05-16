const { By, until } = require('selenium-webdriver');
const AbstractPage = require('./AbstractPage');

class SellPage extends AbstractPage {
    constructor(driver) {
        super(driver);
        this.BASE_URL = 'https://playerok.com/sell';
    }

    async openPage() {
        await this.driver.get(this.BASE_URL);
        return this;
    }

    async selectProduct() {
        await this.driver.findElement(By.xpath("//p[contains(., 'Fortnite')]")).click();
        return this;
    }

    async selectProductType() {
        await this.driver.findElement(By.xpath("//li/span[contains(., 'Аккаунты')]")).click();
        return this;
    }

    async inputDataInFortniteProduct(number){
        await this.driver.findElement(By.name('skins')).sendKeys(number);
        return this;
    }

    async loadImage(filepath){
        await this.driver.findElement(By.css('input[type="file"]')).sendKeys(filepath);
        return this;
    }

    async inputProductName(name){
        await this.driver.findElement(By.name('title')).sendKeys(name);
        return this;
    }

    async clickButtonNext(){
        await this.driver.findElement(By.xpath("//button[contains(., 'Далее')]")).click();
        return this;
    }

    async inputAboutInfo(info){
        await this.driver.findElement(By.name('description')).sendKeys(info);
        return this;
    }

    async inputPrice(price){
        await this.driver.findElement(By.name('price')).sendKeys(Number(price));
        return this;
    }

    async inputProductData(value){
        await this.driver.findElement(By.name('comment')).sendKeys(value);
        return this;
    }

    async searchProduct(name){
        await this.driver.findElement(By.name('search')).sendKeys(name);
        return this;
    }

    async getSearchProductValue(name){
        return await this.driver.findElement(By.name('search')).getAttribute('value');
    }

    async clickSellLater(){
        await this.driver.findElement(By.xpath("//a/p[contains(., 'Выставить позже')]")).click();
        return this;
    }

    async errorLoadImage(){
        let element = By.xpath("//div[contains(text(), 'Input Buffer is empty')]");
        await this.driver.wait(until.elementLocated(element), 5000); // Подождать загрузки элемента на странице
        return await this.driver.findElement(element).getText();
    }

    async errorInputPrice(){
        return await this.driver.findElement(By.xpath("//p[contains(., 'Введите сумму от 100 до 100000')]")).getText();
    }

    async errorInputAmountSkins(){
        return this.driver.findElement(By.xpath("//p[contains(., 'Введите значение от 1 до 1000')]")).getText();
    }

    async getCurrentURL(){
        return await this.driver.getCurrentUrl();
    }
    
}

module.exports = SellPage;
