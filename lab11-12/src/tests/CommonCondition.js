const DriverSingleton = require('../driver/DriverSingleton');
let driver;

describe('CommonConditions', function() {
    before(function() {
        driver = DriverSingleton.getInstance();
    });

    after(function() {
        DriverSingleton.closeDriver();
    });

    
});