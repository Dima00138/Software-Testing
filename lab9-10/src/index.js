const assert = require('chai').assert;

const {Builder, By, Key, until} = require('selenium-webdriver');

async function AdminAdressTest(){
  let driver = await new Builder().forBrowser('chrome').build();

  let TestResult = true;

  try {
    await driver.get('https://playerok3.com/');
    await driver.get('https://playerok3.com/admin');

    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl.includes('/404') && (await driver.getTitle()) === '404 Error') {
        TestResult = false
    } else {
      TestResult = true
    }
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await driver.quit();
    return TestResult
  }
};


describe('PlayerOk Tests', function(){

    this.timeout(100000);

    it('Using invalid url adress', async () => {
        let result = await AdminAdressTest();
        assert.isTrue(result, 'it is allowed to use the wrong url');
    });

});