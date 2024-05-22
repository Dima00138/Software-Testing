const {Key} = require('selenium-webdriver');
var BasePage = require ('./BasePage');

class Authorization extends BasePage{
    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

    async enter_search(searchText, searchField){
        try{
            await this.enterTextByCss(searchField, searchText);
            await this.enterTextByCss(searchField, Key.RETURN);
            return true;
        }
        catch(Ex){
            return false;
        }
    }

    async search_elem(searchText){
        try{
            await this.enterTextByCss(searchField, searchText);
            return true;
        }
        catch(Ex){
            return false;
        }
    }
    /*
    async enter_search(searchText){
        var searchField = 'input[name=email]';
        await this.enterTextByCss(searchField, searchText);
        await this.enterTextByCss(searchField, Key.RETURN);
    }
    */
}
module.exports = new Authorization();