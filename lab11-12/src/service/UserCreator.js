const TestDataReader = require('./TestDataReader');
const User = require('../model/User');

class UserCreator {
    static TESTDATA_user = "TESTDATA_user";
    static TESTDATA_USER_PASSWORD = "TESTDATA_USER_PASSWORD";

    static async withCredentialsFromProperty() {
        return new User(
            await TestDataReader.getTestData(this.TESTDATA_user),
            await TestDataReader.getTestData(this.TESTDATA_USER_PASSWORD)
            );
    }

    static async withEmptyUsername() {
        return  new User("", await TestDataReader.getTestData(this.TESTDATA_USER_PASSWORD));
    }

    static async withEmptyPassword() {
        return new User(await TestDataReader.getTestData(this.TESTDATA_user), "");
    }
}

module.exports = UserCreator;
