const dotenv = require('dotenv');

class TestDataReader {
    static async getTestData(key) {
        if (!process.env.NODE_ENV) {
            dotenv.config();
            //console.log(process.env.TESTDATA_USER); // Выведет "testuser"
            //console.log(process.env.TESTDATA_USER_PASSWORD); // Выведет "testpassword"
        }
        return process.env[key];
    }
}

module.exports = TestDataReader;
