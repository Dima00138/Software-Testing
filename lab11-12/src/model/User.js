class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }

    setUsername(username) {
        this.username = username;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }

    toString() {
        return `User{username='${this.username}', password='${this.password}'}`;
    }

    equals(o) {
        if (this === o) return true;
        if (!(o instanceof User)) return false;
        return this.username === o.getUsername() && this.password === o.getPassword();
    }

    hashCode() {
        return this.username.hashCode() ^ this.password.hashCode();
    }
}

module.exports = User;
