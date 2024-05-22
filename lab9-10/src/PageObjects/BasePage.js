var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser(webdriver.Browser.CHROME).build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor(){
        global.driver = driver;
    }
    async go_to_url(theURL){
        return await driver.get(theURL);
    }
    async findTextByXPath(path){
        return await driver.findElement(By.xpath(path));
    }
    async enterTextByCss(css, searchText){
        return await driver.findElement(By.css(css)).sendKeys(searchText);
    }
    async clickById(id){
        return await driver.findElement(By.id(id)).click();
    }
    async closeBrowser(){
        return await driver.quit();
    }
}

module.exports = BasePage;