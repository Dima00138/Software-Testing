const assert = require('chai').assert;

const authPage = require('../PageObjects/Authorization');
const NonExstPage = require('../PageObjects/NonExistentPage');



describe('Describe', function(){
    this.timeout(50000);
   
    before(function(){
     
    });

    it('Authorization', async function(){
        var baseurl = 'https://playerok.com/profile/auth';
        await authPage.enter_url(baseurl);
        await authPage.enter_search('asdasd@mail.com', 'input[name=email]');
        
        assert.isTrue(await authPage.enter_search('123456', 'input[type=number]'));
    })

    it('Non-existent page', async function(){
        var baseurl = 'https://playerok.com/404';
        await NonExstPage.enter_url(baseurl);
        assert.isTrue(await NonExstPage.search_elem("//*[text()='Страница не найдена']"));
    })

    after(async function(){
        await authPage.closeBrowser();
    });

})
