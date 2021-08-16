export default class User {
    constructor({ email, password }) {
        this.email = email;
        this.password = password;

        this.validateEmail();
        this.validatePassword();
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    validateEmail() {
        if (!this.email.includes("@")) {
            throw new Error("Not an email");
        }
    }

    validatePassword() {
        if (this.password.length < 5) {
            throw new Error("Password too short");
        }
    }

    login() {
        if (this.email.includes("devmentor.pl")) {
            return true;
        } else return false;
    }
}
