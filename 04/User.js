export default class User {
    constructor({
        email,
        password
    }) {
        this.email = email;
        this.password = password;
        this.validateData();
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    validateData() {
        if (!this.email.includes('@')) {
            throw new Error('Email is incorect')
        }
        if (this.password.length < 8) {
            throw new Error('Email is incorect')
        }
    }
    login() {
        if (this.email.endsWith('devmentor.pl')) {
            return true;
        } else {
            return false
        }
    }

}