const {Key} = require('selenium-webdriver');
var BasePage = require ('./BasePage');

class NonExistentPage extends BasePage{
    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

    async search_elem(xpath){
        try{
            await this.findTextByXPath(xpath);
            return true;
        }
        catch(Ex){
            return false;
        }
    }
}
module.exports = new NonExistentPage();