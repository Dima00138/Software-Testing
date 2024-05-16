class AbstractPage {
    constructor(driver) {
        this.driver = driver;
        this.WAIT_TIMEOUT_SECONDS = 10;
    }

    async openPage() {
        throw new Error('Abstract method!');
    }
}

module.exports = AbstractPage;
