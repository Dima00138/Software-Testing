const assert = require('assert');
const LoginPage = require('../pages/LoginPage');
const UserCreator = require('../service/UserCreator');
const DriverSingleton = require('../driver/DriverSingleton');
const Page404 = require('../pages/404Page');
const Logger = require('../util/Logger');
const ProfilePage = require('../pages/ProfilePage');
const WalletPage = require('../pages/WalletPage');
const SellPage = require('../pages/SellPage');

let driver;
let badImagePath = 'F:/MyFile/Univer/SoftwareTesting/lab11-12/testData/txt.jpg';

const argv = require('yargs').argv;
let browser = argv.browser || "chrome";
/*
describe('TestsForAuthorizedUser', function() {
    this.timeout(90000);

    before(async function() {
        driver = await DriverSingleton.getInstance(browser);
    });
    after(async function() {
        await DriverSingleton.closeDriver();
    });
    afterEach(async function() {
        if (this.currentTest.state === 'failed') {
            Logger.TakeScreenshot(driver);
        }
    });

    it('oneCanLoginGithub', async function() {
        const testUser = await UserCreator.withCredentialsFromProperty();
        let loggedInUserName = new LoginPage(driver);
        loggedInUserName = await loggedInUserName.openPage();
        loggedInUserName = await loggedInUserName.setLogin(testUser.username);
        loggedInUserName = await loggedInUserName.doLogin();
        loggedInUserName = await loggedInUserName.setCode();
        loggedInUserName = await loggedInUserName.getLoggedInUserName(testUser);
        assert.strictEqual(loggedInUserName, testUser.username);
    });

    it('Withdrawal without funds', async function() {
        let Result = new WalletPage(driver);
        Result = await Result.openPage();
        Result = await Result.getPayout(1000);
        Result = await Result.getErrorMessageBox();
        assert.strictEqual(Result, 'Недостаточно средств к выплате');
    });

    it('Incorrect number in deposite', async function() {
        let Result = new WalletPage(driver);
        Result = await Result.openPage();
        Result = await Result.openDeposit();
        Result = await Result.setDeposite('0000');
        Result = await Result.gerErrorIncorrectDeposite();
        assert.strictEqual(Result, 'Введите сумму от 25 ₽ до 100 000 ₽');
    });

    it('Shop: Product amount parametr error', async function() {
        let Result = new SellPage(driver);
        Result = await Result.openPage();
        Result = await Result.selectProduct();
        Result = await Result.selectProductType();
        Result = await Result.inputDataInFortniteProduct(-100);
        Result = await Result.clickButtonNext();
        Result = await Result.errorInputAmountSkins();
        assert.strictEqual(Result, 'Введите значение от 1 до 1000');
    });

    it('Shop: Incorrect price', async function() {
        let Result = new SellPage(driver);
        Result = await Result.openPage();
        Result = await Result.selectProduct();
        Result = await Result.selectProductType();
        Result = await Result.inputDataInFortniteProduct(1);
        Result = await Result.clickButtonNext();
        Result = await Result.loadImage(badImagePath);
        Result = await Result.clickButtonNext();
        Result = await Result.inputProductName("namenamename1");
        Result = await Result.clickButtonNext();
        Result = await Result.inputAboutInfo("infoinfoinfoinfo1");
        Result = await Result.clickButtonNext();
        Result = await Result.inputPrice(99999999999999);
        Result = await Result.clickButtonNext();
        Result = await Result.errorInputPrice();
        assert.strictEqual(Result, 'Введите сумму от 100 до 100000');
    });

    it('Shop: Load bad image', async function() {
        let Result = new SellPage(driver);
        Result = await Result.openPage();
        Result = await Result.selectProduct();
        Result = await Result.selectProductType();
        Result = await Result.inputDataInFortniteProduct(1);
        Result = await Result.clickButtonNext();
        Result = await Result.loadImage(badImagePath);
        Result = await Result.clickButtonNext();
        Result = await Result.inputProductName("namenamename2");
        Result = await Result.clickButtonNext();
        Result = await Result.inputAboutInfo("infoinfoinfoinfo2");
        Result = await Result.clickButtonNext();
        Result = await Result.inputPrice(100);
        Result = await Result.clickButtonNext();
        Result = await Result.inputProductData("1231231232");
        Result = await Result.clickButtonNext();
        Result = await Result.errorLoadImage();
        assert.strictEqual(Result, 'Input Buffer is empty');
    });
   
    it('Shop: Search product witch long name', async function() {
        let Result = new SellPage(driver);
        Result = await Result.openPage();
        Result = await Result.searchProduct("longProductNamelongProductNamelongProductName");
        Result = await Result.getSearchProductValue();
        assert.strictEqual(Result, "longProductNamelongProductNamelongProductName");
    });

});
*/
describe('TestsForUnauthorizedUser', function() {
    this.timeout(90000);

    before(async function() {
        driver = await DriverSingleton.getInstance(browser);
    });
    after(async function() {
        await DriverSingleton.closeDriver();
    });
    afterEach(async function() {
        // Проверяем, прошел ли тест
        if (this.currentTest.state === 'failed') {
            Logger.TakeScreenshot(driver);
            await DriverSingleton.closeDriver();
        }
    });

    it('Error404', async function() {
        let ErrorPage = new Page404(driver);
        ErrorPage = await ErrorPage.openPage();
        ErrorPage = await ErrorPage.GetError404();
        assert.strictEqual(ErrorPage, 'Страница не найдена');
    });

    it('Attempt to access the page for authorized users only', async function() {
        let Result = new SellPage(driver);
        Result = await Result.openPage();
        // Ожидание переадресации
        await driver.wait(async () => {
            let currentUrl = await driver.getCurrentUrl();
            return currentUrl === 'https://playerok.com/profile/auth';
        }, 5000);
        Result = await Result.getCurrentURL();
        assert.strictEqual(Result, 'https://playerok.com/profile/auth');
    });

    it('Incorrect Login', async function() {
        let Result = new LoginPage(driver);
        Result = await Result.openPage();
        Result = await Result.setLogin('asdasd@123b253v24.com');
        Result = await Result.doLogin();
        Result = await Result.getLoginError();
        assert.strictEqual(Result, 'Введите код из почты');
    });
});